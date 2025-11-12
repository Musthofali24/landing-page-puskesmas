import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaUsers,
  FaCheckCircle,
  FaBullhorn,
  FaSchool,
  FaHandHoldingHeart,
  FaLightbulb,
  FaMapMarkedAlt,
} from "react-icons/fa";

export const Garasi = () => {
  useTitle("GARASI");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Inovasi Kami", href: "#" },
    { label: "GARASI" },
  ];

  const tujuanUtama = [
    {
      judul: "Peningkatan Kesadaran",
      deskripsi:
        "Meningkatkan pengetahuan dan kesadaran remaja tentang pentingnya Perilaku Hidup Bersih dan Sehat (PHBS).",
    },
    {
      judul: "Pencegahan Masalah Remaja",
      deskripsi:
        "Mencegah masalah kesehatan yang rentan terjadi pada remaja, seperti anemia, kekurangan gizi, penyalahgunaan zat, dan masalah kesehatan reproduksi.",
    },
    {
      judul: "Pemberdayaan",
      deskripsi:
        "Mendorong partisipasi aktif remaja dalam upaya kesehatan di lingkungan mereka (misalnya melalui kader kesehatan remaja).",
    },
  ];

  const bentukKegiatan = [
    {
      kategori: "Penyuluhan dan Konsultasi Remaja",
      aktivitas: [
        "Memberikan layanan konsultasi kesehatan reproduksi, gizi, hingga kesehatan mental yang diwadahi dalam bentuk Poli Remaja di dalam puskesmas.",
        "Melakukan penyuluhan ke sekolah-sekolah atau komunitas remaja mengenai bahaya rokok, narkoba, dan pentingnya gizi seimbang.",
      ],
      icon: FaBullhorn,
    },
    {
      kategori: "Aksi di Sekolah (School-Based Intervention)",
      aktivitas: [
        "Kerja sama dengan sekolah untuk menjalankan program Usaha Kesehatan Sekolah (UKS) dan melatih Kader Kesehatan Remaja (KKR).",
        "Kegiatan seperti Kick-Off Program Kesehatan Sekolah (PKG) yang mengintegrasikan program kesehatan anak dan remaja ke lingkungan sekolah.",
      ],
      icon: FaSchool,
    },
    {
      kategori: "Pemberdayaan Remaja",
      aktivitas: [
        "Mengadakan lomba atau kegiatan kreatif seperti lomba poster edukasi yang melibatkan siswa untuk menjadi agen kampanye kesehatan.",
        "Melakukan skrining kesehatan rutin pada remaja untuk mendeteksi dini masalah kesehatan seperti anemia (dengan pemberian Tablet Tambah Darah/TTD).",
      ],
      icon: FaHandHoldingHeart,
    },
  ];

  const keunikanInovasi = [
    {
      judul: "Pendekatan Outreach",
      deskripsi:
        "Petugas puskesmas secara aktif mendatangi lokasi berkumpulnya remaja (sekolah, karang taruna, atau pusat kegiatan lain) untuk memberikan edukasi dan pelayanan.",
      icon: FaMapMarkedAlt,
    },
    {
      judul: "Fokus pada Promosi Kesehatan",
      deskripsi:
        "Program ini berfokus pada promosi kesehatan agar remaja dapat membuat pilihan gaya hidup yang sehat sejak dini, sejalan dengan visi Puskesmas sebagai fasilitas kesehatan tingkat pertama yang mengutamakan pencegahan.",
      icon: FaLightbulb,
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
                Inovasi Kami
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              GARASI
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaUsers className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  GARASI - Gerakan Anak dan Remaja Andir Siaga Inovasi
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Inovasi layanan unggulan yang menargetkan segmen usia remaja
                  dengan fokus pada kegiatan promotif dan preventif di luar
                  gedung puskesmas
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Program GARASI adalah salah satu inovasi layanan unggulan dari
                UPT Puskesmas Garuda, Kota Bandung, yang secara khusus
                menargetkan segmen usia remaja dan kelompok muda.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Program ini berfokus pada kegiatan promotif (peningkatan
                kesehatan) dan preventif (pencegahan penyakit) yang dilakukan di
                luar gedung puskesmas, dengan sasaran remaja yang berada di
                wilayah kerja Kecamatan Andir. Tujuan utamanya adalah untuk
                menciptakan generasi muda yang sehat, sadar kesehatan, dan
                memiliki pengetahuan yang memadai tentang isu-isu kesehatan
                remaja.
              </p>
            </div>

            {/* Tujuan Utama Program GARASI */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                1. Tujuan Utama Program GARASI
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tujuanUtama.map((tujuan, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-teal-500 p-6 relative">
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-teal-600">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <FaCheckCircle className="text-white text-3xl" />
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

            {/* Bentuk-Bentuk Kegiatan Utama */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                2. Bentuk-Bentuk Kegiatan Utama
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                GARASI dilaksanakan melalui berbagai kegiatan yang sifatnya
                inovatif dan adaptif terhadap kebutuhan remaja:
              </p>

              <div className="space-y-6">
                {bentukKegiatan.map((kegiatan, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-teal-500 p-6 relative">
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-teal-600">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <kegiatan.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-white text-center">
                        {kegiatan.kategori}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <ul className="space-y-3">
                        {kegiatan.aktivitas.map((aktivitas, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <FaCheckCircle className="text-teal-500 text-lg shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{aktivitas}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keunikan Inovasi */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                3. Keunikan Inovasi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                GARASI merupakan inovasi yang bersifat proaktif dan menjemput
                bola, yang berbeda dari pelayanan kuratif (pengobatan) di
                puskesmas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keunikanInovasi.map((keunikan, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-teal-500 p-6">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <keunikan.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {keunikan.judul}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {keunikan.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Bersama program inovasi lain seperti PANDA (Pelayanan Ramah
                    Anak Garuda) dan SAGARA (Sahabat Keluarga Garuda), GARASI
                    menegaskan peran UPT Puskesmas Garuda sebagai fasilitas
                    kesehatan yang proaktif dalam melayani seluruh lapisan usia
                    masyarakat di wilayah kerjanya. Program ini menjadi bukti
                    nyata komitmen Puskesmas Garuda dalam mencegah masalah
                    kesehatan sejak dini melalui pemberdayaan generasi muda.
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
