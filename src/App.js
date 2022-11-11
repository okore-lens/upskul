import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import ArtCorner from "./pages/artCorner/ArtCorner";
import Home from "./pages/home/Home";
import Memories from "./pages/memories/Memories";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<ArtCorner />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
