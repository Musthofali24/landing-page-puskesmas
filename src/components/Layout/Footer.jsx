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
      {/* Top Section - CTA Cards */}
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Kesehatan Anda, <br className="md:hidden" /> Prioritas Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Panggilan Darurat */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-third/10 dark:bg-third/20 p-3 rounded-full">
                <FaPhone className="text-third text-xl" />
              </div>
              <span className="font-bold text-lg">Panggilan Darurat</span>
            </div>
            <button className="bg-third hover:bg-third/80 text-white p-3 rounded-full transition-colors">
              <FaArrowRight className="text-lg" />
            </button>
          </div>

          {/* Card 2 - Cari Dokter */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                <FaUser className="text-pink-600 dark:text-pink-400 text-xl" />
              </div>
              <span className="font-bold text-lg">Cari Dokter</span>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors">
              <FaArrowRight className="text-lg" />
            </button>
          </div>

          {/* Card 3 - Jadwal Pelayanan */}
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-third/10 dark:bg-third/20 p-3 rounded-full">
                <FaCalendar className="text-third text-xl" />
              </div>
              <span className="font-bold text-lg">Jadwal Pelayanan</span>
            </div>
            <button className="bg-third hover:bg-third/80 text-white p-3 rounded-full transition-colors">
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Logo & Social Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center mb-12 shadow-lg">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="UPTD Puskesmas Garuda"
            className="w-64 mb-6 md:mb-0"
          />

          <div className="flex gap-4">
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
