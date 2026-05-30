import React, { useState } from "react";
import { motion } from "motion/react";
import { Users, UserCheck, ShieldAlert, Cpu, Heart, Code, Network, Globe } from "lucide-react";

export default function TeamView() {
  // --- STATE FOR ACTIVE EXECUTIVE MEMBERS ---
  const [selectedLeader, setSelectedLeader] = useState<string>("elena");

  const leaders = [
    {
      id: "elena",
      name: "Elena Rostova",
      role: "CHIEF TACTICAL OPERATOR",
      specialty: "Military Vision Computing",
      pastExperience: "DARPA Tactical Systems Architect",
      clearance: "GLOBAL LEVEL-5 COMMAND",
      bio: "Elena coordinates physical drone patrols and spatial edge-AI deployments globally. Formulates our automated zero-trust perimeter matrices with bulletproof redundancies.",
      skills: { tactical: 98, cryptographic: 88, hardware: 94 }
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      role: "SENIOR SECURITY ARCHITECT",
      specialty: "Quantum-Safe Cryptography",
      pastExperience: "NSA Tailored Access Operations",
      clearance: "CRYPTOGRAPHIC RE-KEY SECURE",
      bio: "Marcus designs the rotating 4096-bit FIPS 140-3 validation tunnels protecting our biometric scanners. Oversees our absolute isolation databases.",
      skills: { tactical: 82, cryptographic: 99, hardware: 88 }
    },
    {
      id: "clara",
      name: "Dr. Clara Aris",
      role: "DIRECTOR OF AI SAFETY & ETHICS",
      specialty: "Reinforcement Safety Loops",
      pastExperience: "OpenAI Trust & Safety Lead",
      clearance: "COMPLIANCE COMMANDER",
      bio: "Clara designs reinforcement guardrails to guarantee our autonomous drones respect physical safety boundaries. Assures algorithmic transparency.",
      skills: { tactical: 90, cryptographic: 92, hardware: 80 }
    }
  ];

  const activeLeader = leaders.find(l => l.id === selectedLeader) || leaders[0];

  const departments = [
    { name: "TACTICAL VISION SECOPS", count: 18, focus: "Edge computer vision model calibration, speed coordinate optimization, FIPS handshakes", status: "Active" },
    { name: "HARDWARE DEVIATION LAB", count: 12, focus: "Custom biometric scanner assemblies, thermal LIDAR rig tests, robotic frame design", status: "Active" },
    { name: "ZERO-TRUST SYSTEM ARCHS", count: 9, focus: "Rotating key structures, safe sandboxed database enclaves, external compliance audits", status: "Active" }
  ];

  return (
    <div className="space-y-0 text-foreground overflow-hidden font-sora">
      
      {/* SECTION 1: HEADER HERO SPLASH */}
      <section className="relative pt-32 pb-16 px-8 lg:px-16 bg-transparent border-b border-border flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">COMMANDING_TACTICIANS</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
            ENGINEERED BY KEY <br/>
            <span className="text-primary font-bold">CYBER-TACTICAL DEFENDERS</span>
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mt-4 leading-relaxed">
            Our teams are drawn from elite federal laboratories, public security divisions, and top-tier artificial intelligence research hubs globally.
          </p>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE MEMBERS (INTERACTIVE SUMMARY METRICS) */}
      <section className="py-24 px-8 lg:px-16 bg-background border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">01 // COMMAND STRUCTURE</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">COMMUNICATE WITH OPS LEADERS</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Select an executive officer to analyze their operational specialties, tactical clearance validation, past experiences, and biometric system calibration indices.
            </p>

            <div className="space-y-3 pt-3">
              {leaders.map((leader) => (
                <button
                  key={leader.id}
                  onClick={() => setSelectedLeader(leader.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-md border text-left transition-all ${selectedLeader === leader.id ? 'border-primary bg-secondary' : 'border-border bg-transparent hover:bg-secondary/40'}`}
                >
                  <div className="flex items-center gap-3">
                    <UserCheck className={`w-4 h-4 ${selectedLeader === leader.id ? 'text-primary' : 'text-muted-foreground'}`} />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase">{leader.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-mono">{leader.role}</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono pr-2 text-primary uppercase">
                    {leader.id === selectedLeader ? 'ACTIVE' : 'SELECT'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            {/* Hologram details card with skill meters */}
            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden font-mono text-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/4 rounded-full blur-2xl" />
              
              <div className="flex justify-between items-center border-b border-border/80 pb-4 mb-6">
                <span className="text-primary font-bold">TACTICAL DIAGNOSTICS SCREEN</span>
                <span className="text-[9px] bg-primary/10 text-primary px-2.5 py-0.5 rounded uppercase">
                  {activeLeader.clearance}
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] text-muted-foreground block mb-0.5">COMMANDER NAME // SPECIALTY</span>
                  <h3 className="text-lg font-bold text-foreground font-sans uppercase">{activeLeader.name}</h3>
                  <p className="text-primary font-bold text-[10px] uppercase font-mono tracking-wider mt-0.5">{activeLeader.specialty}</p>
                </div>

                <div>
                  <span className="text-[10px] text-muted-foreground block mb-0.5">EXECUTIVE CAREER PROVING</span>
                  <p className="text-foreground tracking-tight font-sans font-light text-xs">{activeLeader.pastExperience}</p>
                </div>

                <div className="bg-background/85 p-4 border border-border rounded">
                  <span className="text-[9px] text-muted-foreground block mb-1 uppercase">OPERATIONAL COMMAND MISSION</span>
                  <p className="text-xs text-foreground/80 leading-relaxed font-sans font-light">
                    {activeLeader.bio}
                  </p>
                </div>

                {/* Interactive Dynamic Metrics Bar Graph / Radar emulator */}
                <div className="space-y-3 pt-4 border-t border-border/60">
                  <span className="text-[9px] text-muted-foreground block uppercase">TACTICAL PROFILE SKILLS:</span>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>TACTICAL SYSTEM INTEGRITY</span>
                      <span className="text-primary">{activeLeader.skills.tactical}%</span>
                    </div>
                    <div className="w-full bg-background h-1.5 rounded overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${activeLeader.skills.tactical}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>CRYPTOGRAPHIC ENVELOPE DESIGN</span>
                      <span className="text-primary">{activeLeader.skills.cryptographic}%</span>
                    </div>
                    <div className="w-full bg-background h-1.5 rounded overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${activeLeader.skills.cryptographic}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>SECURE PATROL ROBOTICS ARCHITECTURE</span>
                      <span className="text-primary">{activeLeader.skills.hardware}%</span>
                    </div>
                    <div className="w-full bg-background h-1.5 rounded overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: `${activeLeader.skills.hardware}%` }} />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: OPERATIONAL DIVISIONS GRID */}
      <section className="py-24 px-8 lg:px-16 bg-secondary relative pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">02 // CYBER DEPARTMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">TACTICAL DIVISIONAL SCOPE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx} 
                className="bg-background border border-border hover:border-primary/40 transition-all p-8 rounded-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/2 rounded-full blur-2xl font-mono" />
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-secondary rounded inline-block text-primary">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-sm uppercase font-bold tracking-widest">
                    {dept.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>
                
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  {dept.focus}
                </p>

                <div className="font-mono text-[10px] text-muted-foreground/80 mt-auto">
                  INTEGRATED PERSONNEL: <span className="font-bold text-foreground">{dept.count} COMMANDERS</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
