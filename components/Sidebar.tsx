
import React from 'react';
import type { User } from '../types';
import { UserIcon, ShoppingBagIcon } from './Icons';

interface SidebarProps {
  user: User;
  activeView: 'profile' | 'orders';
  setActiveView: (view: 'profile' | 'orders') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, activeView, setActiveView }) => {
  const navItems = [
    { id: 'orders', label: 'My Orders', icon: <ShoppingBagIcon /> },
    { id: 'profile', label: 'Profile Settings', icon: <UserIcon /> },
  ];

  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
      <div className="h-full p-4 md:p-6 bg-slate-800/50 md:bg-slate-800/30 md:backdrop-blur-xl md:border-r border-slate-700/50 flex flex-col">
        <div className="flex items-center gap-4 mb-10">
          <img src={user.avatarUrl} alt={user.name} className="w-14 h-14 rounded-full border-2 border-slate-600 object-cover" />
          <div>
            <h2 className="font-semibold text-lg text-white">{user.name}</h2>
            <p className="text-sm text-slate-400 truncate">{user.email}</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as 'profile' | 'orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                activeView === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto">
            <p className="text-xs text-center text-slate-500">© 2024 Your E-commerce</p>
        </div>
      </div>
    </aside>
  );
};
