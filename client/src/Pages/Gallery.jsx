import React from 'react';
import photoList from '../data/photos';
import videoList from "../data/video";
import Slider from "react-slick";
import reel1 from "../assets/videos/reel1.mp4";
import reel2 from "../assets/videos/reel2.mp4";
import reel3 from "../assets/videos/reel3.mp4";
import reel4 from "../assets/videos/reel4.mp4";
import reel5 from "../assets/videos/reel5.mp4";
import reel6 from "../assets/videos/reel6.mp4";
import galleryBg from "../assets/gallery.mp4";
import { motion } from "framer-motion";

function Gallery() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
  };

  const reelVideos = [reel1,reel2,reel3,reel4,reel5,reel6];
  
  return (
    // min-h-screen bg-gradient-to-br from-[#0c3b88] via-[#181641] to-[#0f172a] py-20 px-4 text-white
    <section className="relative min-h-screen text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={galleryBg}
      />

      {/* 🔹 Glass Content Overlay */}
      <div className="relative z-10 backdrop-blur-md bg-black/40 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* 🔸 Video Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-extrabold text-center mb-12 tracking-wide">
              Video Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {videoList.map((vid, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotateY: 3 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden transform-style-3d"
                >
                  <video
                    src={vid.src}
                    controls
                    className="w-full h-64 object-cover"
                  />
                  <h3 className="text-center text-lg font-michroma font-bold py-3 bg-white/10">
                    {vid.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🔸 Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-extrabold text-center mb-12 tracking-wide">
              Event Photo Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {photoList.map((photo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.07, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-xl shadow-lg group"
                >
                  <img
                    src={photo}
                    alt={`Event ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🔸 Reels / Shorts Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-cinzel font-extrabold text-center mb-12 tracking-wide">
              Reels & Shorts
            </h2>
            <Slider {...settings}>
              {reelVideos.map((video, idx) => (
                <div key={idx} className="px-4">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
                    <video
                      src={video}
                      controls
                      className="w-full aspect-[9/16] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;