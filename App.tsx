
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProfileSettings } from './components/ProfileSettings';
import { OrderHistory } from './components/OrderHistory';
import { useMockData } from './hooks/useMockData';
import type { User, Order } from './types';

type View = 'profile' | 'orders';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('orders');
  const { user, orders, loading } = useMockData();

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      );
    }

    switch (activeView) {
      case 'profile':
        return user ? <ProfileSettings user={user} /> : null;
      case 'orders':
        return orders ? <OrderHistory orders={orders} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 font-sans">
      {user && <Sidebar user={user} activeView={activeView} setActiveView={setActiveView} />}
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
