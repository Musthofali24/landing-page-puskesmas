import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import {
  FaCog,
  FaFileArchive,
  FaAward,
  FaMoneyBillWave,
  FaUsers,
  FaTools,
  FaLaptopCode,
  FaNetworkWired,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

export const KlasterManajemen = () => {
  // Data untuk 9 manajemen
  const managementData = [
    {
      id: 1,
      icon: FaCog,
      title: "Manajemen Inti",
      description:
        "Pengelolaan sistem manajemen inti puskesmas untuk operasional yang efektif dan efisien",
      color: "bg-teal-400",
    },
    {
      id: 2,
      icon: FaFileArchive,
      title: "Manajemen Arsip",
      description:
        "Sistem pengelolaan dan penyimpanan arsip dokumen puskesmas secara terstruktur",
      color: "bg-blue-400",
    },
    {
      id: 3,
      icon: FaAward,
      title: "Manajemen Mutu Pelayanan",
      description:
        "Peningkatan dan pemantauan kualitas pelayanan kesehatan kepada masyarakat",
      color: "bg-purple-400",
    },
    {
      id: 4,
      icon: FaMoneyBillWave,
      title: "Manajemen Keuangan dan Aset BMD",
      description:
        "Pengelolaan keuangan dan aset barang milik daerah secara transparan dan akuntabel",
      color: "bg-green-400",
    },
    {
      id: 5,
      icon: FaUsers,
      title: "Manajemen Sumber Daya Manusia",
      description:
        "Pengembangan dan pengelolaan SDM untuk meningkatkan kompetensi tenaga kesehatan",
      color: "bg-pink-400",
    },
    {
      id: 6,
      icon: FaTools,
      title: "Manajemen Sarana, Prasarana, dan Perbekalan Kesehatan",
      description:
        "Pengelolaan fasilitas, peralatan, dan perbekalan kesehatan yang memadai",
      color: "bg-orange-400",
    },
    {
      id: 7,
      icon: FaLaptopCode,
      title: "Manajemen Sistem Informasi Digital",
      description:
        "Implementasi dan pengelolaan sistem informasi digital untuk pelayanan modern",
      color: "bg-cyan-400",
    },
    {
      id: 8,
      icon: FaNetworkWired,
      title: "Manajemen Jejaring",
      description:
        "Pembangunan dan pemeliharaan jejaring kerja sama dengan berbagai pihak",
      color: "bg-indigo-400",
    },
    {
      id: 9,
      icon: FaHandsHelping,
      title: "Manajemen Pemberdayaan Masyarakat",
      description:
        "Program pemberdayaan masyarakat untuk meningkatkan derajat kesehatan",
      color: "bg-rose-400",
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    { label: "Klaster Manajemen" },
  ];

  return (
    <PageLayout>
      <div className="dark:bg-black min-h-screen">
        <div className="max-w-7xl px-4 py-16 mx-auto">
          {/* Page Header Section */}
          <div className="mb-12">
            {/* Category Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-600 rounded-full"></div>
              <p className="font-semibold text-lg text-teal-600 dark:text-teal-400">
                Integrasi Layanan Primer
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Klaster Manajemen
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Sistem manajemen terintegrasi untuk meningkatkan kualitas
              pelayanan kesehatan di UPTD Puskesmas Garuda melalui 9 aspek
              manajemen yang saling mendukung.
            </p>
          </div>

          {/* Management Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementData.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 flex flex-col"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Button - Push to bottom */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors group mt-auto"
                  >
                    Lihat Detail
                    <FaArrowRight />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
