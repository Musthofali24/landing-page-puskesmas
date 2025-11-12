import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaNetworkWired,
  FaCheckCircle,
  FaHandshake,
  FaClipboardList,
  FaUsers,
  FaHospital,
  FaHome,
} from "react-icons/fa";

export const ManajemenJejaring = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Jejaring" },
  ];

  const komponenJejaring = [
    {
      kategori: "Jaringan Pelayanan Kesehatan",
      subtitle: "(Fasilitas Internal)",
      items: [
        "Puskesmas Pembantu (Pustu)",
        "Fasilitas Pelayanan Kesehatan Lain (misalnya, Pos Kesehatan Desa/Kelurahan – Poskesdes)",
      ],
      icon: FaHospital,
      color: "bg-blue-500",
      iconColor: "text-blue-500",
    },
    {
      kategori: "Jejaring Pelayanan Kesehatan",
      subtitle: "(Mitra Eksternal)",
      items: [
        "Fasilitas Kesehatan Tingkat Pertama (FKTP) lain, seperti Klinik Pratama, Dokter/Dokter Gigi Praktik Mandiri, dan Apotek",
        "Upaya Kesehatan Bersumber Daya Masyarakat (UKBM), seperti: Posyandu (Pos Pelayanan Terpadu), Posbindu (Pos Pembinaan Terpadu), Posyandu Remaja, Posyandu Lansia",
      ],
      icon: FaUsers,
      color: "bg-green-500",
      iconColor: "text-green-500",
    },
  ];

  const tahapManajemen = [
    {
      tahap: "P1 (Perencanaan)",
      kegiatan: [
        {
          title: "Pemetaan",
          description:
            "Mengidentifikasi dan memetakan semua jejaring yang ada di wilayah kerja (termasuk potensi UKBM baru).",
        },
        {
          title: "Penyusunan Rencana",
          description:
            "Merumuskan kebutuhan sumber daya dan rencana pembinaan untuk jejaring (misalnya, pelatihan kader, penyediaan obat/logistik di Pustu).",
        },
      ],
      color: "bg-purple-500",
    },
    {
      tahap: "P2 (Penggerakan Pelaksanaan)",
      kegiatan: [
        {
          title: "Pembinaan Teknis",
          description:
            "Melakukan kunjungan rutin ke Pustu, Posyandu, dan FKTP lain untuk memastikan pelayanan berjalan sesuai standar.",
        },
        {
          title: "Koordinasi",
          description:
            "Mengundang perwakilan jejaring (termasuk Lintas Sektor) dalam Lokakarya Mini (Lokmin) untuk membahas capaian dan masalah kesehatan.",
        },
      ],
      color: "bg-indigo-500",
    },
    {
      tahap: "P3 (Pengawasan, Pengendalian, dan Penilaian)",
      kegiatan: [
        {
          title: "Monitoring Kinerja",
          description:
            "Memantau cakupan program, morbiditas, dan hasil pelayanan di setiap jejaring melalui Dashboard PWS (Pemantauan Wilayah Setempat) berbasis digital.",
        },
        {
          title: "Evaluasi dan Tindak Lanjut",
          description:
            "Menganalisis hasil PWS dan memberikan umpan balik serta notifikasi tindak lanjut kepada jejaring (misalnya, Posyandu perlu melakukan sweeping imunisasi di desa tertentu).",
        },
      ],
      color: "bg-teal-500",
    },
  ];

  const aspekPenting = [
    {
      title: "Pembinaan SDM dan Logistik",
      description:
        "Puskesmas bertanggung jawab memastikan Pustu dan Posyandu memiliki Sumber Daya Manusia (SDM) yang kompeten (termasuk kader) dan pasokan sarana, prasarana, serta obat-obatan yang memadai.",
      icon: FaUsers,
      color: "bg-blue-500",
    },
    {
      title: "Kerja Sama (PKS)",
      description:
        "Membangun komitmen dan kerja sama formal, sering kali melalui Perjanjian Kerja Sama (PKS) atau Nota Kesepahaman (MoU) dengan FKTP lain di wilayah kerjanya.",
      icon: FaHandshake,
      color: "bg-green-500",
    },
    {
      title: "Integrasi Pelayanan",
      description:
        "Memastikan jejaring memberikan pelayanan terintegrasi berdasarkan siklus hidup (Klaster 2, 3, 4), tidak hanya berbasis program tertentu.",
      icon: FaClipboardList,
      color: "bg-purple-500",
    },
    {
      title: "Pencatatan Digital",
      description:
        "Mendorong semua jejaring (terutama kader di Posyandu) menggunakan aplikasi digital (seperti ASIK) untuk pencatatan kegiatan di lapangan, sehingga datanya langsung terintegrasi ke SIKDA dan Dinas Kesehatan.",
      icon: FaHospital,
      color: "bg-orange-500",
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
              <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>
              <p className="font-semibold text-lg text-emerald-600 dark:text-emerald-400">
                Klaster Manajemen
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Manajemen Jejaring
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaNetworkWired className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Jejaring di UPTD Puskesmas Garuda
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Salah satu komponen kunci dalam Klaster 1 (Manajemen) di era
                  Integrasi Layanan Primer (ILP)
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Tujuan utamanya adalah memperluas jangkauan dan meningkatkan
                kualitas pelayanan kesehatan primer bagi seluruh masyarakat di
                wilayah kerja UPTD Puskesmas Garuda, dengan memastikan semua
                fasilitas dan unit pelayanan di bawah koordinasi UPTD Puskesmas
                Garuda bekerja secara terintegrasi.
              </p>
            </div>

            {/* Definisi Jejaring Puskesmas */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full"></div>
                1. Definisi Jejaring Puskesmas
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Manajemen Jejaring UPTD Puskesmas Garuda adalah kesatuan
                fasilitas dan unit pelayanan di luar UPTD Puskesmas Garuda yang
                secara teknis dan administratif berada di bawah pembinaan dan
                koordinasi UPTD Puskesmas Garuda. Jejaring ini berfungsi untuk
                mendekatkan akses layanan kesehatan kepada masyarakat.
              </p>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Komponen Jejaring UPTD Puskesmas Garuda
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {komponenJejaring.map((komponen, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${komponen.color} p-6`}>
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <komponen.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h5 className="text-xl font-bold text-white text-center mb-1">
                        {komponen.kategori}
                      </h5>
                      <p className="text-white/90 text-sm text-center">
                        {komponen.subtitle}
                      </p>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6">
                      <ul className="space-y-3">
                        {komponen.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <FaCheckCircle
                              className={`${komponen.iconColor} text-lg shrink-0 mt-0.5`}
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peran Manajemen Jejaring dalam ILP */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full"></div>
                2. Peran Manajemen Jejaring dalam ILP
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Di bawah Klaster 1 (Manajemen), tim Puskesmas bertanggung jawab
                untuk mengelola jejaring melalui siklus manajemen P1-P2-P3
                (Perencanaan, Penggerakan Pelaksanaan, Pengawasan, Pengendalian,
                dan Penilaian):
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {tahapManajemen.map((tahap, index) => (
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
                        <FaClipboardList className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
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
                              tahap.color === "bg-purple-500"
                                ? "#a855f7"
                                : tahap.color === "bg-indigo-500"
                                ? "#6366f1"
                                : "#14b8a6",
                          }}
                        >
                          <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                            {kegiatan.title}:
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {kegiatan.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspek Penting dalam Manajemen Jejaring */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full"></div>
                3. Aspek Penting dalam Manajemen Jejaring
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aspekPenting.map((aspek, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section - Gradient */}
                    <div className={`${aspek.color} p-6 relative`}>
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <aspek.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {aspek.title}
                      </h4>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {aspek.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaNetworkWired className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Melalui Manajemen Jejaring yang efektif, UPTD Puskesmas
                    Garuda dapat memperluas akses layanan kesehatan primer
                    hingga ke tingkat desa/kelurahan. Dengan integrasi yang kuat
                    antara Puskesmas Induk, Pustu, Poskesdes, FKTP lain, dan
                    UKBM (Posyandu), seluruh masyarakat dapat menikmati
                    pelayanan kesehatan yang komprehensif, terintegrasi, dan
                    berbasis siklus hidup sesuai semangat ILP.
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
