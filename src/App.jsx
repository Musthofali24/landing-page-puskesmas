import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Banner from "./components/Section/Banner";
import Service from "./components/Section/Service";
import Staff from "./components/Section/Staff";
import Stats from "./components/Section/Stats";
import About from "./components/Section/About";
import Blog from "./components/Section/Blog";

import { KlasterManajemen } from "./pages/IntegrasiLayanan/KlasterManajemen";
import { KlasterPelayananKIA } from "./pages/IntegrasiLayanan/KlasterPelayananKIA";
import { KlasterPelayananKDLU } from "./pages/IntegrasiLayanan/KlasterPelayananKDLU";
import { KlasterPenanggulangan } from "./pages/IntegrasiLayanan/KlasterPenanggulangan";
import { KlasterDukungan } from "./pages/IntegrasiLayanan/KlasterDukungan";
import { Garasi } from "./pages/InovasiKami/Garasi";
import { Panda } from "./pages/InovasiKami/Panda";
import { GEMPITA } from "./pages/InovasiKami/GEMPITA";
import { Sagara } from "./pages/InovasiKami/Sagara";
import { SSG } from "./pages/InovasiKami/SSG";
import { ProfilPuskesmas } from "./pages/TentangKami/ProfilPuskesmas";
import { MaklumatPelayanan } from "./pages/TentangKami/MaklumatPelayanan";
import { StrukturOrganisasi } from "./pages/TentangKami/StrukturOrganisasi";
import { AlurPelayanan } from "./pages/TentangKami/AlurPelayanan";
import { VisiMisi } from "./pages/TentangKami/VisiMisi";
import { LayananKami } from "./pages/TentangKami/LayananKami";
import { Motto } from "./pages/TentangKami/Motto";
import { TujuanPuskesmas } from "./pages/TentangKami/TujuanPuskesmas";
import { TarifLayanan } from "./pages/TentangKami/TarifLayanan";
import { HakdanKewajiban } from "./pages/TentangKami/HakdanKewajiban";
import { Faq } from "./pages/Faq";
import { StandarPelayanan } from "./pages/StandarPelayanan";
import { SKM } from "./pages/SKM";
import { BeritaKesehatan } from "./pages/Artikel/BeritaKesehatan";
import { PromosiKesehatan } from "./pages/Artikel/PromosiKesehatan";
import { ArtikelKesehatan } from "./pages/Artikel/ArtikelKesehatan";
import { KegiatanPuskesmas } from "./pages/Artikel/KegiatanPuskesmas";
import { ManajemenInti } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenInti";
import { ManajemenArsip } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenArsip";
import { ManajemenMutu } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenMutu";
import { ManajemenKeuangan } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenKeuangan";
import { ManajemenSDM } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenSDM";
import { ManajemenSarana } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenSarana";
import { ManajemenDigital } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenDigital";
import { ManajemenJejaring } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenJejaring";
import { ManajemenPemberdayaan } from "./pages/IntegrasiLayanan/KlasterManajemen/ManajemenPemberdayaan";

function App() {
  // Initialize darkMode dari localStorage langsung
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply dark class saat component mount dan saat darkMode berubah
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Home Page Component
  const HomePage = () => (
    <div className="font-openSans bg-white dark:bg-black min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navbar darkMode={darkMode} />
      <Banner darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Service darkMode={darkMode} />
      <Staff darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Integrasi Layanan Primer Routes */}
        <Route
          path="/integrasi-layanan/klaster-manajemen"
          element={<KlasterManajemen darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-inti"
          element={<ManajemenInti darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-mutu-pelayanan"
          element={<ManajemenMutu darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-arsip"
          element={<ManajemenArsip darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-keuangan-aset-bmd"
          element={<ManajemenKeuangan darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-sdm"
          element={<ManajemenSDM darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-sarana-prasarana"
          element={<ManajemenSarana darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-sistem-informasi"
          element={<ManajemenDigital darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-jejaring"
          element={<ManajemenJejaring darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-manajemen/manajemen-pemberdayaan-masyarakat"
          element={<ManajemenPemberdayaan darkMode={darkMode} />}
        />
        <Route
          path="/integrasi-layanan/klaster-pelayanan-kia"
          element={<KlasterPelayananKIA />}
        />
        <Route
          path="/integrasi-layanan/klaster-pelayanan-kdlu"
          element={<KlasterPelayananKDLU />}
        />
        <Route
          path="/integrasi-layanan/klaster-penanggulangan"
          element={<KlasterPenanggulangan />}
        />
        <Route
          path="/integrasi-layanan/klaster-dukungan"
          element={<KlasterDukungan />}
        />
        <Route path="/inovasi-kami/garasi" element={<Garasi />} />
        <Route path="/inovasi-kami/panda" element={<Panda />} />
        <Route path="/inovasi-kami/gempita" element={<GEMPITA />} />
        <Route path="/inovasi-kami/sagara" element={<Sagara />} />
        <Route path="/inovasi-kami/ssg" element={<SSG />} />

        <Route
          path="/tentang-kami/profil-puskesmas"
          element={<ProfilPuskesmas />}
        />
        <Route
          path="/tentang-kami/maklumat-pelayanan"
          element={<MaklumatPelayanan />}
        />
        <Route
          path="/tentang-kami/struktur-organisasi"
          element={<StrukturOrganisasi />}
        />
        <Route
          path="/tentang-kami/alur-pelayanan"
          element={<AlurPelayanan />}
        />
        <Route path="/tentang-kami/visi-misi" element={<VisiMisi />} />
        <Route path="/tentang-kami/layanan-kami" element={<LayananKami />} />
        <Route path="/tentang-kami/motto" element={<Motto />} />
        <Route
          path="/tentang-kami/tujuan-puskesmas"
          element={<TujuanPuskesmas />}
        />
        <Route path="/tentang-kami/tarif-layanan" element={<TarifLayanan />} />
        <Route
          path="/tentang-kami/hak-dan-kewajiban"
          element={<HakdanKewajiban />}
        />
        <Route path="/artikel/berita-kesehatan" element={<BeritaKesehatan />} />
        <Route
          path="/artikel/promosi-kesehatan"
          element={<PromosiKesehatan />}
        />
        <Route
          path="/artikel/artikel-kesehatan"
          element={<ArtikelKesehatan />}
        />
        <Route
          path="/artikel/kegiatan-puskesmas"
          element={<KegiatanPuskesmas />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/standar-pelayanan" element={<StandarPelayanan />} />
        <Route path="/skm" element={<SKM />} />
      </Routes>
    </Router>
  );
}

export default App;
