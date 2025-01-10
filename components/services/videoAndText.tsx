"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

interface VideoAndTextProps {
  heading: string;
  subText: string;
  videoSrc: {
    "1080p": string;
    "720p": string;
    "480p": string;
  };
}

interface NetworkConnection extends EventTarget {
  downlink: number;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

const VideoAndText: React.FC<VideoAndTextProps> = ({
  heading,
  subText,
  videoSrc,
}) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentQuality, setCurrentQuality] = useState<keyof typeof videoSrc>("720p");
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const detectOptimalQuality = () => {
      const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;

      if (connection) {
        if (connection.downlink >= 5) {
          handleQualityChange("1080p");
        } else if (connection.downlink >= 2) {
          handleQualityChange("720p");
        } else {
          handleQualityChange("480p");
        }
      }
    };

    detectOptimalQuality();

    const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;
    if (connection) {
      connection.addEventListener("change", detectOptimalQuality);
      return () => connection.removeEventListener("change", detectOptimalQuality);
    }
  }, []);

  const handleQualityChange = (newQuality: keyof typeof videoSrc) => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      const wasPlaying = !videoRef.current.paused;

      setCurrentQuality(newQuality);
      videoRef.current.src = videoSrc[newQuality];

      videoRef.current.addEventListener(
        "loadedmetadata",
        () => {
          if (videoRef.current) {
            videoRef.current.currentTime = time;
            if (wasPlaying) {
              videoRef.current.play();
            }
          }
        },
        { once: true }
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="my-8"
      dir="rtl"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center" dir="rtl">
        <div className="space-y-6 text-center ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black font-bold text-2xl"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-justify text-gray-500 border-r-2 border-blue-300 pr-4"
          >
            {subText}
          </motion.p>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src={videoSrc[currentQuality]} type="video/mp4" />
          </video>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              <button
                onClick={handlePlayPause}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <div className="flex items-center gap-4">
                <select
                  value={currentQuality}
                  onChange={(e) => handleQualityChange(e.target.value as keyof typeof videoSrc)}
                  className="bg-transparent border border-white/30 rounded px-2 py-1 text-black"
                >
                  <option value="1080p">1080p</option>
                  <option value="720p">720p</option>
                  <option value="480p">480p</option>
                </select>

                <button
                  onClick={handleMute}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                >
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                <button
                  onClick={handleFullscreen}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                >
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoAndText;
