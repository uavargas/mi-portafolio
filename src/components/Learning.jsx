const Learning = ({ learning }) => {
  return (
    <section id="aprendizaje" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
          Aprendizaje <span className="text-cyan-400">Continuo</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {learning.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-7 h-7 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.topic}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.platform}
                    </p>
                    <span
                      className={`inline-block text-xs px-3 py-1 rounded-full uppercase tracking-wide ${
                        item.status === "En progreso"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                          : "bg-gray-500/10 text-gray-400 border border-gray-500/30"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Learning;