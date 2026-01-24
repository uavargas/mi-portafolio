import { Server, Cloud, Target, GraduationCap } from "lucide-react";

const About = ({ education }) => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Sobre <span className="text-cyan-400">Mí</span>
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 space-y-10">
          <p className="text-gray-300 leading-relaxed text-lg">
            Profesional con más de 3 años de experiencia en infraestructura TI y
            soporte técnico en entornos empresariales, con amplio dominio de
            tecnologías Microsoft, virtualización y monitoreo. Actualmente en
            transición hacia Cloud, automatización e implementación de prácticas
            DevOps.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Infraestructura */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Infraestructura
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experiencia en Windows Server, Active Directory, Microsoft 365,
                virtualización con VMware, almacenamiento y herramientas de
                monitoreo.
              </p>
            </div>

            {/* Desarrollo & Cloud */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                Desarrollo & Cloud
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                En proceso de fortalecimiento en desarrollo backend con
                Java/Spring Boot y adopción de servicios AWS, Infraestructura
                como Código y arquitecturas cloud.
              </p>
            </div>

            {/* Objetivo */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Objetivo Profesional
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Diseñar, automatizar y operar soluciones escalables aplicando
                principios DevOps, buenas prácticas cloud y mejora continua.
              </p>
            </div>
          </div>
        </div>

        {/* Educación */}
        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-8">
          <GraduationCap className="w-6 h-6 text-cyan-400" />
          Formación Académica
        </h3>

        <div className="grid gap-6">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400">{edu.institution}</p>
                    <div className="flex gap-3 mt-2 text-xs text-gray-500">
                      <span>{edu.level}</span> • <span>{edu.year}</span>
                      <span className="text-cyan-400 border border-cyan-500/30 px-2 rounded-full">
                        {edu.status}
                      </span>
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
