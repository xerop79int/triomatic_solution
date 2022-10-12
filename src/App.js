import "./App.css";
import Contact from "./Contact";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App__container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
