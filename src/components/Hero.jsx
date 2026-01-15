const Hero = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Hola, soy</span>
          <span className="block text-cyan-400 shadow-cyan-500/20">Alonso Vargas</span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ingeniero de Infraestructura con enfoque en Cloud y automatización.
          Experiencia en entornos on-premise y evolución hacia AWS, IaC y prácticas DevOps.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => scrollToSection("proyectos")}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50">
            Ver Proyectos
          </button>
          <button onClick={() => scrollToSection("contacto")}
            className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-white rounded-lg transition-all">
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          {[
            { val: "3+", label: "Años IT" },
            { val: "1", label: "Años Dev & Cloud" },
            { val: "∞", label: "Ganas de Aprender" }
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-cyan-500 pl-4 text-left">
              <div className="text-3xl font-bold text-cyan-400">{stat.val}</div>
              <div className="text-sm text-gray-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;