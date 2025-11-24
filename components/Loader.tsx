"use client";
import "@/app/globals.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      {/* SVG do loader */}
      <svg
        id="svg-global"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 94 136"
        height="136"
        width="94"
      >
        {/* ...cole aqui todo o conteúdo do SVG que você enviou... */}
      </svg>
    </div>
  );
}
