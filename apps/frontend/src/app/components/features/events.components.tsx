import React from 'react';
import EventPostComponent from '../ui/event-post.component';

const EventsComponent: React.FC = () => {

  const posts = Array.from({ length: 7 });

  return (
    <div className="space-y-6 cursor-pointer w-full mx-auto">
      {posts.map((_, index) => (
        <EventPostComponent
          key={index}
          location="Auditorium"
          title="The Death of Agile: Why Tech Giants Are "
          date="Jul 19"
          time="02:40"
          imageUrl="event.jpeg"
        />
      ))}
    </div>
  );
};

export default EventsComponent;
