import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { titles } from "../utils/constants";
import { slideIn } from "../utils/animations";
import Title from "./Title";
const About = () => {

  return (
    <div id="about" className="block md:flex relative z-0 h-full w-full">
      <div className="h-full w-full md:w-1/2 bg-cover bg-no-repeat bg-about rounded-r-3xl"></div>
      <div className="w-1/2 z-20 bg-dark pt-10">
        <div className="w-full h-full flex flex-col gap-5 items-start justify-center px-10">
          <div className="text-white font-bold text-5xl" >
            <AnimatePresence>
              <Title />
            </AnimatePresence>
          </div>
          <span>
            <p className="text-secondary">
              I am Kilian, a passionate freelancer from Hamburg, Germany and the
              founder of LOKKEE STUDIOS, bringing you web development and design
              from the future. My expertise is developing next-level websites
              and web applications including full frontend design.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
