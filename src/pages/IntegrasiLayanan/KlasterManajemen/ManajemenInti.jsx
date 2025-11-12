import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import { FaCog, FaCheckCircle } from "react-icons/fa";

export const ManajemenInti = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Inti" },
  ];

  const tujuanList = [
    "Meningkatkan efisiensi operasional Puskesmas dalam pelayanan berbasis siklus hidup dan keluarga.",
    "Menjamin mutu dan keselamatan pasien melalui sistem kendali mutu dan kendali biaya.",
    "Memastikan koordinasi yang efektif lintas program dan lintas sektor.",
    "Mendukung pencapaian Standar Pelayanan Minimal (SPM) bidang kesehatan dan indikator kinerja lainnya.",
  ];

  const komponenList = [
    {
      title: "Manajemen Sumber Daya Manusia (SDM)",
      description:
        "Merupakan proses perencanaan, penempatan, pengembangan, serta evaluasi kinerja seluruh tenaga kesehatan dan non-kesehatan di Puskesmas.",
    },
    {
      title: "Manajemen Sarana, Prasarana, dan Perbekalan Kesehatan",
      description:
        "Mengelola semua fasilitas fisik, alat kesehatan, serta logistik medis untuk mendukung layanan yang optimal.",
    },
    {
      title: "Manajemen Keuangan dan Barang Milik Daerah (BMD)",
      description:
        "Sistem pengelolaan anggaran, belanja operasional, serta aset negara/daerah untuk mendukung keberlanjutan ILP.",
    },
    {
      title: "Manajemen Sistem Informasi Digital (SID)",
      description:
        "Pengumpulan, pengolahan, dan analisis data kesehatan secara sistematis sebagai dasar pengambilan keputusan.",
    },
    {
      title: "Manajemen Mutu Pelayanan Kesehatan",
      description:
        "Proses peningkatan mutu pelayanan secara berkesinambungan, melalui evaluasi internal dan pengendalian mutu eksternal.",
    },
    {
      title: "Manajemen Arsip dan Dokumentasi",
      description:
        "Pengelolaan dokumen administratif, medis, dan legal secara tertib untuk menjamin keberlangsungan data pelayanan.",
    },
    {
      title: "Manajemen Komunikasi Publik dan Jejaring",
      description:
        "Upaya membangun hubungan yang sinergis antara Puskesmas dengan masyarakat, kader, media, dan mitra kerja.",
    },
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
                Klaster Manajemen
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Manajemen Inti
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaCog className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  MANAJEMEN INTI DALAM PENERAPAN ILP DI UPTD PUSKESMAS GARUDA
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                UPTD Puskesmas Garuda, sebagai fasilitas pelayanan kesehatan
                tingkat pertama di wilayah Kota Bandung, telah menjadi salah
                satu Puskesmas pelaksana Integrasi Layanan Primer (ILP) sesuai
                kebijakan transformasi layanan primer dari Kementerian
                Kesehatan. Dalam implementasi ILP, Manajemen Inti menjadi
                komponen fundamental yang mendukung keterpaduan layanan
                kesehatan berbasis keluarga dan siklus hidup.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Manajemen inti merupakan sistem pengelolaan di belakang layar
                yang menjamin seluruh layanan – baik esensial maupun
                non-esensial – dapat berjalan secara terintegrasi, efisien,
                berkelanjutan, dan berkualitas. Di UPTD Puskesmas Garuda,
                penguatan manajemen inti dilakukan lintas unit kerja dan
                terintegrasi dengan sistem digitalisasi serta pendekatan
                jejaring kemitraan.
              </p>
            </div>

            {/* Tujuan Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                TUJUAN PENGUATAN MANAJEMEN INTI
              </h3>
              <ul className="space-y-4">
                {tujuanList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 text-xl shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Komponen Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                KOMPONEN MANAJEMEN INTI DI UPTD PUSKESMAS GARUDA
              </h3>
              <div className="space-y-6">
                {komponenList.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-teal-500 dark:border-teal-400 pl-6 py-2"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {index + 1}. {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <p className="text-lg leading-relaxed text-justify">
                Manajemen inti dalam ILP di UPTD Puskesmas Garuda bukan hanya
                sistem administrasi pendukung, tetapi merupakan pilar penggerak
                utama dalam memastikan layanan primer yang holistik,
                terintegrasi, dan bermutu. Dengan pendekatan yang sistematik,
                berbasis data, dan partisipatif, UPTD Puskesmas Garuda
                berkomitmen menjadi model pelayanan kesehatan tingkat pertama
                yang mendukung transformasi sistem kesehatan nasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
