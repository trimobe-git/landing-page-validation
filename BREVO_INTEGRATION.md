# Integração com Brevo - Guia de Configuração

## Visão Geral

A integração com a API da Brevo foi implementada com sucesso! Agora o formulário da landing page envia os dados dos usuários diretamente para sua lista de contatos na Brevo.

## Arquivos Criados

1. **`.env.example`** - Arquivo de exemplo com as variáveis de ambiente necessárias
2. **`.env.local`** - Arquivo local para suas credenciais (não é commitado no git)
3. **`app/api/subscribe/route.ts`** - API route do Next.js que processa o cadastro
4. **`components/landing/Pricing.tsx`** - Componente atualizado com integração e feedback visual

## Configuração Passo a Passo

### 1. Obter API Key da Brevo

1. Acesse [https://app.brevo.com/settings/keys/api](https://app.brevo.com/settings/keys/api)
2. Crie uma nova API key ou use uma existente
3. Copie a API key gerada

### 2. Criar uma Lista de Contatos

1. Acesse [https://app.brevo.com/contact/list](https://app.brevo.com/contact/list)
2. Crie uma nova lista (ex: "Campota - Early Access")
3. Anote o ID da lista (você pode ver na URL ao clicar na lista)

### 3. Configurar Variáveis de Ambiente

Edite o arquivo `.env.local` e preencha com suas credenciais:

```env
# Brevo API Configuration
BREVO_API_KEY=sua_api_key_aqui

# ID da lista (ou múltiplas listas separadas por vírgula: 2,5,7)
BREVO_LIST_IDS=2

# URL da API (geralmente não precisa mudar)
BREVO_API_URL=https://api.brevo.com/v3
```

### 4. Testar a Integração

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a landing page em `http://localhost:3000`

3. Navegue até a seção de cadastro (Pricing)

4. Preencha o formulário e clique em "Garantir Meu Acesso Antecipado"

5. Você deverá ver uma mensagem de sucesso

6. Verifique na Brevo se o contato foi adicionado à lista

## Funcionalidades Implementadas

### API Route (`/api/subscribe`)

- ✅ Validação de campos obrigatórios (nome, email, telefone)
- ✅ Validação de formato de email
- ✅ Separação automática de nome e sobrenome
- ✅ Formatação automática de telefone para padrão internacional (+55)
- ✅ Integração com API da Brevo
- ✅ Tratamento de erros
- ✅ Suporte a contatos duplicados (atualiza ao invés de dar erro)

### Componente Pricing

- ✅ Formulário com 3 campos: nome, email e telefone
- ✅ Feedback visual de loading durante o processamento
- ✅ Mensagem de sucesso com animação
- ✅ Mensagem de erro com detalhes
- ✅ Desabilita campos durante o envio
- ✅ Limpa formulário após sucesso
- ✅ Limpa mensagem de erro ao usuário começar a digitar

## Campos Enviados para a Brevo

Os dados são enviados para a Brevo no seguinte formato:

```json
{
  "email": "usuario@exemplo.com",
  "attributes": {
    "FIRSTNAME": "João",
    "LASTNAME": "Silva",
    "SMS": "+5511999999999"
  },
  "listIds": [2],
  "updateEnabled": true
}
```

## Customização

### Alterar Listas de Destino

Para enviar para múltiplas listas, edite `.env.local`:

```env
BREVO_LIST_IDS=2,5,7
```

### Adicionar Campos Personalizados

1. Crie os atributos personalizados na Brevo em [https://app.brevo.com/contact/attributes](https://app.brevo.com/contact/attributes)

2. Edite `app/api/subscribe/route.ts` e adicione os novos campos no payload:

```typescript
const payload: BrevoContactPayload = {
  email,
  attributes: {
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    SMS: formattedPhone,
    // Adicione seus campos personalizados aqui
    CUSTOM_FIELD: formData.customField,
  },
  listIds,
  updateEnabled: true,
};
```

### Customizar Mensagens de Feedback

Edite o componente `components/landing/Pricing.tsx` e modifique as mensagens em:

- `handleSubmit` - Mensagens de sucesso/erro
- JSX do feedback visual - Textos exibidos ao usuário

## Tratamento de Erros

A integração trata os seguintes cenários:

- ✅ Campos vazios ou inválidos
- ✅ Email com formato inválido
- ✅ Contato já existe na lista (atualiza ao invés de falhar)
- ✅ API key inválida ou expirada
- ✅ Lista não encontrada
- ✅ Erro de conexão com a API
- ✅ Timeout de requisição

## Logs e Debug

Para debugar problemas:

1. Verifique o console do navegador para erros do frontend
2. Verifique o terminal do servidor Next.js para erros do backend
3. Os erros da API Brevo são logados no console do servidor

## Segurança

- ✅ API key armazenada em variável de ambiente (nunca no código)
- ✅ Validação de dados no backend
- ✅ `.env.local` ignorado pelo git
- ✅ Requisições feitas pelo servidor (não pelo cliente)

## Próximos Passos Sugeridos

1. Configurar automações na Brevo para enviar email de boas-vindas
2. Criar templates de email personalizados
3. Configurar tracking de conversões
4. Adicionar Google Analytics/GTM para rastrear cadastros
5. Implementar double opt-in se necessário

## Suporte

- Documentação da API Brevo: [https://developers.brevo.com/](https://developers.brevo.com/)
- Criar contato: [https://developers.brevo.com/reference/createcontact](https://developers.brevo.com/reference/createcontact)
- Help Center Brevo: [https://help.brevo.com/](https://help.brevo.com/)

## Troubleshooting

### "Configuração do servidor incompleta"

- Verifique se o arquivo `.env.local` existe
- Verifique se as variáveis `BREVO_API_KEY` e `BREVO_LIST_IDS` estão preenchidas
- Reinicie o servidor de desenvolvimento

### "Email inválido"

- Verifique se o email tem formato válido (usuario@dominio.com)

### "Erro ao processar cadastro"

- Verifique os logs do servidor para detalhes
- Confirme se a API key está válida
- Confirme se o ID da lista existe

### Contato não aparece na Brevo

- Verifique se o ID da lista está correto
- Verifique se a API key tem permissões suficientes
- Verifique os logs do servidor para erros
