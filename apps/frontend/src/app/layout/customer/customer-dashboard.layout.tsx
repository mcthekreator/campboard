import React from 'react';
import FeedComponent from '../../components/features/feed.component';
import ForYouComponent from '../../components/features/for-you.component';
import EventsComponents from '../../components/features/events.components';
import NavbarComponent from '../../components/ui/navbar.component';
import PostHeaderComponent from '../../components/ui/post-header.component';

const CustomerDashboardLayoutComponent: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <nav className="w-[5%] hidden md:block">
        <NavbarComponent />
      </nav>

      {/* Main content */}
      <article className="w-[90%] md:w-[65%] md:px-20 mx-auto md:border-r border-gray-200  overflow-y-auto py-5 ">
        <PostHeaderComponent />
        <FeedComponent />
      </article>

      {/* Right sidebar */}
      <aside className="w-[30%] hidden md:block ">
        <div className="fixed right-0  w-[30%] h-screen flex flex-col min-h-0 bg-white pt-14 pb-5  px-5  ">
          {/* Events section */}
          <div className="h-1/2 overflow-y-auto mb-4 pb-5  ">
            <h1 className="text-lg font-semibold bt-8 pb-3  sticky top-0 bg-white z-10 ">
              Events
            </h1>
            {/* Replace with actual Events component */}
            <div className="space-y-2 px-12">
              <EventsComponents />
            </div>
          </div>
          <div className="h-1/2 overflow-y-auto border-t">
            <div className="w-fit ">
              <h1 className="text-lg font-semibold pb-5 pt-5 sticky top-0 bg-white  ">
                For You
              </h1>
              <div className="px-12">
                <ForYouComponent />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CustomerDashboardLayoutComponent;
