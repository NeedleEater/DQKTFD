import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield } from 'lucide-react';

export default function RankingMap() {
  const cities = [
    { name: 'Syracuse', x: '15%', y: '45%', dominance: '98%', potential: '9,000', delay: 0.2 },
    { name: 'Layton', x: '55%', y: '60%', dominance: '100%', potential: '20,000', delay: 0.4 },
    { name: 'Roy', x: '45%', y: '20%', dominance: '96%', potential: '10,000', delay: 0.6 },
  ];

  return (
    <div className="mt-8 relative w-full aspect-[21/9] bg-slate-600 rounded-3xl overflow-hidden border border-slate-500 shadow-2xl group">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      
      {/* Legend / Correlation Header */}
      <div className="absolute top-4 left-6 z-10">
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl">
          <div className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-400 mb-1">Market Reach Correlation</div>
          <div className="text-xs text-white/90 font-medium">Rank Dominance × Local Family Density</div>
        </div>
      </div>

      {/* Radar Scan Effect */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
      />

      {/* Abstract geography lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 200">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,100 Q100,80 200,120 T400,100"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          d="M50,0 Q150,100 250,50 T350,200"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
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
            stiffness: 260, 
            damping: 20,
            delay: city.delay 
          }}
          className="absolute"
          style={{ left: city.x, top: city.y }}
        >
          {/* Ripple Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 2],
              opacity: [0.3, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeOut" 
            }}
            className="absolute -inset-4 bg-white/20 rounded-full"
          />
          
          <div className="relative flex items-center gap-3">
             <div className="bg-blue-600 p-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Shield className="w-3 h-3 text-white" />
             </div>
             
             <div className="bg-slate-600/95 backdrop-blur-md border border-slate-400/50 px-3 py-1.5 rounded-xl shadow-xl">
                <div className="text-[10px] uppercase tracking-widest font-black text-slate-200 mb-0.5 whitespace-nowrap">{city.name}</div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[11px] font-bold text-white tracking-tight">{city.dominance} Dominance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span className="text-[10px] font-medium text-slate-300 tracking-tight">{city.potential} Families</span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom overlay text */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        <div className="flex -space-x-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-2 h-2 rounded-full border-2 border-slate-600 bg-blue-400" />
          ))}
        </div>
        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.2em]">Patient Acquisition Engine Active</span>
      </div>
    </div>
  );
}
