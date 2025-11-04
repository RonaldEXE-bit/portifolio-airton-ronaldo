"use client";

import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content-overlay">
        <h1>PORTFÓLIO KRONOS – CESAR</h1>
        <p>Interface em construção…</p>
      </div>
    </>
  );
}
