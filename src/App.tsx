import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ProjectsDetail from "./components/ProjectsComponents/ProjectsDetail";
import PostDetail from "./components/BlogComponents/PostDetail";
import { LanguageProvider } from "./Context/LanguageContext";
import Home from "./routes/Home.tsx";
const App = () => {
  return (
    <div>
      <BrowserRouter basename="/portfolioPersonal">
        <LanguageProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/projects/:id" element={<ProjectsDetail />} /> */}
            <Route path="/blog/:id" element={<PostDetail />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
