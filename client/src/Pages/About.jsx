import React from 'react';
import bgImage from "../assets/buildingpage.jpg";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b21a8]/40 via-[#181641]/60 to-[#0c3b88]/95" />
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16 text-white">
        {/* About Us */}
        <section className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-down">
            About Us
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
            <strong className="text-indigo-300">
              Midnapore Medical College & Hospital
            </strong>{" "}
            — Established with a mission to serve and a vision to lead, MMCH
            stands as a cornerstone of medical excellence in West Bengal. With a
            legacy of decades, it nurtures academic brilliance along with unity,
            innovation, and social impact. Here, future healthcare leaders are
            crafted not only through textbooks, but also through compassion,
            real-world service, and creativity.
          </p>
        </section>

        {/* About IMPULSE */}
        <section className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 tracking-tight underline decoration-pink-400 underline-offset-4">
            About IMPULSE
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
            <span className="font-semibold text-pink-300">
              Feel the Beat of Medicine and Celebration
            </span>{" "}
            — IMPULSE is more than just a fest — it’s the beating heart of
            Midnapore Medical College. Curated by the 2022 Batch, this 3-day
            celebration of culture, intellect, and adrenaline welcomes all
            disciplines with open arms. From diagnostic duels to dance battles,
            quizzes to concerts — every corner vibrates with life.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
            Here, white coats turn into superhero capes — blending intellect
            with passion.
          </p>
        </section>

        {/* What to Expect */}
        <section className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400">
            🎉 What to Expect
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base sm:text-lg text-gray-200">
            <li className="flex items-center gap-2">
              ⚕️ <span>Medico-centric Competitions</span>
            </li>
            <li className="flex items-center gap-2">
              🎤 <span>Live Performances & DJ Nights</span>
            </li>
            <li className="flex items-center gap-2">
              🧠 <span>Quizzes, Debates & Brain Battles</span>
            </li>
            <li className="flex items-center gap-2">
              🎮 <span>Sports & Gaming Tournaments</span>
            </li>
            <li className="flex items-center gap-2">
              🎨 <span>Art, Fashion & Creativity Explosions</span>
            </li>
            <li className="flex items-center gap-2">
              🍔 <span>Food, Merch & Fun Stalls</span>
            </li>
          </ul>
        </section>

        {/* Why IMPULSE Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-400 tracking-wide">
            ❤️ Why IMPULSE Matters
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100 italic">
            Because even in the world of medicine, where hearts are studied —
            some moments are meant to be{" "}
            <span className="text-pink-400 not-italic font-bold">felt</span>.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
            <span className="font-medium text-indigo-300">IMPULSE 2K25</span> is
            where we pause, celebrate, and pulse together — creating memories,
            forging friendships, and building a legacy that lives on long after
            the lights dim.
          </p>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-black bg-opacity-80 py-6 mt-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white gap-4">
          <p>© 2025 IMPULSE | Midnapore Medical College and Hospital</p>
          <div className="flex space-x-6 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61576612802680&rdid=xtm0YSXkpMUSOLZt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Zp67fxriD%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/impulsemmch2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mmchwb.impulse@gmail.com"
              className="hover:text-red-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;