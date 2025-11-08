import puskesmasImg from "../../assets/banner/puskesmas.webp";

const About = () => {
  const infoCards = [
    {
      label: "Jam Layanan",
      value: "Senin-Sabtu 07.30 - 14.30 WIB",
      color: "bg-cyan-400",
    },
    {
      label: "Fasilitas",
      value: "8 Tempat Tidur PONED (24 Jam)",
      color: "bg-pink-400",
    },
    {
      label: "Tenaga Medis",
      value: "6 Dokter & 1 Tenaga Kesehatan",
      color: "bg-teal-500",
    },
    {
      label: "Lokasi",
      value: "Jl. Dadali No. 81, Kota Bandung",
      color: "bg-gray-700 dark:bg-gray-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="rounded-3xl overflow-hidden h-[500px] shadow-lg">
            <img
              src={puskesmasImg}
              alt="UPTD Puskesmas Garuda"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-px bg-secondary h-px p-2 rounded-full"></div>
              <p className="font-semibold text-md dark:text-white">
                Tentang Kami
              </p>
            </div>

            <h2 className="text-5xl font-semibold mb-6 dark:text-white leading-tight">
              Menjadi Garda Terdepan Pelayanan Kesehatan Masyarakat
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              UPTD Puskesmas Garuda merupakan fasilitas pelayanan kesehatan
              tingkat pertama milik Pemerintah Kota Bandung yang berkomitmen
              memberikan pelayanan promotif, preventif, kuratif, dan
              rehabilitatif bagi masyarakat sekitar
            </p>

            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Tentang Kami
            </button>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 rounded-full ${card.color} flex-shrink-0`}
              ></div>
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  {card.label}
                </p>
                <p className="text-base font-bold text-gray-800 dark:text-white leading-tight">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
