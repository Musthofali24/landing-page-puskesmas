import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaLeaf,
  FaBriefcase,
  FaBrain,
  FaHandsHelping,
  FaClock,
  FaPills,
  FaFlask,
  FaTooth,
  FaCheckCircle,
} from "react-icons/fa";

export const LintasKlaster = () => {
  useTitle("Klaster Lintas Klaster - Puskesmas Garuda");
  const breadcrumbItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Klaster Lintas Klaster" },
  ];

  // Data Ruang Lingkup Kegiatan
  const ruangLingkup = [
    {
      icon: FaLeaf,
      title: "Kesehatan Lingkungan dan Kesling Komunitas",
      description:
        "Pengawasan kualitas air, pengelolaan limbah, sanitasi lingkungan, serta pembinaan perilaku hidup bersih dan sehat (PHBS).",
      items: [
        "Pengawasan kualitas air bersih",
        "Pengelolaan limbah medis dan non-medis",
        "Sanitasi lingkungan pemukiman",
        "Pembinaan PHBS di masyarakat",
      ],
    },
    {
      icon: FaBriefcase,
      title: "Kesehatan Kerja dan Olahraga",
      description:
        "Pemeriksaan kesehatan tenaga kerja, promosi kesehatan di tempat kerja, serta kegiatan olahraga masyarakat.",
      items: [
        "Pemeriksaan kesehatan berkala pekerja",
        "Promosi K3 di tempat kerja",
        "Program senam dan olahraga rutin",
        "Edukasi gaya hidup sehat dan aktif",
      ],
    },
    {
      icon: FaBrain,
      title: "Program Kesehatan Jiwa dan Napza",
      description:
        "Deteksi dini gangguan mental emosional, pendampingan pasien, serta edukasi masyarakat tentang kesehatan jiwa.",
      items: [
        "Skrining kesehatan jiwa masyarakat",
        "Konseling dan pendampingan psikososial",
        "Rehabilitasi dan pemulihan NAPZA",
        "Kampanye anti stigma kesehatan jiwa",
      ],
    },
    {
      icon: FaHandsHelping,
      title: "Kesiapsiagaan dan Penanggulangan Bencana",
      description:
        "Koordinasi lintas sektor dalam menghadapi kedaruratan kesehatan masyarakat.",
      items: [
        "Penyusunan rencana kontinjensi",
        "Pelatihan tim tanggap darurat",
        "Koordinasi dengan BPBD dan lintas sektor",
        "Simulasi dan gladi penanggulangan bencana",
      ],
    },
  ];

  // Data Jenis Layanan
  const jenisLayanan = [
    {
      icon: FaClock,
      nama: "Layanan 24 Jam & Kegawatdaruratan",
      jadwal: "24 Jam",
      color: "text-red-600",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-500",
    },
    {
      icon: FaPills,
      nama: "Farmasi",
      jadwal: "Senin - Sabtu",
      color: "text-teal-600",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-500",
    },
    {
      icon: FaFlask,
      nama: "Laboratorium",
      jadwal: "Senin - Sabtu",
      color: "text-teal-600",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-500",
    },
    {
      icon: FaTooth,
      nama: "Pelayanan Kesehatan Gigi dan Mulut",
      jadwal: "Senin - Sabtu",
      color: "text-teal-600",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-500",
    },
  ];

  return (
    <PageLayout>
      <div className="dark:bg-black">
        <div className="max-w-7xl px-4 py-16 mx-auto">
          {/* Page Header Section */}
          <div className="mb-12">
            {/* Category Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-600 rounded-full"></div>
              <p className="font-semibold text-lg text-teal-600 dark:text-teal-400">
                Layanan Kesehatan
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Klaster Lintas Klaster
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed mt-6">
              Klaster Lintas Klaster UPTD Puskesmas Garuda Kota Bandung
              merupakan bagian yang berperan penting dalam mendukung
              keberhasilan seluruh program kesehatan melalui kegiatan yang
              bersifat lintas bidang dan terintegrasi. Fokus utama klaster ini
              adalah memperkuat{" "}
              <strong>koordinasi, kolaborasi, serta sinkronisasi</strong>{" "}
              antarprogram kesehatan agar pelayanan kepada masyarakat berjalan
              efektif, efisien, dan berkesinambungan.
            </p>
          </div>

          {/* Ruang Lingkup Kegiatan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Ruang Lingkup Kegiatan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ruangLingkup.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-teal-500 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Items List */}
                    <div className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <FaCheckCircle className="text-teal-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {subItem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Peran Klaster */}
              <div className="mt-8 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-teal-800 dark:text-teal-300 mb-3">
                  Peran Klaster Lintas Klaster
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Klaster Lintas Klaster berperan sebagai{" "}
                  <strong>penghubung antarprogram</strong> di Puskesmas,
                  memastikan setiap kegiatan kesehatan saling mendukung dalam
                  upaya mewujudkan masyarakat yang sehat, mandiri, dan berdaya
                  di wilayah kerja UPTD Puskesmas Garuda Kota Bandung.
                </p>
              </div>
            </div>
          </div>

          {/* Jenis Layanan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Jenis Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jenisLayanan.map((layanan, index) => (
                  <div
                    key={index}
                    className={`${layanan.bg} border-l-4 ${layanan.border} rounded-lg p-6 hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shrink-0`}
                      >
                        <layanan.icon className={`${layanan.color} text-2xl`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {layanan.nama}
                        </h3>
                        <p className={`${layanan.color} font-semibold text-sm`}>
                          {layanan.jadwal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Tambahan */}
              <div className="mt-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Catatan:</strong> Untuk informasi lebih lanjut
                  mengenai jadwal layanan dan persyaratan, silakan hubungi loket
                  pendaftaran atau bagian informasi Puskesmas Garuda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
