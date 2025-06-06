import React,{useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

function EventCards({event, index}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, index]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        rotateX: 1.5,
        rotateY: 1.5,
        boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
        transition: { duration: 0.3 },
      }}
      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden transition-transform duration-500"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
        willChange: "transform",
      }}
    >
      {/* Text Section */}
      <div className="flex-1 p-6 text-left flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-wasted font-bold text-indigo-300 mb-2">
            {event.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">{event.desc}</p>
        </div>
        <div className="text-sm mt-4 text-indigo-200">
          📆 {event.date} | 🪙 Entry: {event.entryFee}
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="h-full w-full object-cover md:rounded-r-2xl md:rounded-l-none rounded-b-2xl transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-[1deg]"
        />
      </div>
    </motion.div>
  );
}

export default EventCards;