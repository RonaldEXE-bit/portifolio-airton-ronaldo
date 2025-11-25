"use client";
import { useEffect, useState } from "react";
import { Particles } from "@/components/particles";
import "../globals.css";
import Link from "next/link";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className={`video-background ${mounted ? "fade-in-video" : ""}`}>
        <video autoPlay muted loop playsInline disablePictureInPicture>
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      </div>

      <Particles quantity={300} size={2} color="#27c39f" staticity={50} ease={50} />

      <div className={`content-overlay ${mounted ? "fade-in" : ""}`}>
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-wide">Airton – Portfólio</h1>
          <p className="text-lg opacity-70">Interface gamer com estilo profissional e luxuoso</p>
        </header>

        <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-3xl w-full mx-auto mb-10">
          {/* Foto com borda neon */}
          <div className="col-span-1 row-span-2 flex items-center justify-center">
            <div className="photo-frame">
              <img
                src="/assets/Airton.jpg"
                alt="Foto de Airton"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Botões com ícones */}
          <Link href="/dashboard/aprendizado" className="card-button">
             Aprendizado
          </Link>
          <Link href="/dashboard/certificados" className="card-button">
             Certificados
          </Link>
          <Link href="/dashboard/projetos" className="card-button">
             Projetos
          </Link>
          <Link href="/dashboard/curriculo" className="card-button">
             Ver Currículo
          </Link>
        </div>

        <footer className="mt-12 text-sm text-center opacity-60">
          <p>© 2025 Airton. Todos os direitos reservados.</p>
          <p>Next.js🎮</p>
        </footer>
      </div>
    </>
  );
}
