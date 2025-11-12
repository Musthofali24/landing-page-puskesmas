import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaTooth,
  FaPills,
  FaAmbulance,
  FaMicroscope,
  FaBed,
  FaExclamationTriangle,
  FaHandHoldingMedical,
  FaArrowRight,
} from "react-icons/fa";

export const KlasterDukungan = () => {
  useTitle("Klaster Dukungan");
  // Data untuk 7 pelayanan Dukungan
  const dukunganData = [
    {
      id: 1,
      icon: FaTooth,
      title: "Pelayanan Kesehatan Gigi dan Mulut",
      description:
        "Pelayanan kesehatan gigi dan mulut komprehensif meliputi pemeriksaan, perawatan, pencabutan, penambalan gigi, scaling, dan edukasi kesehatan gigi untuk semua usia",
      color: "bg-cyan-400",
      slug: "kesehatan-gigi-mulut",
    },
    {
      id: 2,
      icon: FaPills,
      title: "Kefarmasian",
      description:
        "Pelayanan kefarmasian profesional mencakup penyediaan obat, konseling penggunaan obat, monitoring efek samping, dan edukasi penggunaan obat yang rasional",
      color: "bg-green-400",
      slug: "kefarmasian",
    },
    {
      id: 3,
      icon: FaAmbulance,
      title: "Pelayanan Gawat Darurat",
      description:
        "Pelayanan gawat darurat 24 jam dengan tim medis terlatih untuk penanganan kasus emergency, trauma, dan kondisi kritis dengan standar PONED",
      color: "bg-red-400",
      slug: "gawat-darurat",
    },
    {
      id: 4,
      icon: FaMicroscope,
      title: "Pelayanan Laboratorium Kesehatan Masyarakat",
      description:
        "Layanan pemeriksaan laboratorium lengkap meliputi pemeriksaan darah, urin, feses, dan pemeriksaan penunjang diagnostik lainnya dengan akurasi tinggi",
      color: "bg-purple-400",
      slug: "laboratorium-kesehatan",
    },
    {
      id: 5,
      icon: FaBed,
      title: "Pelayanan Rawat Inap",
      description:
        "Fasilitas rawat inap dengan perawatan medis 24 jam, ruang perawatan nyaman, dan tenaga medis profesional untuk pemulihan optimal pasien",
      color: "bg-blue-400",
      slug: "rawat-inap",
    },
    {
      id: 6,
      icon: FaExclamationTriangle,
      title: "Pelayanan Krisis Kesehatan",
      description:
        "Manajemen dan respons cepat terhadap krisis kesehatan, bencana, dan wabah dengan sistem koordinasi terpadu dan tim tanggap darurat terlatih",
      color: "bg-orange-400",
      slug: "krisis-kesehatan",
    },
    {
      id: 7,
      icon: FaHandHoldingMedical,
      title: "Pelayanan Rehabilitasi Medik Dasar",
      description:
        "Layanan rehabilitasi medik dasar meliputi fisioterapi, terapi okupasi, dan program pemulihan fungsi fisik untuk pasien pasca sakit atau cedera",
      color: "bg-pink-400",
      slug: "rehabilitasi-medik",
    },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    { label: "Klaster Dukungan Pelayanan Lintas Klaster" },
  ];

  return (
    <PageLayout>
      <div className="dark:bg-black">
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
              Klaster Dukungan Pelayanan Lintas Klaster
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Layanan dukungan komprehensif yang terintegrasi lintas klaster
              untuk mendukung pelayanan kesehatan primer dengan fasilitas
              lengkap, tenaga profesional, dan standar pelayanan berkualitas.
            </p>
          </div>

          {/* Dukungan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dukunganData.map((item) => {
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
                    href={`/integrasi-layanan/klaster-dukungan/${item.slug}`}
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
