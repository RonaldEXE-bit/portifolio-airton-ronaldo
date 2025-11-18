"use client";

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";

type MousePosition = { x: number; y: number };

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
}

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const int = parseInt(hex, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef<number | null>(null);
  const resizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rgb = hexToRgb(color);

  useEffect(() => {
    if (canvasRef.current) ctx.current = canvasRef.current.getContext("2d");
    initCanvas();
    animate();
    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => initCanvas(), 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (rafID.current != null) window.cancelAnimationFrame(rafID.current);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  useEffect(() => onMouseMove(), [mousePosition.x, mousePosition.y]);
  useEffect(() => initCanvas(), [refresh]);

  const onMouseMove = () => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const { w, h } = canvasSize.current;
    const x = mousePosition.x - rect.left - w / 2;
    const y = mousePosition.y - rect.top - h / 2;
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
    if (inside) {
      mouse.current.x = x;
      mouse.current.y = y;
    }
  };

  const resizeCanvas = () => {
    if (!containerRef.current || !canvasRef.current || !ctx.current) return;
    canvasSize.current.w = containerRef.current.offsetWidth;
    canvasSize.current.h = containerRef.current.offsetHeight;
    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    ctx.current.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX, translateY, size: pSize, alpha, targetAlpha, dx, dy, magnetism };
  };

  const clear = () => {
    if (!ctx.current) return;
    ctx.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
  };

  const drawCircle = (c: Circle, update = false) => {
    if (!ctx.current) return;
    const { x, y, translateX, translateY, size, alpha } = c;
    ctx.current.save();
    ctx.current.translate(translateX, translateY);
    ctx.current.beginPath();
    ctx.current.arc(x, y, size, 0, Math.PI * 2);
    ctx.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
    ctx.current.fill();
    ctx.current.restore();
    if (!update) circles.current.push(c);
  };

  const drawParticles = () => {
    clear();
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const remap = (v: number, s1: number, e1: number, s2: number, e2: number) =>
    Math.max(((v - s1) * (e2 - s2)) / (e1 - s1) + s2, 0);

  const animate = () => {
    clear();
    circles.current.forEach((c, i) => {
      const edge = [
        c.x + c.translateX - c.size,
        canvasSize.current.w - c.x - c.translateX - c.size,
        c.y + c.translateY - c.size,
        canvasSize.current.h - c.y - c.translateY - c.size,
      ];
      const closest = edge.reduce((a, b) => Math.min(a, b));
      const remapped = parseFloat(remap(closest, 0, 20, 0, 1).toFixed(2));
      if (remapped > 1) {
        c.alpha = Math.min(c.alpha + 0.02, c.targetAlpha);
      } else {
        c.alpha = c.targetAlpha * remapped;
      }
      c.x += c.dx + vx;
      c.y += c.dy + vy;
      c.translateX += (mouse.current.x / (staticity / c.magnetism) - c.translateX) / ease;
      c.translateY += (mouse.current.y / (staticity / c.magnetism) - c.translateY) / ease;

      drawCircle(c, true);

      if (
        c.x < -c.size ||
        c.x > canvasSize.current.w + c.size ||
        c.y < -c.size ||
        c.y > canvasSize.current.h + c.size
      ) {
        circles.current.splice(i, 1);
        const n = circleParams();
        drawCircle(n);
      }
    });
    rafID.current = window.requestAnimationFrame(animate);
  };

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} ref={containerRef} aria-hidden="true" {...props}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
