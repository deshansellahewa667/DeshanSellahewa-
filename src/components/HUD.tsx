"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function HUD() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden mix-blend-overlay opacity-20">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--primary) 0.5px, transparent 0.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Edge Accents */}
        <div className="absolute top-12 left-12 border-t border-l border-[var(--primary)] w-8 h-8 opacity-40"></div>
        <div className="absolute top-12 right-12 border-t border-r border-[var(--primary)] w-8 h-8 opacity-40"></div>
        <div className="absolute bottom-12 left-12 border-b border-l border-[var(--primary)] w-8 h-8 opacity-40"></div>
        <div className="absolute bottom-12 right-12 border-b border-r border-[var(--primary)] w-8 h-8 opacity-40"></div>
      </div>

      <div className="fixed top-8 right-8 z-50 pointer-events-auto">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--foreground)] hover:bg-white/20 transition-all shadow-xl"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <div className="fixed bottom-8 left-8 z-20 pointer-events-none">
        <div className="text-[10px] font-mono text-[var(--primary)]/60 flex flex-col uppercase tracking-widest">
          <span>LAT: 6.9271° N</span>
          <span>LON: 79.8612° E</span>
          <span className="mt-1 opacity-40">GEOAI_CORE_V5.0</span>
        </div>
      </div>
    </>
  );
}

