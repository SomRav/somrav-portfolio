import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);

      // Active section detection
      const sections = document.querySelectorAll("section");
      let current = "#hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (offset >= sectionTop - sectionHeight * 0.25) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
            : "py-5 bg-transparent backdrop-blur-none",
          "transition-[padding,background-color,backdrop-filter] duration-300",
          "z-30"
        )}
      >
        <div className="container flex items-center ml-auto justify-between">
          {/* Logo */}
          <a
            className={cn(
              "text-xl font-bold text-primary flex items-center transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100"
            )}
            href="#hero"
          >
            <span className="relative z-10 font-04b30 flex flex-col">
              <span
                className={cn(
                  "text-glow text-foreground transition-all duration-300",
                  isScrolled ? "text-3xl" : "text-4xl"
                )}
              >
                Soumya
              </span>
              <span
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "text-[0.8rem]" : "text-[1rem]"
                )}
              >
                Portfolio
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 ">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300 relative",
                  isScrolled ? "text-xl" : "text-2xl",
                  activeSection === item.href && "text-primary font-medium"
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/80 animate-pulse" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button placeholder (only visible when menu is closed) */}
          <div className="md:hidden">
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-foreground"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu - completely separate from nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden">
          {/* Close button positioned absolutely in the corner */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-foreground z-50"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeSection === item.href && "text-primary font-semibold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
