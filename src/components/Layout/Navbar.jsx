import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Integrasi Layanan Primer", href: "#" },
    { name: "Inovasi Kami", href: "#" },
    { name: "Tentang Kami", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Pengaduan", href: "#" },
    { name: "Standar Pelayanan Garuda", href: "#" },
    { name: "SKM", href: "#" },
  ];

  return (
    <nav className="w-full bg-teal-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl px-4 py-4 mx-auto relative">
        <div className="flex items-center justify-between">
          {/* Versi Dekstop */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-white font-semibold hover:text-cyan-300 transition-colors text-sm xl:text-base"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Versi Mobile */}
          <div className="lg:hidden flex items-center w-full justify-between">
            <span className="text-white font-semibold text-lg">Menu</span>
            <button
              onClick={ToggleMenu}
              className="text-white p-2 rounded-lg hover:bg-teal-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Versi Mobile */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-teal-800 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-white block font-semibold hover:text-cyan-300 hover:bg-teal-700 px-4 py-3 rounded-lg transition-all"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
