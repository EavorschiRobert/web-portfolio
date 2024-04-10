import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Universe from "./components/Universe";

function App() {
  return (
    <div className="w-full h-full bg-dark">
      <Home />
      <About />
      <Universe />
      <Stories />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
