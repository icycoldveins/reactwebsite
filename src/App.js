import ReactDOM from "react-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import SocialMedia from "./SocialMedia";

function App() {
  return (
    <>
      <page>
        <nav>
          <lest>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#SocialMedia">Social</a>
            </li>
          </lest>
        </nav>

        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="SocialMedia">
          <SocialMedia />
        </section>
      </page>
    </>
  );
}
export default ReactDOM.render(<App />, document.getElementById("root"));
