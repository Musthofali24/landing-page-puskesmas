import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaAmbulance,
  FaWheelchair,
  FaBrain,
  FaRibbon,
  FaTooth,
  FaHandsHelping,
  FaHeartbeat,
  FaSyringe,
  FaLungsVirus,
  FaSmoking,
  FaCheckCircle,
  FaUsers,
  FaUserMd,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";

export const PelayananKhusus = () => {
  useTitle("Klaster Pelayanan Khusus - Puskesmas Garuda");
  const breadcrumbItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Klaster Pelayanan Khusus" },
  ];

  // Data Ruang Lingkup Pelayanan
  const ruangLingkup = [
    {
      icon: FaWheelchair,
      title: "Pelayanan Kesehatan Disabilitas",
      description:
        "Layanan kesehatan komprehensif bagi penyandang disabilitas dengan pendekatan inklusif dan berempati.",
      items: [
        "Pemeriksaan kesehatan rutin berkala",
        "Rujukan medis dan koordinasi pelayanan",
        "Pembinaan keluarga pasien disabilitas",
        "Pendampingan dan konseling psikososial",
      ],
    },
    {
      icon: FaBrain,
      title: "Pelayanan Kesehatan Jiwa",
      description:
        "Pelayanan kesehatan mental yang menyeluruh untuk meningkatkan kesejahteraan psikologis masyarakat.",
      items: [
        "Deteksi dini gangguan mental emosional",
        "Pemantauan pasien ODGJ (Orang Dengan Gangguan Jiwa)",
        "Konseling psikososial individu dan keluarga",
        "Edukasi dan promosi kesehatan jiwa",
      ],
    },
    {
      icon: FaRibbon,
      title: "Pelayanan HIV/AIDS dan IMS",
      description:
        "Program pencegahan, deteksi dini, dan pengelolaan HIV/AIDS serta infeksi menular seksual.",
      items: [
        "Skrining dan konseling sukarela (VCT)",
        "Pengobatan ARV (Antiretroviral)",
        "Edukasi pencegahan penularan HIV",
        "Konseling dan dukungan psikososial",
      ],
    },
    {
      icon: FaTooth,
      title: "Pelayanan Kesehatan Gigi dan Mulut Khusus",
      description:
        "Layanan kesehatan gigi dan mulut untuk kasus khusus dan kelompok rentan.",
      items: [
        "Pemeriksaan gigi dan mulut komprehensif",
        "Perawatan kasus rujukan khusus",
        "Edukasi kesehatan gigi pada kelompok rentan",
        "Tindakan preventif dan kuratif",
      ],
    },
    {
      icon: FaHandsHelping,
      title: "Pelayanan Kesehatan Masyarakat Rentan",
      description:
        "Pelayanan kesehatan bagi kelompok masyarakat dengan risiko kesehatan tinggi.",
      items: [
        "Pelayanan kesehatan warga binaan",
        "Pemeriksaan kesehatan gelandangan",
        "Skrining dan rujukan kelompok berisiko",
        "Koordinasi dengan instansi terkait",
      ],
    },
  ];

  // Data Jenis Layanan
  const jenisLayanan = [
    {
      icon: FaHeartbeat,
      nama: "Layanan Pemeriksaan Kesehatan",
      jadwal: "Senin - Sabtu",
      deskripsi: "Pemeriksaan kesehatan rutin untuk kelompok khusus",
    },
    {
      icon: FaSyringe,
      nama: "Pelayanan PDP/IMS",
      jadwal: "Senin - Sabtu",
      deskripsi: "Pencegahan dan penanganan penyakit menular seksual",
    },
    {
      icon: FaLungsVirus,
      nama: "Pelayanan TBC",
      jadwal: "Senin - Sabtu",
      deskripsi: "Deteksi dini, pengobatan, dan pemantauan TBC",
    },
    {
      icon: FaBrain,
      nama: "Pelayanan Kesehatan Jiwa",
      jadwal: "Senin - Sabtu",
      deskripsi: "Konseling dan penanganan gangguan kesehatan mental",
    },
    {
      icon: FaRibbon,
      nama: "Pelayanan KtPA",
      jadwal: "Senin - Sabtu",
      deskripsi: "Konseling dan Tes HIV/AIDS secara sukarela",
    },
    {
      icon: MdOutlinePsychology,
      nama: "Pelayanan Psikologi",
      jadwal: "Senin - Sabtu",
      deskripsi: "Konseling psikologi dan terapi psikososial",
    },
    {
      icon: FaHandHoldingHeart,
      nama: "Pelayanan Sanitasi",
      jadwal: "Senin - Sabtu",
      deskripsi: "Penyuluhan dan pembinaan sanitasi lingkungan",
    },
    {
      icon: FaUserMd,
      nama: "Pelayanan Gizi",
      jadwal: "Senin - Sabtu",
      deskripsi: "Konseling gizi dan penanganan gizi khusus",
    },
    {
      icon: FaSmoking,
      nama: "Pelayanan Upaya Berhenti Merokok",
      jadwal: "Senin - Sabtu",
      deskripsi: "Program pendampingan berhenti merokok",
    },
    {
      icon: FaAmbulance,
      nama: "Pelayanan Kesehatan Haji",
      jadwal: "Senin - Sabtu",
      deskripsi: "Pemeriksaan kesehatan calon jamaah haji",
    },
  ];

  // Data Keunggulan Layanan
  const keunggulan = [
    {
      icon: FaUsers,
      title: "Tenaga Profesional Terlatih",
      desc: "Didukung tenaga kesehatan yang terlatih dan berempati tinggi",
    },
    {
      icon: FaShieldAlt,
      title: "Pelayanan Inklusif",
      desc: "Menjamin hak setiap individu untuk mendapat layanan setara",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Pendekatan Humanis",
      desc: "Pelayanan yang manusiawi dengan prinsip empati dan kesetaraan",
    },
    {
      icon: FaHeartbeat,
      title: "Layanan Bermutu",
      desc: "Komitmen memberikan pelayanan berkualitas dan berkesinambungan",
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
              Pelayanan Khusus
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <div className="mt-6 space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>Klaster Pelayanan Khusus</strong> UPTD Puskesmas Garuda
                Kota Bandung merupakan unit yang menangani kelompok masyarakat
                dengan kebutuhan kesehatan spesifik, melalui pendekatan
                pelayanan yang <strong>komprehensif</strong>,{" "}
                <strong>berkesinambungan</strong>, dan berorientasi pada
                pemulihan serta peningkatan kualitas hidup.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Klaster ini berperan dalam penyelenggaraan pelayanan kesehatan
                bagi individu atau kelompok yang memerlukan perhatian dan
                penanganan khusus, dengan tetap menjunjung prinsip{" "}
                <strong>inklusivitas</strong>, <strong>kesetaraan</strong>, dan{" "}
                <strong>empati</strong>.
              </p>
            </div>
          </div>

          {/* Ruang Lingkup Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Ruang Lingkup Kegiatan dan Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ruangLingkup.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="bg-teal-300 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="text-white text-3xl" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Items */}
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

              {/* Komitmen Box */}
              <div className="mt-8 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-teal-800 dark:text-teal-300 mb-3">
                  Komitmen Kami
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dengan dukungan tenaga kesehatan profesional yang terlatih dan
                  berempati, <strong>Klaster Pelayanan Khusus</strong> Puskesmas
                  Garuda berkomitmen memberikan layanan yang{" "}
                  <strong>manusiawi</strong>, <strong>bermutu</strong>, serta
                  menjamin hak setiap individu untuk memperoleh pelayanan
                  kesehatan yang <strong>setara dan layak</strong>.
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
                    className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-300 flex items-center justify-center shrink-0">
                        <layanan.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {layanan.nama}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm mb-2">
                          {layanan.jadwal}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {layanan.deskripsi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Tambahan */}
              <div className="mt-6 bg-teal-100 dark:bg-teal-900/30 rounded-lg p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Informasi:</strong> Untuk jadwal pelayanan lebih
                  detail atau pendaftaran khusus, silakan hubungi loket
                  pendaftaran atau bagian informasi Puskesmas Garuda. Kami siap
                  melayani Anda dengan sepenuh hati dan penuh empati.
                </p>
              </div>
            </div>
          </div>

          {/* Keunggulan Layanan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Keunggulan Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keunggulan.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-teal-300 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
