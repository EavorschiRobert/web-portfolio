import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlinks } from "../utils/constants";
import MenuLink from "./MenuLink";
import SectionWrapper from "../wrapper/SectionWrapper";
import { useMenuContext } from "../context/MenuContext";
import { motion, transform } from "framer-motion";
import { slideIn } from "../utils/animations";

const Topbar = ({handleClose}: {handleClose: () => void}) => {
  return (
          <motion.span
            animate='show'
            initial='hidden'
            exit='hidden'
            variants={slideIn("up", "", 0, 0.75)}
            className="absolute w-screen h-screen bg-dark/50"
          >
            <div className="absolute w-screen h-screen bg-dark/50"></div>
            <div className="fixed w-full h-full text-white 0 mt-[100px] px-10">
              <motion.ul 
                id='links'
                className="m-0" 
                animate='show'
                initial='hidden'
                exit='hidden'
                variants={slideIn("left", "", 0, 0.75)}
              >
                {navlinks.map((link, index) => (
                  <motion.li
                    variants={slideIn('left', "", 0.25*index, 0.75)}
                    key={link.id}
                    className="pt-10"
                    onClick={handleClose}
                  >
                    <MenuLink id={link.id} name={link.title}/>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.span>
  );
};

export default Topbar;