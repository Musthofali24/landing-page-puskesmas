import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogApi } from "../services/api";
import PageLayout from "../components/Layout/PageLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import useTitle from "../hooks/useTitle";
import defaultImage from "../assets/default-blog.webp";
import {
  FaClock,
  FaCalendar,
  FaUser,
  FaEye,
  FaArrowLeft,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useTitle(blog?.title || "Detail Blog - Puskesmas Garuda");

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Fetch blog detail
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await blogApi.getBySlug(slug);
        if (response.data.success) {
          setBlog(response.data.data);

          // Fetch related blogs
          const relatedResponse = await blogApi.getRelated(slug, 3);
          if (relatedResponse.data.success) {
            setRelatedBlogs(relatedResponse.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        // Redirect to blogs page if not found
        navigate("/blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug, navigate]);

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

  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      "berita-kesehatan":
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "promosi-kesehatan":
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "artikel-kesehatan":
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "kegiatan-puskesmas":
        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    };
    return (
      colors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    );
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  // Share functions
  const shareUrl = window.location.href;
  const shareTitle = blog?.title || "";

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    const shareLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    };

    if (shareLinks[platform]) {
      window.open(shareLinks[platform], "_blank", "width=600,height=400");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-8"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!blog) {
    return null;
  }

  const breadcrumbItems = [
    { label: "Postingan", path: "/blogs" },
    { label: blog.title },
  ];

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span className="font-medium">Kembali</span>
        </button>

        {/* Blog Header */}
        <div className="mb-8">
          {/* Category Badge */}
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(
              blog.category
            )}`}
          >
            {getCategoryLabel(blog.category)}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-teal-600 dark:text-teal-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-teal-600 dark:text-teal-400" />
              <span>{formatDate(blog.published_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-teal-600 dark:text-teal-400" />
              <span>{blog.read_time} menit baca</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-teal-600 dark:text-teal-400" />
              <span>{blog.views_count} views</span>
            </div>
          </div>

          {/* Share Button */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white rounded-full transition-colors"
            >
              <FaShareAlt />
              <span>Bagikan</span>
            </button>

            {/* Share Menu */}
            {showShareMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-10 min-w-[200px]">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                >
                  <FaFacebook className="text-blue-600 text-xl" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                >
                  <FaTwitter className="text-sky-500 text-xl" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                >
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                >
                  <FaLink className="text-gray-600 dark:text-gray-400 text-xl" />
                  <span>{copied ? "Tersalin!" : "Salin Link"}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={getImageUrl(blog.featured_image)}
            alt={blog.title}
            onError={handleImageError}
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Blog Content - Rich Text */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageUrl(relatedBlog.featured_image)}
                      alt={relatedBlog.title}
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        relatedBlog.category
                      )}`}
                    >
                      {getCategoryLabel(relatedBlog.category)}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{relatedBlog.read_time} menit</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{relatedBlog.views_count}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogDetail;
