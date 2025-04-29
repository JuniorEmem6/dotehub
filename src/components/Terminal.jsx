import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const codeLines = [
  "npm init dotehub-project", 
  "// Collaborate with peers",
  "const project = new Idea();",
  "project.build(withMentors);",
  "git push --to-portfolio",
];

export const TerminalAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, 2000));
        await controls.start("hidden");
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0.8 }}
      className="absolute bottom-10 right-60 w-72 bg-gray-700/80 rounded-lg p-4 font-mono text-xs overflow-hidden z-0"
    >
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { 
              opacity: 1,
              x: 0,
              transition: { delay: i * 0.3 }
            },
            hidden: { 
              opacity: 0,
              x: -20 
            }
          }}
          className="text-green-400 mb-1"
        >
          <span className="text-gray-400">$ </span>
          {line}
        </motion.div>
      ))}
      
      <motion.div
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
        className="flex items-center gap-1 text-gray-400 mt-2"
      >
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span>Building project...</span>
      </motion.div>
    </motion.div>
  );
};