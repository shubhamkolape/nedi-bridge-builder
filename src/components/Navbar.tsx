import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../utils/animations";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../Images/NEDI_LOGO_SVG.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navRef, isVisible] = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Initiatives",
      dropdown: true,
      items: [
        { name: "Heritage on Wheels", href: "/heritage-on-wheels" },
        { name: "Cinematic Bridges", href: "/cinematic-bridges" },
        { name: "NE Connect", href: "/ne-connect" },
        { name: "Youth Power", href: "/youth-power" },
        { name: "Orange Economy", href: "/orange-economy" },
        { name: "Voices of Land", href: "/voices-of-land" },
        { name: "Future Festivals", href: "/future-festivals" },
      ],
    },
    { name: "BH Jewellery", href: "/bh-jewellery" },
    { name: "Global Film Festival", href: "/global-film-festival" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="NEDI Logo" className="h-20" />
          <span className="ml-2 text-sm text-nedi-gray">
            North East Development Initiative
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className="text-foreground/80 hover:text-nedi-green transition-colors flex items-center gap-1">
                  {link.name}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-nedi-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-nedi-orange after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            )
          )}
          <Link to="/#contact" className="btn-primary">
            Get Involved
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="space-y-2">
                  <span className="text-xl font-medium text-foreground py-2 border-b border-muted">
                    {link.name}
                  </span>
                  <div className="pl-4 space-y-2">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-lg text-foreground/80 hover:text-nedi-green py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-medium text-foreground hover:text-nedi-green py-2 border-b border-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/#contact"
              className="btn-primary self-start mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
