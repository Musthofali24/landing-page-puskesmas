import { useState } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import hakdanKewajiban from "../../assets/HakdanKewajiban/HakdanKewajiban.webp";

export const HakdanKewajiban = () => {
  useTitle("Hak dan Kewajiban");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Tentang Kami", href: "#" },
    { label: "Hak dan Kewajiban" },
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
                Tentang Kami
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hak dan Kewajiban
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
              Hak dan Kewajiban Pasien UPTD Puskesmas Garuda
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-3xl mx-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="overflow-hidden">
              <img
                src={hakdanKewajiban}
                alt="Hak dan Kewajiban"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <FaSearchPlus className="text-white text-4xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold text-center">
                Klik untuk memperbesar
              </p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setIsModalOpen(false)}
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
                onClick={() => setIsModalOpen(false)}
                className="sticky top-4 right-4 z-10 ml-auto mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 block"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Image */}
              <div className="px-4 pb-4 md:px-8 md:pb-8">
                <img
                  src={hakdanKewajiban}
                  alt="Hak dan Kewajiban Detail"
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
