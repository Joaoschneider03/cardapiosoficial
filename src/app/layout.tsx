import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '+100 Cardápios Anti Obesidade Infantil | Dra. Rayane',
  description: 'Transforme a alimentação do seu filho em semanas com o método da Dra. Rayane. +100 cardápios práticos e saudáveis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground bg-background">{children}</body>
    </html>
  );
}
