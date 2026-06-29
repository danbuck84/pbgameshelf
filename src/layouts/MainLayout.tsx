import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Gamepad2, Tv, Heart, Settings, Menu, Bell, Search, User } from 'lucide-react';
import { cn } from '@/utils/cn';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Games', href: '/games', icon: Gamepad2 },
  { name: 'Consoles', href: '/consoles', icon: Tv },
  { name: 'Wishlist', href: '/wishlist', icon: Heart },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-900 text-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="flex items-center h-16 px-6 border-b border-slate-800">
          <Gamepad2 className="w-8 h-8 text-primary-500 mr-3" />
          <span className="text-xl font-bold tracking-tight">GameShelf</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href !== '/' && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-primary-500/10 text-primary-400" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 mr-3 transition-transform duration-200",
                  isActive ? "scale-110" : "group-hover:scale-110"
                )} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center w-full px-3 py-2 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors">
            <User className="w-5 h-5 mr-3" />
            <span className="font-medium">Profile</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top App Bar */}
        <header className="flex items-center justify-between h-16 px-4 md:px-8 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center md:hidden">
            <Gamepad2 className="w-6 h-6 text-primary-500 mr-2" />
            <span className="text-lg font-bold">GameShelf</span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search games, consoles..." 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors md:hidden">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-500 rounded-full"></span>
            </button>
            <button className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 ml-2 shadow-lg shadow-primary-500/20"></button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 pb-safe z-50">
        <nav className="flex items-center justify-around h-16 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href !== '/' && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full space-y-1",
                  isActive ? "text-primary-400" : "text-slate-500 hover:text-slate-300"
                )}
              >
                <item.icon className={cn(
                  "w-6 h-6 transition-transform duration-200",
                  isActive && "scale-110"
                )} />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
