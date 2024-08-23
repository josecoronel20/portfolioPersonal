import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Header from "./components/header/Header";
import { store } from "./components/context/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
