/**
 * Google Tag Manager Helper Functions
 *
 * Use estas funções para enviar eventos personalizados ao GTM
 */

type GTMEvent = {
  event: string;
  [key: string]: any;
};

/**
 * Envia um evento personalizado para o Google Tag Manager
 *
 * @example
 * // Rastrear clique em botão
 * sendGTMEvent({
 *   event: 'button_click',
 *   button_name: 'testar_gratis',
 *   button_location: 'hero'
 * });
 */
export const sendGTMEvent = (eventData: GTMEvent): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

/**
 * Rastreia cliques em botões de CTA
 */
export const trackCTAClick = (buttonName: string, location: string): void => {
  sendGTMEvent({
    event: 'cta_click',
    button_name: buttonName,
    button_location: location,
  });
};

/**
 * Rastreia cliques em links externos (WhatsApp)
 */
export const trackExternalLink = (linkType: string, destination: string): void => {
  sendGTMEvent({
    event: 'external_link_click',
    link_type: linkType,
    destination: destination,
  });
};

/**
 * Rastreia visualização de seções
 */
export const trackSectionView = (sectionName: string): void => {
  sendGTMEvent({
    event: 'section_view',
    section_name: sectionName,
  });
};

// Declaração de tipo para o window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
