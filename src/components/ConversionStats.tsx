import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { CORE_STATS, PAGE_PERFORMANCE } from '../data';
import { Phone, MousePointerClick, Clock, TrendingUp } from 'lucide-react';

export default function ConversionStats() {
  const COLORS = ['#0ea5e9', '#f97316', '#22c55e', '#8b5cf6', '#ec4899', '#facc15', '#14b8a6'];

  return (
    <section className="py-24 bg-white/30 dark:bg-slate-950 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8"
          >
            Turning Visibility into <span className="text-sky-500">Patient Growth</span>
          </motion.h2>
          <div className="bg-orange-100/50 dark:bg-orange-500/10 px-8 py-4 rounded-[2rem] inline-block border border-orange-200/50 dark:border-orange-500/20">
            <p className="text-orange-700 dark:text-orange-400 font-bold italic text-lg">
              {CORE_STATS.clickToCall} calls initiated from organic search traffic to this site in the last 12 months.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {[
              { label: 'Click-to-Call Rate', value: '4.0%', icon: MousePointerClick, color: 'bg-sky-100 text-sky-600', darkColor: 'dark:bg-sky-500/20 dark:text-sky-400', desc: 'Highest in local competitive markets' },
              { label: 'Annual Phone Calls', value: CORE_STATS.clickToCall.toString(), icon: Phone, color: 'bg-orange-100 text-orange-600', darkColor: 'dark:bg-orange-500/20 dark:text-orange-400', desc: CORE_STATS.callsLabel },
              { label: 'Avg Engagement', value: '1m 13s', icon: Clock, color: 'bg-green-100 text-green-600', darkColor: 'dark:bg-green-500/20 dark:text-green-400', desc: 'High-intent visitor interaction' },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 ${item.color} ${item.darkColor} rounded-[1.5rem] shadow-sm`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{item.value}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[4rem] p-12 border-2 border-slate-50 dark:border-slate-800 shadow-2xl relative transition-colors"
          >
            <div className="absolute top-8 right-8 w-12 h-12 bg-sky-50 dark:bg-sky-500/5 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-sky-500" />
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-4">
              <div className="w-3 h-10 bg-sky-500 rounded-full" />
              Top Converting Landing Pages
            </h3>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PAGE_PERFORMANCE} layout="vertical" margin={{ left: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" className="opacity-10" />
                  <XAxis type="number" hide />
                  <YAxis 
                    type="category" 
                    dataKey="page" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 700 }}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc', opacity: 0.1, radius: 10 }}
                    contentStyle={{ 
                      borderRadius: '24px', 
                      border: 'none', 
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', 
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      color: '#1e293b' 
                    }}
                  />
                  <Bar dataKey="calls" radius={[0, 15, 15, 0]} barSize={36}>
                    {PAGE_PERFORMANCE.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-center text-slate-400 mt-10 uppercase tracking-[0.2em] font-black">
              Call actions weighted by landing page intent
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
