import React from 'react';
import dna from "../assets/dna.gif";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section
      className="p-0 relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
      style={{
        backgroundImage: `url(${dna})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl poppins-bold text-white drop-shadow-xl">
          <Typewriter
            options={{
              strings: ["IMPULSE'25 - The FEST"],
              autoStart: true,
              loop: true,
              delay: 75,
              pauseFor: 2000,
              cursor: "|",
            }}
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Dive into the double helix of discovery, fun, and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/register"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Register Now
          </a>
          <a
            href="/events"
            className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;