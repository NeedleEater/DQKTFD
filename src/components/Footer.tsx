import { KidsTownLogo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-slate-950 text-slate-900 dark:text-white py-24 px-6 border-t-2 border-slate-50 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.03] bg-playful-dots pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="max-w-md w-full">
          <div className="mb-10 inline-block bg-white dark:bg-white/5 backdrop-blur-xl p-6 rounded-[2.5rem] border-2 border-slate-50 dark:border-white/10 shadow-xl">
             <KidsTownLogo imgClassName="h-20 w-auto object-contain" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
            Helping dental practices turn online visibility into measurable growth through data-driven SEO and high-converting website structures.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-20 w-full lg:w-auto">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-sky-400 mb-8">Markets</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Layton, UT</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Syracuse, UT</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Roy, UT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-orange-400 mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">Dental SEO</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">Conversion Optimization</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">Local Visibility</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-black text-green-400 mb-8">Partner</h4>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl inline-block group hover:scale-105 transition-transform">
               <div className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-widest text-center">Powered by</div>
               <img src="https://ais.dentalqore.com/favicon.ico" className="w-8 h-8 mx-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="DentalQore" />
               <div className="text-[11px] text-white font-black mt-2 text-center">DentalQore</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t-2 border-slate-50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] font-black italic">
          © 2026 DentalQore • Kids Town Case Study
        </div>
      </div>
    </footer>
  );
}
