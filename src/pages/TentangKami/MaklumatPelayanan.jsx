import PageLayout from "../../components/Layout/PageLayout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import useTitle from "../../hooks/useTitle";

export const MaklumatPelayanan = () => {
  useTitle("Maklumat Pelayanan");
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Tentang Kami", href: "#" },
    { label: "Maklumat Pelayanan" },
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
                Tentang Kami
              </p>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Maklumat Pelayanan
            </h1>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mt-4">
              Konten akan segera ditambahkan
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
