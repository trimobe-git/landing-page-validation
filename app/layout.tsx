import type { Metadata } from 'next';
import { Syncopate, Roboto } from 'next/font/google';
import Script from 'next/script';
import { getGTMScript, getGTMNoScriptUrl, isGTMEnabled } from '@/lib/gtm-config';
import './globals.css';

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Campota',
  description:
    'Sistema de documentação de visitas técnicas para profissionais do agro com geração de relatórios por IA',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmEnabled = isGTMEnabled();
  const gtmScript = getGTMScript();
  const gtmNoScriptUrl = getGTMNoScriptUrl();

  return (
    <html lang="pt-BR">
      <head>
        {gtmEnabled && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: gtmScript,
            }}
          />
        )}
      </head>
      <body className={`${syncopate.variable} ${roboto.variable}`}>
        {gtmEnabled && (
          <noscript>
            <iframe
              src={gtmNoScriptUrl}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
