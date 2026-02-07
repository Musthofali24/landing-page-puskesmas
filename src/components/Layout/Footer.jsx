import {
  FaPhone,
  FaUser,
  FaCalendar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa6";
import logoLight from "../../assets/logo-uptd-light.webp";
import logoDark from "../../assets/logo_uptd_dark.webp";

const Footer = ({ darkMode }) => {
  const menuSections = [
    {
      title: "Integrasi Layanan Primer",
      items: [
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
      title: "Inovasi Kami",
      items: [
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
      title: "Tentang Kami",
      items: [
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
        {
          name: "Hak dan Kewajiban",
          href: "/tentang-kami/hak-dan-kewajiban",
        },
      ],
    },
    {
      title: "Pengaduan",
      items: [
        { name: "SP4N LAPOR", href: "https://sp4n.lapor.go.id/" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Artikel",
      items: [
        { name: "Berita Kesehatan", href: "/artikel/berita-kesehatan" },
        { name: "Promosi Kesehatan", href: "/artikel/promosi-kesehatan" },
        { name: "Artikel Kesehatan", href: "/artikel/artikel-kesehatan" },
        { name: "Kegiatan Puskesmas", href: "/artikel/kegiatan-puskesmas" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@uptpuskesmasgaruda7367",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/uptpuskesmasgaruda",
    },
    { icon: FaFacebook, link: "https://web.facebook.com/puskesmasgaruda" },
    { icon: FaTwitter, link: "https://x.com/puskesmasgaruda" },
    { icon: FaGlobe, link: "https://uptdpuskesmasgaruda.id/" },
  ];

  return (
    <footer className="bg-teal-800 dark:bg-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl px-4 py-12 mx-auto">
        {/* Logo & Social Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center mb-12 shadow-lg">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="UPTD Puskesmas Garuda"
            className="w-64 mb-6 md:mb-0"
          />

          <div className="flex flex-wrap gap-4 justify-center md:justify-end max-w-xs md:max-w-none">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-800 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 p-3 rounded-full transition-colors duration-300"
                aria-label="Social media link"
              >
                <social.icon className="text-white text-xl" />
              </a>
            ))}
            {/* Emergency Call Button */}
            <a
              href="tel:082118066700"
              className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 p-3 rounded-full transition-colors duration-300"
              aria-label="Panggilan Darurat"
            >
              <FaPhone className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8 border-b border-white/20">
          {menuSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-4">
          <p className="text-left">
            © 2025 Puskesmas Garuda, All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
