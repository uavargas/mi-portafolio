import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Conectamos<span className="text-cyan-400">?</span></h2>
        <p className="text-xl text-gray-400 mb-12">Abierto a oportunidades y proyectos en Cloud & Infraestructura.</p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="mailto:uavargas23@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all">
            <Mail className="w-5 h-5" /> Email
          </a>
          <a href="https://github.com/uavargas" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500/50 text-white rounded-lg hover:border-cyan-400 transition-all">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/uavargasb/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500/50 text-white rounded-lg hover:border-cyan-400 transition-all">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-500">
          <p>Desarrollado por <span className="text-cyan-400">AlonsoKode</span></p>
          <p>Infraestructura | Backend | Cloud Engineering</p>

        </div>
      </div>
    </section>
  );
};

export default Contact;