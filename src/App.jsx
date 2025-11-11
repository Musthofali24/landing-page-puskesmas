import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Banner from "./components/Section/Banner";
import Service from "./components/Section/Service";
import Staff from "./components/Section/Staff";
import Stats from "./components/Section/Stats";
import About from "./components/Section/About";
import Blog from "./components/Section/Blog";

import { KlasterManajemen } from "./pages/IntegrasiLayanan/KlasterManajemen";
import { KlasterPelayananKIA } from "./pages/IntegrasiLayanan/KlasterPelayananKIA";
import { KlasterPelayananKDLU } from "./pages/IntegrasiLayanan/KlasterPelayananKDLU";
import { KlasterPenanggulangan } from "./pages/IntegrasiLayanan/KlasterPenanggulangan";
import { KlasterDukungan } from "./pages/IntegrasiLayanan/KlasterDukungan";

function App() {
  // Initialize darkMode dari localStorage langsung
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply dark class saat component mount dan saat darkMode berubah
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Home Page Component
  const HomePage = () => (
    <div className="font-openSans bg-white dark:bg-black min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navbar darkMode={darkMode} />
      <Banner darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Service darkMode={darkMode} />
      <Staff darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Integrasi Layanan Primer Routes */}
        <Route
          path="/integrasi-layanan/klaster-manajemen"
          element={<KlasterManajemen darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-pelayanan-kia"
          element={<KlasterPelayananKIA />}
        />
        <Route
          path="/integrasi-layanan/klaster-pelayanan-kdlu"
          element={<KlasterPelayananKDLU />}
        />
        <Route
          path="/integrasi-layanan/klaster-penanggulangan"
          element={<KlasterPenanggulangan />}
        />
        <Route
          path="/integrasi-layanan/klaster-dukungan"
          element={<KlasterDukungan />}
        />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
