import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
