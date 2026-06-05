import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Victoria & Jude • Wedding Archive',
  description: 'The wedding archive and gallery of Victoria Kehinde Adika & Oluwabamise Jude Ezekiel. Thank you for celebrating with us in Ibadan on December 13, 2025.',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://veejay-wedding.vercel.app" />
        <link rel="dns-prefetch" href="https://veejay-wedding.vercel.app" />
      </head>
      <body
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        spellCheck="false"
      >
        {children}
      </body>
    </html>
  );
}