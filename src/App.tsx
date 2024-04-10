import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Topbar from "./components/Topbar";
import Universe from "./components/Universe";
import MenuProvider, { useMenuContext } from "./context/MenuContext";

function App() {
  const { showMenu } = useMenuContext();
  return (
    <div className="w-full h-full bg-dark">
      <MenuProvider>
        <Home />
        <About />
        <Universe />
        <Stories />
        <Services />
        <Contact />
      </MenuProvider>
    </div>
  );
}

export default App;
