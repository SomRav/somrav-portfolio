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
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent backdrop-blur-none",
        "transition-[padding,background-color,backdrop-filter] duration-300"
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 text-foreground z-50 transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
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
      </div>
    </nav>
  );
};
