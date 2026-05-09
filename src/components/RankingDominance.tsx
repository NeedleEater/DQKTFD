import { motion } from 'motion/react';
import { KEYWORD_RANKINGS } from '../data';
import { Trophy, Star, MapPin } from 'lucide-react';
import RankingMap from './RankingMap';

export default function RankingDominance() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Trophy className="w-3 h-3" /> Keyword Dominance
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                Owning the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600">Local Search Map</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Kids Town earned dominant local keyword visibility across three competitive Utah markets. 
                We don't just "show up"—we lead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-sm">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">5+</div>
                  <div className="text-sm text-slate-500">Number #1 Rankings</div>
                </div>
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-sm">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
                  <div className="text-sm text-slate-500">Page 1 Presence</div>
                </div>
              </div>

              <RankingMap />
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-3">
              {KEYWORD_RANKINGS.map((rank, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 p-4 rounded-xl transition-all shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      rank.position === 1 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-slate-200 dark:bg-slate-500/20 text-slate-500 dark:text-slate-400'
                    }`}>
                      {rank.position}
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 font-medium tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{rank.keyword}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, j) => (
                      <Star key={j} className={`w-3 h-3 ${rank.position === 1 ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300 dark:text-slate-700'}`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 dark:text-slate-500">
               <MapPin className="w-4 h-4" />
               <span className="text-xs uppercase tracking-widest font-semibold">Layton • Syracuse • Riverdale • Roy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
