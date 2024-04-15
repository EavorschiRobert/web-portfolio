import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Topbar from "./Topbar";
import Menu from "./Menu";
const Navbar = () => {
  const [scope, animate] = useAnimate();
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll();

  const show = useTransform(scrollY, [0, 5, 10], [0, 0.5, 1]);

  const handleMenuOpen = () => {
    setShowMenu((prevState) => !prevState);
    if (showMenu) {
      animate("svg", { rotate: 0 }, { type: "spring", duration: 1 });
    } else {
      animate("svg", { rotate: 90 }, { type: "spring", duration: 1 });
    }
  };

  console.log(showMenu)
  return (
    <>
      <header className="fixed w-full h-28 z-50">
        {/*BOX*/}
        <div
          className={`absolute z-10 p-5 w-full h-full ${showMenu && "hidden"}`}
        >
          <motion.div
            style={{ opacity: show }}
            className="bg-dark w-full h-full rounded-full border-solid border-[1px] border-tertiary"
          ></motion.div>
        </div>
        {/*Menu*/}
        <div className={`absolute z-20 w-full h-full p-5`}>
          <div
            className={`w-full h-full ${
              showMenu
                ? "rounded-full bg-dark border-solid border-[1px] border-tertiary"
                : ""
            }`}
          >
            <div className="absolute rounded-full bg-dark"></div>
            <div className="flex justify-between items-center p-3 rounded-full text-white ">
              <div className="items-center gap-10 block md:hidden">
                <motion.div onClick={handleMenuOpen} ref={scope} className="">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="block cursor-pointer"
                  />
                </motion.div>
              </div>
                <div className="hidden md:flex items-center">
                  <Menu flex={true} />
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
          </div>
        </div>
      </header>
      {/* <AnimatePresence> */}
      {showMenu && <Topbar handleClose={handleMenuOpen}/>}
      {/* </AnimatePresence> */}
    </>
  );
  return (
    <>
      <header className="fixed w-full z-50">
        {/* <motion.div
          className={`flex justify-between items-center m-5 p-3 rounded-full text-white ${
            showMenu ? "bg-dark border-solid border-[1px] border-tertiary" : ""
          }`}
        > */}
        <div
          className={`w-full h-full ${
            showMenu ? "bg-dark border-solid border-[1px] border-tertiary" : ""
          }`}
        >
          <div className="absolute rounded-fullbg-dark "></div>
          <div className="flex justify-between items-center m-5 p-3 rounded-full text-white ">
            <div className="items-center gap-10 block md:hidden">
              <motion.div onClick={handleMenuOpen} ref={scope} className="">
                <FontAwesomeIcon
                  icon={faBars}
                  className="block cursor-pointer"
                />
              </motion.div>
            </div>
            <div className="hidden md:flex items-center">
              <Menu flex={true} />
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
        </div>
        {/* </motion.div> */}
      </header>
    </>
  );
};

export default Navbar;
