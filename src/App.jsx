// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lumi from "./pages/Pj1";
import DripCafe from "./pages/Pj2";
import ProjectThree from "./pages/Pj3";

export default function App() {
  return (
    <BrowserRouter  basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lumi" element={<Lumi />} />
          <Route path="/drip-cafe" element={<DripCafe />} />
          <Route path="/project-three" element={<ProjectThree />} />
          {/* 可以再加 /about /contact 等 */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
