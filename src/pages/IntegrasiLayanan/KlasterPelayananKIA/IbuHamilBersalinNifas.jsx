import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaBaby,
  FaUserMd,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";

export const IbuHamilBersalinNifas = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Pelayanan KIA",
      href: "/integrasi-layanan/klaster-pelayanan-kia",
    },
    { label: "Ibu Hamil, Bersalin, Nifas" },
  ];

  const jadwalPemeriksaan = [
    {
      trimester: "Trimester Pertama",
      periode: "0-12 minggu",
      frekuensi: "1 kali kunjungan",
      color: "bg-pink-500",
    },
    {
      trimester: "Trimester Kedua",
      periode: "> 12 minggu – 24 minggu",
      frekuensi: "2 kali kunjungan",
      color: "bg-purple-500",
    },
    {
      trimester: "Trimester Ketiga",
      periode: "> 24 minggu sampai kelahiran",
      frekuensi: "3 kali kunjungan",
      color: "bg-blue-500",
    },
  ];

  const pelayanan10T = [
    {
      title: "Timbang Berat Badan dan Ukur Tinggi Badan",
      description:
        "Pemantauan pertumbuhan dan status gizi ibu selama kehamilan.",
      icon: FaClipboardList,
      color: "bg-blue-500",
    },
    {
      title: "Ukur Tekanan Darah",
      description: "Deteksi dini hipertensi atau preeklamsia pada ibu hamil.",
      icon: FaHeartbeat,
      color: "bg-red-500",
    },
    {
      title: "Ukur Lingkar Lengan Atas (LILA)",
      description: "Menilai status gizi dan risiko kurang energi kronis (KEK).",
      icon: FaClipboardList,
      color: "bg-green-500",
    },
    {
      title: "Pemeriksaan Tinggi Fundus",
      description: "Memantau perkembangan dan pertumbuhan janin dalam rahim.",
      icon: FaBaby,
      color: "bg-purple-500",
    },
    {
      title: "Menentukan Letak/Posisi serta Denyut Jantung Janin (DJJ)",
      description:
        "Memastikan posisi janin normal dan detak jantung janin sehat.",
      icon: FaHeartbeat,
      color: "bg-pink-500",
    },
    {
      title: "Pemberian Imunisasi Tetanus Toksoid (TT)",
      description:
        "Melindungi ibu dan bayi dari infeksi tetanus saat persalinan.",
      icon: FaUserMd,
      color: "bg-cyan-500",
    },
    {
      title: "Pemberian Tablet Tambah Darah (TTD)",
      description: "Mencegah anemia pada ibu hamil untuk kesehatan optimal.",
      icon: FaClipboardList,
      color: "bg-orange-500",
    },
    {
      title: "Pemeriksaan Laboratorium",
      description:
        "Tes darah, urine, dan pemeriksaan penunjang lainnya untuk deteksi dini komplikasi.",
      icon: FaClipboardList,
      color: "bg-teal-500",
    },
    {
      title: "Tata laksana kasus",
      description:
        "Penanganan dan rujukan tepat untuk kondisi medis yang ditemukan.",
      icon: FaUserMd,
      color: "bg-indigo-500",
    },
    {
      title: "Temu Wicara / Konseling",
      description:
        "Edukasi tentang gizi, persiapan persalinan, tanda bahaya, dan perawatan bayi.",
      icon: FaUserMd,
      color: "bg-rose-500",
    },
    {
      title: "USG Obstetri Dasar Terbatas",
      description:
        "Pemeriksaan ultrasonografi untuk memantau kondisi janin dan deteksi kelainan.",
      icon: FaBaby,
      color: "bg-violet-500",
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
                Klaster Pelayanan KIA
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ibu Hamil, Bersalin, Nifas
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaBaby className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Layanan Kesehatan Ibu Hamil, Bersalin, dan Nifas
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Pelayanan pemeriksaan untuk memastikan ibu dan janin dalam
                  kondisi sehat selama masa kehamilan, persalinan, dan nifas
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Layanan Kesehatan Ibu Hamil adalah pelayanan pemeriksaan yang
                ditujukan kepada ibu hamil untuk memastikan bahwa ibu serta
                janin dalam kondisi sehat selama masa kehamilan.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Layanan ini mencakup identifikasi risiko, pencegahan komplikasi
                kehamilan, serta edukasi dan promosi kesehatan. Hal ini
                bertujuan untuk mendeteksi kondisi kehamilan terutama apabila
                ada kecenderungan terjadi kehamilan yang beresiko.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Pemeriksaan Ibu hamil ini harus dilakukan berkala minimal
                sebanyak <strong>6 kali</strong> selama kehamilan plus{" "}
                <strong>USG</strong> oleh dokter.
              </p>
            </div>

            {/* Jadwal Pemeriksaan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Jadwal Pemeriksaan Kehamilan
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {jadwalPemeriksaan.map((jadwal, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${jadwal.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <FaCalendarAlt className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center mb-2">
                        {jadwal.trimester}
                      </h4>
                      <p className="text-white/90 text-sm text-center">
                        {jadwal.periode}
                      </p>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6">
                      <div
                        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 text-center"
                        style={{
                          borderLeftColor:
                            jadwal.color === "bg-pink-500"
                              ? "#ec4899"
                              : jadwal.color === "bg-purple-500"
                              ? "#a855f7"
                              : "#3b82f6",
                        }}
                      >
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {jadwal.frekuensi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pelayanan 10 T Plus USG */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Pelayanan Kesehatan Ibu Hamil: Pemeriksaan 10 T Plus USG
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pelayanan10T.map((layanan, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${layanan.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <layanan.icon className="text-white text-2xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-white text-center min-h-12 flex items-center justify-center">
                        {layanan.title}
                      </h4>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-5">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {layanan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manfaat dan Tujuan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Manfaat Pemantauan Berkala
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-pink-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <FaCheckCircle className="text-pink-500 text-2xl shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Menurunkan Angka Kematian Ibu (AKI)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Pemantauan berkala membantu mendeteksi dini komplikasi
                      kehamilan dan memastikan penanganan tepat waktu oleh
                      tenaga medis terlatih.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-pink-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <FaCheckCircle className="text-pink-500 text-2xl shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Menurunkan Angka Kematian Bayi (AKB)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Pemeriksaan rutin memastikan pertumbuhan janin optimal dan
                      persalinan ditangani oleh tenaga medis profesional di UPTD
                      Puskesmas Garuda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-pink-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <FaCheckCircle className="text-pink-500 text-2xl shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Persiapan Persalinan yang Aman
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Edukasi dan konseling yang diberikan membantu ibu hamil
                      mempersiapkan diri menghadapi proses persalinan dan
                      perawatan bayi baru lahir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaHeartbeat className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Dengan pemantauan berkala yang dilakukan kepada ibu hamil
                    ini menjadi salah satu solusi dalam menurunkan Angka
                    Kematian Ibu (AKI) dan Angka Kematian Bayi (AKB).
                    Dikarenakan selain dipantau selama kehamilan, proses
                    persalinan pun akan ditangani oleh tenaga medis yang sudah
                    terlatih di UPTD Puskesmas Garuda, sehingga ibu dan bayi
                    mendapatkan perawatan yang optimal dan berkualitas.
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
