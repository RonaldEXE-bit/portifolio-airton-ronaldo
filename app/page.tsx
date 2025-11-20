"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const [animating, setAnimating] = useState(false);
  const router = useRouter();

  const handlePlay = () => {
    setAnimating(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200); // tempo da explosão
  };

  return (
    <div className="content-overlay">
      <button
        className={`play-button ${animating ? "explode" : ""}`}
        onClick={handlePlay}
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
