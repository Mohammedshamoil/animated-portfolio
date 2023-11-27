import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";
import { Link } from "react-router-dom";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButtons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      staggerChildren: 0.1,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MOHAMMED SHAMOIL</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              variants={textVariants}
            >
              Resume Download
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButtons"
            src="scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={slideVariants}
          initial="initial"
          animate="animate"
          className="slidingtext"
        >
          Frontend Developer
        </motion.div>
        <div className="imageContainer">
          <img src="/heropic.JPG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
