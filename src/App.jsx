import { Nav } from "./components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { Portfolio } from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";

// max-w-6xl w-full mx-auto
function App() {
  return (
    <div className="bg-black/60 min-h-screen">
      <Router>
        <Nav />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-0 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
