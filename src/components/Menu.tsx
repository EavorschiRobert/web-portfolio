import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "../utils/constants";
import { slideIn } from "../utils/animations";
import MenuLink from "./MenuLink";
import { useLocation } from "react-router";
const Menu = ({
  handleClose,
  flex,
}: {
  handleClose?: () => void;
  flex?: boolean;
}) => {
  const location = useLocation();
  return (
    <motion.ul
      id="links"
      initial="hidden"
      animate="show"
      variants={slideIn("left", "", 0, 0.75)}
      exit="hidden"
      className={`m-0 ${flex ? "flex" : ""}`}
    >
      {navlinks.map((link, index) => (
        <AnimatePresence key={link.id}>
          <motion.li
            layout
            variants={slideIn("left", "", 0.25 * index, 0.75)}
            className=" text-white md:pt-0 md:pr-5 w-full"
            onClick={handleClose}
          >
            <MenuLink
              id={link.id}
              name={link.title}
              active={location.hash === `#${link.id}`}
            />
          </motion.li>
        </AnimatePresence>
      ))}
    </motion.ul>
  );
};

export default Menu;
