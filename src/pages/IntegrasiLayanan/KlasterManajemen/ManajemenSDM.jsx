import PageLayout from "../../../components/Layout/PageLayout";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import {
  FaUsers,
  FaClipboardList,
  FaUserPlus,
  FaChalkboardTeacher,
  FaChartLine,
  FaMoneyCheckAlt,
  FaHandshake,
} from "react-icons/fa";

export const ManajemenSDM = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Integrasi Layanan Primer", href: "#" },
    {
      label: "Klaster Manajemen",
      href: "/integrasi-layanan/klaster-manajemen",
    },
    { label: "Manajemen Sumber Daya Manusia" },
  ];

  const aspekUtama = [
    {
      number: "1",
      title: "Perencanaan SDM (Human Resource Planning)",
      description:
        "Proses menentukan kebutuhan tenaga kerja di masa depan, baik kuantitas maupun kualitas, agar sesuai dengan strategi dan tujuan di UPTD Puskesmas Garuda.",
      icon: FaClipboardList,
      color: "bg-blue-500",
    },
    {
      number: "2",
      title: "Perekrutan dan Seleksi (Recruitment and Selection)",
      description:
        "Proses mencari dan memilih calon karyawan yang paling memenuhi syarat untuk mengisi posisi yang tersedia.",
      icon: FaUserPlus,
      color: "bg-green-500",
    },
    {
      number: "3",
      title: "Pengembangan Karyawan (Employee Development)",
      description:
        "Kegiatan yang berfokus pada pelatihan, peningkatan keterampilan, pengetahuan, dan kemampuan karyawan melalui program seperti pelatihan kerja, mentoring, dan pengembangan karir.",
      icon: FaChalkboardTeacher,
      color: "bg-purple-500",
    },
    {
      number: "4",
      title: "Manajemen Kinerja (Performance Management)",
      description:
        "Melibatkan penetapan tujuan, penilaian kinerja secara berkala, pemberian umpan balik, dan pemberian penghargaan untuk memastikan karyawan memenuhi standar dan berkontribusi pada tujuan organisasi.",
      icon: FaChartLine,
      color: "bg-orange-500",
    },
    {
      number: "5",
      title: "Kompensasi dan Manfaat (Compensation and Benefits)",
      description:
        "Mengelola gaji, upah, insentif, tunjangan, dan imbalan lainnya yang adil dan kompetitif sebagai balasan atas kerja yang telah diberikan karyawan.",
      icon: FaMoneyCheckAlt,
      color: "bg-teal-500",
    },
    {
      number: "6",
      title: "Hubungan Karyawan (Employee Relations)",
      description:
        "Menciptakan dan memelihara lingkungan kerja yang positif, harmonis, dan produktif, termasuk menangani masalah disiplin, keluhan, dan hubungan industrial.",
      icon: FaHandshake,
      color: "bg-pink-500",
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
              Manajemen Sumber Daya Manusia
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section with Icon */}
          <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <FaUsers className="text-6xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manajemen Sumber Daya Manusia di UPTD Puskesmas Garuda
                </h2>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                Manajemen Sumber Daya Manusia (MSDM) adalah pendekatan strategis
                dan terpadu untuk mengelola orang-orang, atau sumber daya
                manusia, dalam suatu organisasi atau perusahaan. Tujuannya
                adalah memastikan bahwa tenaga kerja bekerja secara efektif dan
                efisien untuk mencapai tujuan organisasi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Secara sederhana, MSDM adalah ilmu dan seni mengelola semua hal
                yang berkaitan dengan karyawan, mulai dari mereka bergabung
                hingga mereka keluar dari perusahaan.
              </p>
            </div>

            {/* Aspek Utama MSDM */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
                Aspek Utama MSDM
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Manajemen Sumber Daya Manusia (MSDM) melibatkan serangkaian
                aktivitas yang dirancang untuk menarik, mengembangkan,
                memotivasi, dan mempertahankan karyawan yang kompeten.
                Fungsi-fungsi utama MSDM meliputi:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aspekUtama.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`${item.color} p-4 rounded-full text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="text-2xl" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`${item.color} text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm`}
                            >
                              {item.number}
                            </span>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                              {item.title.split("(")[0].trim()}
                            </h4>
                          </div>
                          {item.title.includes("(") && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
                              ({item.title.split("(")[1]}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shrink-0">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Inti dari Manajemen Sumber Daya Manusia
                  </h3>
                  <p className="text-lg leading-relaxed text-justify">
                    Inti dari Manajemen Sumber Daya Manusia adalah melihat
                    karyawan sebagai aset paling berharga yang dimiliki
                    organisasi, dan bukan sekadar biaya, yang kontribusinya
                    harus dimaksimalkan untuk keberhasilan jangka panjang
                    perusahaan.
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
