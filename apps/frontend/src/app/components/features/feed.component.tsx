import PostComponent from '../ui/post.component';
import React from 'react';
const FeedComponent: React.FC = () => {
  const posts = Array.from({ length: 7 });

  return (
    <div className="space-y-6 cursor-pointer w-full mx-auto"> {/* Add vertical spacing between posts */}
      {posts.map((_, index) => (
        <PostComponent
          key={index}
          authorName="Sohail Saifi"
          authorImage="ttu.png"
          title="The Death of Agile: Why Tech Giants Are Abandoning Scrum and What They Use Instead"
          excerpt="Remember when everyone was obsessed with Scrum? When every company had to have certified Scrum Masters and Agile..."
          date="Jul 19"
          views="2.5K"
          comments={117}
          imageUrl="rip.webp" // Replace with actual image path or URL
        />
      ))}
    </div>
  );
};

export default FeedComponent;
