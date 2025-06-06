import React from "react";
// import scheduleBg from "../assets/schedule.mp4";

function Schedule() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        src="https://res.cloudinary.com/dtical8ob/video/upload/v1749241586/schedule_sd61di.mp4"
        autoPlay
        muted
        preload="auto"
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div class="relative z-10 mt-50 bg-gray-100 p-8 rounded-xl shadow-md text-center">
        <h1 class="text-gray-700 text-4xl font-semibold">To Be Decided</h1>
      </div>
    </section>
  );
}

export default Schedule;
