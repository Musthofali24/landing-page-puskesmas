import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import { FaBaby, FaUserMd } from "react-icons/fa";
import {
  FaAmbulance,
  FaBookMedical,
  FaComments,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const LayananKami = () => {
  useTitle("Layanan Kami");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Tentang Kami", href: "#" },
    { label: "Layanan Kami" },
  ];

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
      url: "https://sp4n.lapor.go.id/",
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
    <PageLayout>
      <div className="bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="bg-white dark:bg-black pt-16">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-500"></div>
              <p className="font-semibold text-lg text-teal-500">
                Tentang Kami
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Layanan Kami
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
              Layanan Kesehatan Unggulan UPTD Puskesmas Garuda
            </p>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="max-w-7xl px-4 py-12 mx-auto">
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
                      <IconComponent
                        className="text-white text-3xl"
                        size={40}
                      />
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
      </div>
    </PageLayout>
  );
};
