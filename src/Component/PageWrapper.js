import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{
        clipPath: "inset(0 0 100% 0)", 
        opacity: 0,
      }}
      animate={{
        clipPath: "inset(0 0 0 0)", 
        opacity: 1,
      }}
      exit={{
        clipPath: "inset(100% 0 0 0)", 
        opacity: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      }}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
