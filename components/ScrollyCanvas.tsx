"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Bind scroll to the container (which will be tall)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Initialize array
        for (let i = 0; i < FRAME_COUNT; i++) {
            loadedImages.push(new Image());
        }

        const loadPromises = loadedImages.map((img, i) => {
            return new Promise<void>((resolve, reject) => {
                const frameIndex = i.toString().padStart(3, "0");
                img.src = `/sequence/${frameIndex}.png`;
                img.onload = () => {
                    loadedCount++;
                    resolve();
                };
                img.onerror = (e) => {
                    console.error(`Failed to load image ${i}`, e);
                    resolve(); // Resolve anyway to avoid blocking
                };
            });
        });

        Promise.all(loadPromises).then(() => {
            setImages(loadedImages);
            setIsLoaded(true);
            // Draw first frame immediately
            renderFrame(0, loadedImages);
        });
    }, []);

    const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
        const canvas = canvasRef.current;
        if (!canvas || !imgs.length) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use the image at the index
        const img = imgs[Math.min(FRAME_COUNT - 1, Math.max(0, index))];
        if (!img) return;

        // Calculate aspect ratio specifically to cover
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Sync scroll to frame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
        requestAnimationFrame(() => renderFrame(frameIndex, images));
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame if possible, but scroll event will likely trigger too
                // We need to re-render using latest scroll progress but we don't have it easily here without get
                // But resizing usually triggers relayout which might scroll or we can just rely on next scroll frame
                // Or better, track current index in ref.
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#0B0B0F]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                <Overlay progress={scrollYProgress} />

                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B0F] z-50 text-white/50">
                        <span className="animate-pulse font-mono tracking-widest uppercase text-sm">Loading Experience...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
