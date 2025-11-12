import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaSyringe,
  FaCheckCircle,
  FaShieldAlt,
  FaBaby,
  FaGift,
  FaCalendarAlt,
} from "react-icons/fa";

export const BalitadanAnakPraSekolah = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Pelayanan KIA",
      href: "/integrasi-layanan/klaster-pelayanan-kia",
    },
    { label: "Balita dan Anak Pra Sekolah" },
  ];

  const imunisasiDasar = [
    {
      nama: "BCG",
      namaLengkap: "Bacillus Calmette Guerin",
      waktu: "Usia 1 bulan",
      tujuan: "Memberikan kekebalan tubuh terhadap penyakit tuberkulosis (TBC)",
      deskripsi:
        "Vaksin BCG dapat diberikan sejak lahir untuk melindungi bayi dari penyakit TBC yang berbahaya.",
      color: "bg-blue-500",
      icon: FaShieldAlt,
    },
    {
      nama: "Polio",
      namaLengkap: "Poliomielitis Vaccine",
      waktu: "Lahir - 4 bulan",
      tujuan: "Mencegah poliomielitis yang bisa menyebabkan kelumpuhan",
      deskripsi:
        "Polio oral diberikan saat lahir hingga usia 1 bulan dan dilanjutkan pada usia 2, 3, dan 4 bulan. Polio suntikan diberikan pada usia 4 bulan.",
      color: "bg-purple-500",
      icon: FaSyringe,
    },
    {
      nama: "Hepatitis B",
      namaLengkap: "Hepatitis B Vaccine",
      waktu: "0-6 bulan",
      tujuan: "Mencegah penyakit Hepatitis B",
      deskripsi:
        "Imunisasi pertama harus diberikan dalam 12 jam setelah lahir, dilanjutkan pada usia 1 bulan dan 3-6 bulan. Jarak minimal antar dosis adalah 4 minggu.",
      color: "bg-green-500",
      icon: FaShieldAlt,
    },
    {
      nama: "DPT",
      namaLengkap: "Difteri, Pertusis, Tetanus",
      waktu: "Usia > 6 minggu",
      tujuan: "Mencegah penyakit difteri, pertusis (batuk rejan), dan tetanus",
      deskripsi:
        "Vaksin kombinasi yang diberikan pada bayi usia lebih dari 6 minggu. Ulangan diberikan pada usia 18 bulan dan 5 tahun.",
      color: "bg-red-500",
      icon: FaSyringe,
    },
    {
      nama: "HiB",
      namaLengkap: "Haemophilus Influenzae Type B",
      waktu: "2, 3, 4 bulan + booster 18 bulan",
      tujuan:
        "Melindungi dari infeksi bakteri HiB yang menyebabkan pneumonia dan meningitis",
      deskripsi:
        "Diberikan tiga kali pada usia 2, 3, dan 4 bulan. Vaksin booster diberikan saat usia 18 bulan.",
      color: "bg-cyan-500",
      icon: FaShieldAlt,
    },
    {
      nama: "MR",
      namaLengkap: "Measles & Rubella",
      waktu: "9 bulan dan 18 bulan",
      tujuan: "Mencegah penyakit Campak dan Campak Jerman (Rubella)",
      deskripsi:
        "Melindungi dari penyakit yang menular melalui droplet saat batuk atau bersin. Diberikan 2 dosis untuk balita.",
      color: "bg-orange-500",
      icon: FaSyringe,
    },
    {
      nama: "PCV",
      namaLengkap: "Pneumococcal Conjugate Vaccine",
      waktu: "2, 4, 6 bulan + booster 12-15 bulan",
      tujuan:
        "Mencegah infeksi bakteri pneumokokus penyebab pneumonia dan meningitis",
      deskripsi:
        "Diberikan tiga kali pada usia 2, 4, dan 6 bulan. Vaksin booster diberikan saat usia 12-15 bulan.",
      color: "bg-indigo-500",
      icon: FaShieldAlt,
    },
    {
      nama: "Rotavirus",
      namaLengkap: "Rotavirus Vaccine",
      waktu: "6-24 minggu (2 dosis)",
      tujuan:
        "Melindungi dari infeksi rotavirus yang menyebabkan diare pada bayi",
      deskripsi:
        "Dosis pertama diberikan pada usia 6-12 minggu. Dosis kedua diberikan minimal 4 minggu setelahnya, paling lambat sebelum usia 24 minggu.",
      color: "bg-pink-500",
      icon: FaSyringe,
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
              <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
              <p className="font-semibold text-lg text-purple-600 dark:text-purple-400">
                Klaster Pelayanan KIA
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Balita dan Anak Pra Sekolah
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaBaby className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Layanan Imunisasi Balita dan Anak Pra Sekolah
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Pelayanan kesehatan dasar untuk pencegahan berbagai penyakit
                  menular berbahaya melalui imunisasi dasar lengkap
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Layanan imunisasi di Puskesmas merupakan salah satu bentuk
                pelayanan kesehatan dasar yang sangat penting sebagai upaya
                pencegahan dari berbagai penyakit menular berbahaya. Layanan ini
                dapat diberikan kepada bayi baru lahir sampai dengan anak usia
                balita dan akan berlanjut di usia sekolah nantinya.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Puskesmas mengikuti jadwal imunisasi yang telah ditetapkan oleh
                Kementerian Kesehatan sesuai dengan jadwal yang terdapat pada
                Buku KIA/Buku Pink.
              </p>
            </div>

            {/* Imunisasi Dasar Lengkap */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                Imunisasi Dasar Lengkap
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                Adapun layanan imunisasi yang dapat diberikan di puskesmas
                adalah imunisasi dasar lengkap yaitu:
              </p>

              {/* Timeline Container */}
              <div className="relative max-w-6xl mx-auto">
                {/* Vertical Line - Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-purple-500 to-purple-300 hidden md:block"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {imunisasiDasar.map((vaksin, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={index}
                        className={`relative flex items-center gap-8 ${
                          isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } flex-col`}
                      >
                        {/* Card Content - Left or Right */}
                        <div className="flex-1 md:w-5/12">
                          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Top Section - Single Color */}
                            <div className="bg-purple-500 p-6 relative">
                              {/* Number Badge */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                                <span className="font-bold text-purple-600">
                                  {index + 1}
                                </span>
                              </div>

                              {/* Title */}
                              <h4 className="text-2xl font-bold text-white mb-2">
                                {vaksin.nama}
                              </h4>
                              <p className="text-white/90 text-sm mb-3">
                                {vaksin.namaLengkap}
                              </p>
                              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2">
                                <FaCalendarAlt className="text-white text-sm" />
                                <p className="text-white font-semibold text-sm">
                                  {vaksin.waktu}
                                </p>
                              </div>
                            </div>

                            {/* Bottom Section - Content */}
                            <div className="p-6 space-y-4">
                              {/* Tujuan */}
                              <div>
                                <h5 className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
                                  Tujuan:
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
                                  {vaksin.tujuan}
                                </p>
                              </div>

                              {/* Deskripsi */}
                              <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {vaksin.deskripsi}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline Dot - Center */}
                        <div className="relative z-10 shrink-0 hidden md:block">
                          <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-900">
                            <vaksin.icon className="text-white text-2xl" />
                          </div>
                        </div>

                        {/* Empty Space for opposite side */}
                        <div className="flex-1 md:w-5/12 hidden md:block"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Keuntungan Layanan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                Keuntungan Layanan Imunisasi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center bg-purple-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaGift className="text-white text-3xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Gratis
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Layanan imunisasi tersebut dapat diperoleh masyarakat luas
                    secara gratis di Puskesmas
                  </p>
                </div>

                <div className="flex flex-col items-center text-center bg-purple-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaShieldAlt className="text-white text-3xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Perlindungan Optimal
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Melindungi anak dari berbagai penyakit berbahaya sejak dini
                  </p>
                </div>

                <div className="flex flex-col items-center text-center bg-purple-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-white text-3xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Sesuai Standar Nasional
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Mengikuti jadwal imunisasi Kementerian Kesehatan sesuai Buku
                    KIA/Pink
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaSyringe className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    UPTD Puskesmas Garuda berkomitmen untuk menyediakan layanan
                    imunisasi dasar lengkap yang berkualitas dan gratis bagi
                    seluruh masyarakat. Dengan mengikuti jadwal imunisasi yang
                    tepat, kita dapat melindungi anak-anak dari berbagai
                    penyakit berbahaya dan memberikan mereka masa depan yang
                    lebih sehat. Pastikan anak Anda mendapatkan imunisasi
                    lengkap sesuai jadwal di Buku KIA/Buku Pink.
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
