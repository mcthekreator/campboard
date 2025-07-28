
import PostForYouComponent from '../ui/post-for-you.component';

const ForYouComponent: React.FC = () => {
  // Create a mock array of 7 items
  const posts = Array.from({ length: 7 });

  return (
    <div className="space-y-2 cursor-pointer w-full mx-auto"> {/* Add vertical spacing between posts */}
      {posts.map((_, index) => (
        <PostForYouComponent
          key={index}
          authorName="Sohail Saifi"
          authorImage="ttu.png"
          title="The Death of Agile: Why Tech Giants "
          excerpt="Remember when everyone was obsessed with Scrum?  and Agile..."
          date="Jul 19"
          views="2.5K"
          comments={117}
          imageUrl="rip.webp" // Replace with actual image path or URL
        />
      ))}
    </div>
  );
};

export default ForYouComponent;
