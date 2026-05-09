import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Users, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

import { DentalQoreLogo, KidsTownLogo } from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-6 py-24 sm:py-32 transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 shadow-xl">
             <DentalQoreLogo />
          </div>
          <div className="hidden sm:block h-10 w-px bg-slate-300 dark:bg-white/20" />
          <div className="bg-white dark:bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
             <KidsTownLogo />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
        >
          Dominating <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Local Search</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12"
        >
          How DentalQore transformed Kids Town pediatric dentistry into a local powerhouse, turning visibility into 200+ new patients every month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4"
        >
          {[
            { icon: Users, label: '14,583', sub: 'Total Sessions', color: 'text-blue-600 dark:text-blue-400' },
            { icon: TrendingUp, label: '10,816', sub: 'New Users', color: 'text-sky-600 dark:text-sky-400' },
            { icon: PhoneCall, label: '587', sub: 'Past 12 months calls from website', color: 'text-emerald-600 dark:text-emerald-400' },
            { icon: ShieldCheck, label: '#1', sub: 'Target Rankings', color: 'text-indigo-600 dark:text-indigo-400' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-6 transition-all hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 group text-center">
              <stat.icon className={cn("w-6 h-6 mb-3 mx-auto", stat.color)} />
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1 group-hover:scale-110 transition-transform">{stat.label}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold leading-tight">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
