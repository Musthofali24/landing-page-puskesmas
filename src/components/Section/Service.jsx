import logoupt from "../../assets/logoupt.webp";

const Service = () => {
  return (
    <div className="max-w-7xl px-4 py-15 mx-auto mt-5 min-h-screen">
      {/* Section Title */}
      <div className="">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-px bg-third h-px p-2 rounded-full"></div>
          <h3 className="font-semibold text-md dark:text-white">
            Layanan Kami
          </h3>
        </div>
        <h1 className="text-center text-5xl mt-5 font-semibold dark:text-white">
          Layanan Kesehatan Unggulan Kami
        </h1>
      </div>
      {/* Section Card */}
      <div className="mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Pemeriksaan Umum */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-teal-400 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Pemeriksaan Umum
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>

          {/* Card 2 - Pelayanan KIA - KB */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-pink-400 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Pelayanan KIA - KB
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>

          {/* Card 3 - Pelayanan Gigi & Mulut */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-sky-300 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Pelayanan Gigi & Mulut
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>

          {/* Card 4 - Pelayanan PONED 24 Jam */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-teal-300 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Pelayanan PONED 24 Jam
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>

          {/* Card 5 - Laboratorium & Imunisasi */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-sky-200 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Laboratorium & Imunisasi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>

          {/* Card 6 - Edukasi Kesehatan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="w-20 h-20 rounded-full bg-pink-300 mb-6"></div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Edukasi Kesehatan
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              "Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan
              tulus dan terpercaya."
            </p>
            <button className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
              Lebih Lanjut
            </button>
          </div>
        </div>
      </div>

      {/* CTA Card Section */}
      <div className="mt-8">
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2">
              <p className="text-primary font-semibold text-sm mb-3">
                Hubungi Kami
              </p>
              <h2 className="text-4xl font-bold mb-4 dark:text-white">
                <span className="text-third">Kunjungi Kami</span> untuk
                <br />
                Pelayanan Kesehatan Terbaik
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Puskesmas Garuda siap memberikan pelayanan kesehatan menyeluruh
                untuk Anda dan keluarga. Dapatkan pemeriksaan umum, layanan
                gigi, KIA-KB, hingga PONED 24 jam
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-third hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                  Hubungi Kami
                </button>
                <button className="bg-primary hover:bg-pink-300 cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                  Lihat Jadwal Dokter
                </button>
              </div>
            </div>

            {/* Right Illustration - 1 column */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <img
                src={logoupt}
                alt="Medical Illustration"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
