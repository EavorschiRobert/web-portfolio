import { navlinks } from "../utils/constants";
import MenuLink from "./MenuLink";
import { AnimatePresence, motion } from "framer-motion";
import { slideIn } from "../utils/animations";
import { useLocation } from "react-router";

const Topbar = ({ handleClose }: { handleClose: () => void }) => {
  const location = useLocation();
  console.log(location.hash);
  return (
    <motion.span
      animate="show"
      initial="hidden"
      exit="hidden"
      variants={slideIn("up", "", 0, 0.75)}
      className="fixed z-40 w-screen h-screen bg-dark/50"
    >
      <div className="fixed z-30 w-screen h-screen bg-dark/50 "></div>
      <div className="fixed z-40 w-full h-full text-white 0 mt-[100px] px-10">
        <motion.ul
          id="links"
          className="m-0"
          animate="show"
          initial="hidden"
          exit="hidden"
          variants={slideIn("left", "", 0, 0.75)}
        >
          {navlinks.map((link, index) => (
            <AnimatePresence mode="wait">
              <motion.li
                layout
                variants={slideIn("left", "", 0.25 * index, 0.75)}
                key={index}
                className="pt-10 text-white"
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
      </div>
    </motion.span>
  );
};

export default Topbar;
