import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideIn } from "../utils/animations";

const action= {
  100: "#e1d1ff",
  200: "#c3a3ff",
  300: "#a575ff",
  400: "#8747ff",
  500: "#6919ff",
  600: "#5414cc",
  700: "#3f0f99",
  800: "#2a0a66",
  900: "#150533"
}
const Home = () => {
  const {scrollY} = useScroll();

  const scrollUp = useTransform(scrollY, [0, 200, 400], [0, 200, 350])
  const changeColor = useTransform(scrollY, [0, 100, 200, 300, 500], ['#fff', action[100], action[200], action[400], action[500]])
  const size = useTransform(scrollY, [0, 100, 200, 300, 500], [1, 1.1, 1.2, 1.3, 1.4])
  return (
    <div className="w-full h-screen">
    <Navbar />

    <motion.div
      initial={"hidden"}
      animate={"show"}
      variants={slideIn("up", "", 1, 1)}
      className="bg-dark w-full h-full text-white bg-home bg-cover object-cover bg-no-repeat"
    >


      <motion.div style={{y: scrollUp, scale: size, color: changeColor}} className=" z-0 flex flex-col w-full h-full justify-center items-center ">
        <span>
          <h1  className="text-3xl sm:text-5xl md:text-7xl font-bold">
            Web Developer
          </h1>
        </span>
        <div>
          <a href="#universe">Dig into my universe</a>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Home;
