import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stage from './Stage';
import Making from './Making';
import Animation from './Animation';
import Webshop from './Webshop';
import Labels from './Labels';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/stage" element={<Stage />} />
        <Route path="/making-of" element={<Making />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/web-app" element={<Webshop />} />
        <Route path="/labels" element={<Labels />} />
      </Routes>
    </Router>
  );
}

export default App;