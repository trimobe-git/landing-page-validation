/**
 * Google Tag Manager Configuration
 *
 * Centraliza as configurações do GTM para facilitar alterações
 */

/**
 * Obtém o GTM ID das variáveis de ambiente
 * Retorna null se não estiver configurado
 */
export const getGTMId = (): string | null => {
  return process.env.NEXT_PUBLIC_GTM_ID || null;
};

/**
 * Verifica se o GTM está habilitado
 */
export const isGTMEnabled = (): boolean => {
  const gtmId = getGTMId();
  return gtmId !== null && gtmId.startsWith('GTM-');
};

/**
 * Gera o script de inicialização do GTM
 */
export const getGTMScript = (): string => {
  const gtmId = getGTMId();

  if (!gtmId) {
    return '';
  }

  return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
};

/**
 * Gera a URL do noscript iframe do GTM
 */
export const getGTMNoScriptUrl = (): string => {
  const gtmId = getGTMId();
  return gtmId ? `https://www.googletagmanager.com/ns.html?id=${gtmId}` : '';
};
