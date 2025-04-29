import { motion } from "framer-motion";
import { LinkedInIcon, TwitterIcon, GitHubIcon, ReactLogo, NodeLogo, PythonLogo } from "./TechIcon";

const footerLinks = [
  {
    title: "Learn",
    links: ["Courses", "Projects", "Learning Paths", "Workshops"]
  },
  {
    title: "Community",
    links: ["Mentors", "Discussions", "Events", "Showcase"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 px-5%">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ReactLogo className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Dotehub</h3>
            </div>
            <p className="mb-4">
              Learn by building real projects with peer collaboration and expert mentorship.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map(link => (
                  <li key={link}>
                    <motion.a 
                      whileHover={{ x: 5, color: "#ffffff" }}
                      href="#"
                      className="block transition-all"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Powered By</h4>
            <div className="flex gap-4">
              <ReactLogo className="w-10 h-10 hover:scale-110 transition-all" />
              <NodeLogo className="w-10 h-10 hover:scale-110 transition-all" />
              <PythonLogo className="w-10 h-10 hover:scale-110 transition-all" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>© {new Date().getFullYear()} Dotehub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Add to TechIcons.jsx
