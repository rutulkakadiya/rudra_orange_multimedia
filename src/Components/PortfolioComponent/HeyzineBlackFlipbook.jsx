import React, { useRef } from "react";
import {
  Maximize,
  Volume2,
  VolumeX,
  RefreshCw
} from "lucide-react";

const HeyzineBlackFlipbook = () => {
  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-10">
      
      {/* Flipbook Container */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl">
        <iframe
          ref={iframeRef}
          src="https://heyzine.com/flip-book/fb71502366.html"
          className="w-full h-[500px] md:h-[650px]"
          allow="clipboard-write"
          allowFullScreen
          scrolling="no"
          style={{ border: "none" }}
          title="Heyzine Flipbook"
        />
      </div>

      {/* Bottom Controls (UI only) */}
      {/* <div className="w-full max-w-6xl mt-4 bg-[#111] border border-gray-800 rounded-lg px-6 py-3 flex items-center justify-between text-gray-300">
        
        <div className="flex items-center gap-4 text-sm">
          <button className="hover:text-white transition flex items-center gap-2">
            <RefreshCw size={16} /> Reload
          </button>

          <button className="hover:text-white transition flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Volume2 size={16} /> Sound On
          </button>

          <button className="hover:text-white transition flex items-center gap-2 opacity-50 cursor-not-allowed">
            <VolumeX size={16} /> Mute
          </button>
        </div>

        <button
          onClick={handleFullscreen}
          className="hover:text-white transition flex items-center gap-2 text-sm"
        >
          <Maximize size={16} /> Fullscreen
        </button>
      </div> */}

      {/* Info Note */}
      {/* <p className="text-gray-500 text-xs mt-3 text-center max-w-3xl">
        Note: Sound & watermark are controlled by Heyzine. For full control and watermark-free experience,
        a custom React flipbook or Heyzine paid plan is required.
      </p> */}
    </div>
  );
};

export default HeyzineBlackFlipbook;
