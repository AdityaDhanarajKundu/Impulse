import React,{useState, useEffect} from 'react';
import HomeVideo from "../assets/home.mp4";
import Typewriter from "typewriter-effect";
import AnimatedPhrase from '../Components/AnimatedPhrase';
import Loader from '../Components/Loader';

function Home() {
  const [loading, setLoading] = useState(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");
    return !hasVisited; // Show loader only if not visited
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedHome", "true"); // mark as visited
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) return <Loader />;
  
  return (
    <section
      className="p-0 min-h-screen -mt-32 relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
    >
      <video
        src={HomeVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
    <div className="absolute z-10 flex flex-col justify-center items-center text-center h-full w-full px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl poppins-bold text-white drop-shadow-xl">
          <Typewriter
            options={{
              strings: ["IMPULSE'25 - The Fest"],
              autoStart: true,
              loop: true,
              delay: 75,
              pauseFor: 2000,
              cursor: "|",
            }}
          />
        </h1>

        <AnimatedPhrase />

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