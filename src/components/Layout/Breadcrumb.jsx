import { FaChevronRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {/* Home Link */}
        <li>
          <a
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-1"
          >
            <span>Home</span>
          </a>
        </li>

        {/* Breadcrumb Items */}
        {items &&
          items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <FaChevronRight className="text-gray-400 dark:text-gray-600 text-xs" />
                {isLast ? (
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
