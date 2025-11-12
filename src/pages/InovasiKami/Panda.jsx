import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import {
  FaChild,
  FaHeart,
  FaCheckCircle,
  FaSmile,
  FaHandHoldingHeart,
  FaUsers,
  FaTrophy,
  FaBuilding,
} from "react-icons/fa";

export const Panda = () => {
  useTitle("PANDA");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Inovasi Kami", href: "#" },
    { label: "PANDA" },
  ];

  const prinsipPelayanan = [
    "Mengutamakan kenyamanan dan keamanan anak",
    "Menciptakan lingkungan yang ceria dan tidak menakutkan bagi anak",
    "Memastikan anak mendapatkan pelayanan dari awal hingga akhir dengan penanganan yang khusus",
  ];

  const fasilitasSarana = [
    {
      judul: "Pemisahan Alur Pelayanan",
      deskripsi:
        "Adanya pemisahan alur pelayanan (antrean) berdasarkan usia: anak, dewasa, dan lansia. Ini memastikan anak-anak mendapatkan penanganan yang lebih cepat dan terfokus.",
    },
    {
      judul: "Ruang Khusus Anak",
      deskripsi:
        "Tersedia ruang tunggu dan ruang pemeriksaan/tindakan khusus yang didesain dengan nuansa pastel yang ceria.",
    },
    {
      judul: "Area Bermain Anak",
      deskripsi:
        "Terdapat ruang atau area yang dilengkapi dengan fasilitas bermain (mainan, buku, dll.) untuk mengurangi rasa bosan, takut, atau cemas pada anak saat menunggu.",
    },
    {
      judul: "Ruang Laktasi",
      deskripsi: "Ruang menyusui yang memadai dan nyaman untuk ibu dan bayi.",
    },
    {
      judul: "Aksesibilitas",
      deskripsi:
        "Lift dan tangga yang ramah disabilitas/lansia untuk kemudahan akses.",
    },
  ];

  const sdmTerlatih = [
    {
      aspek: "Tenaga Kesehatan Terlatih",
      detail:
        "Staf medis dan paramedis (dokter, perawat, bidan) diberikan pelatihan khusus mengenai pelayanan kesehatan ramah anak.",
    },
    {
      aspek: "Pendekatan Humanis",
      detail:
        "Petugas didorong untuk menerapkan pendekatan yang lebih sabar, ramah, dan komunikatif saat berinteraksi dengan anak.",
    },
    {
      aspek: "Tata Nilai",
      detail:
        "Menerapkan tata nilai pelayanan seperti 5S (Senyum, Salam, Sapa, Sentuh, Sembuh) dan Empati.",
    },
  ];

  const programLanjutan = [
    {
      nama: "PERI KECIL",
      namaLengkap: "Pelayanan Komprehensif Si Kecil",
      deskripsi:
        "Program yang menyatukan layanan kesehatan anak secara terpadu. Fokusnya adalah layanan promotif dan preventif untuk memastikan anak tidak hanya sembuh, tetapi juga memiliki daya tahan tubuh dan kesehatan mental yang kuat. Program ini bahkan memperluas kolaborasi dengan menghadirkan layanan psikolog melalui kerja sama dengan perguruan tinggi.",
    },
    {
      nama: "PELITA GARUDA",
      namaLengkap: "Pelayanan Kesehatan Peduli Perempuan dan Anak Terpadu",
      deskripsi:
        "Inovasi yang secara spesifik fokus pada perlindungan dan pemulihan korban kekerasan terhadap perempuan dan anak. PELITA GARUDA memperkuat sinergi dengan lintas sektor seperti aparat penegak hukum, lembaga perlindungan anak, dan organisasi masyarakat untuk penanganan yang cepat dan menyeluruh.",
    },
  ];

  const dampakPrestasi = [
    {
      judul: "Peningkatan Kualitas Layanan",
      deskripsi:
        "PANDA telah menjadikan Puskesmas Garuda sebagai salah satu puskesmas unggulan dan percontohan layanan ramah anak di Jawa Barat.",
      icon: FaTrophy,
    },
    {
      judul: "Mendukung Kota Layak Anak",
      deskripsi:
        "Memberikan kontribusi signifikan dalam upaya Pemerintah Kota Bandung mewujudkan predikat sebagai Kota Layak Anak (KLA).",
      icon: FaBuilding,
    },
    {
      judul: "Pengakuan Nasional",
      deskripsi:
        "Berkat inovasi seperti PANDA, Puskesmas Garuda seringkali menjadi perwakilan Kota Bandung dalam berbagai penilaian fasilitas kesehatan berprestasi tingkat provinsi.",
      icon: FaTrophy,
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
              <div className="w-1 h-8 bg-pink-600 rounded-full"></div>
              <p className="font-semibold text-lg text-pink-600 dark:text-pink-400">
                Inovasi Kami
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              PANDA
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaChild className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  PANDA - Pelayanan Ramah Anak Garuda
                </h2>
                <p className="text-lg leading-relaxed opacity-95">
                  Program unggulan yang dirancang komprehensif untuk memastikan
                  anak-anak mendapatkan pelayanan kesehatan yang optimal,
                  nyaman, dan sesuai dengan hak-hak mereka
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                PANDA merupakan salah satu program unggulan dan inovasi dari UPT
                Puskesmas Garuda yang dirancang secara komprehensif untuk
                memastikan anak-anak mendapatkan pelayanan kesehatan yang
                optimal, nyaman, dan sesuai dengan hak-hak mereka.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Program ini juga menjadi salah satu kontribusi penting Kota
                Bandung dalam mencapai predikat Kota Layak Anak. Program PANDA
                diluncurkan secara resmi sekitar tahun <strong>2017</strong> dan
                menjadi percontohan bagi puskesmas lain di Kota Bandung.
              </p>
            </div>

            {/* Konsep Dasar dan Filosofi */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                1. Konsep Dasar dan Filosofi
              </h3>

              <div className="bg-pink-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeart className="text-pink-500 text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Tujuan Utama
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mewujudkan hak dan perlindungan anak di bidang kesehatan
                  dengan menyediakan sarana, prasarana, dan sumber daya manusia
                  yang sepenuhnya ramah anak.
                </p>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Prinsip Pelayanan:
              </h4>
              <div className="space-y-3">
                {prinsipPelayanan.map((prinsip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-pink-50 dark:bg-gray-700 rounded-lg p-4"
                  >
                    <FaCheckCircle className="text-pink-500 text-xl shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {prinsip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inovasi Fasilitas dan Sarana Prasarana */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                2. Inovasi Fasilitas dan Sarana Prasarana
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-6">
                Puskesmas Garuda secara fisik dirancang untuk memberikan kesan
                ceria dan humanis, terutama untuk pasien anak:
              </p>

              <div className="space-y-4">
                {fasilitasSarana.map((fasilitas, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-pink-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {fasilitas.judul}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {fasilitas.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspek Sumber Daya Manusia (SDM) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                3. Aspek Sumber Daya Manusia (SDM)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sdmTerlatih.map((sdm, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-pink-500 p-6 relative">
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-pink-600">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <FaUsers className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {sdm.aspek}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {sdm.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengembangan Program Lanjutan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                4. Pengembangan Program Lanjutan
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-8">
                Program PANDA terus dikembangkan dengan berbagai inovasi turunan
                untuk melengkapi layanan kesehatan anak dan perempuan:
              </p>

              <div className="space-y-6">
                {programLanjutan.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-pink-500 p-6 relative">
                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-pink-600">
                          {index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {program.nama}
                      </h4>
                      <p className="text-white/90 text-sm">
                        {program.namaLengkap}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {program.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dampak dan Prestasi */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                5. Dampak dan Prestasi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dampakPrestasi.map((dampak, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Top Section */}
                    <div className="bg-pink-500 p-6">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <dampak.icon className="text-white text-3xl" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white text-center">
                        {dampak.judul}
                      </h4>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                        {dampak.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaHandHoldingHeart className="text-3xl text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-justify">
                    Secara keseluruhan, PANDA (Pelayanan Ramah Anak Garuda)
                    adalah sebuah sistem pelayanan terpadu yang bukan hanya
                    menyediakan layanan medis, tetapi juga memastikan
                    lingkungan, prosedur, dan sumber daya manusia di Puskesmas
                    Garuda sepenuhnya mendukung hak dan kesejahteraan anak-anak.
                    Program ini menjadi bukti nyata komitmen Puskesmas Garuda
                    dalam mewujudkan layanan kesehatan yang humanis dan berfokus
                    pada kebutuhan anak.
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
