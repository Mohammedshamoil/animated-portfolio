// import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar></Sidebar>

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          {" "}
          Shammu
        </motion.span>
        <div className="social">
          <a href="#">
            <motion.img
              whileHover={{ scale: 2.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/facebook.png"
              alt=""
            />
          </a>
          <a href="#">
            <motion.img
              whileHover={{ scale: 2.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/instagram.png"
              alt=""
            />
          </a>
          <a href="#">
            <motion.img
              whileHover={{ scale: 2.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src="/GitHub.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
