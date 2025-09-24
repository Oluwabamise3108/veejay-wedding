import './globals.css';

export const metadata = {
  title: 'Victoria & Jude • 13.12.2025 • Ibadan, Nigeria',
  description: 'You’re invited to celebrate the wedding of Victoria Kehinde Adika & Oluwabamise Jude Ezekiel. Join us in Ibadan as we say “I do” on December 13, 2025.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}