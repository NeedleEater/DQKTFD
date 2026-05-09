import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TRAFFIC_DATA } from '../data';

export default function TrafficCharts() {
  return (
    <section className="py-24 bg-white/50 dark:bg-slate-900 px-6 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-sm font-bold tracking-wide mb-6 shadow-sm border border-sky-200/50"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              Growth Analysis
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
            >
              Organic Visibility <span className="text-orange-500">Dominance</span>
            </motion.h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              DentalQore’s SEO-focused website structure doesn't just attract traffic—it captures intent. 
              Our organic strategy consistently outpaces baseline direct traffic, building a sustainable growth engine.
            </p>
          </div>
          <div className="flex gap-10 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl shadow-sky-900/5 items-center">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-sky-500">72.4%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Organic Share Peak</span>
            </div>
            <div className="w-px h-12 bg-slate-100 dark:bg-slate-700" />
            <div className="flex flex-col">
              <span className="text-4xl font-black text-orange-500">14,583</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Sessions</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[450px] w-full bg-white dark:bg-slate-800/80 backdrop-blur-xl rounded-[3.5rem] p-4 md:p-10 border-4 border-slate-50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Pattern inside chart box */}
          <div className="absolute inset-0 opacity-[0.03] bg-playful-dots pointer-events-none" />

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TRAFFIC_DATA}>
              <defs>
                <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#e2e8f0" className="opacity-10" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} 
                dy={15}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} 
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '24px', 
                  border: 'none', 
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#1e293b'
                }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" height={50} />
              <Area 
                type="monotone" 
                dataKey="organic" 
                name="Organic Search"
                stroke="#0ea5e9" 
                strokeWidth={5}
                fillOpacity={1} 
                fill="url(#colorOrganic)" 
              />
              <Area 
                type="monotone" 
                dataKey="direct" 
                name="Direct Traffic"
                stroke="#f97316" 
                strokeWidth={5}
                fillOpacity={1} 
                fill="url(#colorDirect)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
