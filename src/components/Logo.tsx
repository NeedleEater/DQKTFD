import { Sparkles, Activity } from 'lucide-react';

export function DentalQoreLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/dentalqore_logo.png" 
        alt="DentalQore Logo" 
        className="h-12 w-auto object-contain max-w-[180px]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const sibling = e.currentTarget.nextElementSibling;
          if (sibling) (sibling as HTMLElement).style.display = 'block';
        }}
      />
      <div className="hidden items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">
          Dental<span className="text-blue-400">Qore</span>
        </span>
      </div>
    </div>
  );
}

export function KidsTownLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/kidstown_logo.png" 
        alt="Kids Town Logo" 
        className="h-16 w-auto object-contain max-w-[200px]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const sibling = e.currentTarget.nextElementSibling;
          if (sibling) (sibling as HTMLElement).style.display = 'block';
        }}
      />
      <div className="hidden items-center gap-2">
        <div className="bg-sky-400 p-1.5 rounded-full">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
          Kids Town
        </span>
      </div>
    </div>
  );
}
