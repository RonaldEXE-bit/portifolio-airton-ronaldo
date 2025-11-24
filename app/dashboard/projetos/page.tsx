"use client";
import "@/app/globals.css";
import { Particles } from "@/components/particles";

export default function Projetos() {
  return (
    <div className="content-overlay page-zoom-in">
        <Particles quantity={250} size={2} color="#27c39f" staticity={50} ease={50} />
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Projetos</h1>
        <p className="text-lg opacity-70">Meus trabalhos e criações</p>
      </header>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Exemplo de card de projeto */}
        <div className="project-card">
          <img
            src="/assets/Play.png"
            alt="Portfólio Gamer"
            className="project-img"
          />
          <div className="project-info">
            <h2 className="project-title">Portfólio</h2>
            <p className="project-desc">Site pessoal, feito em Next.js + Tailwind.</p>
          </div>
        </div>

        <div className="project-card">
          <img
            src="/assets/LogoStokkiLife.png"
            alt="App de Finanças"
            className="project-img"
          />
          <div className="project-info">
            <h2 className="project-title">Stokki-Life</h2>
            <p className="project-desc">Site de controle de estoque</p>
          </div>
        </div>
        
        <div className="project-card">
        <a href="" aria-label="LinkedIn" data-social="linkedin"></a>
          <img
            src="/assets/LunarFears.png"
            alt="Jogo RPG"
            className="project-img"
          />
          <div className="project-info">
            <h2 className="project-title">Lunar-Fears</h2>
            <p className="project-desc">Protótipo de jogo estilo RPG com GameMaker.</p>
          </div>
        </div> 

        {/* 🔹 Para adicionar mais projetos, copie este bloco */}

<div className="mt-6 flex justify-center">
        <a href="/dashboard" className="curriculo-button">
          Voltar ao Dashboard
        </a>
      </div>

      </div>
       <footer className="mt-12 text-sm text-center opacity-60">
        <p>© 2025 Airton. Todos os direitos reservados.</p>
        <p>Next.js🎮</p>
      </footer>
      
    </div>
  );
}
