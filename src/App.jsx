import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Header from "./components/HeaderComponents/Header";
import { languageContext } from "./languageContext";
import { Provider } from "react-redux";
import Footer from "./components/FooterComponents/Footer";
import ProjectsDetail from "./components/ProjectsComponents/ProjectsDetail"
import PostDetail from "./components/BlogComponents/PostDetail"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={languageContext}>
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
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;