"use client"
import { motion } from "framer-motion";
import React from "react";

const FramerMotion: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Framer Motion Content</h2>
        <p>This content will fade in using Framer Motion.</p>
      </motion.div>
    </>
  );
};

export default FramerMotion;
