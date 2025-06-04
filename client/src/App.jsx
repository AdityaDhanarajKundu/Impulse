import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Layout from "./Components/Layout";
import Gallery from "./Pages/Gallery";
import Members from "./Pages/Members";
import About from "./Pages/About";
import Schedule from "./Pages/Schedule";
import Sponsors from "./Pages/Sponsors";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
