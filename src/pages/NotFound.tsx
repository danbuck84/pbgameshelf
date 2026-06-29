import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-500">
      <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mb-8 border border-slate-700">
        <Gamepad2 className="w-12 h-12 text-slate-500" />
      </div>
      <h1 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4">Game Not Found</h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg">
        It looks like this level doesn't exist. The princess might be in another castle.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/20"
      >
        Return to Home Screen
      </Link>
    </div>
  );
}
