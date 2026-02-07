import { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import useTitle from "../hooks/useTitle";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import standarPelayanan1 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-1.webp";
import standarPelayanan2 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-2.webp";
import standarPelayanan3 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-3.webp";
import standarPelayanan4 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-4.webp";
import standarPelayanan5 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-5.webp";
import standarPelayanan6 from "../assets/StandarPelayananGaruda/StandarPelayananGaruda-6.webp";

export const StandarPelayanan = () => {
  useTitle("Standar Pelayanan");
  const [selectedImage, setSelectedImage] = useState(null);

  // Breadcrumb items
  const breadcrumbItems = [{ label: "Standar Pelayanan" }];

  const images = [
    standarPelayanan1,
    standarPelayanan2,
    standarPelayanan3,
    standarPelayanan4,
    standarPelayanan5,
    standarPelayanan6,
  ];

  const captions = [
    "Pelayanan Tindakan Gawat Darurat",
    "Pelayanan Skrining Dewasa-Lansia",
    "Pelayanan Umum Dewasa-Lansia",
    "Pelayanan Laboratorium",
    "Pelayanan Kesehatan Gigi dan Mulut",
    "Pelayanan Pemeriksaan PONED",
  ];

  return (
    <PageLayout>
      <div className="bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="bg-white dark:bg-black pt-16">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-500"></div>
              <p className="font-semibold text-lg text-teal-500">
                Standar Pelayanan
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Standar Pelayanan Garuda
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
              Standar Pelayanan UPTD Puskesmas Garuda
            </p>
          </div>
        </div>

        {/* Images Grid Section */}
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`Standar Pelayanan Garuda ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <FaSearchPlus className="text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">
                    {captions[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md"></div>

            {/* Modal Content */}
            <div
              className="relative max-w-6xl w-full max-h-[90vh] bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="sticky top-4 right-4 z-10 ml-auto mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 block"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Image */}
              <div className="px-4 pb-4 md:px-8 md:pb-8">
                <img
                  src={selectedImage}
                  alt="Standar Pelayanan Detail"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
