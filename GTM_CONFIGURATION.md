# Configuração do Google Tag Manager

Este projeto agora possui uma implementação organizada do Google Tag Manager (GTM) que permite alterar facilmente o ID da tag através de variáveis de ambiente.

## Como Configurar

### 1. Configurar a Variável de Ambiente

Edite o arquivo `.env.local` e configure o ID do seu GTM:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Importante:**
- A variável deve começar com `NEXT_PUBLIC_` para ser acessível no browser
- O formato do ID deve ser `GTM-XXXXXXX`
- Você pode obter seu GTM ID em: https://tagmanager.google.com

### 2. Trocar o ID do GTM

Para trocar para um novo GTM, basta alterar o valor no `.env.local`:

```env
# Antes
NEXT_PUBLIC_GTM_ID=GTM-M9GK4DBP

# Depois
NEXT_PUBLIC_GTM_ID=GTM-NOVOCODIGO
```

Depois de alterar, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

### 3. Desabilitar o GTM (Opcional)

Para desabilitar temporariamente o GTM, você pode:

**Opção 1:** Remover ou comentar a variável no `.env.local`:
```env
# NEXT_PUBLIC_GTM_ID=GTM-M9GK4DBP
```

**Opção 2:** Definir como vazio:
```env
NEXT_PUBLIC_GTM_ID=
```

## Estrutura da Implementação

### Arquivos Criados/Modificados:

1. **`lib/gtm-config.ts`** - Arquivo de configuração centralizado
   - `getGTMId()`: Retorna o ID do GTM das variáveis de ambiente
   - `isGTMEnabled()`: Verifica se o GTM está habilitado
   - `getGTMScript()`: Gera o script de inicialização
   - `getGTMNoScriptUrl()`: Gera a URL do iframe para noscript

2. **`app/layout.tsx`** - Layout raiz atualizado
   - Usa as funções de configuração do `gtm-config.ts`
   - Renderiza o GTM condicionalmente (só se estiver habilitado)

3. **`lib/gtm.ts`** - Funções helper para eventos (mantido)
   - `sendGTMEvent()`: Envia eventos personalizados
   - `trackCTAClick()`: Rastreia cliques em CTAs
   - `trackExternalLink()`: Rastreia links externos
   - `trackSectionView()`: Rastreia visualização de seções

### Exemplo de Uso dos Eventos:

```typescript
import { trackCTAClick, sendGTMEvent } from '@/lib/gtm';

// Rastrear clique em botão
trackCTAClick('nome_do_botao', 'localizacao');

// Enviar evento personalizado
sendGTMEvent({
  event: 'meu_evento',
  categoria: 'formulario',
  acao: 'submit'
});
```

## Ambientes Diferentes

Você pode configurar IDs diferentes para cada ambiente:

### Desenvolvimento (`.env.local`):
```env
NEXT_PUBLIC_GTM_ID=GTM-DEV12345
```

### Produção (Variáveis de ambiente do host):
```env
NEXT_PUBLIC_GTM_ID=GTM-PROD67890
```

## Testando a Implementação

1. Verifique se o GTM está carregando:
   - Abra o DevTools do navegador
   - Vá na aba Network
   - Procure por requisições para `googletagmanager.com`

2. Verifique se os eventos estão sendo enviados:
   - Instale a extensão [Google Tag Assistant](https://tagassistant.google.com/)
   - Navegue pela página e interaja com os botões
   - Verifique os eventos no console do GTM

## Solução de Problemas

### GTM não está carregando?
- Verifique se a variável `NEXT_PUBLIC_GTM_ID` está definida no `.env.local`
- Certifique-se de que o formato é `GTM-XXXXXXX`
- Reinicie o servidor de desenvolvimento após alterar variáveis de ambiente

### Eventos não estão sendo enviados?
- Verifique se o GTM está carregado (veja instruções acima)
- Abra o console do navegador e procure por erros
- Verifique se a função `trackCTAClick` ou `sendGTMEvent` está sendo chamada corretamente

## Migração de Tags

Se você precisar migrar entre diferentes contas ou containers do GTM:

1. Exporte as tags, triggers e variáveis do container antigo
2. Importe no novo container do GTM
3. Atualize a variável `NEXT_PUBLIC_GTM_ID` com o novo ID
4. Teste todas as funcionalidades de tracking

## Referências

- [Google Tag Manager](https://tagmanager.google.com)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GTM Developer Guide](https://developers.google.com/tag-manager)
