import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaHome,
  FaCheckCircle,
  FaHeartbeat,
  FaBaby,
  FaUserMd,
  FaWheelchair,
  FaHandsHelping,
  FaClipboardCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const Sagara = () => {
  useTitle("SAGARA");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Inovasi Kami", href: "#" },
    { label: "SAGARA" },
  ];

  const tujuanProgram = [
    "Mewujudkan keluarga yang sadar, mau, dan mampu menerapkan Perilaku Hidup Bersih dan Sehat (PHBS)",
    "Mengidentifikasi dan mengatasi masalah kesehatan di tingkat keluarga",
    "Memastikan semua anggota keluarga mendapatkan akses dan informasi kesehatan yang sesuai dengan tahapan usia mereka",
  ];

  const sasaranPelayanan = [
    {
      kelompok: "Ibu Hamil & Bersalin",
      layanan:
        "Layanan PONED (Pelayanan Obstetri dan Neonatal Emergensi Dasar) 24 jam, Senam Hamil, Kelas Ibu Hamil",
      icon: FaHeartbeat,
    },
    {
      kelompok: "Bayi & Balita",
      layanan:
        "Pelayanan KIA (Kesehatan Ibu dan Anak), Imunisasi, Pemantauan Tumbuh Kembang, MTBS/MTBM (Manajemen Terpadu Balita/Bayi Sakit/Muda)",
      icon: FaBaby,
    },
    {
      kelompok: "Usia Produktif",
      layanan:
        "Pelayanan KB (Keluarga Berencana), skrining penyakit tidak menular (PTM), Konseling Gizi",
      icon: FaUserMd,
    },
    {
      kelompok: "Lansia",
      layanan: "Pemeriksaan berkala, senam lansia, dan skrining risiko jatuh",
      icon: FaWheelchair,
    },
    {
      kelompok: "Keluarga Secara Umum",
      layanan:
        "Kunjungan rumah untuk Pendekatan Keluarga, Pelayanan Kesehatan Reproduksi, dan promosi PHBS",
      icon: FaHome,
    },
  ];

  const implementasiKunci = [
    {
      judul: "Kunjungan Rumah PIS-PK",
      deskripsi:
        "Petugas Puskesmas (biasanya perawat atau bidan) melakukan kunjungan ke rumah-rumah warga untuk mendata dan menilai status kesehatan 12 indikator PIS-PK di setiap keluarga. Setelah pendataan, petugas memberikan intervensi (penyuluhan, rujukan, atau konseling) sesuai dengan masalah kesehatan yang ditemukan dalam keluarga tersebut.",
      icon: FaClipboardCheck,
    },
    {
      judul: "Pemberdayaan Masyarakat",
      deskripsi:
        "Mengaktifkan kembali peran kader kesehatan di Posyandu dan Posbindu sebagai perpanjangan tangan puskesmas di lingkungan RW/RT.",
      icon: FaHandsHelping,
    },
    {
      judul: "Edukasi dan Promosi Kesehatan",
      deskripsi:
        "Mengadakan kelas atau pertemuan rutin di komunitas untuk edukasi kesehatan keluarga (misalnya tentang Gizi Seimbang, Pencegahan TBC, atau pentingnya ASI Eksklusif).",
      icon: FaChalkboardTeacher,
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
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <p className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Inovasi Kami
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SAGARA
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaHome className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SAGARA - Sahabat Keluarga Garuda
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Inovasi pelayanan yang memperkuat peran keluarga sebagai unit
                  terkecil dalam upaya kesehatan masyarakat, dengan pelayanan
                  mencakup seluruh siklus kehidupan
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Program SAGARA (Sahabat Keluarga Garuda) merupakan salah satu
                inovasi pelayanan unggulan dari UPT Puskesmas Garuda, Kota
                Bandung.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Program SAGARA dirancang sebagai upaya Puskesmas untuk
                memperkuat peran keluarga sebagai unit terkecil dalam upaya
                kesehatan masyarakat, sekaligus memastikan pelayanan kesehatan
                mencakup seluruh siklus kehidupan, mulai dari bayi hingga lanjut
                usia. Ini adalah implementasi dari Program Indonesia Sehat
                dengan Pendekatan Keluarga (PIS-PK) yang dicanangkan pemerintah.
              </p>
            </div>

            {/* Konsep Dasar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                1. Konsep Dasar
              </h3>

              <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeartbeat className="text-blue-500 text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Fokus Utama
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mendekatkan pelayanan kesehatan yang komprehensif ke level
                  keluarga dan komunitas. Ini adalah implementasi dari Program
                  Indonesia Sehat dengan Pendekatan Keluarga (PIS-PK) yang
                  dicanangkan pemerintah.
                </p>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Tujuan:
              </h4>
              <div className="space-y-3">
                {tujuanProgram.map((tujuan, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 dark:bg-gray-700 rounded-lg p-4"
                  >
                    <FaCheckCircle className="text-blue-500 text-xl shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {tujuan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sasaran Pelayanan SAGARA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                2. Sasaran Pelayanan SAGARA
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                Tidak seperti PANDA (khusus anak) atau GARASI (khusus remaja),
                SAGARA menargetkan seluruh anggota keluarga dan mencakup
                berbagai upaya kesehatan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sasaranPelayanan.map((sasaran, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-blue-500 p-6">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <sasaran.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {sasaran.kelompok}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {sasaran.layanan}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementasi Kunci SAGARA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                3. Implementasi Kunci SAGARA
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                SAGARA dilaksanakan melalui berbagai kegiatan yang mendorong
                interaksi langsung antara petugas puskesmas dan masyarakat:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {implementasiKunci.map((implementasi, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-blue-500 p-6 relative">
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-blue-600">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <implementasi.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {implementasi.judul}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {implementasi.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keterkaitan dengan Inovasi Lain */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                4. Keterkaitan dengan Inovasi Lain
              </h3>

              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    PANDA & GARASI
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SAGARA memastikan bahwa pelayanan spesifik seperti PANDA dan
                    GARASI terintegrasi dengan baik dalam konteks kesehatan
                    keluarga secara keseluruhan, di mana masalah kesehatan anak
                    atau remaja juga diperhatikan dari sudut pandang keluarga.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Layanan 24 Jam & PONED
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Status Puskesmas Garuda sebagai Puskesmas PONED (Pelayanan
                    Obstetri Neonatal Emergensi Dasar) 24 jam sangat mendukung
                    SAGARA, terutama dalam memberikan pelayanan ibu hamil dan
                    bersalin yang menjadi inti dari kesehatan keluarga.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaHandsHelping className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Dengan program SAGARA, Puskesmas Garuda tidak hanya menunggu
                    pasien datang, tetapi secara aktif menjadi "Sahabat
                    Keluarga" yang mendampingi dan memantau kesehatan masyarakat
                    di wilayah kerjanya. Program ini menjadi bukti nyata
                    komitmen Puskesmas Garuda dalam menerapkan pendekatan
                    keluarga untuk menciptakan masyarakat yang sehat dan
                    mandiri.
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
