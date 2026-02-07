import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { staffApi } from "../../services/api";
import defaultImage from "../../assets/default-staff.webp";

const Staff = () => {
  // Helper function to get image URL
  const getImageUrl = (photo) => {
    if (!photo) return defaultImage;
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
    const apiBaseURL = baseURL.replace("/api", "");
    return `${apiBaseURL}/storage/${photo}`;
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  const [allStaff, setAllStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch staff data from API
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoading(true);
        // Fetch staff with limit 12 (4 slides x 3 cards for desktop)
        const response = await staffApi.getAllNoPagination({ limit: 12 });
        if (response.data.success) {
          setAllStaff(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching staff:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

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
    <div className="bg-linear-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
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
          {loading ? (
            <div className="overflow-hidden py-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center animate-pulse"
                  >
                    {/* Circle Avatar Skeleton */}
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>

                    {/* Staff Info Skeleton */}
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>

                    {/* Description Skeleton */}
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/5 mx-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : allStaff.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">
                Tidak ada data staff
              </p>
            </div>
          ) : (
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
                        key={staff.id || index}
                        className="min-w-full px-2"
                        style={{ userSelect: "none" }}
                      >
                        <div className="max-w-md mx-auto">
                          <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-[500px]">
                            {/* Portrait Image */}
                            <img
                              src={getImageUrl(staff.photo)}
                              alt={staff.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                e.target.src = defaultImage;
                              }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

                            {/* Staff Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">
                                {staff.name}
                              </h3>
                              <p className="text-base font-semibold text-teal-300 mb-3">
                                {staff.specialty}
                              </p>
                              <p className="text-sm text-gray-200 leading-tight line-clamp-2">
                                {staff.description}
                              </p>
                            </div>
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
                                  key={staff.id || index}
                                  className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-[500px]"
                                >
                                  {/* Portrait Image */}
                                  <img
                                    src={getImageUrl(staff.photo)}
                                    alt={staff.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                      e.target.src = defaultImage;
                                    }}
                                  />

                                  {/* Gradient Overlay */}
                                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

                                  {/* Staff Info */}
                                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">
                                      {staff.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-teal-300 mb-3">
                                      {staff.specialty}
                                    </p>
                                    <p className="text-sm text-gray-200 leading-tight line-clamp-2">
                                      {staff.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )
                    )}
              </div>
            </div>
          )}

          {/* Navigation Dots */}
          {!loading && allStaff.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Staff;
