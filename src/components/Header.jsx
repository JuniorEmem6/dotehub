import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Mentors", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <header
      className={`fixed w-full z-50 py-4 px-5% transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          {/* <img src="/logo.svg" alt="Dotehub" className="h-8" /> */}
          <h1 className="text-2xl font-bold text-primary">Dotehub</h1>
        </motion.div>

        {/* Navigation */}
        <nav className="md:block">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={link.href}
                  className="text-dark font-medium hover:text-primary relative"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-accent w-0"
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4"
        >
          <button className="px-4 py-2 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-blue-50 transition-all">
            Log In
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary font-semibold hover:bg-blue-700 transition-all">
            Sign Up
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;