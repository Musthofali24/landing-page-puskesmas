import { FaBaby, FaStethoscope, FaUserMd } from "react-icons/fa";
import {
  FaAmbulance,
  FaBookMedical,
  FaComments,
  FaNetworkWired,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoupt from "../../assets/logoupt.webp";
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  // Data services dengan URL
  const servicesData = [
    {
      icon: FaNetworkWired,
      title: "Klaster Lintas Klaster",
      description:
        "Pelayanan kesehatan komprehensif yang meliputi berbagai layanan terpadu untuk memenuhi kebutuhan masyarakat.",
      color: "bg-teal-400",
      url: "/layanan/klaster-lintas-klaster",
    },
    {
      icon: FaUserMd,
      title: "Klaster Kesehatan Dewasa Lansia",
      description:
        "Layanan kesehatan khusus untuk dewasa dan lansia, termasuk skrining, pemeriksaan rutin, dan pengelolaan penyakit kronis.",
      color: "bg-pink-400",
      url: "/layanan/klaster-kesehatan-dewasa-lansia-umum",
    },
    {
      icon: FaBaby,
      title: "Klaster Ibu dan Anak",
      description:
        "Pelayanan KIA lengkap mulai dari kehamilan, persalinan, hingga tumbuh kembang anak dengan fasilitas PONED 24 jam.",
      color: "bg-sky-300",
      url: "/layanan/klaster-pelayanan-kia",
    },
    {
      icon: FaAmbulance,
      title: "Pelayanan Khusus",
      description:
        "Layanan khusus meliputi UGD 24 jam, ambulans, homecare, dan pelayanan rujukan untuk kebutuhan medis mendesak.",
      color: "bg-teal-300",
      url: "/layanan/klaster-pelayanan-khusus",
    },
    {
      icon: FaComments,
      title: "Pengaduan Masyarakat",
      description:
        "Layanan aspirasi dan pengaduan masyarakat untuk meningkatkan kualitas pelayanan kesehatan di Puskesmas Garuda.",
      color: "bg-sky-200",
      url: "/pengaduan",
    },
    {
      icon: FaBookMedical,
      title: "Edukasi Kesehatan",
      description:
        "Informasi dan artikel kesehatan terkini untuk meningkatkan pengetahuan dan kesadaran masyarakat akan pentingnya hidup sehat.",
      color: "bg-pink-300",
      url: "/berita",
    },
  ];

  return (
    <div className="max-w-7xl px-4 py-15 mx-auto mt-5 min-h-screen">
      {/* Section Title */}
      <div className="p-3">
        <div className="flex items-center gap-2">
          <div className="w-px bg-third h-px p-2 rounded-full"></div>
          <h3 className="font-semibold text-md dark:text-white">
            Layanan Kami
          </h3>
        </div>
        <h1 className="text-5xl mt-5 font-semibold dark:text-white">
          Layanan Kesehatan Unggulan Kami
        </h1>
      </div>
      {/* Section Card */}
      <div className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.url}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div
                  className={`w-20 h-20 rounded-full ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {IconComponent && (
                    <IconComponent className="text-white text-3xl" size={40} />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 inline-flex items-center gap-2">
                  Lebih Lanjut
                  <FaArrowRight />
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Card Section */}
      <div className="mt-8">
        <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2">
              <p className="text-primary font-semibold text-sm mb-3">
                Hubungi Kami
              </p>
              <h2 className="text-4xl font-bold mb-4 dark:text-white">
                <span className="text-third">Kunjungi Kami</span> untuk
                <br />
                Pelayanan Kesehatan Terbaik
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Puskesmas Garuda siap memberikan pelayanan kesehatan menyeluruh
                untuk Anda dan keluarga. Dapatkan pemeriksaan umum, layanan
                gigi, KIA-KB, hingga PONED 24 jam
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-third hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                  Hubungi Kami
                </button>
                <button className="bg-primary hover:bg-pink-300 cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                  Lihat Jadwal Dokter
                </button>
              </div>
            </div>

            {/* Right Illustration - 1 column */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <img
                src={logoupt}
                alt="Medical Illustration"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
