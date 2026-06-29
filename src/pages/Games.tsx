import { Gamepad2, Search, Filter } from 'lucide-react';

export function Games() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">My Games</h1>
          <p className="text-slate-400">Manage your entire gaming collection</p>
        </div>
        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-colors">
          Add New Game
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="relative min-w-[200px] flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search titles..." 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        <button className="flex items-center px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shrink-0">
          <Filter className="w-4 h-4 mr-2 text-slate-400" />
          Filter
        </button>
      </div>

      {/* Empty State / Grid Placeholder */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl bg-slate-800/40 border border-slate-700/50 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-800 transition-colors cursor-pointer">
            <Gamepad2 className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-xs font-medium">Empty Slot</span>
          </div>
        ))}
      </div>
    </div>
  );
}
