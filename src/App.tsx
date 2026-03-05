import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";


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
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}