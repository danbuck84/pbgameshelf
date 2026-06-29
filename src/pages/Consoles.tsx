import { Tv, Plus } from 'lucide-react';

export function Consoles() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Hardware & Consoles</h1>
          <p className="text-slate-400">Track your gaming systems</p>
        </div>
        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-colors">
          Add Console
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-2 border-dashed border-slate-700 rounded-2xl h-48 flex flex-col items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-500 transition-colors cursor-pointer bg-slate-800/20 hover:bg-slate-800/40">
          <Plus className="w-8 h-8 mb-2" />
          <span className="font-medium">Add New Hardware</span>
        </div>
        
        {/* Placeholder for actual console */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-6 flex flex-col relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <Tv className="w-48 h-48" />
          </div>
          <div className="flex justify-between items-start mb-auto relative z-10">
            <div className="p-3 bg-slate-800 rounded-xl">
              <Tv className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20">Active</span>
          </div>
          <div className="mt-8 relative z-10">
            <h3 className="text-xl font-bold mb-1">PlayStation 5</h3>
            <p className="text-slate-400 text-sm">Sony Interactive Entertainment</p>
            <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between text-sm">
              <span className="text-slate-400">Games: <strong className="text-slate-200">24</strong></span>
              <span className="text-slate-400">Added: <strong className="text-slate-200">2023</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
