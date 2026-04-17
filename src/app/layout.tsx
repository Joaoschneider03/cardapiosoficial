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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Desativa restauração automática de scroll */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />

        {/* Scripts Wistia VSL */}
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/p9v3ykae7d.js" async type="module"></script>
      </head>
      <body className="font-body antialiased text-foreground bg-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
