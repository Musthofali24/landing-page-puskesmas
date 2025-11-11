import { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
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
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default PageLayout;
