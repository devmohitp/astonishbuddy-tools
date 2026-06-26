"use client";
import { useEffect, useRef } from "react";

export default function TorchEffect() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      // Throttle styling updates using requestAnimationFrame
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.setProperty("--mouse-x", `${e.clientX}px`);
          ref.current.style.setProperty("--mouse-y", `${e.clientY}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="torch-light"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(108, 99, 255, 0.06), transparent 80%)`,
      }}
    />
  );
}
