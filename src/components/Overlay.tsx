"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-[var(--foreground)]"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&q=80&w=400&h=400"
              alt="Deshan Sellahewa"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 text-[var(--foreground)]">
            Deshan Sellahewa
          </h1>
          <p className="text-xl md:text-3xl text-[var(--primary)] font-semibold tracking-[0.2em] uppercase">
            GIS & Remote Sensing Expert
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left text-[var(--foreground)] px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-tight">
            Advanced <br /> <span className="text-[var(--primary)] uppercase">Geospatial</span> <br /> Analytics.
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-[var(--secondary)] max-w-xl font-medium">
            Bridging the gap between earth observation and actionable intelligence through remote sensing.
          </p>
          <div className="w-24 h-1 bg-[var(--primary)] mt-8 rounded-full"></div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right text-[var(--foreground)] px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-tight">
            Mapping the <br /> <span className="text-[var(--primary)] uppercase">Future</span> <br /> with Precision.
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-[var(--secondary)] max-w-xl font-medium">
            UAV & LiDAR processing, 3D GIS visualization, and automated land cover classification.
          </p>
          <div className="w-24 h-1 bg-[var(--primary)] mt-8 rounded-full"></div>
        </motion.div>

      </div>
    </div>
  );
}

