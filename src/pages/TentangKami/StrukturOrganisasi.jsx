import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import { FaUserTie, FaUsers, FaChevronDown } from "react-icons/fa";

export const StrukturOrganisasi = () => {
  useTitle("Struktur Organisasi");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Tentang Kami", href: "#" },
    { label: "Struktur Organisasi" },
  ];

  const organizationData = [
    {
      title: "PJ. Klaster 1 (Manajemen)",
      head: "Maya Sofia, SE",
      color: "teal",
      sections: [
        {
          name: "Manajemen Inti Puskesmas",
          members: ["Rismawati, Amd.Keb"],
        },
        {
          name: "Manajemen Arsip",
          members: ["Ari Andriyani", "M Aulia Dzalani Fadli, ST"],
        },
        {
          name: "Manajemen Sumber Daya Manusia",
          members: ["Euis Susilah, Amd. AK", "Santi Agustina, AMD"],
        },
        {
          name: "Manajemen Mutu dan Peningkatan Kinerja Kesehatan",
          members: ["Ira Meiryani Diniarti, S.Farm", "Sabrina Mukasa, SE"],
        },
        {
          name: "Manajemen Mutu Pelayanan",
          members: ["Ira Aulia Russiana", "Risma Mariana"],
        },
        {
          name: "Manajemen Keuangan dan Aset (BMD)",
          members: ["Ai Sadikih, SE", "Iin Herlina", "Ruth Budiarti, AM.KG"],
        },
        {
          name: "Manajemen Sistem Informasi Kesehatan",
          members: [
            "Cecep Hernawan, SE",
            "A.F. Amd Keb, S.Tr",
            "Susan Hadiat, ST",
            "Sani Satria Negara, A.Md.RAK",
          ],
        },
        {
          name: "Manajemen Jejaring",
          members: ["M. Yusya Mahami"],
        },
        {
          name: "Manajemen Pemberdayaan Masyarakat",
          members: ["Fitriati Surya, SKM"],
        },
      ],
    },
    {
      title: "PJ. Klaster 2 (Kesehatan Ibu dan Anak)",
      head: "dr. Rikka Harahap",
      color: "blue",
      sections: [
        {
          name: "Ibu Hamil, Bersalin, Nifas",
          members: [
            "Dewi Kurniasih, AM.Keb",
            "Dini Rahmawati, S.Keb",
            "Siti Nur P., Amd.Keb",
            "Agusliani, S.Keb",
          ],
        },
        {
          name: "Bayi dan Anak Balita",
          members: ["Elis K, Amd.Keb", "Ratmi, AM.Keb", "Vinny M., Amd.Gz"],
        },
        {
          name: "Anak Pra Sekolah",
          members: ["Neng Rina Gi, Amd.Keb", "Siti Aisyah, Amd.Keb"],
        },
        {
          name: "Anak Usia Sekolah",
          members: ["Putri Budiarti, AM.KG"],
        },
        {
          name: "Remaja",
          members: ["Dewi Nur PS,Amd.Kep"],
        },
      ],
    },
    {
      title: "PJ. Klaster 3 (Kesehatan Dewasa dan Lansia)",
      head: "dr. Ade Pratiwi",
      color: "cyan",
      sections: [
        {
          name: "Dewasa",
          members: [
            "Yuli Susanti, S.Kep.Ners",
            "Neneng A., Amd.Kep",
            "Gina Septi, AM.Keb",
            "Ratih Komala, AM.Keb",
            "Euis Siti Mariam, S.Keb",
          ],
        },
        {
          name: "Lanjut Usia",
          members: [
            "Ramanah, AM.Keb",
            "Nurul Fatimah, AM.Keb",
            "Otama Fifira A., Amd.Kep",
            "Dandi Chung, S.Kep. Ners",
          ],
        },
      ],
    },
    {
      title: "PJ. Klaster 4 (Penanggulangan Penyakit Menular dan Imunisasi)",
      head: "dr. Yogih Prawira",
      color: "purple",
      sections: [
        {
          name: "Surveilan & Respon Penyakit Menular",
          members: [
            "Ramdhan Suhendar R., AMK",
            "Amar Nurholis, Amd.Kep",
            "Putri Junianti, S.Kep. Ners",
          ],
        },
        {
          name: "Kesehatan Lingkungan",
          members: ["Nia Ekoyati, SKM"],
        },
      ],
    },
    {
      title: "PJ. Lintas Klaster",
      head: "drg. R. Syafri",
      color: "indigo",
      sections: [
        {
          name: "Pelayanan Kesehatan Gigi & Mulut",
          members: [
            "Siti Zulaika Rusalia",
            "Nuri Budiarti, S.KG",
            "Hesti Lestari, AM.KG",
          ],
        },
        {
          name: "Pelayanan Gawat Darurat",
          members: ["dr. Ervaldi Ibaim Widiagdyo"],
        },
        {
          name: "Pelayanan Kefarmasian",
          members: [
            "Santi Agustina, A.Md.Farm",
            "Ira R. Fadholi, S.Farm",
            "Ira Aulia Russiana",
            "Wijayanti, A.md Farm",
          ],
        },
        {
          name: "Pelayanan Laboratorium Kesehatan Masyarakat",
          members: [
            "Dila Dwi Yuliarti",
            "Andini Soraya Lukti Ali",
            "Santi Susanti, A.Md.AK,AAM",
          ],
        },
        {
          name: "Penanggulangan Krisis Kesehatan",
          members: ["Arsyad Deni, AMK"],
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="bg-white dark:bg-black py-16">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-500"></div>
              <p className="font-semibold text-lg text-teal-500">
                Tentang Kami
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Struktur Organisasi
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
              Struktur Organisasi UPTD Puskesmas Garuda
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 py-12 mx-auto">
          {/* Kepala Puskesmas */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-600 dark:to-cyan-700 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform">
              <div className="bg-white dark:bg-gray-800 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <FaUserTie className="text-4xl text-teal-600 dark:text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Kepala UPTD Puskesmas
              </h2>
              <p className="text-cyan-50 text-lg">Irisana Irawati, MMRS</p>
              <p className="text-cyan-100 text-sm mt-2">
                NIP: 19740303 200212 2 004
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-16 bg-gray-300 dark:bg-gray-700 relative">
              <FaChevronDown className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-gray-400 dark:text-gray-600 text-xl" />
            </div>
          </div>

          {/* Organization Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {organizationData.map((cluster, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div
                  className={`p-6 text-white ${
                    cluster.color === "teal"
                      ? "bg-teal-500 dark:bg-teal-600"
                      : cluster.color === "blue"
                      ? "bg-blue-500 dark:bg-blue-600"
                      : cluster.color === "cyan"
                      ? "bg-cyan-500 dark:bg-cyan-600"
                      : cluster.color === "purple"
                      ? "bg-purple-500 dark:bg-purple-600"
                      : "bg-indigo-500 dark:bg-indigo-600"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <FaUsers className="text-2xl" />
                    <h3 className="text-lg font-bold">{cluster.title}</h3>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm opacity-90 mb-1">Penanggung Jawab:</p>
                    <p className="text-lg font-bold">{cluster.head}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {cluster.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-l-4 pl-4 py-2 transition-all hover:pl-6"
                      style={{
                        borderColor:
                          cluster.color === "teal"
                            ? "#14b8a6"
                            : cluster.color === "blue"
                            ? "#3b82f6"
                            : cluster.color === "cyan"
                            ? "#06b6d4"
                            : cluster.color === "purple"
                            ? "#a855f7"
                            : "#6366f1",
                      }}
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                        {section.name}
                      </h4>
                      <ul className="space-y-1">
                        {section.members.map((member, mIdx) => (
                          <li
                            key={mIdx}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-xs mt-1">•</span>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Footer */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Struktur organisasi ini menggambarkan pembagian tugas dan tanggung
              jawab di UPTD Puskesmas Garuda untuk memberikan pelayanan
              kesehatan yang optimal kepada masyarakat.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
