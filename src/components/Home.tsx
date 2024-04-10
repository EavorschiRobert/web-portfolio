import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn } from "../utils/animations";
const Home = () => {

  return (
    <motion.div
      initial={"hidden"}
      animate={"show"}
      variants={slideIn("up", "", 1, 1)}
      className="bg-dark w-full h-full text-white bg-home bg-cover object-cover bg-no-repeat"
    >
      <Navbar />

      <div className="fixed z-0 flex flex-col w-full h-full justify-center items-center ">
        <span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            Web Developer
          </h1>
        </span>
        <div>
          <Link to="#universe">Dig into my universe</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
