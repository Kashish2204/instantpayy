// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";

// interface CursorGlowProps {
//   children: ReactNode;
// }

// export default function CursorGlow({ children }: CursorGlowProps) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
    
//     const move = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();
//       setPosition({  x: e.clientX - rect.left, y: e.clientY - rect.top  });
//     };
//     container.addEventListener("mousemove", move);
//     return () => container.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div ref={containerRef} className="relative overflow-hidden w-full h-full">
//       {/* Glow effect */}
//       <div
//         className="pointer-events-none absolute inset-0 z-50 "
//         style={{
//           background: `radial-gradient(circle 300px at ${position.x}px ${position.y}px, rgba(0, 128, 255, 0.35), transparent 100%)`
//         }}
//       ></div>

//       {/* Your page content */}
//       <div className="relative z-10 ">
//         {children}
//       </div>
//     </div>
//   );
// }
