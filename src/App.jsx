import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import Blog from "./routes/blog/Blog";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProjectsDetail from "./routes/projects/Components/ProyectDetail/ProjectsDetail";
import PostDetail from "./routes/blog/Components/PostDetail";
import ContextLanguageProvider from "./Context/ContextLanguage"

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/portfolioPersonal">
        <ContextLanguageProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects/:id" element={<ProjectsDetail />} />
            <Route path="/blog/:id" element={<PostDetail />} />
          </Routes>
          <Footer />
        </ContextLanguageProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
