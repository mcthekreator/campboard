import React from 'react';

interface EventPostProps {
  location: string;
  title: string;
  date: string;
  imageUrl: string;
  time: string;
}

const EventPostComponent: React.FC<EventPostProps> = ({
  location,
  title,
  date,
  imageUrl,
  time,
}) => {
  return (
    <div
      className="relative w-full h-32 md:h-44 rounded-xl overflow-hidden shadow-md bg-cover bg-center z-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${imageUrl})`,
      }}
    >
      <div className="absolute gap-4 inset-0 flex flex-col justify-end p-6 text-white">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-between text-sm opacity-90">
          <div className="flex items-center gap-2">
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{date}</span>
            <span>{time} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPostComponent;
