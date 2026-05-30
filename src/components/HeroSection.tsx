import React, { Suspense } from "react";

// Lazy load the Spline component to prevent blocking the initial page render
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineFallback = () => (
  <div className="absolute inset-0 bg-hero-bg flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      {/* Sleek, ambient dark loader spinner */}
      <div className="w-8 h-8 rounded-full border-2 border-primary/25 border-t-primary animate-spin" />
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
        Loading 3D Scene
      </span>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden"
    >
      {/* Absolute Spline 3D Scene Background Container */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<SplineFallback />}>
          <Spline 
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" 
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark overlay to ensure contrast and readability of content */}
      <div className="absolute inset-0 bg-black/35 z-[1] pointer-events-none" />

      {/* Content Container (bottom-left placement using flex items-end) */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-16 pt-32">
        
        {/* Animated Heading (0.2s Delay) */}
        <h1 
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
          id="hero-heading"
        >
          SENTINEL <span className="text-primary font-bold">AI</span>
        </h1>

        {/* Animated Subheading (0.4s Delay) */}
        <p 
          className="text-foreground/80 text-[clamp(1.115rem,2.5vw,1.8rem)] font-light mb-3 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
          id="hero-subheading"
        >
          We implement security correctly.
        </p>

        {/* Animated Description (0.55s Delay) */}
        <p 
          className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.2rem)] leading-relaxed font-light mb-4 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
          id="hero-description"
        >
          Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
        </p>

        {/* Dynamic CTA Button Row (0.7s Delay) */}
        <div 
          className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
          id="hero-ctas"
        >
          {/* Re-enable pointer events so clicks are captured by buttons */}
          <button
            type="button"
            className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-110 hover:shadow-[0_0_15px_rgba(119,99,46,0.2)] transition-all active:scale-[0.97] pointer-events-auto shadow-md"
            id="btn-book-call"
          >
            Book a Call
          </button>
          <button
            type="button"
            className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] pointer-events-auto shadow-md"
            id="btn-our-work"
          >
            Our Work
          </button>
        </div>

        {/* Proof / Trust Indicator Line (0.85s Delay) */}
        <p 
          className="text-muted-foreground/60 text-xs font-light mt-4 md:mt-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
          id="hero-trust-line"
        >
          Trusted security partner. Columbus, OH. 12 systems deployed.
        </p>

      </div>
    </section>
  );
}
