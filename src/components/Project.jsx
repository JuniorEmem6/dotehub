import { motion } from "framer-motion";
import { CodeIcon, UsersIcon, RocketIcon } from "./TechIcon";

const projects = [
  {
    title: "AI Chatbot Workshop",
    description: "Build a GPT-3 powered assistant with React",
    tags: ["React", "Node.js", "AI"],
    contributors: 12,
    progress: 85
  },
  {
    title: "E-commerce Dashboard",
    description: "Full-stack analytics platform with live data",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    contributors: 8,
    progress: 62
  },
  {
    title: "Blockchain Wallet",
    description: "Web3 crypto wallet with transaction history",
    tags: ["Solidity", "Ethers.js", "Hardhat"],
    contributors: 5,
    progress: 43
  }
];

export const ProjectsShowcase = () => {
  return (
    <section className="py-20 px-5% bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-blue-100/30 blur-xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Collaborative <span className="text-[#2563EB]">Projects</span> in Progress
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join these real-world projects and learn with peers and mentors
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <CodeIcon className="text-[#2563EB] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-5">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-linear-to-r from-[#2563EB] to-[#F97316]"
                    />
                  </div>
                </div>
                
                {/* Contributors */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {project.contributors} contributors
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] font-medium rounded-lg text-sm flex items-center gap-1"
                  >
                    <RocketIcon className="w-4 h-4" />
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#2563EB]/30 transition-all"
          >
            Browse All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
