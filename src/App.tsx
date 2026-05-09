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
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <Hero />
      <TrafficCharts />
      <ConversionStats />
      <RankingDominance />
      <ROISection />
      <Footer />
    </div>
  );
}

