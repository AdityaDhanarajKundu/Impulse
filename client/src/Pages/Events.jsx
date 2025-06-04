import React from "react";
import EventCards from "../Components/EventCards";
import events from "../data/data";

function Events() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0c3b88] via-[#181641] to-[#0f172a] py-20 px-6 text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-[600px] h-[600px] bg-indigo-700 rounded-full opacity-20 blur-3xl animate-pulse top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full opacity-20 blur-2xl animate-pulse top-[300px] right-[-100px]" />
      </div>
      <div className="max-w-7xl mx-auto text-center">
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
