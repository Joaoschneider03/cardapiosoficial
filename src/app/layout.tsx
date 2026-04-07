import type {Metadata} from 'next';
import Script from 'next/script';
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
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground bg-background">
        {/* UTMify Pixel Script */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "68c8c6aff7bcf17b61ea4279";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* UTMify Tracking Script */}
        <Script 
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
