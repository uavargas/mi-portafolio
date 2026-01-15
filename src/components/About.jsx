import { Server, GraduationCap } from "lucide-react";

const About = ({ education }) => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Sobre <span className="text-cyan-400">Mí</span>
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 space-y-10">
          <p className="text-gray-300 leading-relaxed text-lg">
            Profesional con experiencia en infraestructura TI y soporte técnico en entornos empresariales, 
            trabajando con tecnologías Microsoft, virtualización y monitoreo.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5" /> Infraestructura
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experiencia en Windows Server, Active Directory, Microsoft 365, VMware y redes on-premise.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">🍃 Desarrollo & Cloud</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                En transición hacia el desarrollo con Java/Spring Boot y explorando servicios de AWS.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">🎯 Objetivo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aplicar prácticas DevOps para diseñar y automatizar soluciones modernas y escalables.
              </p>
            </div>
          </div>
        </div>

        {/* Sección Educación dentro de About */}
        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-8">
          <GraduationCap className="w-6 h-6 text-cyan-400" /> Formación Académica
        </h3>
        <div className="grid gap-6">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-cyan-400">{edu.institution}</p>
                    <div className="flex gap-3 mt-2 text-xs text-gray-500">
                      <span>{edu.level}</span> • <span>{edu.year}</span>
                      <span className="text-cyan-400 border border-cyan-500/30 px-2 rounded-full">{edu.status}</span>
                    </div>
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

export default About;