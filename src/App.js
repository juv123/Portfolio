import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
