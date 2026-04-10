export default function HUD() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden mix-blend-screen opacity-30">
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,1)] animate-scan"></div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Edge Accents */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-amber-500/40 w-12 h-12"></div>
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-amber-500/40 w-12 h-12"></div>
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-amber-500/40 w-12 h-12"></div>
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-amber-500/40 w-12 h-12"></div>

      {/* Dynamic Coordinates (Corner) */}
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-amber-500/60 flex flex-col items-end">
        <span>LAT: 6.9271° N</span>
        <span>LON: 79.8612° E</span>
        <span className="mt-2">GEOAI_SYS_ACTIVE_v4.2</span>
      </div>
    </div>
  );
}
