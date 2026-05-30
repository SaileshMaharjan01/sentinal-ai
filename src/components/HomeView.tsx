import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Shield, Cpu, Activity, Zap, CheckCircle, Globe, Terminal, RefreshCw } from "lucide-react";

interface HomeViewProps {
  onNavigate: (page: "services" | "contacts" | "about" | "projects" | "team") => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // --- STATE FOR INTERACTIVE MAP AND THREAT SIMULATION ---
  const [selectedNode, setSelectedNode] = useState<string>("columbus");
  const [activeHandshake, setActiveHandshake] = useState<boolean>(false);
  const [handshakeText, setHandshakeText] = useState<string>("SYSTEM_SECURE");
  const [statsValue, setStatsValue] = useState({
    threats: 341029,
    nodes: 1420,
    ping: 11
  });

  // Increment threats live to simulate active real-time systems
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsValue((prev) => ({
        ...prev,
        threats: prev.threats + Math.floor(Math.random() * 4) + 1,
        ping: Math.max(9, Math.min(16, prev.ping + (Math.random() > 0.5 ? 1 : -1)))
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const triggerHandshake = (nodeId: string) => {
    setSelectedNode(nodeId);
    setActiveHandshake(true);
    setHandshakeText(`HANDSHAKE [${nodeId.toUpperCase()}]...`);
    
    setTimeout(() => {
      setHandshakeText(`ENCRYPTING_TUNNEL...`);
    }, 600);
    
    setTimeout(() => {
      setHandshakeText(`ZERO_TRUST_APPROVED`);
      setActiveHandshake(false);
    }, 1500);
  };

  const mapNodes = [
    { id: "columbus", name: "Columbus HQ", lat: "40.0° N", lon: "83.0° W", status: "Active", risk: "Minimal" },
    { id: "san_francisco", name: "SF Node Alpha", lat: "37.7° N", lon: "122.4° W", status: "Secure", risk: "Neutralized" },
    { id: "zurich", name: "Zurich Swiss Shield", lat: "47.4° N", lon: "8.5° E", status: "Shielding", risk: "Preventative" },
    { id: "tokyo", name: "Neo-Tokyo Outpost", lat: "35.7° N", lon: "139.7° E", status: "Active", risk: "Minimal" }
  ];

  return (
    <div className="space-y-0 text-foreground overflow-hidden">
      
      {/* SECTION 1: EFFICIENT 3D HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-end bg-transparent overflow-hidden"
        id="home-hero"
      >
        {/* Anchored at bottom-left */}
        <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-12 md:pb-16 pt-32">
          
          <h1 
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-4 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
            id="hero-heading"
          >
            SENTINEL <span className="text-primary">AI</span>
          </h1>

          <p 
            className="text-foreground/85 text-[clamp(1.115rem,2.5vw,1.8rem)] font-light mb-4 md:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
            id="hero-subheading"
          >
            We implement security correctly.
          </p>

          <p 
            className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.2rem)] leading-relaxed font-light mb-6 md:mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
            id="hero-description"
          >
            Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
          </p>

          <div 
            className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up mb-6"
            style={{ animationDelay: "0.7s" }}
          >
            <button
              type="button"
              onClick={() => onNavigate("contacts")}
              className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer hover:brightness-110 hover:shadow-[0_0_20px_rgba(119,99,46,0.35)] transition-all active:scale-[0.97] pointer-events-auto"
            >
              Book a Call
            </button>
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer hover:bg-neutral-200 transition-all active:scale-[0.97] pointer-events-auto"
            >
              Our Work
            </button>
          </div>

          <p 
            className="text-muted-foreground/65 text-xs font-light opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            Trusted security partner. Columbus, OH. 12 systems deployed.
          </p>
        </div>
      </section>

      {/* SECTION 2: CORE CAPABILITIES GRID */}
      <section className="relative py-24 px-8 lg:px-16 bg-background border-t border-border pointer-events-auto" id="capabilities">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">01 // AUTOMATED SHIELDS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">SUPERIOR CAPABILITIES</h2>
            <p className="text-muted-foreground font-light text-md max-w-xl mt-3">
              We leverage multi-layered artificial intelligence paired with hardened physical access protocols.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-secondary p-8 border border-border rounded-lg relative overflow-hidden group hover:border-primary/45 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="p-3 bg-background rounded-md inline-block mb-6 text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors uppercase">Zero-Trust Perimeter</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Continuous cryptographic verification for all sessions. Devices undergo rigorous health analysis before accessing system infrastructure.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-muted-foreground/80">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> FIPS 140-2 LEVEL 3 COMPLIANCE
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-secondary p-8 border border-border rounded-lg relative overflow-hidden group hover:border-primary/45 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="p-3 bg-background rounded-md inline-block mb-6 text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors uppercase">Live-Stream Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Neural-accelerated spatial AI maps camera assets instantly. Flags high-risk activity down to specific coordinates under 11ms latency.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-muted-foreground/80">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> EDGE COMPUTER VISION ENGINE
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-secondary p-8 border border-border rounded-lg relative overflow-hidden group hover:border-primary/45 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="p-3 bg-background rounded-md inline-block mb-6 text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors uppercase">Automated Dispatch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                When thresholds break, robotic failsafes trigger lockdowns, alarm broadcasts, and encrypted tactical drone feeds in micro-seconds.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-muted-foreground/80">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> THREAT CONSTRAIN RATE 100%
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE GLOBAL THREAT MAP & TACTICAL HANDSHAKE */}
      <section className="py-24 px-8 lg:px-16 bg-secondary border-t border-border relative pointer-events-auto" id="threat-map-section">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">02 // TACTICAL NETWORKS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">GLOBAL OPERATIONS PERIMETER</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              We coordinate real-time enterprise safety from dedicated secure nodes. Click any operational hub coordinates to trigger a cryptographically secure zero-trust diagnostic handshake.
            </p>

            {/* Interactive Node List */}
            <div className="space-y-3">
              {mapNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => triggerHandshake(n.id)}
                  className={`w-full flex items-center justify-between p-4 bg-background border transition-all rounded-md text-left ${selectedNode === n.id ? 'border-primary shadow-[0_0_15px_rgba(119,99,46,0.15)] bg-background/90' : 'border-border opacity-70 hover:opacity-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${selectedNode === n.id ? 'bg-primary animate-ping' : 'bg-primary'}`} />
                    <div>
                      <h4 className="font-semibold text-sm tracking-tight text-foreground uppercase">{n.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-mono">{n.lat} , {n.lon}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] tracking-widest font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {selectedNode === n.id ? 'VERIFYING' : 'SECURED'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Immersive Dark Tactical Screen */}
            <div className="bg-background border border-border p-6 rounded-lg font-mono relative shadow-2xl">
              <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                LIVE COMMAND STREAM
              </div>

              {/* Holographic Wireframe Map Visual */}
              <div className="relative h-[320px] bg-secondary/30 rounded-md border border-border overflow-hidden flex items-center justify-center">
                {/* Simulated Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.3)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-primary/10" />
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-primary/10" />

                {/* Simulated circular telemetry waves */}
                <div className="absolute w-64 h-64 border border-primary/10 rounded-full animate-pulse" />
                <div className="absolute w-[440px] h-[440px] border border-primary/5 rounded-full" />
                
                {/* SVG connection lines representing nodes */}
                <svg className="absolute inset-0 w-full h-full text-primary pointer-events-none opacity-40">
                  <path d="M 120 180 L 220 120 L 380 200 L 480 110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M 220 120 L 320 280 L 480 110" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Render clickable absolute icons */}
                <div className="absolute top-1/4 left-1/3 text-primary bg-background/90 p-1 border border-primary rounded animate-bounce shadow">
                  <span className="text-[8px] font-bold p-1">COLUMBUS_HQ</span>
                </div>

                <div className="absolute top-1/2 right-1/4 text-primary bg-background/90 p-1 border border-border/80 rounded shadow">
                  <span className="text-[8px] font-bold p-1">SHIELD_NODE</span>
                </div>

                <Globe className="w-24 h-24 text-primary/10 animate-spin-slow absolute" style={{ animationDuration: "50s" }} />

                <div className="absolute bottom-4 left-4 text-[10px] text-muted-foreground cursor-default select-none bg-background/50 px-3 py-1 bg-opacity-80 rounded backdrop-blur">
                  SECTOR_SWEEP: <span className="text-primary font-bold">OPTIMAL</span>
                </div>
              </div>

              {/* Dynamic Console Diagnostics Output */}
              <div className="mt-5 space-y-2 bg-[#121212] p-4 rounded border border-border">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground border-b border-border/80 pb-2">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    SECURITY HANDSHAKE CONSOLE
                  </div>
                  <div className="font-mono text-[9px]">UTC {new Date().toISOString().replace("T", " ").substring(0, 19)}</div>
                </div>

                <div className="space-y-1 font-mono text-[10px] text-foreground/90 pt-1">
                  <div>
                    <span className="text-primary">&gt;</span> INITIALIZING CRYPTOGRAPHIC HANDSHAKE
                  </div>
                  <div>
                    <span className="text-primary">&gt;</span> TARGET: {selectedNode.toUpperCase()} GLOBAL STATION INTEL
                  </div>
                  <div className={`${activeHandshake ? 'text-primary' : 'text-primary/70'} font-bold transition-all`}>
                    <span className="text-primary">&gt;</span> STATUS: {handshakeText}
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">&gt;</span> VERIFYING PROTOCOLS: QUANTUM-GARD_ECDSA_512
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 text-[10px] border-t border-border/40 text-muted-foreground uppercase tracking-widest">
                  <div>THREATS BLOCKED: <span className="font-bold text-foreground font-mono">{statsValue.threats.toLocaleString()}</span></div>
                  <div>PING: <span className="font-bold text-primary font-mono">{statsValue.ping}MS</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL PERFORMANCE DASHBOARD */}
      <section className="py-24 px-8 lg:px-16 bg-background border-t border-border relative pointer-events-auto" id="performance-dashboard">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-secondary/40 p-6 border border-border/90 rounded-md text-left">
              <span className="text-[10px] tracking-widest text-primary font-mono block mb-2">SYSTEM METRIC 01</span>
              <p className="text-3xl font-bold font-mono tracking-tight text-foreground">99.9998%</p>
              <h4 className="text-xs uppercase text-muted-foreground tracking-widest mt-1 font-medium">SHIELD UP-TIME CONSTANTS</h4>
              <div className="mt-4 w-full bg-border h-[3px] rounded">
                <div className="bg-primary h-full rounded w-[99.9%]" />
              </div>
            </div>

