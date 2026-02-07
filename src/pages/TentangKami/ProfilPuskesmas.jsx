import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaStar,
  FaUsers,
  FaHospital,
  FaWheelchair,
  FaChild,
  FaBuilding,
  FaHandHoldingHeart,
  FaBullseye,
  FaQuoteLeft,
  FaCheckCircle,
  FaStethoscope,
  FaHeart,
  FaFirstAid,
} from "react-icons/fa";

export const ProfilPuskesmas = () => {
  useTitle("Profil Puskesmas");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Tentang Kami", href: "#" },
    { label: "Profil Puskesmas" },
  ];

  return (
    <PageLayout>
      <div className="bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="bg-white dark:bg-black pt-16">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-500"></div>
              <p className="font-semibold text-lg text-teal-500">
                Tentang Kami
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Profil Puskesmas
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-5xl mt-4">
              UPTD Puskesmas Garuda - Mewujudkan Derajat Kesehatan Masyarakat
              yang Optimal
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 py-12 mx-auto">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-t-4 border-teal-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                  <FaStar className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rating
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    3.6/5.0
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-t-4 border-cyan-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-full">
                  <FaUsers className="text-2xl text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Jangkauan
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    104,777
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    jiwa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-t-4 border-blue-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <FaBuilding className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Wilayah Kerja
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    4
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Kelurahan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-t-4 border-purple-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Luas Wilayah
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    370.7
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visi dan Motto Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Visi */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500 rounded-full">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Visi
                </h2>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-4xl text-teal-300 dark:text-teal-700 mb-4" />
                <p className="text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                  Mewujudkan derajat kesehatan masyarakat yang optimal secara
                  mandiri.
                </p>
              </div>
            </div>

            {/* Motto */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500 rounded-full">
                  <FaHeart className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Motto
                </h2>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-4xl text-cyan-300 dark:text-cyan-700 mb-4" />
                <p className="text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed pl-4 font-semibold">
                  "Bersama Garuda Kita Sehat"
                </p>
              </div>
            </div>
          </div>

          {/* Informasi Umum */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <FaHospital className="text-teal-500" />
              Informasi Umum
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nama Tempat */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  <FaHospital className="text-xl text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Nama Tempat
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    UPTD Puskesmas Garuda
                  </p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <FaMapMarkerAlt className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Alamat
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Jl. Dadali No.81, Garuda, Kec. Andir, Kota Bandung, Jawa
                    Barat 40184
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <FaPhone className="text-xl text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Telepon
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    +62 22 6013885
                  </p>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <FaClock className="text-xl text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Jam Buka
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Senin – Sabtu: 07.30–12.00 (Pelayanan umum)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    Minggu: Tutup.{" "}
                    <span className="font-semibold">
                      Puskesmas ini juga merupakan Puskesmas PONED dengan
                      layanan 24 jam
                    </span>
                  </p>
                </div>
              </div>

              {/* Wilayah Kerja */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl lg:col-span-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <FaBuilding className="text-xl text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    Wilayah Kerja
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Meliputi 4 Kelurahan di Kecamatan Andir: Garuda, Maleber,
                    Dungus Cariang, dan Campaka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tata Nilai SEHAT */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-700 dark:to-cyan-800 rounded-2xl shadow-lg p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Tata Nilai S-E-H-A-T</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">S5</div>
                <p className="text-sm opacity-90">
                  Senyum, Salam, Sapa, Sentuh, Sembuh
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">E</div>
                <p className="text-sm opacity-90">Empati</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">H</div>
                <p className="text-sm opacity-90">Handal</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">A</div>
                <p className="text-sm opacity-90">Aman</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">T</div>
                <p className="text-sm opacity-90">Terpercaya</p>
              </div>
            </div>
          </div>

          {/* Keunggulan dan Fasilitas */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Keunggulan dan Fasilitas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              UPTD Puskesmas Garuda dikenal sebagai salah satu Puskesmas terbaik
              di Kota Bandung dan pernah menjadi percontohan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Puskesmas Ramah Anak */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-pink-100 dark:bg-pink-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaChild className="text-3xl text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Puskesmas Ramah Anak (Panda)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Puskesmas ini sangat memperhatikan aspek kemanusiaan, terutama
                  untuk anak dan ibu hamil. Anak-anak memiliki ruang khusus, dan
                  pelayanan dipisah berdasarkan umur (anak, dewasa, dan lansia)
                  sejak antrean.
                </p>
              </div>

              {/* Fasilitas Ramah Disabilitas */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaWheelchair className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Fasilitas Ramah Disabilitas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dilengkapi dengan lift dan tangga ramah disabilitas untuk
                  memastikan aksesibilitas bagi semua pasien.
                </p>
              </div>

              {/* Fasilitas Penunjang */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaStethoscope className="text-3xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Fasilitas Penunjang
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Terdapat tempat bermain anak, ruang konsultasi remaja, dan
                  aula yang luas di lantai liga untuk berbagai kegiatan.
                </p>
              </div>

              {/* Status PONED */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="p-4 bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaFirstAid className="text-3xl text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Status PONED
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Merupakan Puskesmas yang menyelenggarakan Pelayanan Obstetri
                  Neonatal Emergensi Dasar (PONED) 24 jam.
                </p>
              </div>
            </div>
          </div>

          {/* Jenis Pelayanan */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Jenis Pelayanan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pelayanan di Puskesmas Garuda terbagi menjadi Upaya Kesehatan
              Masyarakat (UKM) dan Upaya Kesehatan Perorangan (UKP) serta
              penunjang:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* UKPP */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-6">
                  1. Upaya Kesehatan Perorangan dan Penunjang (UKPP)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Pelayanan Kesehatan Umum",
                    "Pelayanan Kesehatan Gigi dan Mulut",
                    "Pelayanan Kesehatan Anak (Tumbuh Kembang)",
                    "Pelayanan KIA (Kesehatan Ibu Hamil, Pelayanan Nifas, Senam Hamil)",
                    "Pelayanan KB (Keluarga Berencana) dan IVA Test",
                    "Pelayanan Imunisasi",
                    "Pelayanan Tindakan/Gawat Darurat",
                    "Pelayanan Obstetri Neonatal Emergensi Dasar (PONED) 24 jam",
                    "Pelayanan TB DOTS",
                    "Pelayanan HIV (Inovasi SAGARA)",
                    "Pelayanan Kesehatan Jiwa",
                    "Pelayanan Kefarmasian",
                    "Pelayanan Laboratorium",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UKM */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">
                  2. Upaya Kesehatan Masyarakat (UKM) Esensial dan Pengembangan
                </h3>
                <ul className="space-y-3">
                  {[
                    "Promosi Kesehatan (Promkes)",
                    "Kesehatan Lingkungan",
                    "Kesehatan Masyarakat",
                    "Kesehatan Kerja",
                    "Pelayanan Keperawatan",
                    "Inovasi Skrining PTM (Penyakit Tidak Menular) pada usia produktif melalui program GEMPPITA",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
