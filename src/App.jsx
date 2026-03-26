import { Navbar } from "react-bootstrap";
import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Downloads from "./Downloads";
import Gallery from "./Gallery";
import Pathways from "./Pathways";
import Blogs from "./Blogs";
import Blog from "./Blog";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router basename="/school-boiler-template/">
      <div className="mainContainer">
        <Nav />
        <div className="all">
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Hero />}></Route>
            <Route exact path="/downloads" element={<Downloads />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/pathways" element={<Pathways />}></Route>
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
          </Routes>
        </div>

        {/* <Hero /> */}
      </div>
    </Router>
  );
}

export default App;
