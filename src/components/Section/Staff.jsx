import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Staff = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  // Flatten data untuk mobile - setiap card jadi slide individual
  const allStaff = [
    {
      name: "Bidan Dewi Kurniasih, Amd.Keb",
      specialty: "Pelayanan KIA - KB",
      description:
        "Berpengalaman dalam pemeriksaan ibu hamil, nifas, dan bayi baru lahir, serta pelayanan keluarga berencana.",
      color: "bg-teal-500",
    },
    {
      name: "Etih Kusniawati, Amd.Keb",
      specialty: "Pelayanan KIA - KB",
      description:
        "Berpengalaman dalam pemeriksaan ibu hamil, nifas, dan bayi baru lahir, serta pelayanan keluarga berencana.",
      color: "bg-pink-400",
    },
    {
      name: "drg. Raden Syefti Febriana",
      specialty: "Pelayanan Gigi & Mulut",
      description:
        "Berpengalaman dalam pemeriksaan ibu hamil, nifas, dan bayi baru lahir, serta pelayanan keluarga berencana.",
      color: "bg-sky-400",
    },
    {
      name: "dr. Ahmad Fauzi, Sp.PD",
      specialty: "Dokter Spesialis Penyakit Dalam",
      description:
        "Menangani berbagai penyakit dalam seperti diabetes, hipertensi, dan penyakit jantung dengan profesional.",
      color: "bg-teal-500",
    },
    {
      name: "dr. Siti Nurhaliza, Sp.A",
      specialty: "Dokter Spesialis Anak",
      description:
        "Ahli dalam perawatan kesehatan anak dari bayi hingga remaja dengan pendekatan ramah anak.",
      color: "bg-pink-400",
    },
    {
      name: "dr. Budi Santoso, Sp.OG",
      specialty: "Dokter Spesialis Kandungan",
      description:
        "Spesialis dalam kesehatan reproduksi wanita, kehamilan, dan persalinan dengan pengalaman luas.",
      color: "bg-sky-400",
    },
    {
      name: "dr. Rina Susanti, Sp.M",
      specialty: "Dokter Spesialis Mata",
      description:
        "Menangani berbagai keluhan mata seperti katarak, glaukoma, dan gangguan penglihatan lainnya.",
      color: "bg-teal-500",
    },
    {
      name: "Ns. Lilis Suryani, S.Kep",
      specialty: "Perawat Profesional",
      description:
        "Perawat berpengalaman dalam memberikan asuhan keperawatan berkualitas untuk semua pasien.",
      color: "bg-pink-400",
    },
    {
      name: "dr. Hendra Wijaya",
      specialty: "Dokter Umum",
      description:
        "Melayani pemeriksaan kesehatan umum, konsultasi medis, dan penanganan penyakit ringan hingga sedang.",
      color: "bg-sky-400",
    },
  ];

  // Hitung total slides berdasarkan screen size (akan diupdate via useEffect)
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = isMobile
    ? allStaff.length
    : Math.ceil(allStaff.length / 3);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        setPrevTranslate(-next * 100);
        setCurrentTranslate(-next * 100);
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides, isDragging]);

  // Touch/Mouse handlers untuk drag
  const handleDragStart = (e) => {
    setIsDragging(true);
    const posX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    setStartPos(posX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentPosition = e.type.includes("mouse")
      ? e.pageX
      : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    const movePercent = (diff / sliderRef.current.offsetWidth) * 100;

    setCurrentTranslate(prevTranslate + movePercent);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -20 && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      setPrevTranslate(-(currentSlide + 1) * 100);
      setCurrentTranslate(-(currentSlide + 1) * 100);
    } else if (movedBy > 20 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setPrevTranslate(-(currentSlide - 1) * 100);
      setCurrentTranslate(-(currentSlide - 1) * 100);
    } else {
      setCurrentTranslate(prevTranslate);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setPrevTranslate(-index * 100);
    setCurrentTranslate(-index * 100);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-7xl px-4 mx-auto">
        {/* Section Title */}
        <div className="p-3">
          <div className="flex items-center gap-2">
            <div className="w-px bg-third h-px p-2 rounded-full"></div>
            <h3 className="font-semibold text-md dark:text-white">
              Tenaga Medis Kami
            </h3>
          </div>
          <h1 className="text-5xl mt-5 font-semibold dark:text-white">
            Kenali Dokter & Tenaga Kesehatan Kami
          </h1>
        </div>

        {/* Slider Container */}
        <div className="mt-12 relative">
          <div className="overflow-hidden py-3">
            {/* Cards dengan horizontal slide */}
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(${currentTranslate}%)` }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {isMobile
                ? // Mobile: 1 card per slide
                  allStaff.map((staff, index) => (
                    <div
                      key={index}
                      className="min-w-full px-2"
                      style={{ userSelect: "none" }}
                    >
                      <div className="max-w-md mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">
                          {/* Circle Avatar */}
                          <div className="flex justify-center mb-6">
                            <div
                              className={`w-32 h-32 rounded-full ${staff.color}`}
                            ></div>
                          </div>

                          {/* Staff Info */}
                          <h3 className="text-xl font-bold mb-2 dark:text-white">
                            {staff.name}
                          </h3>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            {staff.specialty}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {staff.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : // Desktop: 3 cards per slide
                  Array.from({ length: Math.ceil(allStaff.length / 3) }).map(
                    (_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="min-w-full px-2"
                        style={{ userSelect: "none" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {allStaff
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((staff, index) => (
                              <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
                              >
                                {/* Circle Avatar */}
                                <div className="flex justify-center mb-6">
                                  <div
                                    className={`w-32 h-32 rounded-full ${staff.color}`}
                                  ></div>
                                </div>

                                {/* Staff Info */}
                                <h3 className="text-xl font-bold mb-2 dark:text-white">
                                  {staff.name}
                                </h3>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                  {staff.specialty}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {staff.description}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )
                  )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-third w-8"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
