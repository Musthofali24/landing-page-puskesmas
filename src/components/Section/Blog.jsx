import banner1 from "../../assets/banner/1.webp";
import banner2 from "../../assets/banner/2.webp";
import banner3 from "../../assets/banner/3.webp";

const Blog = () => {
  const blogPosts = [
    {
      image: banner1,
      category: "Kesehatan Umum",
      title: "Judul Blog",
      description:
        "Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia bersama keluarga.",
      author: "Admin Puskesmas",
      authorAvatar:
        "https://ui-avatars.com/api/?name=Admin+Puskesmas&background=0D8ABC&color=fff",
      readTime: "5min read",
    },
    {
      image: banner2,
      category: "Kesehatan Umum",
      title: "Judul Blog",
      description:
        "Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia bersama keluarga.",
      author: "Admin Puskesmas",
      authorAvatar:
        "https://ui-avatars.com/api/?name=Admin+Puskesmas&background=0D8ABC&color=fff",
      readTime: "5min read",
    },
    {
      image: banner3,
      category: "Kesehatan Umum",
      title: "Judul Blog",
      description:
        "Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia bersama keluarga.",
      author: "Admin Puskesmas",
      authorAvatar:
        "https://ui-avatars.com/api/?name=Admin+Puskesmas&background=0D8ABC&color=fff",
      readTime: "5min read",
    },
  ];

  return (
    <div className="max-w-7xl px-4 py-16 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Blog Post
          </div>
          <h2 className="text-5xl font-bold mb-4 dark:text-white">
            Latest Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
            Sumber informasi terpercaya untuk hidup lebih sehat dan bahagia
            bersama keluarga.
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
          Lihat Semua Post
        </button>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <span className="inline-block text-cyan-500 dark:text-cyan-400 text-sm font-semibold mb-3">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Author & Read Time */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {post.author}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
