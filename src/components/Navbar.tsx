import React, { useState } from "react";
import { Button } from "./ui/button";
import { ActivePage, NAV_LINKS } from "../types";
import { Menu, X, ShieldAlert, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (pageId: ActivePage) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 bg-background/30 backdrop-blur-md border-b border-white/5">
        
        {/* Left: Logo */}
        <button 
          onClick={() => handleLinkClick("home")} 
          className="text-foreground text-xl font-bold tracking-tight hover:opacity-85 transition-opacity font-sora cursor-pointer flex items-center gap-2 uppercase"
          id="nav-logo"
        >
          <div className="w-5 h-5 bg-primary/20 border border-primary/60 rounded flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          </div>
          SENTINEL <span className="text-primary font-bold">AI</span>
        </button>

        {/* Center: Nav links (Hidden on screens below Desktop width - lg Breakpoint) */}
        <div className="hidden lg:flex items-center gap-10" id="nav-desktop-menu">
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-all relative py-1.5 cursor-pointer ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: CTA Button or Tablet Hamburger */}
        <div className="flex items-center gap-4">
          <Button
            variant="navCta"
            size="lg"
            onClick={() => handleLinkClick("contacts")}
            className="hidden lg:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
            id="nav-cta-btn"
          >
            Get Quote
          </Button>

          {/* Hamburger button shown under lg Breakpoint */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer bg-secondary/80 border border-border rounded"
            aria-label="Toggle Navigation Menu"
            id="hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* MOBILE / TABLET MENU OVERLAY (with gorgeous Framer Motion animation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl flex flex-col pt-28 px-8 pb-12 outline-none"
            id="mobile-menu-overlay"
          >
            {/* Visual background Grid for premium look */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(119,99,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(119,99,46,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              
              {/* Navigation Links list */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] tracking-[0.3em] font-mono text-primary uppercase block border-b border-border pb-2 mb-2">
                  SECURITY DIRECTS
                </span>
                
                <button
                  onClick={() => handleLinkClick("home")}
                  className={`text-xl font-bold font-sora text-left tracking-tight uppercase flex items-center justify-between ${activePage === "home" ? 'text-primary' : 'text-foreground/80'}`}
                >
                  HOME CORE
                  <ChevronRight className="w-5 h-5 opacity-40" />
                </button>

                {NAV_LINKS.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-xl font-bold font-sora text-left tracking-tight uppercase flex items-center justify-between transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
                    >
                      {link.label}
                      <ChevronRight className="w-5 h-5 opacity-40" />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Callouts in Overlay */}
              <div className="space-y-6 pt-8 border-t border-border mt-auto">
                <Button
                  variant="navCta"
                  size="lg"
                  onClick={() => handleLinkClick("contacts")}
                  className="w-full py-4 text-xs tracking-wider"
                >
                  Get Secure Quote
                </Button>

                <div className="flex justify-between items-center text-[10px] text-muted-foreground/60 font-mono">
                  <span>DISPATCH: COLUMBUS, OH</span>
                  <span>LATENCY: 11MS SECURE</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
