
import EventPostComponent from '../ui/event-post.component';

const EventsComponent: React.FC = () => {
  // Create a mock array of 7 items
  const posts = Array.from({ length: 7 });

  return (
    <div className="space-y-6 cursor-pointer w-full mx-auto"> {/* Add vertical spacing between posts */}
      {posts.map((_, index) => (
        <EventPostComponent
          key={index}
          location="Auditorium"
          title="The Death of Agile: Why Tech Giants Are "
          date="Jul 19"
          time="02:40"
          imageUrl="event.jpeg" // Replace with actual image path or URL
        />
      ))}
    </div>
  );
};

export default EventsComponent;
