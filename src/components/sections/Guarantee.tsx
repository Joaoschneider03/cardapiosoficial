export function Guarantee() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Selo de Garantia Customizado */}
          <div className="relative flex flex-col items-center mb-12">
            <div className="animate-float relative w-48 h-48 md:w-56 md:h-56 drop-shadow-[0_15px_25px_rgba(22,163,74,0.4)]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Círculo Externo (Borda Pontilhada) */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 2" />
                
                {/* Círculo Principal Sólido */}
                <circle cx="100" cy="100" r="85" fill="#16a34a" />
                
                {/* Texto Curvado (Garantia de Satisfação) */}
                <path id="curve" d="M 30,100 A 70,70 0 1,1 170,100" fill="none" stroke="none" />
                <text className="fill-white font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '2px' }}>
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Garantia de Satisfação
                  </textPath>
                </text>

                {/* O Número 7 Central */}
                <text x="100" y="115" textAnchor="middle" className="fill-white font-black" style={{ fontSize: '70px' }}>
                  7
                </text>

                {/* Texto Inferior */}
                <text x="100" y="145" textAnchor="middle" className="fill-green-100 font-bold uppercase" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                  Dias
                </text>
              </svg>
            </div>
            {/* Sombra Projetada */}
            <div className="w-24 h-3 bg-black/10 rounded-[100%] blur-lg mt-4 scale-x-110 opacity-50"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight">Garantia incondicional de 7 dias</h2>
          <p className="text-base text-muted-foreground leading-relaxed font-medium">
            Se por qualquer motivo você não ficar satisfeita com o material, basta nos enviar uma mensagem em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Temos certeza da transformação que este material trará.
          </p>
        </div>
      </div>
    </section>
  );
}
