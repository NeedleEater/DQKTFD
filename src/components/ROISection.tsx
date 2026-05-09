import { motion } from 'motion/react';
import { CORE_STATS } from '../data';
import { DollarSign, ArrowUpRight, Zap } from 'lucide-react';

export default function ROISection() {
  const monthlyValue = CORE_STATS.avgPatientsMonthly * CORE_STATS.avgPatientValue;
  const roiMultiplier = (monthlyValue / CORE_STATS.monthlyInvestment).toFixed(0);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white transition-colors duration-500">
          {/* Abstract Background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">
                  The Power of <br />
                  <span className="text-sky-300">Sustainable ROI</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-12 max-w-lg">
                  Kids Town’s results show the power of a properly optimized dental website: 
                  stronger local rankings, more patient-ready traffic, and exceptional long-term ROI.
                </p>

                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="text-3xl font-bold mb-1">${CORE_STATS.monthlyInvestment}</div>
                      <div className="text-xs uppercase tracking-widest text-blue-200 font-semibold">Monthly Investment</div>
                   </div>
                   <div className="bg-sky-400 text-blue-900 rounded-2xl p-6 flex flex-col justify-center shadow-lg shadow-sky-400/20">
                      <div className="text-3xl font-bold flex items-center gap-1">
                        <ArrowUpRight className="w-6 h-6" />
                        {roiMultiplier}x
                      </div>
                      <div className="text-xs uppercase tracking-widest font-black">Value Multiplier</div>
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-slate-900 dark:text-white transition-colors duration-500"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">Estimated Monthly Revenue</span>
                </div>
                
                <div className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-2">
                  ${monthlyValue.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-8">
                   <Zap className="w-4 h-4 fill-emerald-600 dark:fill-emerald-400" />
                   Generated Value Output
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-8 text-center md:text-left">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{CORE_STATS.avgPatientsMonthly}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">New Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">${CORE_STATS.avgPatientValue}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Avg Case Value</div>
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
