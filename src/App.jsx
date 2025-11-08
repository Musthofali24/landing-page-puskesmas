import { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Banner from "./components/Section/Banner";
import Service from "./components/Section/Service";
import Staff from "./components/Section/Staff";
import Stats from "./components/Section/Stats";
import About from "./components/Section/About";
import Blog from "./components/Section/Blog";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkmode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkmode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
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
}

export default App;
