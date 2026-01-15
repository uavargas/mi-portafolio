import { ServerCog, Braces, CloudCog, BookOpen } from "lucide-react";

const Skills = ({ skills }) => {
  const categories = [
    { title: "Infraestructura", icon: ServerCog, data: skills.infraestructura },
    { title: "Desarrollo Backend", icon: Braces, data: skills.desarrollo },
    { title: "Cloud & DevOps", icon: CloudCog, data: skills.cloud },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-cyan-400">Habilidades</span> Técnicas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all">
              <h3 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-6 uppercase tracking-wider">
                <cat.icon className="w-6 h-6" /> {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.data.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      {skill.learning && <BookOpen className="w-3 h-3 text-cyan-400" />}
                    </div>
                    <p className="text-xs text-gray-500">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;