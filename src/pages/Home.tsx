import { Gamepad2, Plus, Library } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900/40 to-slate-800/40 border border-slate-700/50 p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">GameShelf</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Your ultimate personal gaming sanctuary. Track your backlog, organize your consoles, and manage your wishlist all in one beautiful place.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/20 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Game
            </button>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium border border-slate-700 transition-all flex items-center">
              <Library className="w-5 h-5 mr-2" />
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Games', value: '142', icon: Gamepad2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Completed', value: '45', icon: Gamepad2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Backlog', value: '89', icon: Gamepad2, color: 'text-orange-400', bg: 'bg-orange-500/10' },
          { label: 'Wishlist', value: '12', icon: Gamepad2, color: 'text-pink-400', bg: 'bg-pink-500/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </section>
      
      {/* Recent Additions */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recently Added</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {/* Placeholders for games */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 transition-all cursor-pointer shadow-lg">
              <div className="absolute inset-0 bg-slate-700/30 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
