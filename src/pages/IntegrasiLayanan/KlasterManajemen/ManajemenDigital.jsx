import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaLaptopCode,
  FaCheckCircle,
  FaDatabase,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export const ManajemenDigital = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Sistem Informasi Digital" },
  ];

  const peranTanggungJawab = [
    {
      title: "Pencatatan dan Pelaporan",
      description:
        "Semua kegiatan pelayanan, baik di dalam Puskesmas, Puskesmas Pembantu (Pustu), maupun Posyandu, dicatat secara digital.",
    },
    {
      title: "Integrasi Data",
      description:
        "Sistem Informasi Kesehatan Daerah (SIKDA) terintegrasi dengan platform nasional (seperti SATUSEHAT) untuk memastikan pertukaran data yang mulus.",
    },
    {
      title: "Dashboard PWS",
      description:
        "Data diolah untuk menghasilkan Dashboard Pemantauan Wilayah Setempat (PWS) yang digunakan untuk analisis masalah kesehatan di tingkat desa/kelurahan.",
    },
    {
      title: "Keamanan Data",
      description:
        "Menjaga kerahasiaan dan keamanan Rekam Medis Elektronik (RME) pasien sesuai dengan peraturan yang berlaku.",
    },
    {
      title: "Infrastruktur",
      description:
        "Memastikan ketersediaan dan fungsionalitas jaringan internet dan perangkat keras (komputer, server) di Puskesmas dan jaringannya.",
    },
  ];

  const aplikasiKunci = [
    {
      nama: "SIKDA (Sistem Informasi Kesehatan Daerah)",
      fungsi:
        "Sistem utama untuk pencatatan Rekam Medis Elektronik (RME), pendaftaran, diagnosis, dan tindakan layanan kuratif.",
      keterkaitan:
        "Mengelola data pelayanan Klaster 2, 3, 4, dan Lintas Klaster.",
      color: "bg-blue-500",
    },
    {
      nama: "SATUSEHAT",
      fungsi:
        "Platform nasional tempat data RME seluruh fasilitas kesehatan terpusat.",
      keterkaitan:
        "Wajib menjadi tujuan akhir data layanan individu dari SIKDA.",
      color: "bg-green-500",
    },
    {
      nama: "ASIK (Aplikasi Sehat Indonesiaku)",
      fungsi:
        "Digunakan oleh kader/petugas di lapangan untuk mencatat skrining kesehatan promotif-preventif.",
      keterkaitan:
        "Memfasilitasi pencatatan kegiatan di Posyandu dan kegiatan Klaster 2, 3, dan 4 berbasis siklus hidup.",
      color: "bg-purple-500",
    },
    {
      nama: "ASDK (Aplikasi Satu Data Kesehatan)",
      fungsi:
        "Data warehouse atau gudang data yang mengagregasi data dari berbagai sumber.",
      keterkaitan:
        "Menyediakan visualisasi data (Dashboard PWS) untuk manajerial Klaster 1.",
      color: "bg-cyan-500",
    },
  ];

  const tantangan = [
    {
      title: "Interoperabilitas",
      description:
        "Memastikan SIKDA dapat 'berbicara' dengan SATUSEHAT dan aplikasi nasional lainnya.",
    },
    {
      title: "Kualitas Data",
      description:
        "Melakukan validasi dan verifikasi data (akurat dan lengkap) sebelum diunggah ke sistem nasional.",
    },
    {
      title: "Ketersediaan Jaringan",
      description:
        "Mengatasi keterbatasan infrastruktur internet, terutama di Pustu dan Posyandu.",
    },
    {
      title: "Kompetensi SDM",
      description:
        "Memberikan pelatihan rutin kepada petugas Puskesmas dan kader agar mahir menggunakan aplikasi digital.",
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
              Manajemen Sistem Informasi Digital
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaLaptopCode className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Sistem Informasi Digital di UPTD Puskesmas Garuda
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Manajemen Sistem Informasi Digital di Puskesmas merupakan
                komponen krusial dari Klaster 1 (Manajemen) dalam kerangka
                Integrasi Layanan Primer (ILP). Tujuannya adalah memastikan
                semua data layanan kesehatan tercatat, terintegrasi, dan diolah
                menjadi informasi yang akurat untuk mendukung pengambilan
                keputusan klinis dan manajerial.
              </p>
            </div>

            {/* Peran dan Tanggung Jawab */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                1. Peran dan Tanggung Jawab
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Manajemen Sistem Informasi Digital (SID) merupakan salah satu
                fungsi kunci di Klaster 1 (Manajemen) Puskesmas. Penanggung
                jawab di klaster ini memastikan:
              </p>

              <div className="space-y-4">
                {peranTanggungJawab.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <FaCheckCircle className="text-cyan-500 text-2xl shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aplikasi Kunci */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                2. Aplikasi Kunci dalam Digitalisasi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Puskesmas menggunakan beberapa aplikasi digital yang saling
                terhubung dalam ekosistem kesehatan primer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aplikasiKunci.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${item.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <FaDatabase className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {item.nama}
                      </h4>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6">
                      {/* Fungsi */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Fungsi Utama:
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.fungsi}
                        </p>
                      </div>

                      {/* Keterkaitan */}
                      <div
                        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border-l-4"
                        style={{
                          borderLeftColor:
                            item.color === "bg-blue-500"
                              ? "#3b82f6"
                              : item.color === "bg-green-500"
                              ? "#22c55e"
                              : item.color === "bg-purple-500"
                              ? "#a855f7"
                              : "#06b6d4",
                        }}
                      >
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Keterkaitan dengan ILP:
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.keterkaitan}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tantangan dan Prinsip */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                3. Tantangan dan Prinsip
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Meskipun digitalisasi sangat membantu, terdapat tantangan yang
                dikelola oleh tim manajemen Sistem Informasi Digital:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tantangan.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <FaExclamationTriangle className="text-orange-500 text-xl shrink-0 mt-1" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Melalui manajemen Sistem Informasi Digital yang efektif,
                    Puskesmas dapat mengubah data mentah menjadi informasi
                    strategis yang mendukung upaya promotif dan preventif ILP.
                    Dengan integrasi yang baik, UPTD Puskesmas Garuda siap
                    menjadi pusat kesehatan digital yang modern dan
                    terintegrasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
