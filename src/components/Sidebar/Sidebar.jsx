import React, { useState } from "react";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";
import Links from "./Links/Links";
import { motion } from "framer-motion";

const toggleVarinent = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
       
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setopen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
    <motion.div className="bg" variants={toggleVarinent}>
      <Links />
    </motion.div>
    <ToggleButton setopen={setopen} />
  </motion.div>
  );
};

export default Sidebar;
