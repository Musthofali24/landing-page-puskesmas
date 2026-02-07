import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { blogApi } from "../../services/api";
import banner1 from "../../assets/banner/1.webp";
import defaultImage from "../../assets/default-blog.webp";

const Blog = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogApi.getLatest(6);
        if (response.data.success) {
          setBlogPosts(response.data.data.data || response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Fallback to dummy data if API fails
        setBlogPosts([
          {
            featured_image: banner1,
            category: "kesehatan-umum",
            title: "Judul Blog",
            excerpt:
              "Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia bersama keluarga.",
            author: "Admin Puskesmas",
            read_time: 5,
            slug: "judul-blog",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Category label mapping
  const getCategoryLabel = (category) => {
    const labels = {
      "berita-kesehatan": "Berita Kesehatan",
      "promosi-kesehatan": "Promosi Kesehatan",
      "artikel-kesehatan": "Artikel Kesehatan",
      "kegiatan-puskesmas": "Kegiatan Puskesmas",
    };
    return labels[category] || "Kesehatan Umum";
  };

  // Get image URL with error handling
  const getImageUrl = (image) => {
    if (!image) return defaultImage;
    if (image.startsWith("http")) return image;
    const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
    const storageURL = baseURL.replace("/api", "");
    return `${storageURL}/storage/${image}`;
  };

  // Handle image error - fallback to default image
  const handleImageError = (e) => {
    e.target.src = defaultImage;
    e.target.onerror = null; // Prevent infinite loop
  };

  return (
    <div className="max-w-7xl px-4 py-16 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-px bg-secondary h-px p-2 rounded-full"></div>
            <h3 className="font-semibold text-md dark:text-white">Postingan</h3>
          </div>
          <h2 className="text-5xl font-bold mb-4 dark:text-white">
            Postingan Terbaru
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
            Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia
            bersama keluarga.
          </p>
        </div>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-6 md:mt-0 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Lihat Semua Post
        </button>
      </div>

      {/* Blog Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="h-56 bg-gray-300 dark:bg-gray-700"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Category Skeleton */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-3"></div>

                {/* Title Skeleton */}
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-3"></div>

                {/* Description Skeleton */}
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>

                {/* Author & Read Time Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                  </div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400">
            Tidak ada postingan blog
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id || index}
              to={`/blog/${post.slug}`}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={getImageUrl(post.featured_image)}
                  alt={post.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block text-cyan-500 dark:text-cyan-400 text-sm font-semibold mb-3">
                  {getCategoryLabel(post.category)}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read Time */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        post.author || "Admin"
                      )}&background=0D8ABC&color=fff`}
                      alt={post.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {post.author || "Admin Puskesmas"}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.read_time}min read
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
