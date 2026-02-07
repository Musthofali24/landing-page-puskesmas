import { useEffect, useState } from "react";
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNestedDropdownToggle = (index) => {
    setOpenNestedDropdown(openNestedDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
      setOpenDropdown(null);
      setOpenNestedDropdown(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Integrasi Layanan Primer",
      href: "#",
      submenu: [
        {
          name: "KLASTER MANAJEMEN",
          href: "/integrasi-layanan/klaster-manajemen",
        },
        {
          name: "KLASTER PELAYANAN KESEHATAN IBU DAN ANAK",
          href: "/integrasi-layanan/klaster-pelayanan-kia",
        },
        {
          name: "KLASTER PELAYANAN KESEHATAN DEWASA DAN LANJUT USIA",
          href: "/integrasi-layanan/klaster-pelayanan-kdlu",
        },
        {
          name: "KLASTER PENANGGULANGAN PENYAKIT MENULAR",
          href: "/integrasi-layanan/klaster-penanggulangan",
        },
        {
          name: "KLASTER DUKUNGAN PELAYANAN LINTAS KLASTER",
          href: "/integrasi-layanan/klaster-dukungan",
        },
      ],
    },
    {
      name: "Inovasi Kami",
      href: "#",
      submenu: [
        {
          name: "PANDA (PELAYANAN RAMAH ANAK GARUDA)",
          href: "/inovasi-kami/panda",
        },
        {
          name: "GARASI (Gerakan Anak dan Remaja Andir Siaga Inovasi)",
          href: "/inovasi-kami/garasi",
        },
        {
          name: "SAGARA (Sahabat Keluarga Garuda)",
          href: "/inovasi-kami/sagara",
        },
        { name: "SSG", href: "/inovasi-kami/ssg" },
        { name: "GEMPITA", href: "/inovasi-kami/gempita" },
      ],
    },
    {
      name: "Tentang Kami",
      href: "#",
      submenu: [
        { name: "Profil Puskesmas", href: "/tentang-kami/profil-puskesmas" },
        {
          name: "Maklumat Pelayanan",
          href: "/tentang-kami/maklumat-pelayanan",
        },
        {
          name: "Struktur Organisasi",
          href: "/tentang-kami/struktur-organisasi",
        },
        { name: "Alur Pelayanan", href: "/tentang-kami/alur-pelayanan" },
        { name: "Visi Misi", href: "/tentang-kami/visi-misi" },
        { name: "Layanan Kami", href: "/tentang-kami/layanan-kami" },
        { name: "Motto", href: "/tentang-kami/motto" },
        { name: "Tujuan Puskesmas", href: "/tentang-kami/tujuan-puskesmas" },
        { name: "Tarif Layanan", href: "/tentang-kami/tarif-layanan" },
        { name: "Hak dan Kewajiban", href: "/tentang-kami/hak-dan-kewajiban" },
        { name: "Artikel", href: "/blogs" },
      ],
    },
    { name: "FAQ", href: "/faq" },
    {
      name: "Pengaduan",
      href: "#",
      submenu: [{ name: "SP4N LAPOR", href: "https://sp4n.lapor.go.id/" }],
    },
    { name: "Standar Pelayanan", href: "/standar-pelayanan" },
    { name: "SKM", href: "/skm" },
  ];

  return (
    <nav className="w-full bg-teal-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl px-4 py-4 mx-auto relative">
        <div className="flex items-center justify-between">
          {/* Versi Desktop */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  className="text-white font-semibold hover:text-cyan-300 transition-colors text-sm xl:text-base flex items-center gap-1 py-2"
                  href={item.href}
                >
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl min-w-[280px] max-w-[320px] transition-all duration-200 ${
                      openDropdown === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <ul className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <li
                          key={subindex}
                          className="relative group/nested"
                          onMouseEnter={() =>
                            subitem.nested && setOpenNestedDropdown(subindex)
                          }
                          onMouseLeave={() =>
                            subitem.nested && setOpenNestedDropdown(null)
                          }
                        >
                          <a
                            className={`block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm font-medium ${
                              subitem.nested
                                ? "flex items-center justify-between"
                                : ""
                            }`}
                            href={subitem.href}
                          >
                            {subitem.name}
                            {subitem.nested && (
                              <FaChevronRight className="text-xs" />
                            )}
                          </a>

                          {/* Nested Dropdown Menu (Sub-submenu) */}
                          {subitem.nested && (
                            <div
                              className={`absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl min-w-[240px] transition-all duration-200 ${
                                openNestedDropdown === subindex
                                  ? "opacity-100 visible translate-x-0"
                                  : "opacity-0 invisible -translate-x-2"
                              }`}
                            >
                              <ul className="py-2">
                                {subitem.nested.map(
                                  (nesteditem, nestedindex) => (
                                    <li key={nestedindex}>
                                      <a
                                        className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm font-medium"
                                        href={nesteditem.href}
                                      >
                                        {nesteditem.name}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-teal-800 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-1 px-4 py-4 max-h-[500px] overflow-y-auto">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      className="text-white w-full text-left font-semibold hover:text-cyan-300 hover:bg-teal-700 px-4 py-3 rounded-lg transition-all flex items-center justify-between"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === index ? "max-h-[1000px]" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex}>
                            {subitem.nested ? (
                              <div>
                                <button
                                  className="text-white/90 text-sm w-full text-left hover:text-cyan-300 hover:bg-teal-700 px-4 py-2 rounded-lg transition-all flex items-center justify-between"
                                  onClick={() =>
                                    handleNestedDropdownToggle(subindex)
                                  }
                                >
                                  {subitem.name}
                                  <FaChevronDown
                                    className={`text-xs transition-transform duration-200 ${
                                      openNestedDropdown === subindex
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {/* Mobile Nested Submenu */}
                                <div
                                  className={`overflow-hidden transition-all duration-300 ${
                                    openNestedDropdown === subindex
                                      ? "max-h-[500px]"
                                      : "max-h-0"
                                  }`}
                                >
                                  <ul className="pl-4 mt-1 space-y-1">
                                    {subitem.nested.map(
                                      (nesteditem, nestedindex) => (
                                        <li key={nestedindex}>
                                          <a
                                            className="text-white/80 text-xs block hover:text-cyan-300 hover:bg-teal-700 px-4 py-2 rounded-lg transition-all"
                                            href={nesteditem.href}
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {nesteditem.name}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <a
                                className="text-white/90 text-sm block hover:text-cyan-300 hover:bg-teal-700 px-4 py-2 rounded-lg transition-all"
                                href={subitem.href}
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    className="text-white block font-semibold hover:text-cyan-300 hover:bg-teal-700 px-4 py-3 rounded-lg transition-all"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
