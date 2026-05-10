import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Users, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

import { KidsTownLogo } from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white/30 dark:bg-slate-950 px-6 py-24 sm:py-32 transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-sky-200/40 dark:bg-sky-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-100/40 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-green-100/40 dark:bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1 
          }}
          className="flex items-center justify-center mb-16 relative"
        >
          {/* Animated Ring/Glow behind logo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute w-72 h-72 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" 
          />

          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-2xl p-10 md:p-14 rounded-[5rem] border-4 border-white dark:border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
          >
            {/* Corner Accents - More rounded */}
            <div className="absolute top-10 left-10 w-6 h-6 border-t-4 border-l-4 border-sky-400/40 rounded-tl-2xl" />
            <div className="absolute top-10 right-10 w-6 h-6 border-t-4 border-r-4 border-sky-400/40 rounded-tr-2xl" />
            <div className="absolute bottom-10 left-10 w-6 h-6 border-b-4 border-l-4 border-orange-400/40 rounded-bl-2xl" />
            <div className="absolute bottom-10 right-10 w-6 h-6 border-b-4 border-r-4 border-orange-400/40 rounded-br-2xl" />

            <KidsTownLogo imgClassName="h-32 md:h-64 w-auto object-contain relative z-10 drop-shadow-2xl" />
            
            {/* Subtle reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 dark:via-white/5 dark:to-white/10 pointer-events-none rounded-[5rem]" />
          </motion.div>

          {/* Floating decorative elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -40, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.7
              }}
              className={cn(
                "absolute w-3 h-3 rounded-full blur-[1px]",
                i === 0 ? "top-0 right-[30%] bg-sky-400" : 
                i === 1 ? "bottom-0 left-[35%] bg-orange-400" : 
                i === 2 ? "top-20 left-[25%] bg-green-400" :
                i === 3 ? "bottom-20 right-[20%] bg-pink-400" : "top-40 right-[15%] bg-yellow-400"
              )}
            />
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]"
        >
          Dominating Local <span className="text-sky-500 italic">Search</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 font-medium leading-relaxed"
        >
          With 7+ years on DentalQore’s web and SEO platform and our media package add‑on, Kids Town Family Dentistry now dominates local search and drives 200+ new patients every month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
        >
          {[
            { icon: Users, label: '14,583', sub: 'Total Sessions', color: 'text-sky-500' },
            { icon: TrendingUp, label: '10,816', sub: 'New Users', color: 'text-orange-500' },
            { icon: PhoneCall, label: '587', sub: 'Past 12 months calls from website', color: 'text-green-500' },
            { icon: ShieldCheck, label: '#1', sub: 'Target Rankings', color: 'text-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border-2 border-slate-50 dark:border-white/10 rounded-[2.5rem] p-8 transition-all hover:scale-105 shadow-xl shadow-slate-200/50 dark:shadow-none group text-center">
              <stat.icon className={cn("w-10 h-10 mb-5 mx-auto opacity-70 group-hover:opacity-100 transition-all stroke-[2.5]", stat.color)} />
              <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.label}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-black leading-tight">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
