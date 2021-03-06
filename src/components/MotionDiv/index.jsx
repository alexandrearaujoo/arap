import { motion } from "framer-motion";

const MotionDiv = ({ children }) => {
  return (
    <motion.div
      style={{ width: "90%", maxWidth: "900px", height: "450px" }}
      initial={{ x: -500 }}
      animate={{ x: 0}}
      transition={{duration: 0.5, type: "spring" }}
      exit={{
        x: 500,
        // transiton: { duration: 50, type: "spring", ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
