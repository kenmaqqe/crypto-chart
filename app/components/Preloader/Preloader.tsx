"use client";
import { FaBitcoin } from "react-icons/fa";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "linear",
        }}
      >
        <FaBitcoin size={100} />
      </motion.div>
    </div>
  );
};

export default Preloader;
