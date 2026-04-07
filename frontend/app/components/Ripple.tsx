"use client";
import React, { useState, useLayoutEffect } from "react";

interface RippleProps {
  children: React.ReactNode;
  duration?: number;
  color?: string;
}

export default function Ripple({ children, duration = 600, color }: RippleProps) {
  const [rippleArray, setRippleArray] = useState<any[]>([]);

  useLayoutEffect(() => {
    let bounce: any;
    if (rippleArray.length > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        setRippleArray([]);
        clearTimeout(bounce);
      }, duration);
    }

    return () => clearTimeout(bounce);
  }, [rippleArray.length, duration]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className="ripple-container"
      onMouseDown={addRipple}
      style={{
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {children}
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              className="ripple"
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                background: color || "rgba(255, 255, 255, 0.2)",
              }}
            />
          );
        })}
    </div>
  );
}
