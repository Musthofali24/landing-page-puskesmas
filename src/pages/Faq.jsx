import { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import useTitle from "../hooks/useTitle";
import {
  FaChevronDown,
  FaMobileAlt,
  FaCalendarAlt,
  FaFlask,
  FaRibbon,
  FaIdCard,
  FaBrain,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHeart,
  FaSquare,
} from "react-icons/fa";

export const Faq = () => {
  useTitle("FAQ - Puskesmas Garuda");
  const breadcrumbItems = [{ label: "FAQ" }];

  // State untuk mengontrol accordion yang terbuka
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data FAQ
  const faqData = [
    {
      icon: FaMobileAlt,
      question:
        "Bagaimana cara melakukan pendaftaran online di Puskesmas Garuda?",
      answer: (
        <div className="space-y-4">
          <p>
            Pendaftaran online di Puskesmas Garuda dapat dilakukan melalui
            aplikasi <strong>Mobile JKN</strong> yang tersedia di smartphone.
            Layanan ini khusus bagi peserta BPJS Kesehatan yang telah terdaftar
            di Fasilitas Kesehatan Tingkat Pertama (FKTP) Puskesmas Garuda.
          </p>

          <div>
            <p className="font-semibold mb-2">Berikut langkah-langkahnya:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Unduh dan instal aplikasi <strong>Mobile JKN</strong> melalui
                Google Play Store atau App Store.
              </li>
              <li>Login menggunakan NIK dan password akun BPJS Anda.</li>
              <li>
                Pilih menu{" "}
                <strong>Pendaftaran Pelayanan (Antrean Online)</strong>.
              </li>
              <li>
                Pilih <strong>Puskesmas Garuda</strong> sebagai fasilitas
                kesehatan tujuan.
              </li>
              <li>
                Lakukan pendaftaran <strong>H-1</strong> sebelum hari
                pemeriksaan, dimulai pukul <strong>07.30 WIB</strong>.
              </li>
            </ol>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
            <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
              <FaClipboardList className="text-teal-600" />
              Catatan Penting:
            </p>
            <ul className="space-y-1 text-sm text-teal-700 dark:text-teal-400">
              <li>
                • Pendaftaran online ke <strong>poli gigi</strong> hanya dibuka{" "}
                <strong>H-1</strong> dari hari kunjungan, mulai jam{" "}
                <strong>07.30 WIB</strong>.
              </li>
              <li>
                • Pendaftaran online ke <strong>poli umum dan KIA</strong> bisa
                dibuka sejak beberapa hari sebelum rencana berobat.
              </li>
              <li>
                • Pastikan Anda telah terdaftar sebagai peserta BPJS dengan
                faskes Puskesmas Garuda.
              </li>
              <li>
                • Jika mengalami kendala, silakan hubungi petugas informasi atau
                datang langsung ke loket pendaftaran.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: FaCalendarAlt,
      question:
        "Bagaimana jadwal pelayanan Kesehatan Ibu dan Anak (KIA) di Puskesmas Garuda?",
      answer: (
        <div className="space-y-4">
          <p>
            Jadwal pelayanan Kesehatan Ibu dan Anak (KIA) di Puskesmas Garuda
            adalah sebagai berikut:
          </p>

          {/* Senin & Kamis */}
          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
              <FaCalendarAlt className="text-pink-600" />
              Hari Senin & Kamis
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <FaHeart className="text-pink-500 mt-1 shrink-0" />
                Pelayanan ibu hamil
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-pink-500 mt-1 shrink-0" />
                Pemeriksaan kehamilan
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-pink-500 mt-1 shrink-0" />
                Pemeriksaan USG
              </li>
            </ul>
          </div>

          {/* Selasa & Jumat */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              Hari Selasa & Jumat
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <FaHeart className="text-blue-500 mt-1 shrink-0" />
                Imunisasi bayi
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-blue-500 mt-1 shrink-0" />
                Pemeriksaan bayi baru lahir
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-blue-500 mt-1 shrink-0" />
                Pemeriksaan ibu nifas
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-blue-500 mt-1 shrink-0" />
                Pelayanan tumbuh kembang bayi dan balita
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-blue-500 mt-1 shrink-0" />
                Imunisasi susulan untuk anak sekolah
              </li>
            </ul>
          </div>

          {/* Rabu & Sabtu */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-600" />
              Hari Rabu & Sabtu
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-6">
              <li className="flex items-start gap-2">
                <FaHeart className="text-purple-500 mt-1 shrink-0" />
                Pelayanan dan konsultasi KB (pil, kondom, suntik, IUD, Implan)
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-purple-500 mt-1 shrink-0" />
                Pelayanan konsultasi kesehatan reproduksi
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-purple-500 mt-1 shrink-0" />
                Pelayanan IVA Tes dan Sadanis
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-purple-500 mt-1 shrink-0" />
                Pelayanan dan konsultasi Kesehatan calon pengantin
              </li>
              <li className="flex items-start gap-2">
                <FaHeart className="text-purple-500 mt-1 shrink-0" />
                Pelayanan tes Infeksi Menular Seksual (IMS)
              </li>
            </ul>
          </div>

          {/* Waktu Pelayanan */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-1 flex items-center gap-2">
                <FaClock className="text-teal-600" />
                Waktu pelayanan KIA rutin:
              </p>
              <p className="text-teal-700 dark:text-teal-400">
                Pukul <strong>08.00 – 12.00 WIB</strong>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-1 flex items-center gap-2">
                <FaClock className="text-green-600" />
                Pelayanan persalinan:
              </p>
              <p className="text-green-700 dark:text-green-400 flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <strong>Buka 24 jam setiap hari</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: FaFlask,
      question:
        "Bagaimana prosedur pemeriksaan laboratorium di Puskesmas Garuda?",
      answer: (
        <div className="space-y-4">
          <p>
            Untuk melakukan pemeriksaan laboratorium di Puskesmas Garuda,
            berikut adalah prosedurnya:
          </p>

          <div className="bg-linear-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li className="font-medium">
                Daftar terlebih dahulu ke <strong>Poli Umum</strong>.
              </li>
              <li className="font-medium">
                Pasien akan diperiksa oleh dokter Puskesmas Garuda.
              </li>
              <li className="font-medium">
                Jika diperlukan, dokter akan memberikan{" "}
                <strong>surat pengantar</strong> untuk pemeriksaan laboratorium.
              </li>
              <li className="font-medium">
                Dengan surat pengantar tersebut, pasien dapat melanjutkan ke
                bagian laboratorium untuk dilakukan pemeriksaan sesuai indikasi
                medis.
              </li>
            </ol>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
            <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
              <FaClipboardList className="text-amber-600" />
              Catatan:
            </p>
            <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-400">
              <li>
                • Pemeriksaan laboratorium hanya dapat dilakukan setelah
                mendapat <strong>rujukan dari dokter</strong>.
              </li>
              <li>
                • Harap membawa <strong>identitas diri</strong> dan{" "}
                <strong>kartu BPJS</strong> (jika menggunakan).
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                Lokasi:
              </p>
              <p className="text-blue-700 dark:text-blue-400">
                Laboratorium Puskesmas Garuda
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-1 flex items-center gap-2">
                <FaClock className="text-teal-600" />
                Jam operasional:
              </p>
              <p className="text-teal-700 dark:text-teal-400">
                Senin – Jumat, pukul <strong>08.00 – 12.00 WIB</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: FaRibbon,
      question:
        "Apakah Puskesmas Garuda menyediakan layanan pemeriksaan dan terapi HIV serta IMS (seperti sifilis)?",
      answer: (
        <div className="space-y-4">
          <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">
            Ya, Puskesmas Garuda menyediakan layanan pemeriksaan dan pengobatan
            HIV serta Infeksi Menular Seksual (IMS) seperti sifilis, melalui{" "}
            <strong>Poli Sagara</strong>.
          </p>

          {/* Jenis Layanan */}
          <div className="bg-linear-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
              Jenis Layanan:
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <FaSquare className="text-red-500 shrink-0 mt-1 text-sm" />
                Konseling HIV dan IMS
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-red-500 shrink-0 mt-1 text-sm" />
                Pemeriksaan HIV (Rapid Test HIV)
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-red-500 shrink-0 mt-1 text-sm" />
                Pemeriksaan sifilis dan IMS lainnya
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-red-500 shrink-0 mt-1 text-sm" />
                Terapi/pengobatan sesuai hasil pemeriksaan
              </li>
            </ul>
          </div>

          {/* Info Layanan */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                Tempat Layanan:
              </p>
              <p className="text-blue-700 dark:text-blue-400">
                <strong>Poli Sagara</strong> – Puskesmas Garuda
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <p className="font-semibold text-teal-800 dark:text-teal-300 mb-1 flex items-center gap-2">
                <FaClock className="text-teal-600" />
                Hari & Jam Layanan:
              </p>
              <p className="text-teal-700 dark:text-teal-400">
                Senin s.d. Jumat, Pukul <strong>07.00 – 12.00 WIB</strong>
              </p>
            </div>
          </div>

          {/* Syarat */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
              Syarat Pendaftaran:
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>• Datang langsung ke Puskesmas Garuda</li>
              <li>
                • Membawa identitas diri (KTP, KK, atau identitas lain yang
                berlaku)
              </li>
            </ul>
          </div>

          {/* Catatan Penting */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <p className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Catatan Penting:
            </p>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
              <li className="flex items-start gap-2">
                <FaSquare className="text-green-500 shrink-0 mt-1 text-xs" />
                Semua layanan bersifat rahasia dan amanah
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-green-500 shrink-0 mt-1 text-xs" />
                Tidak ada diskriminasi terhadap pasien
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-green-500 shrink-0 mt-1 text-xs" />
                Konseling dilakukan oleh petugas terlatih
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-green-500 shrink-0 mt-1 text-xs" />
                <span>
                  Jika Anda membutuhkan informasi lebih lanjut, silakan hubungi
                  kami melalui nomor kontak Puskesmas atau datang langsung ke
                  loket informasi.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: FaIdCard,
      question: "Bagaimana cara membuat BPJS Gratis di Puskesmas Garuda?",
      answer: (
        <div className="space-y-4">
          <p>
            Puskesmas Garuda{" "}
            <strong>tidak membuka layanan pendaftaran BPJS Gratis</strong>.
            Namun, kami menyediakan layanan{" "}
            <strong>UHC (Universal Health Coverage)</strong> yang merupakan
            program dari Pemerintah Kota Bandung untuk penduduk yang memiliki
            KTP Kota Bandung.
          </p>

          <div className="bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
              Langkah-langkah untuk mendapatkan layanan UHC di Puskesmas Garuda:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Datang ke Puskesmas Garuda dan mendaftar ke{" "}
                  <strong>poli umum</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Periksa kesehatan dan dapatkan{" "}
                  <strong>surat keterangan sakit</strong> dari dokter puskesmas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Setelah itu, hubungi <strong>petugas administrasi</strong>{" "}
                  untuk mengajukan layanan UHC.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
            <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
              <FaClipboardList className="text-amber-600" />
              Syarat:
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              • Memiliki <strong>KTP Kota Bandung</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: FaBrain,
      question:
        "Bagaimana cara pendaftaran ke Poli Psikologi Puskesmas Garuda?",
      answer: (
        <div className="space-y-4">
          <p>
            Untuk mendaftar ke <strong>Poli Psikologi</strong> di Puskesmas
            Garuda, silakan ikuti langkah-langkah berikut:
          </p>

          <div className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>Datang langsung</strong> ke loket pendaftaran
                  Puskesmas Garuda.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Daftar ke <strong>Poli Umum</strong> terlebih dahulu untuk
                  mendapat rujukan dari dokter.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Setelah mendapat <strong>surat rujukan</strong>, pasien dapat
                  melanjutkan ke Poli Psikologi untuk mendapat layanan konseling
                  atau terapi.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
            <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
              <FaClipboardList className="text-teal-600" />
              Catatan:
            </p>
            <ul className="space-y-1 text-sm text-teal-700 dark:text-teal-400">
              <li>
                • Layanan Poli Psikologi <strong>memerlukan rujukan</strong>{" "}
                dari dokter Puskesmas.
              </li>
              <li>
                • Bawa <strong>identitas diri</strong> dan{" "}
                <strong>kartu BPJS</strong> (jika ada).
              </li>
              <li>
                • Untuk informasi jadwal dan ketersediaan psikolog, silakan
                hubungi petugas informasi atau loket pendaftaran.
              </li>
            </ul>
          </div>
        </div>
      ),
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
                Informasi Layanan
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              FAQ (Frequently Asked Questions)
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Temukan jawaban untuk pertanyaan yang sering diajukan seputar
              layanan kesehatan di Puskesmas Garuda. Jika pertanyaan Anda tidak
              ada di daftar ini, silakan hubungi kami melalui kontak yang
              tersedia.
            </p>
          </div>

          {/* FAQ Accordion Section */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon */}
                    <div className="bg-teal-100 dark:bg-teal-900/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <faq.icon className="text-teal-600 dark:text-teal-400 text-xl" />
                    </div>

                    {/* Question Text */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <FaChevronDown
                    className={`text-teal-600 dark:text-teal-400 text-xl shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
