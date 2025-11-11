import { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

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
