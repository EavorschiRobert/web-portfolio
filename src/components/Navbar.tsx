import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, color, useAnimate, useScroll } from "framer-motion";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Topbar from "./Topbar";
import SectionWrapper from "../wrapper/SectionWrapper";
import { slideIn } from "../utils/animations";
import { useMenuContext } from "../context/MenuContext";


const Navbar = () => {
  const [scope, animate] = useAnimate();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuOpen = () => {
    setShowMenu(prevState => !prevState);
    if (showMenu) {
      animate("svg", { rotate: 0 }, { type: "spring", duration: 1 });
    } else {
      animate("svg", { rotate: 90 }, { type: "spring", duration: 1 });
    }
  };
  return (
    <>
      <header className="fixed w-full z-20">
        <div
          className={`flex justify-between items-center m-5 p-3 rounded-full text-white ${
            showMenu ? "bg-dark border-solid border-[1px] border-tertiary" : ""
          }`}
        >
          <div className="flex items-center gap-10">
            <motion.div
              onClick={handleMenuOpen}
              ref={scope}
              className="block xl:hidden"
            >
              <FontAwesomeIcon icon={faBars} className="block cursor-pointer" />
            </motion.div>
          </div>
          <div>
            <a href="#">STUDIO</a>
          </div>
          <div>
            <motion.button
              whileHover={{
                backgroundColor: "#fff",
                color: "#6919ff",
                scale: 1.1,
              }}
              transition={{
                stiffness: 300,
                type: "spring",
              }}
              className="p-2 rounded-2xl border-[1px] border-solid border-white"
            >
              Hit me up
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence>
      {showMenu && (
          <Topbar handleClose={handleMenuOpen}/>
      )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
