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

const PostForYouComponent: React.FC<PostComponentProps> = ({
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
    <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 border-b border-gray-300 pb-3">
      {/* Left content */}
      <div className="flex-1 items-center">
        {/* Author Info */}
        <div className="flex items-center gap-2">

          <div className=" text-text-tertiary text-sm mt-4 gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              {date}
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base font-extrabold text-text-primary mt-2 leading-snug">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mt-2 sm:text-sm md:text-sm">{excerpt}</p>



      </div>

      <img
        src={authorImage}
        alt={authorName}
        className="w-12 h-12 rounded-full object-cover"
      />

    </div>
  );
};

export default PostForYouComponent;
