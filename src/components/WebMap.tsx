"use client";

import { Map as MapIcon, Layers, MousePointer2 } from "lucide-react";

export default function WebMap() {
  return (
    <section className="bg-[var(--background)] py-24 px-8 md:px-24 text-[var(--foreground)] relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
              Interactive <span className="text-[var(--primary)] uppercase">Web Map</span>
            </h2>
            <p className="text-[var(--secondary)] font-medium">Status: <span className="text-red-500 animate-pulse">Offline / View Only</span></p>
          </div>
          <div className="flex gap-4">
            <div className="p-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-[var(--secondary)]">
              <Layers size={20} />
            </div>
            <div className="p-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-[var(--secondary)]">
              <MousePointer2 size={20} />
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl border border-[var(--border)] bg-[#0f172a] overflow-hidden group">
          {/* Map Grid Background */}
          <div 
            className="absolute inset-0 opacity-20 grayscale brightness-50"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          
          {/* Coordinate Overlay */}
          <div className="absolute top-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-xs font-mono text-blue-400 space-y-1">
            <div className="flex justify-between gap-8"><span>CRS</span> <span>EPSG:4326</span></div>
            <div className="flex justify-between gap-8"><span>ZOOM</span> <span>14.5</span></div>
            <div className="flex justify-between gap-8"><span>T_LAYER</span> <span>SENTINEL_2A</span></div>
          </div>

          {/* Inactive Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white mb-6">
              <MapIcon size={48} className="animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Map Interface Inactive</h3>
            <p className="text-white/60 text-center max-w-sm">
              The full interactive GIS dashboard is currently hosted on a private staging environment.
            </p>
          </div>

          {/* Decorative Map Markers */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
