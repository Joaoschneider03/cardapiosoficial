
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
        
        {/* Prevenção de restauração de scroll automática imediata */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = "manual";
                if (window.location.hash) {
                  window.scrollTo(0,0);
                  window.history.replaceState(null, null, window.location.pathname + window.location.search);
                }
              }
            `,
          }}
        />

        {/* Script do Pixel UTMify */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68c8c6aff7bcf17b61ea4279";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `
          }}
        />

        {/* Script de Rastreamento UTMify */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
          suppressHydrationWarning
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
