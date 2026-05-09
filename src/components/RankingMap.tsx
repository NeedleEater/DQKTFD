import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield } from 'lucide-react';

export default function RankingMap() {
  const cities = [
    { name: 'Syracuse', x: '10%', y: '50%', dominance: '98%', potential: '9,000', delay: 0.2 },
    { name: 'Layton', x: '55%', y: '75%', dominance: '100%', potential: '20,000', delay: 0.4 },
    { name: 'Roy', x: '60%', y: '25%', dominance: '96%', potential: '10,000', delay: 0.6 },
  ];

  return (
    <div className="mt-8 relative w-full aspect-[4/6] sm:aspect-[16/10] md:aspect-[21/11] bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl group transition-all duration-700">
      {/* Playful Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-playful-dots text-white pointer-events-none" />
      
      {/* Legend / Correlation Header */}
      <div className="absolute top-6 left-8 z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-[1.5rem] shadow-2xl">
          <div className="text-[9px] uppercase tracking-[0.3em] font-black text-sky-400 mb-1">Market Reach Correlation</div>
          <div className="text-[11px] text-white font-bold">Rank Dominance × Local Families</div>
        </div>
      </div>

      {/* Radar Scan Effect */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent pointer-events-none"
      />

      {/* Abstract geography lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M0,120 Q100,50 200,150 T400,100"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          d="M50,0 Q180,120 280,30 T380,180"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* City Markers */}
      {cities.map((city, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: city.delay 
          }}
          className="absolute"
          style={{ left: city.x, top: city.y }}
        >
          {/* Ripple Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 2.5],
              opacity: [0.4, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeOut" 
            }}
            className="absolute -inset-6 bg-white/10 rounded-full"
          />
          
          <div className="relative flex items-center gap-3">
             <div className="bg-orange-500 p-2 rounded-xl shadow-[0_10px_20px_rgba(249,115,22,0.4)] border-2 border-white/20">
                <Shield className="w-3.5 h-3.5 text-white" strokeWidth={3} />
             </div>
             
             <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/10 px-4 py-2 rounded-[1.25rem] shadow-2xl">
                <div className="text-[10px] uppercase tracking-[0.1em] font-black text-white mb-1 whitespace-nowrap">{city.name}</div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    <span className="text-[11px] font-black text-white/90 tracking-tight">{city.dominance} Dominance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                    <span className="text-[9px] font-bold text-white/70 tracking-tight">{city.potential} Families</span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom overlay text */}
      <div className="absolute bottom-6 right-8 flex items-center gap-3">
        <div className="flex -space-x-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-2.5 h-2.5 rounded-full border-2 border-slate-900 bg-orange-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
