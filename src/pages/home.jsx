import React, { useState } from "react";
import SplineSceneBasic from "../components/ui/demo";
import "../styles/home.css";

export const Home = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");

  // The right-side menu items
  const menuItems = ["AFFILIATION", "EXPERIENCE", "EDUCATION", "SKILLS", "PROJECTS", "CONTACT"];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      
      {/* Background ambient glow matching the image */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 via-black to-blue-900/20 z-0" />
      
      {/* Floating Particles Overlay (Handled in CSS) */}
      <div className="particles-container z-0"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-7xl h-[85vh] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl showcase-gradient flex flex-col">
        
        {/* Navbar inside the card */}
        <header className="flex items-center justify-between px-10 py-6 relative z-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter">PRATHAM</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <button className="hover:text-white transition">Home</button>
            <button className="hover:text-white transition">Projects</button>
            <button className="hover:text-white transition">Help</button>
          </nav>
          
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium hover:text-white transition">Resume</button>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Here..." 
                className="bg-black/30 border border-gray-600 rounded-full px-4 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 w-40"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex relative">
          
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 px-10 flex flex-col justify-center relative z-20 pb-20">
            
            {/* "S RANK" Rank Badge */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-serif italic text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">S</span>
              <span className="text-lg tracking-widest text-gray-200">RANK</span>
            </div>
            
            <p className="text-sm text-gray-300 mb-1 tracking-wider uppercase">Full-Stack Developer A.K.A</p>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
              PRATHAM SHRESTHA
            </h1>
            <p className="text-xl text-gray-400 font-medium mb-8">(प्रथम्)</p>

            {/* Dynamic Content Based on Selection */}
            <div className="max-w-md space-y-4 text-sm text-gray-300 leading-relaxed">
              {activeSection === "ABOUT" && (
                <>
                  <p>
                    Pratham Shrestha is a Results-driven Full-Stack Developer experienced in MERN stack, Flutter mobile development, and UI/UX design. He delved down the path of becoming an architect of scalable web apps.
                  </p>
                  <p>
                    Currently leading frontend development at Geek Tech Solutions, building production-grade POS systems. He possesses the unique ability to optimize systems and dislikes inefficient code.
                  </p>
                </>
              )}
              {activeSection === "EXPERIENCE" && (
                <>
                  <p className="text-white font-semibold">Geek Tech Solutions (2024 - Present)</p>
                  <p>• Improved POS system load time by ~30% through optimized React rendering.</p>
                  <p>• Reduced API response latency by ~25% by restructuring frontend data handling.</p>
                </>
              )}
              {/* Add other conditions for EDUCATION, SKILLS, etc., here */}
              {(activeSection !== "ABOUT" && activeSection !== "EXPERIENCE") && (
                <p>Select a section from the right menu to view details.</p>
              )}
            </div>
          </div>

          {/* Center Graphic (Your Robot/Spline Model) */}
          <div className="absolute inset-x-0 bottom-0 top-10 mx-auto w-[600px] flex justify-center items-end opacity-90 z-10 pointer-events-none">
            {/* Using your Spline component, positioned to act as the character */}
            <div className="w-full h-[120%] relative pointer-events-auto filter drop-shadow-2xl">
              <SplineSceneBasic />
            </div>
            {/* Gradient fade at the bottom to blend the model into the card */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0b0b14] to-transparent z-20"></div>
          </div>

          {/* Right Vertical Navigation */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-end z-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-wide">{activeSection}</h2>
            </div>
            
            <nav className="flex flex-col items-end gap-4 pr-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                    activeSection === item 
                      ? "text-yellow-400 font-bold transform -translate-x-2" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;