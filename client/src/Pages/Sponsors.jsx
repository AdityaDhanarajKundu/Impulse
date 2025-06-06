import React from "react";
import sponsorLogos from "../data/sponsorList";
import sponsorBg from "../assets/sponsors.mp4";

function Sponsors() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        src={sponsorBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cinzel text-center drop-shadow-xl">
          Our Proud Sponsors
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mb-12 text-gray-200 font-medium">
          We are grateful to the incredible organizations that power IMPULSE
          2K25. Their support makes dreams come alive.
        </p>

        {/* 🧩 Sponsor Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl px-4 mb-20">
          {sponsorLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-center 
                 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 
                 shadow-md transform-gpu"
            >
              <img
                src={logo}
                alt={`Sponsor ${idx + 1}`}
                className="max-h-20 object-contain transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        {/* 🙌 Become a Sponsor CTA */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-10 text-center shadow-xl max-w-2xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-cinzel">
            Want to Sponsor Us?
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            Join hands with Midnapore Medical College’s most celebrated fest and
            become a part of our legacy. We welcome brands, businesses, and
            institutions to collaborate and shine with us.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mmchwb.impulse@gmail.com&su=Sponsorship%20Query%20-%20IMPULSE%202K25&body=Hello%20Team%2C%0AI%27m%20interested%20in%20sponsoring%20IMPULSE%202K25.%20Please%20share%20the%20details.%0A%0ARegards%2C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
