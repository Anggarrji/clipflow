
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-slate-950/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            CF
          </div>
          <span className="text-xl font-bold tracking-tight">ClipFlow</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Workspace</a>
          <a href="#" className="hover:text-white transition-colors">Library</a>
          <a href="#" className="hover:text-white transition-colors">Templates</a>
          <a href="#" className="hover:text-white transition-colors">Analytics</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-semibold hover:text-indigo-400 transition-colors">Sign In</button>
          <button className="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all shadow-xl">
            Get Started
          </button>
        </div>
      </nav>
      <main className="flex-1 container mx-auto p-4 lg:p-8">
        {children}
      </main>
      <footer className="py-6 border-t border-white/5 text-center text-slate-500 text-xs">
        &copy; 2024 ClipFlow AI. Empowering creators through intelligent automation.
      </footer>
    </div>
  );
};
