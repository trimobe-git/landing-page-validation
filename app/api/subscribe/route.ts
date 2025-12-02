import { NextRequest, NextResponse } from 'next/server';

interface BrevoContactPayload {
  email: string;
  attributes: {
    FIRSTNAME?: string;
    LASTNAME?: string;
    SMS?: string;
    [key: string]: string | undefined;
  };
  listIds: number[];
  updateEnabled: boolean;
}

interface BrevoErrorResponse {
  code: string;
  message: string;
  metadata?: {
    duplicate_identifiers?: string[];
  };
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json();

    // Validação básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Configurações do Brevo (variáveis de ambiente)
    const apiKey = process.env.BREVO_API_KEY;
    const listIdsStr = process.env.BREVO_LIST_IDS;
    const apiUrl = process.env.BREVO_API_URL || 'https://api.brevo.com/v3';

    if (!apiKey) {
      console.error('BREVO_API_KEY não configurada');
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      );
    }

    if (!listIdsStr) {
      console.error('BREVO_LIST_IDS não configurada');
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      );
    }

    // Converter string de IDs de listas em array de números
    const listIds = listIdsStr.split(',').map((id) => parseInt(id.trim(), 10));

    // Separar nome completo em primeiro nome e sobrenome
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Formatar telefone para o padrão internacional
    // Remove caracteres não numéricos
    let cleanPhone = phone.replace(/\D/g, '');

    // Se não começar com código de país, adicionar +55 (Brasil)
    if (!cleanPhone.startsWith('55') && cleanPhone.length <= 11) {
      cleanPhone = '55' + cleanPhone;
    }

    // Adicionar o + no início
    const formattedPhone = '+' + cleanPhone;

    // Preparar payload para a API do Brevo
    const payload: BrevoContactPayload = {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SMS: formattedPhone,
      },
      listIds,
      updateEnabled: true, // Permite atualizar contato se já existir
    };

    // Fazer requisição para a API do Brevo
    const response = await fetch(`${apiUrl}/contacts`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Se o contato foi criado com sucesso (201) ou atualizado (204)
    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({
        success: true,
        message: 'Cadastro realizado com sucesso! Você receberá um email em breve.',
      });
    }

    // Se houver erro na resposta
    const errorData: BrevoErrorResponse = await response.json();

    // Log do erro para debug
    console.error('Erro ao criar contato no Brevo:', {
      status: response.status,
      error: errorData,
    });

    // Tratamento de erros específicos
    if (errorData.code === 'duplicate_parameter') {
      return NextResponse.json({
        success: true,
        message: 'Você já está cadastrado! Em breve enviaremos novidades.',
      });
    }

    return NextResponse.json(
      { error: 'Erro ao processar cadastro. Tente novamente.' },
      { status: response.status }
    );
  } catch (error) {
    console.error('Erro no endpoint de subscribe:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
