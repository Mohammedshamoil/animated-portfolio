import Test from "./Test";
import "./app.scss";
import Hero from "./components/HEro/Hero";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Cursor></Cursor>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Services">
        <Parallax type="services"></Parallax>
      </section>
      <section id="About"><About></About></section>
      <section id="Portfolio">
        <Parallax type="Portfolio"></Parallax>
      </section>
      <section id="Skills">
        <Skills></Skills>
      </section>
      {/* <Skills></Skills> */}
      <section id="Contact">
        <Contact></Contact>
      </section>

   




      {/* <Test></Test> */}
    </div>
  );
};

export default App;
