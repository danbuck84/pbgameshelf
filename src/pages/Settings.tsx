import { Settings as SettingsIcon, User, Bell, Shield, Moon } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-1">Settings</h1>
        <p className="text-slate-400">Manage your account and application preferences</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Section */}
        <section className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
          <div className="p-6 flex items-center border-b border-slate-700/50">
            <User className="w-6 h-6 mr-3 text-primary-400" />
            <h2 className="text-xl font-semibold">Account Profile</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-500 shadow-lg shadow-primary-500/20"></div>
              <div>
                <h3 className="text-lg font-medium">Guest User</h3>
                <p className="text-slate-400 text-sm mb-3">Sign in to sync your collection across devices.</p>
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-medium transition-colors">
                  Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
          <div className="p-6 flex items-center border-b border-slate-700/50">
            <SettingsIcon className="w-6 h-6 mr-3 text-primary-400" />
            <h2 className="text-xl font-semibold">Preferences</h2>
          </div>
          <div className="divide-y divide-slate-700/50">
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-medium">Dark Theme</h3>
                <p className="text-sm text-slate-400">Use dark theme across the application</p>
              </div>
              <div className="w-12 h-6 bg-primary-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <Moon className="w-3 h-3 text-primary-600" />
                </div>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-slate-400">Get notified about game releases on your wishlist</p>
              </div>
              <div className="w-12 h-6 bg-slate-600 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
