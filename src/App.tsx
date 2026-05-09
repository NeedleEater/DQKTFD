/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrafficCharts from './components/TrafficCharts';
import ConversionStats from './components/ConversionStats';
import RankingDominance from './components/RankingDominance';
import ROISection from './components/ROISection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-sky-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden transition-colors duration-500">
      {/* Playful background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[-10%] w-[30rem] h-[30rem] bg-green-100/40 dark:bg-green-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Global Polka Dots */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] bg-playful-dots text-slate-900 dark:text-white z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrafficCharts />
        <ConversionStats />
        <RankingDominance />
        <ROISection />
        <Footer />
      </div>
    </div>
  );
}

