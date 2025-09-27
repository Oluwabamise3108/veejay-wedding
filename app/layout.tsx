import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Victoria & Jude • 13.12.2025 • Ibadan, Nigeria',
  description: 'You’re invited to celebrate the wedding of Victoria Kehinde Adika & Oluwabamise Jude Ezekiel. Join us in Ibadan as we say “I do” on December 13, 2025.',
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
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Optional: Preconnect to Vercel CDN (improves asset load) */}
        <link rel="preconnect" href="https://veejay-wedding.vercel.app" />
        <link rel="dns-prefetch" href="https://veejay-wedding.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  );
}