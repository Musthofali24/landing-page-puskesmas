import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaUserGraduate,
  FaHeartbeat,
  FaBookMedical,
  FaComments,
  FaCheckCircle,
  FaStethoscope,
  FaEye,
  FaTooth,
  FaRunning,
  FaBrain,
  FaVenusMars,
} from "react-icons/fa";

export const AnakUsiaSekolahdanRemaja = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Pelayanan KIA",
      href: "/integrasi-layanan/klaster-pelayanan-kia",
    },
    { label: "Anak Usia Sekolah dan Remaja" },
  ];

  const pemeriksaanKesehatan = [
    {
      nama: "Pemeriksaan Fisik Umum",
      deskripsi:
        "Meliputi pengukuran tinggi badan, berat badan (untuk menilai status gizi dan pertumbuhan), tekanan darah, dan pemeriksaan umum lainnya.",
      icon: FaStethoscope,
    },
    {
      nama: "Pemeriksaan Indra",
      deskripsi:
        "Kesehatan mata (visus) dan telinga (pendengaran) untuk mendeteksi gangguan sensorik.",
      icon: FaEye,
    },
    {
      nama: "Kesehatan Gigi dan Mulut",
      deskripsi:
        "Pemeriksaan kondisi gigi dan mulut untuk mencegah masalah kesehatan gigi sejak dini.",
      icon: FaTooth,
    },
    {
      nama: "Skrining Perilaku",
      deskripsi:
        "Meliputi kebiasaan seperti merokok, aktivitas fisik, dan konsumsi buah serta sayur.",
      icon: FaRunning,
    },
    {
      nama: "Penilaian Kesehatan Mental",
      deskripsi:
        "Deteksi masalah kesehatan mental seperti kecemasan, depresi, atau gangguan perilaku.",
      icon: FaBrain,
    },
    {
      nama: "Kesehatan Reproduksi Remaja",
      deskripsi:
        "Pemberian informasi dan konseling kesehatan reproduksi (seringkali pada usia remaja).",
      icon: FaVenusMars,
    },
  ];

  const pembinaanUKS = [
    {
      judul: "Edukasi dan Penyuluhan",
      deskripsi:
        "Memberikan informasi mengenai Perilaku Hidup Bersih dan Sehat (PHBS), gizi seimbang, pentingnya aktivitas fisik, pencegahan penyakit menular dan tidak menular, kesehatan reproduksi, serta kesehatan mental.",
    },
    {
      judul: "Pemberian Suplemen",
      deskripsi:
        "Pemberian Tablet Tambah Darah (TTD) untuk remaja putri sebagai upaya pencegahan anemia dan stunting pada calon ibu.",
    },
    {
      judul: "Bulan Imunisasi Anak Sekolah (BIAS)",
      deskripsi:
        "Pelaksanaan imunisasi rutin bagi siswa di tingkat SD untuk melindungi dari penyakit berbahaya.",
    },
  ];

  const layananKonseling = [
    "Kesehatan reproduksi",
    "Masalah gizi",
    "Kesehatan mental dan psikososial",
    "Pencegahan penyalahgunaan narkoba, psikotropika, dan zat adiktif lainnya (NAPZA)",
  ];

  const tujuanProgram = [
    {
      judul: "Mendeteksi Dini",
      deskripsi:
        "Mendeteksi masalah kesehatan sehingga dapat ditindaklanjuti lebih awal.",
      icon: FaHeartbeat,
    },
    {
      judul: "Meningkatkan Pengetahuan",
      deskripsi:
        "Meningkatkan pengetahuan dan kesadaran siswa/remaja tentang kesehatan.",
      icon: FaBookMedical,
    },
    {
      judul: "Membangun Fondasi Kesehatan",
      deskripsi:
        "Membangun fondasi kesehatan yang kuat agar siswa dapat belajar dan berkembang secara optimal.",
      icon: FaUserGraduate,
    },
    {
      judul: "Mempersiapkan Generasi Muda",
      deskripsi: "Mempersiapkan generasi muda yang sehat dan produktif.",
      icon: FaCheckCircle,
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
                Klaster Pelayanan KIA
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Anak Usia Sekolah dan Remaja
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaUserGraduate className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Program Anak Usia Sekolah dan Remaja (Ausrem)
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Upaya kesehatan masyarakat yang berfokus pada peningkatan dan
                  pemeliharaan kesehatan siswa di sekolah dan remaja di
                  komunitas
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Program Anak Usia Sekolah dan Remaja (Ausrem) di Unit Pelaksana
                Teknis Daerah (UPTD) Puskesmas merupakan salah satu upaya
                kesehatan masyarakat yang berfokus pada peningkatan dan
                pemeliharaan kesehatan siswa di sekolah dan remaja di komunitas.
                Kegiatan ini biasanya dilaksanakan bekerjasama dengan pihak
                sekolah (SD, SMP, SMA/SMK) dan juga di komunitas seperti pondok
                pesantren.
              </p>
            </div>

            {/* Skrining dan Pemeriksaan Kesehatan Berkala */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                1. Skrining dan Pemeriksaan Kesehatan Berkala
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                Kegiatan rutin yang dilakukan di sekolah untuk mendeteksi dini
                masalah kesehatan pada anak usia sekolah dan remaja. Pemeriksaan
                umumnya meliputi:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pemeriksaanKesehatan.map((item, index) => (
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
                        <item.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {item.nama}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pembinaan Kesehatan Sekolah (UKS) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                2. Pembinaan Kesehatan Sekolah (UKS)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Puskesmas berperan aktif dalam membina Unit Kesehatan Sekolah
                (UKS) bersama guru dan pihak sekolah. Ini termasuk:
              </p>

              <div className="space-y-4">
                {pembinaanUKS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-blue-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.judul}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pelayanan Konseling Remaja */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                3. Pelayanan Konseling Remaja
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Beberapa Puskesmas memiliki Pelayanan Kesehatan Peduli Remaja
                (PKPR) yang menyediakan layanan konseling dan informasi yang
                ramah remaja mengenai berbagai isu, termasuk:
              </p>

              <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaComments className="text-blue-500 text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Topik Konseling PKPR
                  </h4>
                </div>
                <ul className="space-y-3">
                  {layananKonseling.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheckCircle className="text-blue-500 text-lg shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tujuan Program */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                Tujuan Program
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                Tujuan utama dari Program Ausrem Puskesmas adalah:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tujuanProgram.map((tujuan, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-blue-500 p-6">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <tujuan.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {tujuan.judul}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {tujuan.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaUserGraduate className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Melalui Program Anak Usia Sekolah dan Remaja (Ausrem), UPTD
                    Puskesmas Garuda berkomitmen untuk membangun generasi muda
                    yang sehat, cerdas, dan produktif. Dengan deteksi dini
                    masalah kesehatan, edukasi berkelanjutan, dan layanan
                    konseling yang ramah remaja, kami memastikan setiap anak dan
                    remaja mendapatkan fondasi kesehatan yang kuat untuk masa
                    depan mereka.
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
