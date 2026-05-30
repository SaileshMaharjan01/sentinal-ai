import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, ShieldAlert, Cpu, Terminal, Key, Shield, AlertTriangle, CheckCircle, Smartphone } from "lucide-react";

export default function ContactsView() {
  // --- STATE FOR SECURE FORM SUBMITTER ---
  const [formData, setFormData] = useState({ name: "", email: "", node: "columbus", message: "" });
  const [swipeUnlock, setSwipeUnlock] = useState<number>(0); // 0 to 100 indicator
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [submitState, setSubmitState] = useState<"IDLE" | "TRANSMITTING" | "SUCCESS">("IDLE");
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);

  // --- STATE FOR GEOGRAPHIC COORDINATES ---
  const [activeCoord, setActiveCoord] = useState<string>("columbus");

  // --- STATE FOR EMERGENCY DISPATCH ---
  const [dispatchStage, setDispatchStage] = useState<"IDLE" | "CONFIRMING" | "LAUNCHED">("IDLE");

  const hqCoordinates = [
    { id: "columbus", name: "Primary Command Core", city: "Columbus, OH", coords: "40.0125° N, 83.0135° W", phone: "+1 (614) 555-0100", enclave: "Enclave-Alpha secure lines" },
    { id: "san_francisco", name: "Pacific Node Beta", city: "San Francisco, CA", coords: "37.7749° N, 122.4194° W", phone: "+1 (415) 555-0188", enclave: "Pacific Hub crypt enclaves" },
    { id: "zurich", name: "Swiss Vault Shield", city: "Zurich, Switzerland", coords: "47.3769° N, 8.5417° E", phone: "+41 (44) 555-0900", enclave: "Alpine high-isolation nodes" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSwipeUnlock(val);
    if (val >= 100) {
      setIsUnlocked(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isUnlocked) return;
    setSubmitState("TRANSMITTING");
    setTransmissionLogs([
      "PREEMPTING TRANSMISSION PIPELINE...",
      "GENERATING ECDSA PUBLIC SHARES...",
      "COMMITTING CRYPTOCONNECTION..."
    ]);

    setTimeout(() => {
      setTransmissionLogs((prev) => [
        `ROTATING 4096-BIT TUNNEL SHIELDS...`,
        `TARGET INGEST NODE: [${formData.node.toUpperCase()}] SECURE_STORAGE`,
        ...prev
      ]);
    }, 600);

    setTimeout(() => {
      setTransmissionLogs((prev) => [
        `ENVELOPE ENCRYPTED SUCCESSFULLY VIA AES-256`,
        `RECORD COMMITTED AT ZERO-TRUST ENCLAVE`,
        `SUCCESS: AI COMM DISPATCH COMPLETED`,
        ...prev
      ]);
      setSubmitState("SUCCESS");
    }, 1600);
  };

  const handleDispatchTrigger = () => {
    setDispatchStage("CONFIRMING");
  };

  const commitDispatch = () => {
    setDispatchStage("LAUNCHED");
  };

  const resetDispatch = () => {
    setDispatchStage("IDLE");
  };

  return (
    <div className="space-y-0 text-foreground overflow-hidden font-sora">
      
      {/* SECTION 1: HEADER HERO SPLASH */}
      <section className="relative pt-32 pb-16 px-8 lg:px-16 bg-transparent border-b border-border flex items-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block mb-3">COMMAND_COMMUNICATION</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
            ESTABLISH AN ENCRYPTED <br/>
            <span className="text-primary font-bold">ZERO-TRUST HANDSHAKE</span>
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mt-4 leading-relaxed">
            Reach out via our cryptographically sealed console terminal. No unrequested marketing pixels. Zero trackers. All details direct to our isolated physical enclaves.
          </p>
        </div>
      </section>

      {/* SECTION 2: SECURE MESSAGE FORM WITH GESTURE UNLOCK SLIDER */}
      <section className="py-24 px-8 lg:px-16 bg-background border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">01 // SECURE TERMINAL TRANSMITTER</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">SECURE DISPATCH TRANSMISSION</h2>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Complete the secure telemetry dispatch details below. To authorize sending parameters, drag the holographic lock verify slider fully to the right. This establishes encryption verification vectors.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-muted-foreground uppercase">SENDER HUMAN NAME:</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Elena Vance"
                    className="w-full bg-secondary border border-border rounded-sm p-3 font-sans text-foreground focus:outline-none focus:border-primary transition-all font-light text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-muted-foreground uppercase">VERIFIED CORRESPONDENCE EMAIL:</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="agent@zero-trust.io"
                    className="w-full bg-secondary border border-border rounded-sm p-3 font-sans text-foreground focus:outline-none focus:border-primary transition-all font-light text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <span className="text-muted-foreground uppercase">TARGET SYSTEM DIRECT ENCLAVE:</span>
                  <select
                    name="node"
                    value={formData.node}
                    onChange={handleInputChange}
                    className="w-full bg-secondary border border-border text-foreground rounded-sm p-3 font-sans focus:outline-none focus:border-primary transition-all text-xs"
                  >
                    <option value="columbus">COLUMBUS PRIMARY COMMAND CORE [OH]</option>
                    <option value="san_francisco">SAN FRANCISCO PACIFIC NODE BETA [CA]</option>
                    <option value="zurich">ZURICH SWISS VAULT SHIELD [CH]</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-muted-foreground uppercase">TRANSMISSION SPECIFICATION MESSAGE:</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Inquire about zero-trust campus surveillance and biometric gate hardware specifications..."
                  className="w-full bg-secondary border border-border rounded-sm p-3 font-sans text-foreground focus:outline-none focus:border-primary transition-all font-light text-xs"
                />
              </div>

              {/* Holographic Verification Slider */}
              <div className="bg-secondary/40 border border-border p-4 rounded-sm space-y-3">
                <div className="flex justify-between text-[10px] items-center">
                  <span className="text-muted-foreground uppercase">SWIPE TO CRYPTO-UNLOCK FOR TRANSMISSION:</span>
                  <span className={`fnd-semibold ${isUnlocked ? 'text-primary' : 'text-muted-foreground'}`}>
                    {isUnlocked ? "AUTHENTICATION_OK" : "STANDBY"}
                  </span>
                </div>
                
                <div className="relative flex items-center bg-background rounded border border-border p-1.5 h-10">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    disabled={isUnlocked}
                    value={swipeUnlock}
                    onChange={handleSliderChange}
                    className="w-full accent-primary bg-transparent opacity-90 cursor-grab active:cursor-grabbing disabled:opacity-30 disabled:cursor-default"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none text-[9px] uppercase tracking-widest text-[#666]">
                    {isUnlocked ? "SYSTEM UNLOCKED // SEND ACTIVE" : "SLIDER TO CONFIRM"}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isUnlocked || submitState === "TRANSMITTING"}
                className="w-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs py-4 rounded-sm flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-40"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Encrypted Transmission
              </button>

            </form>
          </div>

          {/* Right Live Console feedback */}
          <div className="lg:col-span-6">
            <div className="bg-secondary p-6 rounded-lg border border-border font-mono text-xs h-full flex flex-col justify-between min-h-[380px]">
              
              <div>
                <div className="flex items-center gap-1.5 border-b border-border/80 pb-3 mb-4 text-primary">
                  <Terminal className="w-4 h-4 animate-pulse" />
                  SENDER CORE STATUS DIAGNOSTICS
                </div>

                {submitState === "IDLE" && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground font-light">
                      Transmit channels idle. Awaiting envelope verification metrics from current session details.
                    </p>
                    <div className="p-4 bg-background border border-border rounded font-sans leading-relaxed text-[11px] text-muted-foreground/85">
                      <span className="font-bold text-foreground block font-mono text-[9px] uppercase mb-1">ENVELOPE METADATA STANDBY</span>
                      Name: {formData.name || "<Pending Input>"}<br/>
                      Email: {formData.email || "<Pending Input>"}<br/>
                      Destination Station: {formData.node.toUpperCase()}<br/>
                      Payload Length: {formData.message ? `${formData.message.length} Bytes` : "0 Bytes"}
                    </div>
                  </div>
                )}

                {submitState !== "IDLE" && (
                  <div className="space-y-2 bg-[#121212] p-4 rounded border border-border">
                    <span className="text-[9px] text-muted-foreground uppercase block mb-2 border-b border-border/40 pb-1">CONSOLE FEEDBACK DISPATCH LOGS</span>
                    <div className="space-y-1 text-[10px] text-foreground/90 max-h-48 overflow-y-auto">
                      {transmissionLogs.map((log, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span className="text-primary">&gt;</span>
                          <span className={log.includes("SUCCESS") ? "text-primary font-bold animate-pulse" : ""}>{log}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {submitState === "SUCCESS" && (
                <div className="mt-6 flex items-center justify-center gap-2 p-3 bg-primary/10 border border-primary text-primary rounded font-mono text-xs uppercase uppercase-bold">
                  <CheckCircle className="w-4 h-4 animate-bounce" />
                  Your parameters have been logged in security enclaves successfully!
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: EMERGENCY INCIDENT RESPONSE MATRIX (RED ALERT ACTION TRIGGER) */}
      <section className="py-24 px-8 lg:px-16 bg-secondary border-b border-border relative pointer-events-auto">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[10px] tracking-[0.3em] text-destructive uppercase font-mono font-bold flex items-center justify-center gap-1.5">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              HOT EMERGENCY DISPATCH COMMANDS [FIPS-404]
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">INCIDENT ALARMLINK</h2>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              If your facility is facing an immediate perimeter breach or logical shutdown event, trigger our immediate cybernetical incident response vectors instantly.
            </p>
          </div>

          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            {dispatchStage === "IDLE" && (
              <button
                type="button"
                onClick={handleDispatchTrigger}
                className="bg-destructive hover:bg-destructive/90 text-foreground text-xs tracking-widest font-bold uppercase px-8 py-4.5 rounded-sm hover:scale-105 active:scale-[0.97] transition-all shadow-[0_0_20px_rgba(239,68,68,0.25)] flex items-center gap-3 cursor-pointer"
              >
                <ShieldAlert className="w-5 h-5 animate-bounce" />
                Trigger Incident Dispatch
              </button>
            )}

            {dispatchStage === "CONFIRMING" && (
              <div className="bg-background border border-destructive max-w-md p-6 rounded-lg text-left space-y-4 shadow-2xl">
                <div className="flex gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-wide">CONFIRM UNIFIED SAFETY ACTION ROUTINES?</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Warning: Triggering dispatch initializes our Columbus HQ satellite tracking scopes. This action registers real-time geo-located threat alerts across our drone fleets automatically.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={commitDispatch}
                    className="flex-1 bg-destructive text-foreground py-2.5 rounded font-bold text-xs uppercase tracking-wide hover:brightness-110"
                  >
                    Confirm Dispatch
                  </button>
                  <button
                    type="button"
                    onClick={resetDispatch}
                    className="flex-1 bg-secondary border border-border py-2.5 rounded font-bold text-xs uppercase tracking-wide hover:bg-secondary/80"
                  >
                    Cancel Action
                  </button>
                </div>
              </div>
            )}

            {dispatchStage === "LAUNCHED" && (
              <div className="bg-background border border-primary max-w-md p-6 rounded-lg text-left space-y-4 shadow-2xl font-mono text-[11px]">
                <div className="flex gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-wider">COMMAND LAUNCHED SUCCESSFULLY</span>
                </div>
                <div className="space-y-1 text-[10px] text-foreground/80 bg-secondary/80 p-3 rounded">
                  <div>&gt; SAT_LINK: CONNECTIVITY SECURED BLOCK-9</div>
                  <div>&gt; VECTORING: Dispatch Drone SENTINEL-X1 APEX</div>
                  <div>&gt; RESPONSE STATUS: Agent routing and security dispatched.</div>
                </div>
                <button
                  type="button"
                  onClick={resetDispatch}
                  className="w-full bg-secondary hover:bg-neutral-800 text-muted-foreground py-2 text-xs uppercase rounded transition-colors"
                >
                  Reset Safe Coordinates Standby
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL HEADQUARTERS COORDINATES */}
      <section className="py-24 px-8 lg:px-16 bg-background relative pointer-events-auto" id="global-offices">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-mono block">03 // GEOGRAPHIC ENCLAVES</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">PHYSICAL OFFICE STATIONS</h2>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Explore coordinates of our physical office enclaves. Click on any regional station node to instantly load its high-isolation local voice coordinate lines and specific regional server specifications.
            </p>

            <div className="space-y-3 pt-2">
              {hqCoordinates.map((hq) => (
                <button
                  key={hq.id}
                  onClick={() => setActiveCoord(hq.id)}
                  className={`w-full flex items-center justify-between p-4 rounded bg-secondary/40 border text-left transition-all ${activeCoord === hq.id ? 'border-primary bg-secondary' : 'border-border hover:bg-secondary/10'}`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${activeCoord === hq.id ? 'text-primary' : 'text-muted-foreground'}`} />
                    <div>
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-tight">{hq.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-light">{hq.city}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded tracking-widest uppercase font-bold">
                    {activeCoord === hq.id ? 'VERIFIED' : 'SELECT'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Display information panel of active coordinate */}
            <div className="bg-secondary p-8 rounded-lg border border-border relative overflow-hidden font-mono text-xs min-h-[300px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/4 rounded-full blur-2xl" />
              
              <div>
                <div className="flex items-center gap-1.5 border-b border-border pb-4 mb-6">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="font-bold text-foreground">PHYSICAL COORD ENCLAVE LOGS</span>
                </div>

                {(() => {
                  const hq = hqCoordinates.find((h) => h.id === activeCoord);
                  if (!hq) return null;
                  return (
                    <div className="space-y-5 font-sans">
                      <div>
                        <span className="text-[10px] text-muted-foreground block font-mono uppercase mb-0.5">GEOGRAPHIC COORDINATES LOCATION:</span>
                        <h3 className="text-lg font-bold text-foreground font-sora font-semibold uppercase">{hq.name}</h3>
                        <p className="text-primary font-mono text-xs font-bold mt-1 uppercase tracking-wider">{hq.coords}</p>
                      </div>

                      <div>
                        <span className="text-[10px] text-muted-foreground block font-mono uppercase mb-0.5">HIGH-ISOLATION VOICE SECURE LINES:</span>
                        <p className="text-foreground tracking-tight font-light font-mono text-sm">{hq.phone}</p>
                      </div>

                      <div className="bg-background/80 p-4 border border-border rounded font-mono text-[10px] tracking-tight uppercase text-muted-foreground leading-relaxed">
                        SECURE ROUTING HUB: <span className="text-foreground font-bold">{hq.enclave}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="mt-8 text-[9px] text-muted-foreground/60 tracking-wider font-mono uppercase">
                SYSTEM REGISTERED IDENT / STABLE L-2
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