            <div className="bg-secondary/40 p-6 border border-border/90 rounded-md text-left">
              <span className="text-[10px] tracking-widest text-primary font-mono block mb-2">SYSTEM METRIC 02</span>
              <p className="text-3xl font-bold font-mono tracking-tight text-foreground">1,420</p>
              <h4 className="text-xs uppercase text-muted-foreground tracking-widest mt-1 font-medium">AI-INTEGRATED CAMERAS</h4>
              <div className="mt-4 w-full bg-border h-[3px] rounded">
                <div className="bg-primary h-full rounded w-[85%]" />
              </div>
            </div>

            <div className="bg-secondary/40 p-6 border border-border/90 rounded-md text-left">
              <span className="text-[10px] tracking-widest text-primary font-mono block mb-2">SYSTEM METRIC 03</span>
              <p className="text-3xl font-bold font-mono tracking-tight text-foreground">&lt; 11ms</p>
              <h4 className="text-xs uppercase text-muted-foreground tracking-widest mt-1 font-medium">RESPONSE DISPATCH THRESHOLD</h4>
              <div className="mt-4 w-full bg-border h-[3px] rounded">
                <div className="bg-primary h-full rounded w-[95%]" />
              </div>
            </div>

            <div className="bg-secondary/40 p-6 border border-border/90 rounded-md text-left">
              <span className="text-[10px] tracking-widest text-primary font-mono block mb-2">SYSTEM METRIC 04</span>
              <p className="text-3xl font-bold font-mono tracking-tight text-foreground">100%</p>
              <h4 className="text-xs uppercase text-muted-foreground tracking-widest mt-1 font-medium">ZERO-TRUST COMPLIANCE</h4>
              <div className="mt-4 w-full bg-border h-[3px] rounded">
                <div className="bg-primary h-full rounded w-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
