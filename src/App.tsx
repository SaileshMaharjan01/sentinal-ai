/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActivePage } from "./types";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import ServicesView from "./components/ServicesView";
import AboutView from "./components/AboutView";
import ProjectsView from "./components/ProjectsView";
import TeamView from "./components/TeamView";
import ContactsView from "./components/ContactsView";
import Background3D from "./components/Background3D";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");

  return (
    <div className="bg-hero-bg min-h-screen selection:bg-primary selection:text-primary-foreground font-sora relative">
      
      {/* Global Persistent Interactive 3D Grid Background */}
      <Background3D />

      {/* Shared Responsive Fixed Navigation Menu */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Panoramic Page Swapper using Framer Motion's AnimatePresence */}
      <main className="min-h-screen relative z-10 w-full overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activePage === "home" && <HomeView onNavigate={setActivePage} />}
            {activePage === "services" && <ServicesView />}
            {activePage === "about" && <AboutView />}
            {activePage === "projects" && <ProjectsView />}
            {activePage === "team" && <TeamView />}
            {activePage === "contacts" && <ContactsView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Compact Secure Status Footer */}
      <footer className="bg-background border-t border-border py-12 px-8 lg:px-16 text-xs text-muted-foreground/60 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            <span className="font-mono text-[10px] uppercase">SENTINEL AI // DIRECT_LOGS_ACTIVE</span>
          </div>

          <p className="font-light text-center md:text-right">
            &copy; 2026 SENTINEL AI, Inc. Security engineered correctly. Columbus, OH.
          </p>
        </div>
      </footer>

    </div>
  );
}
