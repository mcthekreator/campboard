import React from 'react';

interface PostComponentProps {
  authorName: string;
  authorImage: string;
  title: string;
  excerpt: string;
  date: string;
  views: string;
  comments: number;
  imageUrl: string;
}

const PostComponent: React.FC<PostComponentProps> = ({
  authorName,
  authorImage,
  title,
  excerpt,
  date,
  views,
  comments,
  imageUrl,
}) => {
  return (
    <div className="flex md:flex my-5 md:my-14 md:flex-row justify-between items-center gap-4 border-b border-gray-300 pb-6">
      {/* Left content */}
      <div className="flex-1">
        {/* Author Info */}
        <div className="flex items-center gap-2">
          <img
            src={authorImage}
            alt={authorName}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-sm font-medium text-text-secondary">
            {authorName}
          </p>
        </div>

        {/* Title */}
        <h2 className="text-base md:text-xl font-extrabold text-text-primary mt-2 leading-snug line-clamp-2 md:line-clamp-none">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-none">
          {excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center text-text-tertiary text-sm mt-4 gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {date}
          </div>
          <div className="flex items-center gap-1">
            <span>👁️</span>
            {views}
          </div>
          <div className="flex items-center gap-1">
            <span>💬</span>
            {comments}
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="w-24 md:w-52 flex-shrink-0">
        <img
          src={imageUrl}
          alt="Post thumbnail"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default PostComponent;
