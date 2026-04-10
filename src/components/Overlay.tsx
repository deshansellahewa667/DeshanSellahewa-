"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -150]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.85], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-2xl">
            Pasindu Deshan.
          </h1>
          <p className="text-xl md:text-3xl text-amber-400 font-medium tracking-widest uppercase drop-shadow-md">
            Geospatial Data Analyst
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl drop-shadow-lg leading-tight">
            Transforming UAV & LiDAR <br /> into Engineering-Grade <br /> <span className="text-amber-500">Digital Twins.</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mt-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right text-white px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl drop-shadow-lg leading-tight">
            Specializing in <br /> <span className="text-amber-500">3D GIS Visualization</span> <br /> & GeoAI Solutions.
          </h2>
          <div className="w-24 h-1 bg-amber-500 mt-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
        </motion.div>

      </div>
    </div>
  );
}
