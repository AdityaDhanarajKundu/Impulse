import React from "react";
import EventCards from "../Components/EventCards";
import events from "../data/data";
import event from "../assets/events.mp4";

function Events() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0c3b88] via-[#181641] to-[#0f172a] py-20 px-6 text-white overflow-hidden">
      {/* 🔹 Background Video Layer */}
      <video
        src={event}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 🔹 Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
          Our Pre-Fest Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective">
          {events.map((event, index) => (
            <EventCards key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
