import { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";

const Header = ({ scrolled, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["inicio", "sobre-mi", "experiencia", "proyectos", "aprendizaje", "contacto"];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20 shadow-lg" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-cyan-400">Infrastructure</span>
            <span className="text-gray-400 md:inline hidden"> · Cloud · DevOps</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button key={item} onClick={() => handleNavClick(item)} 
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider">
              {item.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Mobile Trigger */}
        <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950 border-b border-cyan-500/20 p-6 md:hidden">
            {menuItems.map((item) => (
              <button key={item} onClick={() => handleNavClick(item)}
                className="block w-full text-left py-3 text-gray-400 uppercase text-sm">
                {item.replace("-", " ")}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;