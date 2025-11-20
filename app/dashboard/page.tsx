"use client";
import { useEffect, useState } from "react";
import { Particles } from "@/components/particles";
import "../globals.css";

export default function Dashboard() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // dispara animação ao montar
  }, []);

  return (
    <div className="video-background">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        className={animate ? "fade-opacity" : ""}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>

      {/* Conteúdo central com fade */}
      <div className={`content-overlay ${animate ? "fade-opacity" : ""}`}>
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Airton – Portfólio</h1>
          <p className="text-lg">Interface gamer em construção…</p>
        </header>

        <main className="flex flex-col items-center gap-4">
          <button className="play-button">Projetos</button>
          <button className="play-button">Sobre</button>
          <button className="play-button">Contato</button>
        </main>

        <footer className="mt-12 text-sm opacity-80 text-center">
          <p>© 2025 Airton. Todos os direitos reservados.</p>
          <p>Feito com Next.js + Tailwind + animações gamer 🎮</p>
        </footer>
      </div>

      {/* Partículas por cima */}
      <Particles
        quantity={300}
        size={2}
        color="#27c39f"
        staticity={50}
        ease={50}
      />
    </div>
  );
}
