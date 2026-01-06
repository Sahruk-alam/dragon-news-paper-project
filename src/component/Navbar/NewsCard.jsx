import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const [isExpanded, setIsExpanded] = useState(false);

  const date = new Date(author.published_date).toLocaleDateString();

  // Function to truncate text to 90 words
  const getTruncatedText = (text, wordLimit = 50) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const displayText = isExpanded ? details : getTruncatedText(details);
  const wordCount = details.split(" ").length;
  const shouldShowReadMore = wordCount > 90;

  return (
    <div className="card bg-base-100 shadow-xl ">
      {/* Header */}
      <div className="flex items-center bg-base-300 justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body pt-4">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>

        <figure className="mt-3 rounded-lg overflow-hidden">
          <img src={thumbnail_url} alt={title} />
        </figure>

        <p className="text-sm text-gray-600 mt-3">{displayText}</p>

        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-semibold text-sm mt-2 w-fit hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 pb-4">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm ml-2">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
