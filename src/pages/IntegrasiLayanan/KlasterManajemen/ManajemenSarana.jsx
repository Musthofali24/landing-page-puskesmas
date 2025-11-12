import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaTools,
  FaBuilding,
  FaPills,
  FaCheckCircle,
  FaClipboardList,
} from "react-icons/fa";

export const ManajemenSarana = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Sarana, Prasarana dan Perbekalan Kesehatan" },
  ];

  const komponenUtama = [
    {
      title: "Sarana Kesehatan",
      description:
        "Segala sesuatu yang dipakai sebagai alat langsung untuk mencapai tujuan pelayanan.",
      contoh:
        "Alat-alat medis (tensimeter, USG, stetoskop), mebel, kendaraan operasional, komputer.",
      icon: FaTools,
      color: "bg-blue-500",
    },
    {
      title: "Prasarana Kesehatan",
      description:
        "Segala sesuatu yang merupakan penunjang utama terselenggaranya suatu proses pelayanan.",
      contoh:
        "Bangunan gedung (fisik), instalasi listrik, instalasi air bersih/sanitasi, sistem ventilasi, dan sistem komunikasi.",
      icon: FaBuilding,
      color: "bg-orange-500",
    },
    {
      title: "Perbekalan Kesehatan",
      description:
        "Segala bahan dan produk yang habis dipakai atau memiliki masa kedaluwarsa, yang digunakan dalam memberikan pelayanan.",
      contoh:
        "Sediaan farmasi (obat-obatan), alat kesehatan habis pakai (jarum suntik, benang operasi, perban), dan Reagen Laboratorium.",
      icon: FaPills,
      color: "bg-green-500",
    },
  ];

  const siklusManajemen = [
    {
      tahap: "Perencanaan",
      deskripsi:
        "Menentukan jenis, kuantitas, dan spesifikasi sarana, prasarana, dan perbekalan yang dibutuhkan berdasarkan kebutuhan pelayanan dan anggaran.",
      fokus:
        "Memastikan tidak ada kelebihan (pemborosan) atau kekurangan (gangguan layanan).",
    },
    {
      tahap: "Pengadaan",
      deskripsi:
        "Proses pembelian, sewa, atau pembuatan aset dan material sesuai dengan perencanaan dan peraturan yang berlaku.",
      fokus:
        "Mencari harga terbaik dan memastikan kualitas serta spesifikasi terpenuhi.",
    },
    {
      tahap: "Penerimaan & Penyimpanan",
      deskripsi:
        "Menerima dan memeriksa barang yang datang serta menyimpannya dengan cara yang benar (sesuai standar suhu, kelembaban, keamanan, dan prinsip FEFO/FIFO).",
      fokus: "Menjaga mutu, menghindari kerusakan, dan mencegah kehilangan.",
    },
    {
      tahap: "Pendistribusian",
      deskripsi:
        "Menyalurkan sarana, prasarana, dan perbekalan dari gudang/penyimpanan ke unit-unit pelayanan yang membutuhkan.",
      fokus: "Tepat jumlah, tepat waktu, dan tepat sasaran.",
    },
    {
      tahap: "Pemeliharaan",
      deskripsi:
        "Semua kegiatan perawatan rutin, pencegahan kerusakan (preventive maintenance), dan perbaikan (corrective maintenance), termasuk kalibrasi alat medis.",
      fokus:
        "Mempertahankan kondisi aset agar laik pakai, aman, dan berumur panjang.",
    },
    {
      tahap: "Penghapusan",
      deskripsi:
        "Proses mengeluarkan aset yang sudah rusak berat, usang, atau tidak ekonomis lagi dari daftar inventaris (aset).",
      fokus:
        "Menghindari biaya pemeliharaan yang tidak perlu dan menyediakan ruang.",
    },
  ];

  const tujuanList = [
    {
      title: "Mendukung Mutu Pelayanan",
      description:
        "Memastikan semua alat, obat, dan fasilitas tersedia, berfungsi dengan baik, dan aman, sehingga pelayanan kesehatan yang diberikan berkualitas tinggi.",
    },
    {
      title: "Efisiensi Biaya",
      description:
        "Mengelola aset dan perbekalan secara efektif untuk mencegah pemborosan, kerusakan, atau pembelian yang berlebihan.",
    },
    {
      title: "Keamanan dan Keselamatan",
      description:
        "Menjamin lingkungan kerja yang aman bagi staf dan pasien, terutama melalui pemeliharaan rutin prasarana (instalasi listrik, bangunan) dan kalibrasi alat kesehatan.",
    },
    {
      title: "Akuntabilitas",
      description:
        "Menyediakan data inventaris dan penggunaan yang akurat sebagai dasar pertanggungjawaban dan pengambilan keputusan di masa depan.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Manajemen Sarana, Prasarana dan Perbekalan Kesehatan
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaTools className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Sarana, Prasarana dan Perbekalan Kesehatan di UPTD
                  Puskesmas Garuda
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Manajemen Sarana, Prasarana, dan Perbekalan Kesehatan adalah
                serangkaian kegiatan terpadu yang bertujuan untuk merencanakan,
                mengadakan, mendistribusikan, memelihara, dan menghapus semua
                aset fisik dan material yang dibutuhkan agar pelayanan kesehatan
                dapat berjalan secara optimal, aman, dan bermutu.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-semibold">
                Ini merupakan fungsi logistik yang sangat penting di UPTD
                Puskesmas Garuda
              </p>
            </div>

            {/* Komponen Utama */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                1. Komponen Utama
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Tiga komponen utama yang dikelola dalam manajemen ini adalah:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {komponenUtama.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {/* Top Section - Gradient dengan Icon dan Title */}
                      <div className={`${item.color} p-6 relative`}>
                        {/* Number Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center">
                          <span className="font-bold text-sm">{index + 1}</span>
                        </div>

                        {/* Icon */}
                        <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <IconComponent className="text-white text-3xl" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-white text-center">
                          {item.title}
                        </h4>
                      </div>

                      {/* Bottom Section - Content */}
                      <div className="p-6">
                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Contoh Box */}
                        <div
                          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border-l-4"
                          style={{
                            borderLeftColor:
                              item.color.replace("bg-", "#") === "blue-500"
                                ? "#3b82f6"
                                : item.color.replace("bg-", "#") ===
                                  "orange-500"
                                ? "#f97316"
                                : "#22c55e",
                          }}
                        >
                          <span
                            className={`${item.color} text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2`}
                          >
                            Contoh
                          </span>
                          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.contoh}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Fungsi dan Siklus Manajemen */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                2. Fungsi dan Siklus Manajemen
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Manajemen Sarana, Prasarana, dan Perbekalan Kesehatan melibatkan
                siklus kegiatan yang berkelanjutan untuk memastikan ketersediaan
                dan fungsionalitas:
              </p>

              <div className="space-y-4">
                {siklusManajemen.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.tahap}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-2">
                          {item.deskripsi}
                        </p>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 border-orange-500">
                          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Fokus Utama:
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {item.fokus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tujuan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                3. Tujuan Manajemen Sarana, Prasarana, dan Perbekalan Kesehatan
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Tujuan utama dari manajemen ini adalah untuk:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tujuanList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <FaCheckCircle className="text-orange-500 text-2xl shrink-0 mt-1" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-9">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaClipboardList className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Dengan pengelolaan yang sistematis dan profesional,
                    manajemen sarana, prasarana, dan perbekalan kesehatan di
                    UPTD Puskesmas Garuda memastikan bahwa setiap layanan
                    kesehatan dapat berjalan optimal dengan dukungan fasilitas
                    dan material yang memadai, aman, dan berkualitas tinggi.
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
