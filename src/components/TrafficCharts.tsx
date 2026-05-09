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
    <section className="py-24 bg-white dark:bg-slate-900 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            >
              Organic Visibility <span className="text-sky-600">Dominance</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              DentalQore’s SEO-focused website structure doesn't just attract traffic—it captures intent. 
              Our organic strategy consistently outpaces baseline direct traffic, building a sustainable growth engine.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-sky-600">72.4%</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Organic Share Peak</span>
            </div>
            <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-8">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">14,583</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Total Sessions</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[400px] w-full bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TRAFFIC_DATA}>
              <defs>
                <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="opacity-10" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10 }} 
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  padding: '12px 16px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  color: '#fff'
                }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" height={36} />
              <Area 
                type="monotone" 
                dataKey="organic" 
                name="Organic Search"
                stroke="#0284c7" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorOrganic)" 
              />
              <Area 
                type="monotone" 
                dataKey="direct" 
                name="Direct Traffic"
                stroke="#94a3b8" 
                strokeWidth={3}
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
