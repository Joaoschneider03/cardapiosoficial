import type {Metadata} from 'next';
import './globals.css';
import Script from 'next/script';

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

        {/* Script do Pixel UTMify - Injeção via Next Script para estabilidade */}
        <Script id="utmify-pixel-init" strategy="afterInteractive">
          {`
            window.pixelId = "68c8c6aff7bcf17b61ea4279";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Script de Rastreamento UTMify */}
        <Script 
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
