"use client";

import { useMemo } from "react";

export function useClickSound(path = "/assets/click.mp3", volume = 0.6) {
  const audio = useMemo(() => {
    const a = typeof window !== "undefined" ? new Audio(path) : null;
    if (a) a.volume = volume;
    return a;
  }, [path, volume]);

  const playClick = () => {
    try {
      audio?.currentTime && (audio.currentTime = 0); // reinicia para clicks rápidos
      audio?.play();
    } catch {
      // silencioso
    }
  };

  return playClick;
}
