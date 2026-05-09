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
import { Phone, MousePointerClick, Clock } from 'lucide-react';

export default function ConversionStats() {
  const COLORS = ['#0284c7', '#0369a1', '#075985', '#0c4a6e', '#0ea5e9', '#38bdf8', '#7dd3fc'];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Turning Visibility into <span className="text-blue-600">Patient Growth</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic">
            "{CORE_STATS.clickToCall} {CORE_STATS.callsLabel.toLowerCase()} – real phone call opportunities that grow a practice."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {[
              { label: 'Click-to-Call Rate', value: '4.0%', icon: MousePointerClick, desc: 'Highest in local competitive markets' },
              { label: 'Annual Phone Calls', value: CORE_STATS.clickToCall.toString(), icon: Phone, desc: CORE_STATS.callsLabel },
              { label: 'Avg Engagement', value: '1m 13s', icon: Clock, desc: 'High-intent visitor interaction' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{item.value}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 rounded-full" />
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
                    tick={{ fill: '#475569', fontSize: 11, fontWeight: 500 }}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc', opacity: 0.05 }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', background: '#1e293b', color: '#fff' }}
                  />
                  <Bar dataKey="calls" radius={[0, 10, 10, 0]} barSize={32}>
                    {PAGE_PERFORMANCE.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-slate-400 mt-6 uppercase tracking-widest font-semibold">
              Call actions weighted by landing page intent
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
