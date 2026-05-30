import React, { Suspense } from "react";

// Lazy load the Spline component to prevent blocking the initial rendering cycle
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineFallback = () => (
  <div className="fixed inset-0 bg-[#0f0f11] flex items-center justify-center z-0">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-primary/25 border-t-primary animate-spin" />
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
        Configuring 3D Core...
      </span>
    </div>
  </div>
);

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 select-none pointer-events-none">
      <div className="absolute inset-0 pointer-events-auto">
        <Suspense fallback={<SplineFallback />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>
      {/* Subtle high-contrast radial dark background overlay for high readability */}
      <div className="absolute inset-0 bg-black/60 z-1 pointer-events-none" />
    </div>
  );
}
