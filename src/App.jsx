import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}