import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaUserMd,
  FaWheelchair,
  FaBullhorn,
  FaHeartbeat,
  FaAppleAlt,
  FaRunning,
  FaMicroscope,
  FaUsers,
  FaRing,
  FaVenusMars,
  FaShieldAlt,
  FaNotesMedical,
  FaCheckCircle,
} from "react-icons/fa";

export const KlasterDewasaLansia = () => {
  useTitle("Klaster Kesehatan Usia Dewasa dan Lansia - Puskesmas Garuda");
  const breadcrumbItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Klaster Kesehatan Usia Dewasa dan Lansia" },
  ];

  // Data Ruang Lingkup Pelayanan
  const ruangLingkup = [
    {
      icon: FaUserMd,
      title: "Pelayanan Kesehatan Usia Dewasa",
      description:
        "Layanan komprehensif untuk menjaga kesehatan masyarakat usia produktif dengan pendekatan holistik.",
      items: [
        "Pemeriksaan kesehatan rutin berkala",
        "Deteksi dini PTM (Hipertensi, Diabetes, dll)",
        "Konseling gizi dan pola hidup sehat",
        "Pengendalian faktor risiko penyakit kronis",
      ],
    },
    {
      icon: FaWheelchair,
      title: "Pelayanan Kesehatan Lansia",
      description:
        "Pelayanan khusus untuk memastikan lansia tetap sehat, mandiri, dan aktif dalam kehidupan sehari-hari.",
      items: [
        "Pemeriksaan kesehatan berkala lansia",
        "Pemantauan status gizi dan fungsi fisik",
        "Edukasi perawatan mandiri lansia",
        "Kegiatan Posyandu Lansia rutin",
      ],
    },
    {
      icon: FaBullhorn,
      title: "Kegiatan Promotif dan Preventif",
      description:
        "Program edukasi dan pencegahan untuk meningkatkan kesadaran masyarakat tentang pentingnya kesehatan.",
      items: [
        "Penyuluhan kesehatan di masyarakat",
        "Senam sehat lansia rutin",
        "Skrining kesehatan kerja",
        "Penguatan program pengendalian PTM",
      ],
    },
  ];

  // Data Jenis Layanan
  const jenisLayanan = [
    {
      icon: FaHeartbeat,
      nama: "Pelayanan Usia Dewasa",
      jadwal: "Senin - Sabtu",
      deskripsi: "Pemeriksaan rutin, skrining PTM, konseling kesehatan",
    },
    {
      icon: FaWheelchair,
      nama: "Pelayanan Lansia",
      jadwal: "Senin - Sabtu",
      deskripsi: "Posyandu lansia, pemeriksaan berkala, edukasi perawatan",
    },
    {
      icon: FaRing,
      nama: "Pelayanan Catin & Kespro",
      jadwal: "Senin - Sabtu",
      deskripsi: "Pemeriksaan calon pengantin, konseling kesehatan reproduksi",
    },
    {
      icon: FaShieldAlt,
      nama: "Pelayanan KB & IVA Test",
      jadwal: "Senin - Sabtu",
      deskripsi: "Konseling KB, pemasangan alat kontrasepsi, skrining IVA",
    },
    {
      icon: FaNotesMedical,
      nama: "Pelayanan Akupuntur",
      jadwal: "Senin - Sabtu",
      deskripsi: "Terapi akupuntur untuk berbagai keluhan kesehatan",
    },
  ];

  // Data Keunggulan Layanan
  const keunggulan = [
    {
      icon: FaUsers,
      title: "Tenaga Kesehatan Kompeten",
      desc: "Didukung oleh dokter dan tenaga kesehatan berpengalaman",
    },
    {
      icon: FaHeartbeat,
      title: "Pelayanan Ramah & Profesional",
      desc: "Pendekatan yang humanis dan berorientasi pada pasien",
    },
    {
      icon: FaAppleAlt,
      title: "Program Terpadu",
      desc: "Integrasi pelayanan promotif, preventif, kuratif, rehabilitatif",
    },
    {
      icon: FaRunning,
      title: "Kemandirian & Kesejahteraan",
      desc: "Fokus pada peningkatan kualitas hidup masyarakat",
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
              <div className="w-1 h-8 bg-pink-600 rounded-full"></div>
              <p className="font-semibold text-lg text-pink-600 dark:text-pink-400">
                Layanan Kesehatan
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Klaster Kesehatan Usia Dewasa dan Lansia
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <div className="mt-6 space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Klaster Kesehatan Usia Dewasa dan Lansia UPTD Puskesmas Garuda
                Kota Bandung berperan dalam upaya{" "}
                <strong>peningkatan kualitas hidup</strong> masyarakat usia
                produktif hingga lanjut usia melalui pelayanan promotif,
                preventif, kuratif, dan rehabilitatif secara terpadu.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Fokus utama klaster ini adalah menjaga dan meningkatkan derajat
                kesehatan masyarakat dewasa serta memastikan lansia tetap{" "}
                <strong>sehat, mandiri, dan aktif</strong> dalam kehidupan
                sehari-hari.
              </p>
            </div>
          </div>

          {/* Ruang Lingkup Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Ruang Lingkup Pelayanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ruangLingkup.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="bg-pink-400 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
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
                          <FaCheckCircle className="text-pink-600 mt-0.5 shrink-0" />
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
              <div className="mt-8 bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-pink-800 dark:text-pink-300 mb-3">
                  Komitmen Kami
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dengan dukungan tenaga kesehatan yang kompeten dan
                  berpengalaman, Klaster Kesehatan Usia Dewasa dan Lansia
                  Puskesmas Garuda berkomitmen memberikan pelayanan yang{" "}
                  <strong>ramah, profesional</strong>, serta berorientasi pada
                  peningkatan kesejahteraan dan kemandirian masyarakat usia
                  dewasa dan lanjut usia di wilayah kerjanya.
                </p>
              </div>
            </div>
          </div>

          {/* Jenis Layanan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Jenis Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jenisLayanan.map((layanan, index) => (
                  <div
                    key={index}
                    className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center shrink-0">
                        <layanan.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {layanan.nama}
                        </h3>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm mb-2">
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
              <div className="mt-6 bg-pink-100 dark:bg-pink-900/30 rounded-lg p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Informasi:</strong> Untuk jadwal pelayanan lebih
                  detail atau pendaftaran khusus, silakan hubungi loket
                  pendaftaran atau bagian informasi Puskesmas Garuda. Kami siap
                  melayani Anda dengan sepenuh hati.
                </p>
              </div>
            </div>
          </div>

          {/* Keunggulan Layanan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                Keunggulan Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keunggulan.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-linear-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-pink-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
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
