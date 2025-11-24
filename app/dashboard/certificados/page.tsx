"use client";
import "@/app/globals.css";
import { Particles } from "@/components/particles";

export default function Certificados() {
  return (
    <div className="content-overlay page-zoom-in">
        <Particles quantity={250} size={2} color="#27c39f" staticity={50} ease={50} />
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Certificados</h1>
        <p className="text-lg opacity-70">Meus cursos e conquistas</p>
      </header>

      {/* Grid de certificados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Exemplo de card */}
        <div className="cert-card">
          <img
            src="/assets/Airton Ronaldo Jimenez Mamani.png"
            alt="Imersão Front-End"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Imersão IA</h2>
            <p className="cert-desc">Alura – 2024</p>
          </div>
        </div>

        <div className="cert-card">
          <img
            src="/assets/_certificate_vilpandocesar8-gmail-com_3218a1f5-409e-4bfd-af8a-a2895bd3ad6f.png"
            alt="Imersão IA"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Gerenciamento de ameaças ciberneticas</h2>
            <p className="cert-desc">Cisco – 2024</p>
          </div>
        </div>

        <div className="cert-card">
          <img
            src="/assets/Introdução_Ciber.png"
            alt="Cibersegurança"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Introdução à Cibersegurança</h2>
            <p className="cert-desc">Cisco Networking Academy – 2025</p>
          </div>
        </div>

        <div className="cert-card">
          <img
            src="/assets/Lean.png"
            alt="Cibersegurança"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Participação da Palestra</h2>
            <p className="cert-desc">São Judas – 2025</p>
          </div>
        </div>


        <div className="cert-card">
          <img
            src="/assets/Imersão_Dev.png"
            alt="Cibersegurança"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Introdução à Cibersegurança</h2>
            <p className="cert-desc"> Alura – 2025</p>
          </div>
        </div>

        <div className="cert-card">
          <img
            src="/assets/Hack.png"
            alt="Cibersegurança"
            className="cert-img"
          />
          <div className="cert-info">
            <h2 className="cert-title">Ethical Hacker</h2>
            <p className="cert-desc">Cisco Networking Academy – 2025</p>
          </div>
        </div>
        {/* 🔹 Para adicionar mais certificados, copie este bloco */}

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
