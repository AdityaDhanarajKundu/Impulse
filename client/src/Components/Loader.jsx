import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="w-64 h-64">
        <Lottie animationData={loadingAnimation} loop autoplay />
      </div>
      <p className="mt-6 text-white text-lg font-semibold animate-pulse">
        Getting the fest vibes ready...
      </p>
    </div>
  );
}

export default Loader;