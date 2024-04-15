import { navlinks } from "../utils/constants";
import MenuLink from "./MenuLink";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideIn } from "../utils/animations";
import { useLocation } from "react-router";
import Menu from "./Menu";
import { useCallback, useEffect, useRef } from "react";

const Topbar = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  // const cleanup = 
  //   () => {
  //     console.log('CLOSE')
  //     handleClose;
  //   }

  // useEffect(() => {
  //   console.log('HEI')
  //   return cleanup
  // }, [])


  return (
    <motion.span
      animate="show"
      initial="hidden"
      exit="hidden"
      variants={slideIn("up", "", 0, 0.75)}
      className="fixed z-40 w-screen h-screen bg-dark/50 md:hidden"
      ref={ref}
    >
      <div className="fixed z-30 w-screen h-screen bg-dark/50 "></div>
      <div className="fixed z-40 w-full h-full text-white 0 mt-[100px] px-10" >
        <Menu handleClose={handleClose}/>
      </div>
    </motion.span>
  );
};

export default Topbar;
