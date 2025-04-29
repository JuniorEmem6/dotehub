import { motion } from "framer-motion";
import {
  PythonLogo,
  NodeLogo,
  ReactLogo,
  FigmaLogo,
  UsersIcon,
  CodeIcon,
} from "../components/TechIcon";
import { TerminalAnimation } from "./Terminal";

const Hero = () => {
  // Floating gradient blobs (for background)
  const Blob = ({ color, size, x, y, rotate }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.4,
        x: [x, x + 20, x],
        y: [y, y + 30, y],
        rotate: [rotate, rotate + 20, rotate],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full filter blur-3xl opacity-40 ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );

  return (
    <section className="h-[1000px] relative pt-24 pb-12 px-5% overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Blob color="bg-[#2563EB]" size={400} x={-100} y={-100} rotate={0} />
        <Blob color="bg-[#F97316]" size={300} x={"80%"} y={100} rotate={45} />
        <Blob
          color="bg-purple-500"
          size={250}
          x={"30%"}
          y={"70%"}
          rotate={90}
        />

        {/* Subtle grid overlay */}
        {/* Replace the static grid with this animated version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
      `,
              backgroundSize: "40px 40px",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.7))",
            }}
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
      `,
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>
      </div>

      {/* Replace the image container with this */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative group md:w-1/2"
      >
        <div className="absolute -inset-4 bg-[#2563EB]/10 rounded-2xl -rotate-2 -z-10 group-hover:rotate-0 transition-transform" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 mt-[250px]">
            Learn by <span className="text-[#F97316]">Building</span> Real
            Projects
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join Dotehub and collaborate with mentors & peers to build your
            future.
          </p>
          <div className="flex gap-4">
            {/* Replace buttons with these */}
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold shadow-lg hover:shadow-primary/30 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Join Free</span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.1 }}
                className="absolute inset-0 bg-white/10"
                style={{ borderRadius: "inherit" }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                y: -3,
                backgroundColor: "rgba(37, 99, 235, 0.05)",
              }}
              className="px-6 py-3 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold transition-all flex items-center gap-2"
            >
              See Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <TerminalAnimation />

      {/* Floating Particles (Optional) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            x: Math.random() * 1000,
            y: Math.random() * 500,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute rounded-full bg-[#2563EB] w-1 h-1"
        />
      ))}
      {/* Add to your floating elements section */}
      <motion.div
        initial={{ opacity: 0.2, y: 20 }}
        animate={{
          opacity: [0.2, 0.3, 0.4],
          y: [0, -50, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay: 4,
        }}
        className="absolute bottom-1/7 left-1/8 bg-gray-800/50 p-3 rounded-lg font-mono text-xs text-green-300 backdrop-blur-sm"
      >
        {`function deployProject() {\n  return "Success!";\n}`}
      </motion.div>

      {/* Replace the floating tech icons section with this */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, delay: 0 }}
          className="absolute top-1/4 left-1/4"
        >
          <ReactLogo className="w-12 h-12 text-blue-400/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          className="absolute top-1/3 right-1/4"
        >
          <NodeLogo className="w-10 h-10 text-green-500/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, delay: 6 }}
          className="absolute bottom-1/4 left-1/3"
        >
          <PythonLogo className="w-14 h-14 text-blue-600/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 16, repeat: Infinity, delay: 9 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <FigmaLogo className="w-9 h-9 text-purple-500/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 16, repeat: Infinity, delay: 9 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <CodeIcon className="w-9 h-9 text-purple-500/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.4, 0.6, 0.8], scale: 1 }}
          transition={{ duration: 16, repeat: Infinity, delay: 9 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <UsersIcon className="w-9 h-9 text-blue-500/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
