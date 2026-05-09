import { motion } from 'motion/react';
import { KEYWORD_RANKINGS } from '../data';
import { Trophy, Star, MapPin } from 'lucide-react';
import RankingMap from './RankingMap';

export default function RankingDominance() {
  return (
    <section className="py-24 bg-white/50 dark:bg-slate-900 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-playful-dots text-slate-900 dark:text-white" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                <Trophy className="w-4 h-4" /> Keyword Dominance
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
                Owning the <span className="text-orange-500 italic">Local Search Map</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed mb-10">
                Kids Town earned dominant local keyword visibility across three competitive Utah markets. 
                We don't just "show up"—we lead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white dark:bg-white/5 border-2 border-slate-50 dark:border-white/10 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="text-4xl font-black text-sky-500 mb-2">5+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Number #1 Rankings</div>
                </div>
                <div className="bg-white dark:bg-white/5 border-2 border-slate-50 dark:border-white/10 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="text-4xl font-black text-orange-500 mb-2">100%</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Page 1 Presence</div>
                </div>
              </div>

              <RankingMap />
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-orange-100/30 dark:bg-orange-500/5 blur-[80px] rounded-full" />
            <div className="relative space-y-4">
              {KEYWORD_RANKINGS.map((rank, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center justify-between bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:bg-white dark:hover:bg-white/10 border-2 border-white dark:border-white/10 p-5 rounded-3xl transition-all shadow-xl shadow-slate-200/40 dark:shadow-none"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg ${
                      rank.position === 1 ? 'bg-orange-100 text-orange-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                    }`}>
                      {rank.position}
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 font-bold text-lg group-hover:text-sky-500 transition-colors uppercase tracking-tight">{rank.keyword}</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    {[...Array(3)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${rank.position === 1 ? 'text-orange-500 fill-orange-500' : 'text-slate-200 dark:text-slate-700'}`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-slate-400 dark:text-slate-500 font-bold italic">
               <MapPin className="w-5 h-5 text-sky-400" />
               <span className="text-[10px] uppercase tracking-widest font-black">Layton • Syracuse • Riverdale • Roy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
