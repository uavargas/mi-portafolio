import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <section id="experiencia" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center md:text-left">
          Trayectoria <span className="text-cyan-400">Profesional</span>
        </h2>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 border-l border-slate-800">
              {/* Punto en la línea de tiempo */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium text-cyan-400/90">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium h-fit">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic border-l-2 border-slate-700 pl-4">
                  "{exp.description}"
                </p>

                {/* Lista de Logros Mejorada */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500/50 group-hover:text-cyan-400 transition-colors mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-sm leading-snug group-hover:text-gray-300 transition-colors">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;