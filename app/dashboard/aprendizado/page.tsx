"use client";
import "@/app/globals.css";
import { Particles } from "@/components/particles";
export default function Aprendizado() {
  return (
    <div className="content-overlay fade-in">
      <Particles quantity={250} size={2} color="#27c39f" staticity={50} ease={50} />
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-wide text-cyan-400">Aprendizado</h1>
        <p className="text-lg opacity-70">Formações, projetos acadêmicos e certificações</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
        {/* Formação Acadêmica */}
        <section className="card-lux">
          <h2 className="text-xl font-semibold mb-4">Formação Acadêmica</h2>
          <ul className="space-y-2 opacity-90">
            <li><strong>Engenharia de Software</strong> – São Judas (Mooca) – Conclusão: 2030</li>
            <li><strong>Desenvolvimento de Sistemas</strong> – Etec Camargo Aranha – Conclusão: 2025</li>
            <li><strong>Técnico em T.I.</strong> – E.E.M.M.D.C – TCC: “Lunar Fears”</li>
            <li><strong>Técnico em T.I.</strong> – Proz Educação – Concluído</li>
          </ul>
        </section>

        {/* Projetos Acadêmicos */}
        <section className="card-lux">
          <h2 className="text-xl font-semibold mb-4">Projetos Acadêmicos</h2>
          <ul className="space-y-2 opacity-90">
            <li><strong>StockMaster</strong> – Sistema web para estoque (PHP, JS, Laravel)</li>
            <li><strong>Lunar Fears</strong> – Jogo 2D com GameMaker</li>
          </ul>
        </section>

        {/* Certificações */}
        <section className="card-lux md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Certificações</h2>
          <ul className="space-y-2 opacity-90">
            <li>Alura – Imersão Front-End, IA, Dados com Python</li>
            <li>Cisco – Ethical Hacker, Cibersegurança, Gerenciamento de Ameaças</li>
          </ul>
        </section>

        {/* Idiomas */}
        <section className="card-lux">
          <h2 className="text-xl font-semibold mb-4">Idiomas</h2>
          <ul className="space-y-2 opacity-90">
            <li><strong>Espanhol:</strong> Nativo</li>
            <li><strong>Português:</strong> Avançado</li>
            <li><strong>Inglês:</strong> Básico</li>
          </ul>
        </section>

        {/* Disponibilidade */}
        <section className="card-lux">
          <h2 className="text-xl font-semibold mb-4">Disponibilidade</h2>
          <p className="opacity-90">
            Segunda a sexta-feira, das 13h às 18h <br />
            Disponível para trabalho remoto
          </p>
        </section>
      </main>

<div className="mt-6 flex justify-center">
        <a href="/dashboard" className="curriculo-button">
          ⬅Voltar ao Dashboard
        </a>
      </div>

      <footer className="mt-12 text-sm text-center opacity-60">
        <p>© 2025 Airton. Todos os direitos reservados.</p>
        <p>Next.js🎮</p>
      </footer>
      
    </div>
  );
}
