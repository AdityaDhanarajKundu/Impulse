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
    <section className="min-h-screen bg-gradient-to-br from-[#0c3b88] via-[#181641] to-[#0f172a] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Video Highlights */}
        <div>
          <h2 className="text-4xl font-extrabold mb-10 text-center">
            Video Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoList.map((vid, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-xl shadow-lg overflow-hidden"
              >
                <video
                  src={vid.src}
                  controls
                  className="w-full h-64 object-cover"
                />
                <h3 className="text-center text-lg font-bold py-2 bg-white/5">
                  {vid.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div>
          <h2 className="text-4xl font-extrabold mb-10 text-center">
            Event Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {photoList.map((photo, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-md group"
              >
                <img
                  src={photo}
                  alt={`Event ${i}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reels / Shorts Carousel */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Reels & Shorts
          </h2>
          <Slider {...settings}>
            {reelVideos.map((video, idx) => (
              <div key={idx} className="px-2">
                <div className="rounded-xl overflow-hidden shadow-xl bg-black">
                  <video
                    src={video}
                    controls
                    className="w-full aspect-[9/16] object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Gallery;