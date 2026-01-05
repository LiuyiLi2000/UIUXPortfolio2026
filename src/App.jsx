// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Lumi from "./pages/Pj1";
import DripCafe from "./pages/Pj2";
import ProjectThree from "./pages/Pj3";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lumi" element={<Lumi />} />
        <Route path="/drip-cafe" element={<DripCafe />} />
        <Route path="/project-three" element={<ProjectThree />} />

        {/* 兜底，防止任何未知路径白屏 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
