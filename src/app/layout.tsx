import './globals.css';

export const metadata = {
  title: 'Health Services',
  description: 'Healthcare services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
