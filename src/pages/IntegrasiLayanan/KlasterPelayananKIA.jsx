import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import { FaBaby, FaChild, FaUsers, FaArrowRight } from "react-icons/fa";

export const KlasterPelayananKIA = () => {
  // Data untuk 3 pelayanan KIA
  const kiaData = [
    {
      id: 1,
      icon: FaUsers,
      title: "Ibu Hamil, Bersalin, Nifas",
      description:
        "Pelayanan kesehatan komprehensif untuk ibu hamil, proses persalinan, dan masa nifas dengan standar PONED",
      color: "bg-pink-400",
      slug: "ibu-hamil-bersalin-nifas",
    },
    {
      id: 2,
      icon: FaBaby,
      title: "Balita dan Anak Prasekolah",
      description:
        "Program kesehatan untuk balita dan anak prasekolah meliputi imunisasi, pemantauan tumbuh kembang, dan deteksi dini",
      color: "bg-blue-400",
      slug: "balita-anak-prasekolah",
    },
    {
      id: 3,
      icon: FaChild,
      title: "Anak Usia Sekolah dan Remaja",
      description:
        "Layanan kesehatan untuk anak usia sekolah dan remaja termasuk UKS dan konseling kesehatan reproduksi",
      color: "bg-purple-400",
      slug: "anak-sekolah-remaja",
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    { label: "Klaster Pelayanan Kesehatan Ibu dan Anak" },
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
              Klaster Pelayanan Kesehatan Ibu dan Anak
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Pelayanan kesehatan menyeluruh untuk ibu dan anak mulai dari masa
              kehamilan, persalinan, hingga tumbuh kembang anak dengan standar
              PONED 24 jam.
            </p>
          </div>

          {/* KIA Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kiaData.map((item) => {
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
                    href={`/integrasi-layanan/klaster-pelayanan-kia/${item.slug}`}
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors group mt-auto"
                  >
                    Lihat Detail
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
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
