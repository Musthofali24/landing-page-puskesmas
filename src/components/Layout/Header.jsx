import {
  FaLocationDot,
  FaMoon,
  FaPhone,
  FaRegClock,
  FaSun,
} from "react-icons/fa6";
import logoLight from "../../assets/logo-uptd-light.webp";
import logoDark from "../../assets/logo_uptd_dark.webp";
import { FaPhoneAlt } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="w-full transition-colors bg-white dark:bg-black">
      <div className="max-w-7xl px-4 py-3 sm:py-4 mx-auto flex justify-between items-center">
        <div>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="logo"
            className="w-40"
          />
        </div>
        <div className="items-center hidden lg:flex">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-full bg-primary p-2">
              <FaRegClock className="text-white" />
            </div>
            <div className="flex flex-col text-black dark:text-white">
              <h3 className="text-sm">Jadwal Pelayanan</h3>
              <h3 className="text-sm font-semibold">07.30 - 12.00</h3>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-300 mx-5"></div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-full bg-secondary p-2">
              <FaPhoneAlt className="text-white" />
            </div>
            <div className="flex flex-col text-black dark:text-white">
              <h3 className="text-sm">Hubungi</h3>
              <h3 className="text-sm font-semibold">082118066700</h3>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-300 mx-5"></div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-full bg-third p-2">
              <FaLocationDot className="text-white" />
            </div>
            <div className="flex flex-col text-black dark:text-white">
              <h3 className="text-sm">Alamat</h3>
              <h3 className="text-sm font-semibold">
                Jl. Dadali No. 81 Kota Bandung
              </h3>
            </div>
          </div>
        </div>
        {/* Toggle Dark Mode */}
        <div className="flex items-center gap-5">
          <button
            className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-500 ease-in-out cursor-pointer"
            onClick={toggleDarkMode}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
                darkMode ? "left-9" : "left-1"
              }`}
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" size={12} />
              ) : (
                <FaMoon className="text-gray-600" size={12} />
              )}
            </div>
          </button>
          <button
            className="bg-secondary text-white px-4 py-2 rounded-3xl text-base font-semibold hidden md:block"
            type="submit"
          >
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
