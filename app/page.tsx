"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Loader from "@/components/Loader";
import { useClickSound } from "@/components/useClickSound";

export default function Home() {
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const playClick = useClickSound("/assets/click.mp3", 0.7);

  const handlePlay = () => {
    playClick();
    setAnimating(true);
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => router.push("/dashboard"), 2200);
    }, 1200);
  };

  return (
    <div className="content-overlay">
      {loading && <Loader />}
      <button
        className={`play-button ${animating ? "explode" : ""}`}
        onClick={handlePlay}
        aria-label="Play"
      >
        P L A Y
        <div className="clip">
          <div className="corner leftTop"></div>
          <div className="corner rightBottom"></div>
          <div className="corner rightTop"></div>
          <div className="corner leftBottom"></div>
        </div>
        <span className="arrow rightArrow"></span>
        <span className="arrow leftArrow"></span>
      </button>
    </div>
  );
}
