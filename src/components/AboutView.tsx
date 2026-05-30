import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, History, Award, BookOpen, ChevronRight, Lock, Key, EyeOff } from "lucide-react";

export default function AboutView() {
  // --- STATE FOR INTERACTIVE TIMELINE ---
  const [activeEpoch, setActiveEpoch] = useState<number>(3); // Default to current Year

  // --- STATE FOR COMPLIANCE DETAILS ---
  const [activeCert, setActiveCert] = useState<string>("soc2");

  const timelineData = [
    {
      year: "2021",
      title: "FOUNDATIONAL CORE",
      description: "Started as a cryptographic defense lab in Central Ohio. Conducted spatial-AI computer vision tests with under 20ms frame latencies.",
      metric: "0.1X NEURAL EFFICIENCY"
    },
    {
      year: "2023",
      title: "SENTINEL NETWORK V1",
      description: "Deployed unified physical surveillance modules directly integrated with AWS GovCloud. Instantly scaled to protect 4 defense-industrial locations.",
      metric: "18 MILLISECONDS DISPATCH"
    },
    {
      year: "2025",
      title: "ZERO-TRUST REVOLUTION",
      description: "Implemented absolute FIPS 140-3 cryptographic handshakes on all hardware. Moved server instances to fully encapsulated serverless environments.",
      metric: "4096-BIT ROTATING KEYS"
    },
    {
      year: "2026",
      title: "AUTONOMOUS FRONTIER",
      description: "Establishing autonomous robotic patrol channels connected via redundant satellite constellations. Zero human backdoors allowed on direct safety cores.",
      metric: "11MS GLOBAL THREAT PINPOINT"
    }
  ];

  const certsData = [
    {
      id: "soc2",
      name: "SOC 2 Type II Certified",
      regulatory: "AICPA Standards",
      auditor: "Coalfire Assurance LLC",
      auditedScope: "Continuous logical security metrics, automated incident timelines, and multi-tenant isolation verification. Zero findings reported across all security quadrants.",
      status: "APPROVED"
    },
    {
      id: "iso",
      name: "ISO/IEC 27001",
      regulatory: "Information Security Systems",
      auditor: "BSI Group International",
      auditedScope: "Physical boundary penetration resilience, tactical hardware chain-of-custody protocols, and serverless infrastructure encryption routines conforming to extreme metrics.",
      status: "APPROVED"
    },
    {
      id: "fedramp",
      name: "FedRAMP High Readiness",
      regulatory: "US Gov Security Requirements",
      auditor: "Third-Party Assessment (3PAO)",
      auditedScope: "Data sovereignty checks, strict zero-trust credential handshake routines, and complete separation of private physical nodes from public network endpoints.",
      status: "COMPLIAN_ACTIVE"
    }
  ];

  return (
    <div className="space-y-0 text-foreground overflow-hidden font-sora">
      
      {/* SECTION 1: HEADER HERO SPLASH */}
      <section className="relative pt-32 pb-16 px-8 lg:px-16 bg-transparent border-b border-border flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">ADMIN_ABOUT_US</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
            WE DEFEND WHAT <br/>
            <span className="text-primary font-bold">HUMANS CONSTRUCT</span>
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mt-4 leading-relaxed">
            SENTINEL AI exists to engineer flawless physical and digital security boundaries. We believe that true enterprise safety does not tolerate compromises, mock servers, or delayed alarms.
          </p>
        </div>
      </section>

      {/* SECTION 2: CORE SECURITY VALUES */}
      <section className="py-24 px-8 lg:px-16 bg-background border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">01 // ETHICAL STATEMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">THE GUARDRAIL DOCTRINE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden group">
              <div className="p-3 bg-background rounded inline-block text-primary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-foreground">Absolute Data Enclave</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Your video segments, biometric coordinates, and facility logs are cryptographically sealed. Even our database administrators hold zero access routes to private key enclaves.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden group">
              <div className="p-3 bg-background rounded inline-block text-primary mb-6">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-foreground">Human-in-the-Loop Safe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                AI operates at extreme dispatch speeds to neutralize logical threats, but all permanent physical lockdown isolations provide clear manual bypass controls to trusted human commanders.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden group">
              <div className="p-3 bg-background rounded inline-block text-primary mb-6">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-foreground">Anti-Surveillance Bias</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                We design our models from balanced synthetic telemetry vectors. Facial recognition pipelines filter for architectural matching metrics rather than arbitrary demographic indicators.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: INTERACTIVE MILESTONES TIMELINE */}
      <section className="py-24 px-8 lg:px-16 bg-secondary border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">02 // HISTORIC TIMELINE</span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase">OUR CHRONOLOGY</h2>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Click across our operational timeline milestones to explore how SENTINEL developed from a regional lab into a global zero-trust tactical force.
              </p>

              {/* Selector buttons list */}
              <div className="grid grid-cols-4 gap-2">
                {timelineData.map((epoch, index) => (
                  <button
                    key={epoch.year}
                    onClick={() => setActiveEpoch(index)}
                    className={`py-3 px-1 border rounded text-xs font-bold font-mono tracking-wider transition-all ${activeEpoch === index ? 'border-primary bg-background text-primary' : 'border-border bg-transparent text-muted-foreground hover:text-foreground'}`}
                  >
                    {epoch.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Display panel for active milestone with custom transitions */}
            <div className="lg:col-span-7">
              <div className="bg-background border border-border p-8 rounded-lg relative overflow-hidden min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-6 font-mono text-xs">
                    <span className="text-primary tracking-widest font-bold">STATE // VERIFIED</span>
                    <span className="text-muted-foreground">MILESTONE_{timelineData[activeEpoch].year}</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-foreground">
                    {timelineData[activeEpoch].title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {timelineData[activeEpoch].description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 flex justify-between items-center font-mono text-[10px] text-muted-foreground">
                  <span>METRIC VELOCITY RATIOS:</span>
                  <span className="text-primary font-bold tracking-widest">{timelineData[activeEpoch].metric}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: REGULATORY & COMPLIANCE HUD */}
      <section className="py-24 px-8 lg:px-16 bg-background relative pointer-events-auto">
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">03 // COMPLIANCE CONSTANTS</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">COMPLIANCE STANDARDS</h2>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              SENTINEL AI is audited annually by independent firms to guarantee we exceed global military cyber security specifications. Highlight any standard badge to review scope metrics.
            </p>

            <div className="space-y-3">
              {certsData.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCert(c.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-md border text-left transition-all ${activeCert === c.id ? 'border-primary bg-secondary' : 'border-border bg-transparent hover:bg-secondary/30'}`}
                >
                  <div className="flex items-center gap-3">
                    <Award className={`w-4 h-4 ${activeCert === c.id ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm font-semibold text-foreground uppercase">{c.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-muted-foreground ${activeCert === c.id ? 'text-primary' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Hologram details area */}
            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden font-mono text-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-4">
                <span className="text-primary font-bold">PROVING COMPLIANCE SECURITY</span>
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {certsData.find((c) => c.id === activeCert)?.status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-muted-foreground block mb-0.5">REGULATORY AUTHORITY</span>
                  <span className="text-sm font-bold text-foreground">{certsData.find((c) => c.id === activeCert)?.regulatory}</span>
                </div>

                <div>
                  <span className="text-[10px] text-muted-foreground block mb-0.5">INDEPENDENT REGISTERED AUDITOR</span>
                  <span className="text-sm font-bold text-foreground">{certsData.find((c) => c.id === activeCert)?.auditor}</span>
                </div>

                <div className="bg-background/80 p-4 border border-border rounded">
                  <span className="text-[9px] text-muted-foreground block mb-1">AUDIT_CERTIFICATION_SCOPE</span>
                  <p className="text-[10px] text-foreground/90 leading-relaxed font-sans font-light">
                    {certsData.find((c) => c.id === activeCert)?.auditedScope}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
