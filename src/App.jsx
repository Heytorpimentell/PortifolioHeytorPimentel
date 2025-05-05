import "./App.css";
import Hero from "./sections/Hero/Hero";
import { ThemeProvider } from "./common/ThemeContext";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contatc from "./sections/Contact/Contatc";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skills />
      <Contatc />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
