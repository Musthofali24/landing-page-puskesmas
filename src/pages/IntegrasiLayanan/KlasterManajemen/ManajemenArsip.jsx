import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaFileArchive,
  FaCheckCircle,
  FaFolderOpen,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

export const ManajemenArsip = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Arsip" },
  ];

  const tujuanList = [
    "Menjamin ketersediaan data dan dokumen yang diperlukan dalam pelayanan, evaluasi, dan pelaporan ILP.",
    "Mendukung pengambilan keputusan berbasis data.",
    "Menjaga keamanan, kerahasiaan, dan keaslian informasi kesehatan masyarakat.",
    "Meningkatkan efisiensi operasional, menghindari duplikasi dokumen dan pelayanan.",
    "Mendukung akuntabilitas dan transparansi, khususnya dalam audit internal maupun eksternal.",
  ];

  const jenisArsip = [
    {
      title: "Arsip Medis",
      icon: FaFolderOpen,
      color: "bg-blue-500",
    },
    {
      title: "Arsip Program Kesehatan",
      icon: FaDatabase,
      color: "bg-green-500",
    },
    {
      title: "Arsip Administrasi dan Kepegawaian",
      icon: FaFileArchive,
      color: "bg-purple-500",
    },
    {
      title: "Arsip Keuangan dan Logistik",
      icon: FaLock,
      color: "bg-orange-500",
    },
  ];

  const sistemProsedur = [
    "Klasifikasi Arsip",
    "Penyimpanan Arsip",
    "Akses dan Keamanan",
    "Pemeliharaan Arsip",
    "Retensi dan Pemusnahan",
  ];

  const digitalisasi = [
    "Implementasi e-rekam medis untuk seluruh pasien yang datang, mencakup anamnesis, diagnosis, dan tindak lanjut.",
    "Integrasi dengan sistem informasi nasional seperti SATUSEHAT.",
  ];

  const peranManajemen = [
    "Menjamin transparansi pelayanan kesehatan lintas siklus hidup.",
    "Memberikan dukungan data untuk program promotif, preventif, kuratif, dan rehabilitatif.",
    "Menjadi sumber utama dalam evaluasi kinerja program dan capaian indikator ILP.",
    "Mendukung koordinasi antar unit melalui dokumen yang seragam dan terpusat.",
    "Memenuhi aspek legal dan audit eksternal dari Dinas Kesehatan atau BPKP.",
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
              Manajemen Arsip
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaFileArchive className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Arsip dalam ILP di UPTD Puskesmas Garuda
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Manajemen arsip adalah bagian dari manajemen inti dalam ILP yang
                berfungsi untuk mengelola seluruh dokumen dan informasi, baik
                dalam bentuk fisik maupun digital, yang berkaitan dengan
                penyelenggaraan pelayanan kesehatan di Puskesmas. Dalam konteks
                ILP, manajemen arsip memiliki peran strategis untuk mendukung
                keterpaduan layanan berbasis siklus hidup dan keluarga, karena
                semua proses layanan membutuhkan rekam jejak dokumentasi yang
                akurat, mudah diakses, dan aman.
              </p>
            </div>

            {/* Tujuan Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Tujuan Manajemen Arsip ILP
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

            {/* Jenis Arsip Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Jenis Arsip yang Dikelola
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Manajemen arsip dalam ILP di UPTD Puskesmas Garuda mencakup
                berbagai jenis dokumen, antara lain:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jenisArsip.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                    >
                      <div
                        className={`${item.color} p-4 rounded-full text-white`}
                      >
                        <IconComponent className="text-2xl" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sistem dan Prosedur Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Sistem dan Prosedur Pengelolaan Arsip
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sistemProsedur.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-teal-500 to-cyan-500 text-white rounded-xl p-6 text-center font-semibold shadow-md hover:shadow-xl transition-shadow"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Digitalisasi Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Digitalisasi Arsip di UPTD Puskesmas Garuda
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Sebagai Puskesmas yang aktif menerapkan ILP, Garuda telah
                melaksanakan digitalisasi arsip melalui langkah-langkah berikut:
              </p>
              <div className="space-y-4">
                {digitalisasi.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 py-2"
                  >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {index + 1}. {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Peran Manajemen Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Peran Manajemen Arsip dalam Mendukung ILP
              </h3>
              <ul className="space-y-4">
                {peranManajemen.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-xl shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-xl p-8 text-white">
              <p className="text-lg leading-relaxed text-justify">
                Manajemen arsip di UPTD Puskesmas Garuda bukan hanya sekadar
                pengumpulan dokumen, tetapi merupakan bagian integral dari
                pengelolaan mutu, pelayanan publik yang akuntabel, dan fondasi
                utama dalam mendukung ILP yang holistik, berkesinambungan, dan
                berbasis keluarga. Dengan pendekatan digital, sistematis, dan
                berorientasi pelayanan, UPTD Puskesmas Garuda menunjukkan bahwa
                arsip bisa menjadi sumber kekuatan dalam perencanaan,
                pengendalian, dan pengambilan keputusan kesehatan primer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
