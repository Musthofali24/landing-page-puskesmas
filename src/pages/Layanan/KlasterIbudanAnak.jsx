import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaHeartbeat,
  FaBaby,
  FaUserFriends,
  FaBullhorn,
  FaHospital,
  FaStethoscope,
  FaImage,
  FaFemale,
  FaSyringe,
  FaChild,
  FaUserGraduate,
  FaChartLine,
  FaHandHoldingHeart,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export const KlasterIbudanAnak = () => {
  useTitle("Klaster Ibu dan Anak - Puskesmas Garuda");
  const breadcrumbItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Klaster Ibu dan Anak" },
  ];

  // Data Layanan Utama
  const layananUtama = [
    {
      icon: FaHeartbeat,
      title: "Pelayanan Kesehatan Ibu",
      description:
        "Layanan untuk menjaga kesehatan ibu dari masa kehamilan hingga nifas.",
      items: [
        "Pemeriksaan kehamilan (ANC) terpadu",
        "Pelayanan persalinan 24 jam",
        "Pelayanan masa nifas dan pemulihan",
        "Konseling gizi & kesehatan reproduksi",
      ],
    },
    {
      icon: FaBaby,
      title: "Pelayanan Kesehatan Anak",
      description:
        "Pemantauan dan pelayanan kesehatan menyeluruh untuk bayi dan balita.",
      items: [
        "Pemantauan tumbuh kembang anak",
        "Imunisasi dasar lengkap dan booster",
        "Deteksi dini gangguan perkembangan",
        "Penanganan penyakit umum bayi & balita",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Program Kesehatan Remaja & Calon Pengantin",
      description:
        "Edukasi dan persiapan kesehatan untuk remaja dan calon pengantin.",
      items: [
        "Edukasi kesehatan reproduksi remaja",
        "Konseling gizi seimbang remaja",
        "Pemeriksaan kesehatan pra nikah",
        "Persiapan keluarga sehat mandiri",
      ],
    },
    {
      icon: FaBullhorn,
      title: "Kegiatan Promotif dan Preventif",
      description:
        "Program edukasi dan pencegahan untuk meningkatkan kesadaran masyarakat.",
      items: [
        "Kelas ibu hamil rutin",
        "Posyandu balita terpadu",
        "Penyuluhan gizi seimbang",
        "Kampanye ASI eksklusif",
      ],
    },
  ];

  // Data Jenis Layanan
  const jenisLayanan = [
    {
      icon: FaHospital,
      nama: "Ruang Bersalin",
      jadwal: "24 Jam",
      color: "text-red-600",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-500",
    },
    {
      icon: FaHeartbeat,
      nama: "Pelayanan Ibu Hamil",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaImage,
      nama: "Pelayanan USG",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaFemale,
      nama: "Pelayanan Ibu Nifas",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaBaby,
      nama: "Pelayanan Kesehatan Bayi Muda (MTBM)",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaStethoscope,
      nama: "Pelayanan Balita Sakit (MTBS)",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaUserGraduate,
      nama: "Pelayanan Anak Usia Prasekolah & Remaja",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaSyringe,
      nama: "Pelayanan Imunisasi",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaChartLine,
      nama: "Pelayanan Tumbuh Kembang",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
    },
    {
      icon: FaHandHoldingHeart,
      nama: "Konseling Laktasi",
      jadwal: "Senin - Sabtu",
      color: "text-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-500",
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
              <div className="w-1 h-8 bg-cyan-600 rounded-full"></div>
              <p className="font-semibold text-lg text-cyan-600 dark:text-cyan-400">
                Layanan Kesehatan
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Klaster Ibu dan Anak
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed mt-6">
              Klaster Ibu dan Anak UPTD Puskesmas Garuda Kota Bandung merupakan
              bagian layanan kesehatan yang berfokus pada{" "}
              <strong>
                peningkatan derajat kesehatan ibu, bayi, dan balita
              </strong>{" "}
              di wilayah kerja Puskesmas Garuda. Klaster ini bertujuan untuk
              mewujudkan keluarga yang{" "}
              <strong>sehat, mandiri, dan sejahtera</strong> melalui pelayanan
              komprehensif serta berkesinambungan.
            </p>
          </div>

          {/* Layanan Utama Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-cyan-600 rounded-full"></div>
                Layanan Utama
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {layananUtama.map((item, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="bg-sky-300 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="text-white text-3xl" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Items */}
                    <div className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <FaCheckCircle className="text-cyan-600 mt-0.5 shrink-0" />
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
              <div className="mt-8 bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-800 dark:text-cyan-300 mb-3">
                  Komitmen Kami
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dengan dukungan tenaga kesehatan profesional, seperti bidan,
                  perawat, tenaga gizi, dan promotor kesehatan, Klaster Ibu dan
                  Anak Puskesmas Garuda berkomitmen untuk memberikan pelayanan
                  yang <strong>ramah, berkualitas</strong>, serta berorientasi
                  pada keselamatan dan kesejahteraan ibu dan anak.
                </p>
              </div>
            </div>
          </div>

          {/* Jenis Layanan Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-cyan-600 rounded-full"></div>
                Jenis Layanan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jenisLayanan.map((layanan, index) => (
                  <div
                    key={index}
                    className={`${layanan.bg} border-l-4 ${layanan.border} rounded-lg p-6 hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shrink-0">
                        <layanan.icon className={`${layanan.color} text-2xl`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {layanan.nama}
                        </h3>
                        <p
                          className={`${layanan.color} font-semibold text-sm flex items-center gap-2`}
                        >
                          <FaClock className="text-base" />
                          {layanan.jadwal}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Penting */}
              <div className="mt-6 bg-sky-50 dark:bg-sky-900/20 rounded-lg p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Informasi Penting:</strong> Ruang Bersalin tersedia{" "}
                  <strong className="text-red-600 dark:text-red-400">
                    24 jam
                  </strong>{" "}
                  untuk pelayanan persalinan darurat. Untuk layanan lainnya,
                  silakan datang pada hari dan jam operasional atau hubungi kami
                  untuk informasi lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
