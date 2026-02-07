import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { blogApi } from "../services/api";
import PageLayout from "../components/Layout/PageLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import useTitle from "../hooks/useTitle";
import defaultImage from "../assets/default-blog.webp";
import {
  FaSearch,
  FaFilter,
  FaClock,
  FaCalendar,
  FaUser,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";

export const AllBlogs = () => {
  useTitle("Semua Postingan - Puskesmas Garuda");

  const [searchParams, setSearchParams] = useSearchParams();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const [latestPosts, setLatestPosts] = useState([]);

  const breadcrumbItems = [{ label: "Postingan" }];

  // Categories
  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "berita-kesehatan", label: "Berita Kesehatan" },
    { value: "promosi-kesehatan", label: "Promosi Kesehatan" },
    { value: "artikel-kesehatan", label: "Artikel Kesehatan" },
    { value: "kegiatan-puskesmas", label: "Kegiatan Puskesmas" },
  ];

  // Category label mapping
  const getCategoryLabel = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.label : "Kesehatan Umum";
  };

  // Get image URL with error handling
  const getImageUrl = (image) => {
    if (!image) return defaultImage;
    if (image.startsWith("http")) return image;
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
    const storageURL = baseURL.replace("/api", "");
    return `${storageURL}/storage/${image}`;
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = defaultImage;
    e.target.onerror = null;
  };

  // Fetch blogs based on filters
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const params = {
          page: currentPage,
          per_page: 12,
        };

        if (searchTerm) {
          params.search = searchTerm;
        }

        let response;
        if (selectedCategory && selectedCategory !== "all") {
          response = await blogApi.getByCategory(selectedCategory, params);
        } else {
          response = await blogApi.getAll(params);
        }

        if (response.data.success) {
          const data = response.data.data;
          setBlogPosts(data.data || data);
          setTotalPages(data.last_page || 1);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchTerm, selectedCategory, currentPage]);

  // Fetch latest posts for sidebar
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await blogApi.getLatest(5);
        if (response.data.success) {
          setLatestPosts(response.data.data.data || response.data.data);
        }
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    updateUrlParams({ search: searchTerm, page: 1 });
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateUrlParams({ category, page: 1 });
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateUrlParams({ page });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update URL params
  const updateUrlParams = (newParams) => {
    const params = {
      ...(searchTerm && { search: searchTerm }),
      ...(selectedCategory !== "all" && { category: selectedCategory }),
      page: currentPage,
      ...newParams,
    };

    // Remove empty params
    Object.keys(params).forEach((key) => {
      if (!params[key] || params[key] === "all" || params[key] === 1) {
        delete params[key];
      }
    });

    setSearchParams(params);
  };

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setCurrentPage(1);
    setSearchParams({});
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <PageLayout>
      {/* Hero Section with Breadcrumb */}
      <div className="bg-white dark:bg-black">
        <div className="pt-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-8 bg-teal-500"></div>
                <h3 className="font-semibold text-lg text-teal-500">
                  Informasi Kesehatan
                </h3>
              </div>
              <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
                Postingan
              </h1>
              <Breadcrumb items={breadcrumbItems} />
              <p className="text-xl text-gray-400 max-w-2xl">
                Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia
                bersama keluarga
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari artikel kesehatan..."
                  className="w-full px-6 py-4 pr-32 rounded-full text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg placeholder-gray-300 dark:placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2 font-semibold"
                >
                  <FaSearch />
                  <span className="hidden sm:inline">Cari</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-8 bg-white dark:bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Category Filter */}
                <div className="rounded-2xl dark:bg-gray-900 shadow-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaFilter className="text-teal-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Kategori
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => handleCategoryChange(category.value)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                          selectedCategory === category.value
                            ? "bg-teal-500 text-white font-semibold shadow-md"
                            : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>

                  {/* Clear Filters */}
                  {(searchTerm || selectedCategory !== "all") && (
                    <button
                      onClick={clearFilters}
                      className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold"
                    >
                      <FaTimes />
                      <span>Hapus Semua Filter</span>
                    </button>
                  )}
                </div>

                {/* Latest Posts */}
                <div className="dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Postingan Terbaru
                  </h3>

                  {latestPosts.length > 0 ? (
                    <div className="space-y-4">
                      {latestPosts.slice(0, 5).map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.slug}`}
                          className="group cursor-pointer block"
                        >
                          <div className="flex gap-3">
                            <img
                              src={getImageUrl(post.featured_image)}
                              alt={post.title}
                              onError={handleImageError}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors line-clamp-2 mb-1">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {formatDate(
                                  post.published_at || post.created_at
                                )}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                      Tidak ada postingan terbaru
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {/* Active Filters */}
              {(searchTerm || selectedCategory !== "all") && (
                <div className="mb-6 flex flex-wrap gap-2 items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">
                    Filter aktif:
                  </span>
                  {searchTerm && (
                    <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold flex items-center gap-2">
                      Pencarian: "{searchTerm}"
                      <button
                        onClick={() => {
                          setSearchTerm("");
                          setCurrentPage(1);
                          updateUrlParams({ search: "", page: 1 });
                        }}
                        className="hover:text-teal-900 dark:hover:text-teal-100"
                      >
                        <FaTimes />
                      </button>
                    </span>
                  )}
                  {selectedCategory !== "all" && (
                    <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold flex items-center gap-2">
                      {getCategoryLabel(selectedCategory)}
                      <button
                        onClick={() => {
                          setSelectedCategory("all");
                          setCurrentPage(1);
                          updateUrlParams({ category: "all", page: 1 });
                        }}
                        className="hover:text-teal-900 dark:hover:text-teal-100"
                      >
                        <FaTimes />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Loading State */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden animate-pulse"
                    >
                      <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                      <div className="p-5">
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : blogPosts.length === 0 ? (
                // Empty State
                <div className="text-center py-20 dark:bg-black rounded-2xl">
                  <div className="flex justify-center mb-4">
                    <FaFileAlt className="text-6xl text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Tidak Ada Postingan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Tidak ada postingan yang sesuai dengan filter Anda
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                  >
                    Hapus Semua Filter
                  </button>
                </div>
              ) : (
                <>
                  {/* Blog Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={getImageUrl(post.featured_image)}
                            alt={post.title}
                            onError={handleImageError}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
                              {getCategoryLabel(post.category)}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          {/* Title */}
                          <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <FaCalendar className="text-cyan-500" />
                              <span>
                                {formatDate(
                                  post.published_at || post.created_at
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaClock className="text-cyan-500" />
                              <span>{post.read_time || 5} min</span>
                            </div>
                          </div>

                          {/* Author */}
                          <div className="flex items-center gap-2 mt-3">
                            <img
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                post.author || "Admin"
                              )}&background=0D8ABC&color=fff`}
                              alt={post.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {post.author || "Admin Puskesmas"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentPage === 1
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-white dark:bg-gray-800 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-700 shadow-md"
                        }`}
                      >
                        Previous
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, index) => {
                          const page = index + 1;

                          // Show first page, last page, current page, and adjacent pages
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                                  currentPage === page
                                    ? "bg-cyan-500 text-white shadow-lg"
                                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-gray-700 shadow-md"
                                }`}
                              >
                                {page}
                              </button>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return (
                              <span
                                key={page}
                                className="w-10 h-10 flex items-center justify-center text-gray-400"
                              >
                                ...
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentPage === totalPages
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                            : "bg-white dark:bg-gray-800 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-700 shadow-md"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AllBlogs;
