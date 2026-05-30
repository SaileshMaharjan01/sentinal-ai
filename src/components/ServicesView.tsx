import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Fingerprint, Eye, Server, RefreshCw, Zap, Flame, ShieldAlert as AlertIcon, Radio, Compass, Wifi } from "lucide-react";

export default function ServicesView() {
  // --- STATE FOR DRONE PATROLS ---
  const [activeDrone, setActiveDrone] = useState<number>(0);
  
  // --- STATE FOR THREAT SIMULATOR ---
  const [threatLevel, setThreatLevel] = useState<"NORMAL" | "MITIGATING" | "CONTAINED">("NORMAL");
  const [alertLogs, setAlertLogs] = useState<string[]>([
    "PERIMETER CHECK [OK] - ALL STATIONS REPORTING ACTIVE SECURE",
    "FIRMWARE SHA-256 CHECK: CURRENT & CRYPTOGRAPHICALLY TRUSTED",
    "AWAITING SIMULATION TRIGGER..."
  ]);
  const [simulationPercentage, setSimulationPercentage] = useState<number>(0);

  // --- STATE FOR BIOMETRIC CHECK ---
  const [biometricStatus, setBiometricStatus] = useState<"IDLE" | "SCANNING" | "GRANTED" | "REJECTED">("IDLE");
  const [scanUser, setScanUser] = useState<string>("");

  const runSimulation = () => {
    if (threatLevel === "MITIGATING") return;
    setThreatLevel("MITIGATING");
    setSimulationPercentage(0);
    
    // Add threat detected log
    setAlertLogs((prev) => [
      `[CRITICAL WARNING] - UNIDENTIFIED RFID SIGNATURE AT SECTOR G-4`,
      `[AI DIAGNOSIS] - CLASSIFIED: PHYSICAL CLONING ATTEMPT (${Math.random().toFixed(4)} COEFFICIENT)`,
      ...prev
    ]);

    const interval = setInterval(() => {
      setSimulationPercentage((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setThreatLevel("CONTAINED");
          setAlertLogs((prev) => [
            `[SYSTEM RESPONSE] - SMART LOCKDOWN INSTANTLY COMMITTED AT SECTOR G-4`,
            `[SYSTEM CERTIFICATION] - NODE ISOLATION COMPLETE. THREAT CONTAINED IN Under 11ms.`,
            ...prev
          ]);
          return 100;
        }
        return p + 20;
      });
    }, 300);
  };

  const resetSimulation = () => {
    setThreatLevel("NORMAL");
    setSimulationPercentage(0);
    setAlertLogs([
      "SECURE CLEAR STATE COMMITTED. SYSTEMS REGISTERED AT 0 ACTIVE THREATS.",
      "PERIMETER AUTO-PATROL ACTIVE.",
      "AWAITING SIMULATION TRIGGER..."
    ]);
  };

  const triggerBiometricScan = (success: boolean) => {
    setBiometricStatus("SCANNING");
    setTimeout(() => {
      if (success) {
        setBiometricStatus("GRANTED");
        setScanUser("AI_AGENT_009 // AUTH_OK");
      } else {
        setBiometricStatus("REJECTED");
        setScanUser("UNKNOWN_METRICS // WARNING_RAISED");
      }
    }, 1500);
  };

  const dronesData = [
    { id: 0, name: "SENTINEL-X1 APEX", location: "Warehouse North-Gate", elevation: "14m", speed: "11 m/s", battery: 94, sensor: "Thermal / LIDAR" },
    { id: 1, name: "SENTINEL-X2 RECON", location: "Vault Sector Blue", elevation: "2.5m", speed: "3.2 m/s", battery: 88, sensor: "Depth Sensor Array" },
    { id: 2, name: "SENTINEL-X3 ORBIT", location: "Perimeter Sector East", elevation: "40m", speed: "22 m/s", battery: 100, sensor: "Spectral Hyper-Imaging" }
  ];

  return (
    <div className="space-y-0 text-foreground overflow-hidden font-sora">
      
      {/* SECTION 1: HEADER HERO SPLASH */}
      <section className="relative pt-32 pb-16 px-8 lg:px-16 bg-transparent border-b border-border flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">SERVICES COMMAND</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
            ENTERPRISE SHIELDS <br/>
            <span className="text-primary font-bold">BUILT IN HZ RATINGS</span>
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mt-4 leading-relaxed">
            Unification of advanced cybernetics, neural vision intelligence, and physical defense matrices. Secure your global premises with instantly deployable zero-trust architectures.
          </p>
        </div>
      </section>

      {/* SECTION 2: AUTONOMOUS AI PATROLS (DRONE CONTROL INTERFACE) */}
      <section className="py-24 px-8 lg:px-16 bg-background border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">SER_01 // INTELLIGENT HARDWARE</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">AUTONOMOUS PATROL SENSORS</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              We deploy custom-engineered orbital and indoor autonomous drone grids. Track raw telemetry, active speed coordinates, sensor feeds, and battery longevity instantly. Ensure no physical asset is ever out of scan range.
            </p>

            <div className="space-y-3 pt-4">
              {dronesData.map((drone) => (
                <button
                  key={drone.id}
                  onClick={() => setActiveDrone(drone.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-md border text-left transition-all ${activeDrone === drone.id ? 'border-primary bg-secondary/80' : 'border-border bg-transparent hover:bg-secondary/20'}`}
                >
                  <div className="flex items-center gap-3">
                    <Radio className={`w-4 h-4 ${activeDrone === drone.id ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase">{drone.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-mono">{drone.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                        {drone.sensor}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* TELEMETRY SCREEN VISUALIZER */}
          <div className="lg:col-span-6">
            <div className="bg-secondary border border-border p-6 rounded-lg font-mono relative">
              <div className="absolute top-3 right-3 flex items-center gap-2 text-[9px] text-primary">
                <Wifi className="w-3.5 h-3.5 animate-pulse" />
                TELEMETRY LINK STABLE L-2
              </div>

              <div className="h-44 bg-background border border-border rounded flex flex-col justify-center items-center relative overflow-hidden mb-6">
                {/* Visual Thermal Radar Overlay Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(119,99,46,0.1)_0%,transparent_80%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.25)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Active scan wave radar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border border-primary/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                </div>

                <Compass className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: "12s" }} />
                
                <div className="absolute bottom-3 left-3 text-[9px] text-muted-foreground uppercase">
                  RADAR SECTOR: <span className="text-foreground font-bold">GRID_{activeDrone}0X</span>
                </div>
              </div>

              {/* Status parameters list */}
              <div className="grid grid-cols-2 gap-4 uppercase text-xs pt-2">
                <div className="bg-background/50 p-3 rounded border border-border">
                  <span className="text-[9px] text-muted-foreground font-mono block">ELEVATION</span>
                  <span className="font-bold text-foreground font-mono text-sm">{dronesData[activeDrone].elevation}</span>
                </div>
                <div className="bg-background/50 p-3 rounded border border-border">
                  <span className="text-[9px] text-muted-foreground font-mono block">VELOCITY RATE</span>
                  <span className="font-bold text-foreground font-mono text-sm">{dronesData[activeDrone].speed}</span>
                </div>
                <div className="bg-background/50 p-3 rounded border border-border">
                  <span className="text-[9px] text-muted-foreground font-mono block">BATTERY RATINGS</span>
                  <span className="font-bold text-foreground font-mono text-sm">{dronesData[activeDrone].battery}% CORE</span>
                </div>
                <div className="bg-background/50 p-3 rounded border border-border">
                  <span className="text-[9px] text-muted-foreground font-mono block">ACTIVE PROTOCOL</span>
                  <span className="font-bold text-primary font-mono text-sm">SURVEIL3_LIVE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THREAT DETECTION HUB (INTERACTIVE CONTROL CONSOLE) */}
      <section className="py-24 px-8 lg:px-16 bg-secondary border-b border-border relative pointer-events-auto">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">SER_02 // SYSTEM DEFENDER</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">THREAT MITIGATION HUB</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Experience the automated response engine of SENTINEL AI. Force an artificial breach attempt using the interactive tactile simulation panel. Observe how instant system lockouts prevent unauthorized data/facility transitions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                type="button"
                onClick={runSimulation}
                disabled={threatLevel === "MITIGATING"}
                className="bg-primary text-primary-foreground font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm cursor-pointer disabled:opacity-40 hover:brightness-110 active:scale-[0.97] transition-all"
              >
                Simulate Incident Breach
              </button>
              
              <button
                type="button"
                onClick={resetSimulation}
                className="bg-background border border-border text-foreground font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm cursor-pointer hover:bg-secondary active:scale-[0.97] transition-all"
              >
                Reset Perimeter Clear
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="bg-background border border-border p-6 rounded-lg font-mono relative shadow-xl">
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <ShieldAlert className="w-4 h-4 text-primary" />
                  RESPONSE TERMINAL_SIM
                </div>
                <div className="text-[9px] text-muted-foreground tracking-widest uppercase flex items-center gap-1">
                  SYS_MITIGATION: 
                  <span className={`font-bold ${threatLevel === "NORMAL" ? 'text-primary' : 'text-destructive animate-pulse'}`}>
                    {threatLevel}
                  </span>
                </div>
              </div>

              {/* Simulation Progress bar */}
              <div className="mb-6 bg-secondary/80 p-4 border border-border rounded">
                <span className="text-[9px] text-muted-foreground tracking-widest block mb-2 uppercase">RESOLVING SECURITY CRITICALITY</span>
                <div className="w-full bg-background h-2 rounded overflow-hidden border border-border">
                  <div 
                    className="bg-primary h-full transition-all duration-300"
                    style={{ width: `${simulationPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-[9px] text-muted-foreground font-mono">
                  <span>DEPLOYED SHIELDS: {simulationPercentage}%</span>
                  <span>TIME: {threatLevel === "CONTAINED" ? "8.4ms" : "AWAITING"}</span>
                </div>
              </div>

              {/* Logs area */}
              <div className="bg-[#121212] p-4 border border-border rounded max-h-48 overflow-y-auto space-y-1 text-[10px] text-foreground/90">
                {alertLogs.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-primary">&gt;</span>
                    <span className={log.includes("[CRITICAL") ? "text-destructive font-semibold" : ""}>{log}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SMART ACCESS SYSTEMS (BIOMETRICS CHECKBOX) */}
      <section className="py-24 px-8 lg:px-16 bg-background relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">SER_03 // SECURE PERIMETERS</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">PHYSICAL BIOMETRIC PORTALS</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Lock down facilities using enterprise smart biometric templates. Our multi-key scanners run fingerprint ridges, iris telemetry, and walk-by structural biometric analysis concurrently before authorizing entry.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => triggerBiometricScan(true)}
                disabled={biometricStatus === "SCANNING"}
                className="bg-secondary border border-border hover:border-primary/50 text-foreground text-xs font-bold tracking-wider uppercase px-4 py-3 rounded hover:bg-secondary/80 disabled:opacity-50 pointer-events-auto"
              >
                Scan User: Agent 09
              </button>
              
              <button
                type="button"
                onClick={() => triggerBiometricScan(false)}
                disabled={biometricStatus === "SCANNING"}
                className="bg-secondary border border-border hover:border-destructive/50 text-foreground text-xs font-bold tracking-wider uppercase px-4 py-3 rounded hover:bg-secondary/80 disabled:opacity-50 pointer-events-auto"
              >
                Scan User: Intruder
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-secondary border border-border p-8 rounded-lg font-mono relative flex flex-col items-center justify-center">
              
              <div className="relative w-40 h-40 border border-border rounded-full flex items-center justify-center overflow-hidden mb-6 bg-background">
                {/* Fingerprint indicator ring */}
                <div className={`absolute inset-2 border border-dashed rounded-full ${biometricStatus === "SCANNING" ? "animate-spin border-primary" : "border-border"}`} />
                
                {/* Biometric Scan Overlay */}
                {biometricStatus === "SCANNING" && (
                  <div className="absolute inset-x-0 bg-primary/20 h-1 top-0 animate-bounce duration-1000 z-10" />
                )}

                <Fingerprint className={`w-16 h-16 transition-colors ${biometricStatus === "SCANNING" ? "text-primary/70 scale-105" : biometricStatus === "GRANTED" ? "text-primary scale-110" : biometricStatus === "REJECTED" ? "text-destructive scale-100" : "text-muted-foreground"}`} />
              </div>

              {/* Outcome messages */}
              <div className="text-center w-full uppercase">
                <span className="text-[9px] text-muted-foreground block mb-1">BIOMETRIC AUTHORIZER STATUS</span>
                
                {biometricStatus === "IDLE" && (
                  <p className="text-sm font-bold text-muted-foreground">STANDBY // SUBMIT CRYPTO TOKEN</p>
                )}
                {biometricStatus === "SCANNING" && (
                  <p className="text-sm font-bold text-primary animate-pulse">RUNNING IRIS & RIDGE AUDIT...</p>
                )}
                {biometricStatus === "GRANTED" && (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-primary">ACCESS GRANTED</p>
                    <p className="text-[11px] text-muted-foreground font-mono bg-primary/5 p-1 px-4 inline-block rounded">{scanUser}</p>
                  </div>
                )}
                {biometricStatus === "REJECTED" && (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-destructive">ACCESS DENIED // PERIMETER SECURED</p>
                    <p className="text-[11px] text-muted-foreground font-mono bg-destructive/5 p-1 px-4 inline-block rounded">{scanUser}</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
