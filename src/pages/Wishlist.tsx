import { Heart } from 'lucide-react';

export function Wishlist() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Wishlist</h1>
          <p className="text-slate-400">Games you're looking forward to playing</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center px-4 bg-slate-800/30 rounded-3xl border border-slate-700/50 border-dashed">
        <div className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-pink-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          Keep track of games you want to buy or play in the future. Add them here and never forget a title again.
        </p>
        <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium border border-slate-700 transition-colors">
          Browse Popular Games
        </button>
      </div>
    </div>
  );
}
