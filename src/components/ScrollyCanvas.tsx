"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const autoPlayFrame = useRef(0);
  const totalFrames = 125;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
          setIsPreloaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to the frame index (0-124)
  const renderFrameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  const drawFrame = (frame: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[Math.min(Math.floor(frame), totalFrames - 1)];
    if (!img) return;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Autoplay subtly when at the top
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      // Only autoplay if scroll is at 0 or near 0
      if (window.scrollY < 20 && isPreloaded) {
        autoPlayFrame.current = (autoPlayFrame.current + 0.3) % totalFrames;
        drawFrame(autoPlayFrame.current);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    if (isPreloaded) {
      animate();
    }
    return () => cancelAnimationFrame(animationId);
  }, [isPreloaded, images]);

  useMotionValueEvent(renderFrameIndex, "change", (latest) => {
    // Only use scroll-based rendering if user has scrolled
    if (window.scrollY >= 20) {
      drawFrame(latest);
    }
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
        />
      </div>
    </div>
  );
}
