"use client";
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
import 'animate.css';
import { useState } from "react";
import { Particles } from "@/components/particles";
import "./globals.css";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="video-background">
      {/* Vídeo de fundo */}
      <video autoPlay muted loop playsInline>
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>

      {/* Partículas sempre rodando */}
      <Particles quantity={300} size={2} color="#27c39f" staticity={50} ease={50} />

      {/* Primeira tela: botão PLAY */}
      {!started && (
        <div className="content-overlay">
          <button className="play-button" onClick={() => setStarted(true)}>
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
      )}

      {/* Depois do clique: conteúdo principal */}
      {started && (
        <div className="content-overlay fade-in">
          <h1 class={animate__lightSpeedInLeft}>Airton – Portfólio</h1>
          <p>Interface em construção…</p>
        </div>
      )}
    </div>
  );
}
