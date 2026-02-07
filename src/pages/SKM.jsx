import PageLayout from "../components/Layout/PageLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import useTitle from "../hooks/useTitle";

export const SKM = () => {
  useTitle("SKM");
  // Breadcrumb items
  const breadcrumbItems = [{ label: "SKM" }];

  return (
    <PageLayout>
      <div className="bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="bg-white dark:bg-black pt-16">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-teal-500"></div>
              <p className="font-semibold text-lg text-teal-500">
                Survey Kepuasan Masyarakat
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Survey Kepuasan Masyarakat
            </h1>
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-5xl mt-4">
              Bantu kami meningkatkan kualitas pelayanan dengan mengisi survey
              kepuasan masyarakat
            </p>
          </div>
        </div>

        {/* Survey Form Section */}
        <div className="max-w-7xl px-4 py-12 mx-auto">
          <div className="bg-white dark:bg-black overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "150%" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfXgIldjY4Cx1XlfzWbD2u2TvjHlfW2eSLJgfviX34Yx78yww/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Memuat…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
