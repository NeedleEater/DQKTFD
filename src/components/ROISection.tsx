import { motion } from 'motion/react';
import { CORE_STATS } from '../data';
import { DollarSign, ArrowUpRight, Zap } from 'lucide-react';

export default function ROISection() {
  const monthlyValue = CORE_STATS.avgPatientsMonthly * CORE_STATS.avgPatientValue;
  const roiMultiplier = (monthlyValue / CORE_STATS.monthlyInvestment).toFixed(0);

  return (
    <section className="py-24 bg-white/40 dark:bg-slate-950 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sky-500 dark:bg-sky-600 rounded-[4rem] p-10 md:p-24 relative overflow-hidden text-white transition-colors duration-500 shadow-2xl shadow-sky-500/20">
          {/* Playful Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-playful-dots pointer-events-none" />
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                  The Power of <br />
                  <span className="text-orange-300 italic">Sustainable ROI</span>
                </h2>
                <p className="text-sky-50 text-xl leading-relaxed mb-12 max-w-lg font-medium opacity-90">
                  Kids Town’s results show the power of a properly optimized dental website: 
                  stronger local rankings, more patient-ready traffic, and exceptional long-term ROI.
                </p>

                <div className="flex flex-wrap gap-6">
                   <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border-2 border-white/20 shadow-xl">
                      <div className="text-4xl font-black mb-1">${CORE_STATS.monthlyInvestment}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-sky-100 font-black">Monthly Investment</div>
                   </div>
                   <div className="bg-orange-500 text-white rounded-[2.5rem] p-8 flex flex-col justify-center shadow-2xl shadow-orange-500/40 border-2 border-orange-400 scale-105">
                      <div className="text-4xl font-black flex items-center gap-2">
                        <ArrowUpRight className="w-8 h-8 stroke-[3]" />
                        {roiMultiplier}x
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-90">Value Multiplier</div>
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl text-slate-900 dark:text-white transition-colors duration-500 border-4 border-slate-50 dark:border-slate-800"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-[1.5rem]">
                    <DollarSign className="w-7 h-7 text-orange-600 dark:text-orange-400" strokeWidth={3} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-black text-slate-400">Estimated Monthly Revenue</span>
                </div>
                
                <div className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
                  ${monthlyValue.toLocaleString()}
                </div>
                <div className="flex items-center gap-3 text-orange-500 dark:text-orange-400 font-black text-lg mb-12">
                   <Zap className="w-6 h-6 fill-orange-500 dark:fill-orange-400" />
                   Generated Value Output
                </div>

                <div className="pt-10 border-t-2 border-slate-50 dark:border-slate-800 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-black text-sky-500">{CORE_STATS.avgPatientsMonthly}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">New Patients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-orange-500">${CORE_STATS.avgPatientValue}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Avg Case Value</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
