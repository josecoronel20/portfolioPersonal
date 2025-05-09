import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostDetail from "./components/BlogComponents/PostDetail";
import Home from "./routes/Home";
import ProjectsDetail from "./components/ProjectsComponents/ProjectsDetail";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/portfolioPersonal">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectsDetail />} />
            <Route path="/blog/:id" element={<PostDetail />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
