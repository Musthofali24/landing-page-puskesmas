import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import { FaVirus, FaLeaf, FaArrowRight } from "react-icons/fa";

export const KlasterPenanggulangan = () => {
  // Data untuk 2 pelayanan Penanggulangan
  const penanggulanganData = [
    {
      id: 1,
      icon: FaVirus,
      title: "Surveilans dan Respon Penyakit Menular",
      description:
        "Sistem pemantauan dan respons cepat terhadap penyakit menular meliputi deteksi dini, pelaporan kasus, investigasi epidemiologi, dan pengendalian wabah penyakit menular",
      color: "bg-red-400",
    },
    {
      id: 2,
      icon: FaLeaf,
      title: "Surveilans dan Respon Kesehatan Lingkungan",
      description:
        "Pemantauan kualitas lingkungan dan respons terhadap ancaman kesehatan lingkungan mencakup sanitasi, air bersih, pengelolaan limbah, dan pencegahan penyakit berbasis lingkungan",
      color: "bg-green-400",
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    { label: "Klaster Penanggulangan Penyakit Menular" },
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
              Klaster Penanggulangan Penyakit Menular
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Sistem surveilans dan respons terpadu untuk pencegahan, deteksi
              dini, dan penanggulangan penyakit menular serta ancaman kesehatan
              lingkungan dengan pendekatan komprehensif dan responsif.
            </p>
          </div>

          {/* Penanggulangan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {penanggulanganData.map((item) => {
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
