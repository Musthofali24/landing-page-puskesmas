import { useState, useEffect } from "react";
import banner1 from "../../assets/banner/1.webp";
import banner2 from "../../assets/banner/2.webp";
import banner3 from "../../assets/banner/3.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      title: "UPTD Puskesmas Garuda",
      subtitle: "Melayani dengan Hati, Sehat Bersama Garuda",
      description:
        '"Kami hadir untuk menjaga kesehatan keluarga Anda dengan pelayanan tulus dan terpercaya."',
    },
    {
      image: banner2,
      title: "Pelayanan Kesehatan Terpadu",
      subtitle: "Solusi Kesehatan untuk Keluarga Indonesia",
      description:
        '"Memberikan layanan kesehatan berkualitas dengan fasilitas modern dan tenaga medis profesional."',
    },
    {
      image: banner3,
      title: "Komitmen Kesehatan Masyarakat",
      subtitle: "Bersama Membangun Indonesia Sehat",
      description:
        '"Inovasi dan dedikasi dalam setiap layanan demi kesejahteraan masyarakat yang lebih baik."',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="dark:bg-black">
      <div className="pt-10 flex justify-center">
        <div className="relative w-[1250px] h-[500px] rounded-xl overflow-hidden group">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Overlay gradient permanen dengan teks */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center text-white px-8 max-w-4xl">
              {/* Animasi teks per slide */}
              <div key={currentSlide} className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-4 tracking-wide">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-3xl font-semibold mb-6 text-teal-200">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-xl italic text-gray-200 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
