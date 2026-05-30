import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, Cpu, Sliders, Shield, Play, Pause, Trash2, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "defense" | "enterprise" | "energy";
  location: string;
  nodesCount: number;
  threatsDeflected: number;
  uptime: string;
  description: string;
}

export default function ProjectsView() {
  // --- STATE FOR CASE STUDIES ---
  const [activeCategory, setActiveCategory] = useState<"all" | "defense" | "enterprise" | "energy">("all");
  const [selectedCase, setSelectedCase] = useState<string>("grid-las-vegas");

  // --- STATE FOR REAL-TIME LOG EMULATOR ---
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING LIVE DIAGNOSTIC LINK...",
    "NODE CORE CONNECTED STABLE // LATENCY 11MS",
    "PERIMETER SCAN DETECTED 0 SECURITY EXTRANEOUS NODES",
  ]);
  const [isLive, setIsLive] = useState<boolean>(true);

  // --- STATE FOR AUDIT ESTIMATOR CALCULATOR ---
  const [facilityArea, setFacilityArea] = useState<number>(45000); // in sq ft
  const [cameras, setCameras] = useState<number>(32);
  const [securityTier, setSecurityTier] = useState<"standard" | "military" | "zero-trust">("military");

  // Live syslog emulator stream logic
  useEffect(() => {
    if (!isLive) return;
    const syslogTemplates = [
      "AUDIT OK: SHA-256 handshake validated successfully at Node G-1",
      "METRIC CHECK: Biometric authorization completed at Hub-Alpha in 9.2ms",
      "SIGNAL CHECK: Micro-satellite telemetry link recalibrated - signal at 100%",
      "EVENT RESOLVER: Cleared threat classification queue - 0 remaining events",
      "FIRMWARE INTEGRITY check complete: system is cryptographically sound",
      "NETWORK SWEEP: Blocked unauthorized port scanner from IP 192.168.109.11",
      "LOCKDOWN ENGAGED: Simulated gate lockdown routine test passed [SUCCESS]"
    ];

    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * syslogTemplates.length);
      const randomPrefix = `[${new Date().toISOString().substring(11, 19)}] SYS_LOG: `;
      setLogs((prev) => [randomPrefix + syslogTemplates[idx], ...prev.slice(0, 16)]);
    }, 3500);

    return () => clearInterval(interval);
  }, [isLive]);

  const clearSyslog = () => {
    setLogs(["SYS_LOG: Terminal cleared by admin commander."]);
  };

  const injectSysevent = () => {
    const timestamp = `[${new Date().toISOString().substring(11, 19)}] `;
    const forcedEvents = [
      "CRITICAL: Thermal sensor reports anomalous presence in Warehouse North Wing!",
      "CLASSIFYING: Deploying SENTINEL Drone X-1 to investigate coordinate 40.0, -83.0",
      "CONTAINED: Micro-laser automated safety gate sealed Sector 12 successfully!"
    ];
    setLogs((prev) => [...forcedEvents.map(e => timestamp + e), ...prev]);
  };

  const cases: CaseStudy[] = [
    {
      id: "grid-las-vegas",
      title: "The Las Vegas MicroGrid",
      category: "energy",
      location: "Las Vegas, NV",
      nodesCount: 420,
      threatsDeflected: 12409,
      uptime: "99.9999%",
      description: "Implemented full-perimeter AI surveil arrays integrated with autonomous ground rovers. Restricts access to critical power sub-stations with zero-trust biometric verification loops."
    },
    {
      id: "neo-siberia",
      title: "Neo-Siberia Hub",
      category: "defense",
      location: "Siberia Sector 9",
      nodesCount: 960,
      threatsDeflected: 48902,
      uptime: "100.0000%",
      description: "Autonomous thermal-tracking drone defense grid operational in extreme sub-zero surroundings. Built to secure defense assets under multi-spectral satellite surveillance networks."
    },
    {
      id: "aether-terminal",
      title: "Aether Air Logistics",
      category: "enterprise",
      location: "Columbus, OH",
      nodesCount: 180,
      threatsDeflected: 3892,
      uptime: "99.9994%",
      description: "Secure spatial biometric walkthrough portals authorized and set up across high-traffic supply terminals. Managed autonomously on Node-Alpha with live frame recognition analytics."
    }
  ];

  // Filtered list of case studies based on active filter
  const activeCases = activeCategory === "all" ? cases : cases.filter(c => c.category === activeCategory);

  // Math for estimated security budget
  const calculateEstimate = () => {
    const baseMult = securityTier === "standard" ? 12 : securityTier === "military" ? 22 : 38;
    const baseHardwareCost = (facilityArea * 0.15) + (cameras * 750);
    const calculatedHardware = baseHardwareCost * (baseMult / 18);
    const responseSecStr = securityTier === "standard" ? "15 seconds" : securityTier === "military" ? "4.2 seconds" : "under 11ms";
    return {
      cost: Math.round(calculatedHardware).toLocaleString(),
      dispatch: responseSecStr,
      redundancy: securityTier === "zero-trust" ? "Dual Hardware + Sat" : "Standard Dual Network"
    };
  };

  const currentEst = calculateEstimate();

  return (
    <div className="space-y-0 text-foreground overflow-hidden font-sora">
      
      {/* SECTION 1: HEADER HERO SPLASH */}
      <section className="relative pt-32 pb-16 px-8 lg:px-16 bg-transparent border-b border-border flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">TACTICAL_PORTFOLIO</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
            SHIELDS WE HAVE <br/>
            <span className="text-primary font-bold">COMMITTED IN PRODUCTION</span>
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mt-4 leading-relaxed">
            Review detailed case histories of our operational assets. Play with the dynamic hardware estimator or hook up to the diagnostic telemetry syslog simulator live.
          </p>
        </div>
      </section>

      {/* SECTION 2: CASE STUDIES LIST & HIGHLIGHTS */}
      <section className="py-24 px-8 lg:px-16 bg-background border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">01 // PRODUCTION LOGISTICS</span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase">PORTFOLIO OF SHIELDS</h2>
            </div>

            {/* Category Select Filters */}
            <div className="flex flex-wrap gap-2">
              {["all", "defense", "enterprise", "energy"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${activeCategory === cat ? 'border-primary bg-secondary text-primary' : 'border-border bg-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar list */}
            <div className="lg:col-span-5 space-y-3">
              {activeCases.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCase(cs.id)}
                  className={`w-full p-5 rounded-md border text-left transition-all ${selectedCase === cs.id ? 'border-primary bg-secondary shadow-[0_4px_15px_rgba(119,99,46,0.1)]' : 'border-border bg-transparent hover:bg-secondary/40'}`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">{cs.category} // {cs.location}</span>
                  <h3 className="text-lg font-bold text-foreground uppercase">{cs.title}</h3>
                </button>
              ))}
            </div>

            {/* Main view panel */}
            <div className="lg:col-span-7">
              {(() => {
                const cs = cases.find(c => c.id === selectedCase);
                if (!cs) return <p className="text-muted-foreground">Select a case study to expand dashboard.</p>;
                return (
                  <div className="bg-secondary p-8 rounded-lg border border-border relative">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
                    
                    <span className="text-[10px] font-mono tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-sm uppercase">
                      ACTIVE DEPLOYMENT
                    </span>

                    <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight mt-5 mb-4">
                      {cs.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-light text-sm leading-relaxed mb-8">
                      {cs.description}
                    </p>

                    {/* Telemetry performance stats box */}
                    <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-6">
                      <div>
                        <span className="text-[9px] text-muted-foreground font-mono block">NODE DENSITY</span>
                        <span className="font-bold font-mono text-foreground text-md uppercase">{cs.nodesCount} SECURED</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-muted-foreground font-mono block">THREATS PREEMPTED</span>
                        <span className="font-bold font-mono text-primary text-md">{cs.threatsDeflected.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-muted-foreground font-mono block">LIVE UP-TIME RATIO</span>
                        <span className="font-bold font-mono text-foreground text-md">{cs.uptime}</span>
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: REAL-TIME TELEMETRY LOG EMULATOR */}
      <section className="py-24 px-8 lg:px-16 bg-secondary border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">02 // REAL-TIME HANDSHAKE</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">DIAGNOSTIC SYSLOGS</h2>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              SENTINEL system micro-controllers continuously report logical handshakes over rotating cryptographic tunnels. Toggle live feed reporting or manually inject safety response simulated test drills.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsLive(!isLive)}
                className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm flex items-center gap-2 cursor-pointer hover:brightness-110 active:scale-[0.97]"
              >
                {isLive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isLive ? "Pause Feed" : "Go Live"}
              </button>
              
              <button
                type="button"
                onClick={injectSysevent}
                className="bg-background border border-border text-foreground text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-neutral-800"
              >
                Inject Simulation Event
              </button>

              <button
                type="button"
                onClick={clearSyslog}
                className="text-muted-foreground hover:text-destructive text-xs font-bold uppercase px-3 py-3 rounded-sm flex items-center gap-1 cursor-pointer transition-colors"
                title="Clear Logs Console"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
              </button>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-background border border-border p-6 rounded-lg font-mono text-xs relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4 text-muted-foreground">
                <div className="flex items-center gap-1.5 font-bold text-foreground uppercase">
                  <Terminal className="w-4 h-4 text-primary" />
                  SENTINEL-SYSLOG@CONSOLE
                </div>
                <div className="flex items-center gap-1.5 text-[9px] tracking-wider font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-primary animate-ping' : 'bg-muted'}`} />
                  {isLive ? 'LIVE STREAM' : 'PAUSED'}
                </div>
              </div>

              {/* Log core logs */}
              <div className="bg-black/40 p-4 border border-border/80 rounded h-64 overflow-y-auto space-y-1 text-[10px] text-foreground/85 leading-relaxed">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="text-primary">&gt;</span>
                    <span className={log.includes("CRITICAL") ? "text-destructive font-bold animate-pulse" : log.includes("SUCCESS") ? "text-primary font-bold" : ""}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SMART SECURITY DESIGN AUDIT BUDGET ESTIMATOR */}
      <section className="py-24 px-8 lg:px-16 bg-background relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">03 // STRATEGY DESIGNER</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">ESTIMATE ARCHITECTURE BUDGET</h2>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Design a custom-tailored tactical blueprint configuration. Adjust slider properties dynamically to estimate hardware allocations, response ratings, and budgetary specifications instantly.
            </p>

            {/* Inputs & Ranges */}
            <div className="space-y-6 pt-4 font-mono text-xs">
              
              <div className="space-y-2">
                <div className="flex justify-between uppercase">
                  <span>FACILITY SURFACE FOOTPRINT:</span>
                  <span className="text-primary font-bold">{facilityArea.toLocaleString()} SQ_FT</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={facilityArea} 
                  onChange={(e) => setFacilityArea(Number(e.target.value))}
                  className="w-full accent-primary bg-border h-1 rounded"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between uppercase">
                  <span>CAMERAS & HARDWALL DETECTORSNeeded:</span>
                  <span className="text-primary font-bold">{cameras} NODES</span>
                </div>
                <input 
                  type="range" 
                  min="4" 
                  max="128" 
                  step="4"
                  value={cameras} 
                  onChange={(e) => setCameras(Number(e.target.value))}
                  className="w-full accent-primary bg-border h-1 rounded"
                />
              </div>

              {/* Security Level Radio Selector */}
              <div className="space-y-2">
                <span className="block uppercase text-muted-foreground mb-2">ARCHITECTURAL RESILIENCE QUADRANT:</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "standard", label: "COMMERCIAL STANDARD" },
                    { id: "military", label: "TACTICAL MIL-SPEC" },
                    { id: "zero-trust", label: "MAX ZERO-TRUST" }
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSecurityTier(level.id as any)}
                      className={`p-3 border rounded text-[10px] font-bold text-center uppercase tracking-wide transition-all ${securityTier === level.id ? 'border-primary bg-secondary text-primary' : 'border-border bg-transparent text-muted-foreground'}`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-secondary p-8 rounded-lg border border-border relative flex flex-col justify-between font-mono text-xs min-h-[350px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/4 rounded-full blur-2xl" />
              
              <div>
                <div className="flex items-center gap-1.5 border-b border-border/80 pb-4 mb-6">
                  <Sliders className="w-4 h-4 text-primary" />
                  <span className="font-bold text-foreground">CALCULATED ARCHITECTURE ESTIMATION</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-muted-foreground block uppercase">ESTIMATED HARDWARE INSTANCE BUDGET:</span>
                    <span className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary">
                      ${currentEst.cost}
                    </span>
                    <p className="text-[9px] text-muted-foreground uppercase leading-relaxed mt-1">
                      Includes on-premises servers, sensor nodes, diagnostic monitors, and 12-months calibration support.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 mt-4">
                    <div>
                      <span className="text-[9px] text-muted-foreground block uppercase">DISPATCH RATE</span>
                      <span className="font-bold text-foreground text-sm font-mono">{currentEst.dispatch}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-muted-foreground block uppercase">REDUNDANCY GRID</span>
                      <span className="font-bold text-foreground text-sm font-mono uppercase">{currentEst.redundancy}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[10px] text-muted-foreground/80 uppercase">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Price index estimated for standard Columbus OH jurisdiction.
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
