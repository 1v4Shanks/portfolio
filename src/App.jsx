import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="w-full h-screen flex flex-col xl:flex-row bg-[#f8f8f8]">
      <CursorFollower />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
