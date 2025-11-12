import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaCoins,
  FaWarehouse,
} from "react-icons/fa";

export const ManajemenKeuangan = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Keuangan dan Aset BMD" },
  ];

  const sumberPendapatan = [
    {
      title: "Anggaran Pendapatan dan Belanja Daerah (APBD)",
      description: "Dana rutin untuk operasional dan belanja modal.",
      icon: FaCoins,
      color: "bg-green-500",
    },
    {
      title: "Dana Kapitasi Jaminan Kesehatan Nasional (JKN)",
      description:
        "Dana yang diterima berdasarkan jumlah peserta JKN di wilayah kerja Puskesmas. Penggunaan dana ini diatur khusus oleh Peraturan Menteri Keuangan.",
      icon: FaMoneyBillWave,
      color: "bg-blue-500",
    },
    {
      title: "Dana Alokasi Khusus (DAK) Non-Fisik Bidang Kesehatan",
      description:
        "Dana yang penggunaannya sudah ditetapkan untuk program prioritas kesehatan nasional/daerah.",
      icon: FaWarehouse,
      color: "bg-purple-500",
    },
    {
      title: "Pendapatan Asli Daerah (PAD)",
      description:
        "Penerimaan dari retribusi pelayanan langsung kepada masyarakat.",
      icon: FaCoins,
      color: "bg-orange-500",
    },
  ];

  const prosesPengelolaan = [
    {
      title: "Perencanaan dan Penganggaran",
      description:
        "Penyusunan Rencana Kerja dan Anggaran (RKA) Puskesmas yang terintegrasi dengan Rencana Strategis (Renstra) Dinas Kesehatan.",
    },
    {
      title: "Penatausahaan",
      description:
        "Proses penerimaan dan pengeluaran kas, serta pembukuan oleh Bendahara Penerimaan dan Bendahara Pengeluaran.",
    },
    {
      title: "Pertanggungjawaban dan Pelaporan",
      description:
        "Penyusunan laporan keuangan (Bulanan, Triwulanan, Tahunan) dan Surat Pertanggungjawaban (SPJ) yang disampaikan kepada Dinas Kesehatan dan Badan Pengelola Keuangan Daerah.",
    },
  ];

  const siklusBMD = [
    {
      title: "Perencanaan Kebutuhan dan Penganggaran",
      description:
        "Merencanakan kebutuhan barang/aset (seperti alat kesehatan, bangunan, kendaraan) yang akan diajukan dalam RKA/RBA.",
    },
    {
      title: "Pengadaan",
      description:
        "Melaksanakan proses pengadaan barang dan jasa sesuai ketentuan (termasuk Pengadaan Barang/Jasa Pemerintah).",
    },
    {
      title: "Penerimaan dan Pencatatan",
      description:
        "Melakukan serah terima dan mencatat aset ke dalam Kartu Inventaris Barang (KIB) dan Buku Inventaris (BI).",
    },
    {
      title: "Penggunaan dan Pemanfaatan",
      description:
        "Memastikan BMD digunakan sesuai fungsi pelayanan Puskesmas dan dilakukan pemeliharaan.",
    },
    {
      title: "Pengamanan dan Pemeliharaan",
      description:
        "Bertanggung jawab atas keamanan fisik dan pemeliharaan rutin aset (misalnya, nilai kapitalisasi aset tetap).",
    },
    {
      title: "Penghapusan",
      description:
        "Mengajukan usulan penghapusan BMD yang sudah tidak layak pakai atau hilang sesuai prosedur dan persetujuan Kepala Daerah.",
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
              Manajemen Keuangan dan Aset BMD
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaMoneyBillWave className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Keuangan Dan Aset/Barang Milik Daerah di UPTD
                  Puskesmas Garuda
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Manajemen Keuangan dan Aset/Barang Milik Daerah (BMD) di
                Puskesmas merupakan bagian integral dari Klaster 1 (Manajemen)
                dalam kerangka Integrasi Layanan Primer (ILP). Pengelolaannya
                harus transparan, akuntabel, efektif, dan efisien, serta wajib
                mematuhi Peraturan Menteri Dalam Negeri (Permendagri) tentang
                Pengelolaan Keuangan Daerah dan Barang Milik Daerah.
              </p>
            </div>

            {/* Tata Kelola Keuangan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                1. Tata Kelola Keuangan di UPTD Puskesmas Garuda
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Manajemen keuangan di UPTD Puskesmas Garuda, mencakup beberapa
                aspek utama:
              </p>

              {/* Sumber Pendapatan */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Sumber Pendapatan
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Puskesmas umumnya menerima dana dari berbagai sumber, yang
                  perlu dikelola sesuai peruntukannya:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sumberPendapatan.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div
                            className={`${item.color} p-3 rounded-full text-white shrink-0`}
                          >
                            <IconComponent className="text-2xl" />
                          </div>
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h5>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-16">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Proses Pengelolaan */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Proses Pengelolaan
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Pengelolaan keuangan Puskesmas (Non-BLUD) mengikuti kaidah
                  penatausahaan keuangan daerah (Permendagri No. 13 Tahun 2006
                  jo. No. 21 Tahun 2011), meliputi:
                </p>
                <div className="space-y-6">
                  {prosesPengelolaan.map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-500 dark:border-green-400 pl-6 py-2"
                    >
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {index + 1}. {item.title}
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Manajemen Aset/BMD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                2. Manajemen Aset/Barang Milik Daerah (BMD)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Manajemen BMD di Puskesmas diatur dalam Permendagri No. 17 Tahun
                2007 (atau peraturan daerah yang relevan) dan mencakup siklus:
              </p>
              <div className="space-y-6">
                {siklusBMD.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-8 text-white">
              <p className="text-lg leading-relaxed text-justify">
                Semua proses ini berada di bawah koordinasi Pejabat Pengelola
                Keuangan (biasanya Kepala Tata Usaha) yang bertanggung jawab
                kepada Kepala Puskesmas (Pemimpin BLUD/Kuasa Pengguna Anggaran).
                Dengan pengelolaan yang transparan, akuntabel, dan profesional,
                UPTD Puskesmas Garuda memastikan bahwa setiap rupiah anggaran
                dan setiap aset yang dimiliki dapat digunakan secara optimal
                untuk meningkatkan kualitas pelayanan kesehatan kepada
                masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
