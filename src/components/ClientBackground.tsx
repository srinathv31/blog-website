"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function ClientBackground(): JSX.Element {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none z-30 transition duration-300 lg:absolute fixed inset-0 flex justify-center sm:px-8"
      style={{
        // background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 65%)`,
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(253,187,45, 0.15), rgba(34,193,195,0.15), transparent 65%)`,
      }}
    ></div>
  );
}
