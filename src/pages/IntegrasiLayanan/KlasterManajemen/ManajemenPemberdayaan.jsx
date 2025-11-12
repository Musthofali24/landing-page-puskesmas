import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaHandsHelping,
  FaCheckCircle,
  FaUsers,
  FaLightbulb,
  FaBullhorn,
  FaChartLine,
  FaClipboardCheck,
  FaHome,
} from "react-icons/fa";

export const ManajemenPemberdayaan = () => {
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Pemberdayaan Masyarakat" },
  ];

  const fokusUtama = [
    {
      title: "Penguatan Promotif dan Preventif",
      description:
        "Mengubah perilaku dan menciptakan lingkungan sehat secara kolektif.",
      icon: FaBullhorn,
      color: "bg-blue-500",
    },
    {
      title: "Optimalisasi UKBM",
      description:
        "Menghidupkan kembali dan mengintegrasikan semua Upaya Kesehatan Bersumber Daya Masyarakat (UKBM), dengan Posyandu sebagai ujung tombak.",
      icon: FaUsers,
      color: "bg-green-500",
    },
    {
      title: "Aksi Nyata",
      description:
        "Menggerakkan kegiatan kesehatan berbasis siklus hidup (Klaster 2, 3, 4) langsung di tingkat desa/kelurahan, dusun, hingga RT/RW.",
      icon: FaHandsHelping,
      color: "bg-purple-500",
    },
  ];

  const petaJalan = [
    {
      tahap: "Perencanaan Partisipatif (P1)",
      kegiatan: [
        {
          title: "Identifikasi Masalah",
          description:
            "Menggunakan data kesehatan dari Pemantauan Wilayah Setempat (PWS) atau hasil kunjungan rumah untuk menemukan masalah kesehatan prioritas di desa/kelurahan (misalnya: stunting tinggi, kasus TBC tidak ditemukan).",
        },
        {
          title: "Membangun Komitmen",
          description:
            "Melakukan pertemuan dengan Lintas Sektor (Camat, Kepala Desa/Lurah, TP PKK) untuk menyepakati masalah prioritas dan mencari dukungan kebijakan (misalnya, penggunaan Dana Desa untuk Posyandu).",
        },
        {
          title: "Penyusunan Rencana Tindak Lanjut (RTL)",
          description:
            "Bersama dengan kader dan tokoh masyarakat, Puskesmas menyusun rencana kegiatan yang akan dilakukan oleh UKBM atau Lintas Sektor.",
        },
      ],
      icon: FaLightbulb,
      color: "bg-indigo-500",
    },
    {
      tahap: "Penggerakan Pelaksanaan (P2)",
      kegiatan: [
        {
          title: "Penguatan Kader",
          description:
            "Melakukan pelatihan dasar dan teknis secara berkelanjutan kepada kader Posyandu (terkait pengukuran, pencatatan ASIK, konseling gizi, dll.).",
        },
        {
          title: "Pelaksanaan UKBM Terintegrasi",
          description:
            "Memastikan Posyandu melaksanakan lima langkah pelayanan yang telah diintegrasikan (untuk semua siklus hidup: Ibu hamil, Bayi/Balita, Remaja, Dewasa, Lansia).",
        },
        {
          title: "Advokasi Lintas Sektor",
          description:
            "Aktif mengadvokasi kebijakan dan sumber daya kepada Pemerintah Desa/Kelurahan agar program kesehatan menjadi prioritas pembangunan desa.",
        },
        {
          title: "Pemicuan Perilaku Sehat",
          description:
            "Melakukan kegiatan promosi kesehatan dan pemicuan perubahan perilaku (misalnya, Pemicuan STBM untuk menghentikan Buang Air Besar Sembarangan).",
        },
      ],
      icon: FaHandsHelping,
      color: "bg-teal-500",
    },
    {
      tahap: "Pengawasan dan Penilaian (P3)",
      kegiatan: [
        {
          title: "Monitoring Kegiatan",
          description:
            "Mengunjungi dan mengawasi pelaksanaan kegiatan Posyandu dan UKBM lainnya.",
        },
        {
          title: "Evaluasi Kinerja Kader/UKBM",
          description:
            "Menilai kinerja kader dan UKBM berdasarkan capaian target dan kualitas pelayanan yang diberikan.",
        },
        {
          title: "Umpan Balik",
          description:
            "Memberikan umpan balik yang konstruktif dan solutif kepada kader dan perangkat desa melalui Lokakarya Mini bulanan atau triwulanan.",
        },
      ],
      icon: FaClipboardCheck,
      color: "bg-orange-500",
    },
  ];

  const indikatorKeberhasilan = [
    {
      title: "Tingginya cakupan kunjungan Posyandu",
      icon: FaChartLine,
    },
    {
      title:
        "Adanya regulasi atau kebijakan desa yang mendukung kesehatan (misalnya, Perdes tentang dana operasional Posyandu)",
      icon: FaHome,
    },
    {
      title: "Meningkatnya strata UKBM",
      icon: FaChartLine,
    },
    {
      title:
        "Terbentuk dan berfungsinya UKBM baru sesuai kebutuhan (misalnya, Posbindu PTM aktif)",
      icon: FaUsers,
    },
    {
      title: "Tingginya partisipasi masyarakat dalam program kesehatan",
      icon: FaHandsHelping,
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
              <div className="w-1 h-8 bg-pink-600 rounded-full"></div>
              <p className="font-semibold text-lg text-pink-600 dark:text-pink-400">
                Klaster Manajemen
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Manajemen Pemberdayaan Masyarakat
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaHandsHelping className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Pemberdayaan Masyarakat di UPTD Puskesmas Garuda
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Fungsi esensial dalam Klaster 1 (Manajemen) yang mendorong
                  peran aktif masyarakat dalam upaya kesehatan
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Manajemen Pemberdayaan Masyarakat (MPM) di Puskesmas merupakan
                fungsi esensial yang juga masuk dalam lingkup Klaster 1
                (Manajemen), terutama dalam kerangka Integrasi Layanan Primer
                (ILP).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Tujuan utama MPM adalah mendorong dan memfasilitasi peran aktif
                masyarakat dan tokoh lintas sektor dalam mengidentifikasi
                masalah, merencanakan, melaksanakan, dan mengevaluasi upaya
                kesehatan di wilayahnya. Dengan demikian, masyarakat tidak hanya
                menjadi objek penerima layanan, tetapi subjek yang mandiri dalam
                menjaga kesehatannya.
              </p>
            </div>

            {/* Fokus Utama Pemberdayaan Masyarakat */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                1. Fokus Utama Pemberdayaan Masyarakat
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Dalam konteks ILP, Pemberdayaan Masyarakat difokuskan untuk:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {fokusUtama.map((fokus, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${fokus.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <fokus.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {fokus.title}
                      </h4>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {fokus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peta Jalan Pemberdayaan di Puskesmas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                2. Peta Jalan Pemberdayaan di Puskesmas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Manajemen Pemberdayaan Masyarakat dilaksanakan secara sistematis
                melalui siklus manajemen yang terintegrasi, yang melibatkan
                Puskesmas, Lintas Sektor, dan Tokoh Masyarakat.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {petaJalan.map((tahap, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${tahap.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <tahap.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-white text-center">
                        {tahap.tahap}
                      </h4>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6 space-y-4">
                      {tahap.kegiatan.map((kegiatan, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4"
                          style={{
                            borderLeftColor:
                              tahap.color === "bg-indigo-500"
                                ? "#6366f1"
                                : tahap.color === "bg-teal-500"
                                ? "#14b8a6"
                                : "#f97316",
                          }}
                        >
                          <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                            {kegiatan.title}:
                          </h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                            {kegiatan.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indikator Keberhasilan MPM */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                3. Indikator Keberhasilan MPM
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Keberhasilan Manajemen Pemberdayaan Masyarakat tidak diukur
                hanya dari kegiatan Puskesmas, tetapi dari capaian di
                masyarakat, seperti:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {indikatorKeberhasilan.map((indikator, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-linear-to-r from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <indikator.icon className="text-white text-lg" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      {indikator.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaHandsHelping className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Melalui Manajemen Pemberdayaan Masyarakat yang efektif, UPTD
                    Puskesmas Garuda tidak hanya memberikan layanan kesehatan,
                    tetapi juga membangun kapasitas masyarakat untuk mandiri
                    dalam mengelola kesehatan mereka. Dengan UKBM yang kuat,
                    dukungan lintas sektor, dan partisipasi aktif masyarakat,
                    kesehatan masyarakat di wilayah kerja Puskesmas dapat
                    meningkat secara berkelanjutan sesuai prinsip ILP.
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
