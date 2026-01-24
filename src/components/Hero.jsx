import { useEffect, useRef } from "react";

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.6,
  vy: (Math.random() - 0.5) * 0.6,
  radius: 2,
});

const Hero = ({ scrollToSection }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = 70;
    const MAX_DISTANCE = 120;

    const particles = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(width, height),
    );

    const moveParticle = (p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#22d3ee";
      ctx.fill();
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${
              1 - distance / MAX_DISTANCE
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        moveParticle(p);
        drawParticle(p);
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-slate-950"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Hola, soy</span>
          <span className="block text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            Alonso Vargas
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ingeniero de Telecomunicaciones con experiencia en infraestructura
          on-premise y una evolución profesional hacia Cloud, automatización,
          implementación de Infraestructura como Código bajo prácticas DevOps.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-white rounded-lg transition-all"
          >
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          {[
            { val: "3+", label: "Años IT" },
            { val: "1", label: "Años Dev & Cloud" },
            { val: "∞", label: "Ganas de Aprender" },
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-cyan-500 pl-4 text-left">
              <div className="text-3xl font-bold text-cyan-400">{stat.val}</div>
              <div className="text-sm text-gray-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
