import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* optional placeholders (remove if you don't want yet) */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div className="container section">Contact page coming soon.</div>} />
        <Route path="/privacy" element={<div className="container section">Privacy Policy coming soon.</div>} />
      </Routes>

      <Footer />
    </>
  );
}