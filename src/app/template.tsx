"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="site-wrapper"
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        type: "linear",
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
