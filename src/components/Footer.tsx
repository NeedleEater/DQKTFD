import { motion } from 'motion/react';
import { DentalQoreLogo, KidsTownLogo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-6 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="max-w-md">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 justify-center md:justify-start text-left">
            <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-lg shrink-0">
               <DentalQoreLogo />
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-white/20" />
            <div className="bg-white dark:bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm shrink-0">
               <KidsTownLogo />
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Helping dental practices turn online visibility into measurable growth through data-driven SEO 
            and high-converting website structures.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-6">Markets</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-slate-600 dark:text-slate-300">Layton, UT</li>
              <li className="text-slate-600 dark:text-slate-300">Syracuse, UT</li>
              <li className="text-slate-600 dark:text-slate-300">Roy, UT</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-slate-600 dark:text-slate-300">Dental SEO</li>
              <li className="text-slate-600 dark:text-slate-300">Conversion Optimization</li>
              <li className="text-slate-600 dark:text-slate-300">Local Visibility</li>
              <li className="text-slate-600 dark:text-slate-300">Growth Tracking</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
          © 2026 DentalQore • Kids Town Case Study
        </div>
      </div>
    </footer>
  );
}
