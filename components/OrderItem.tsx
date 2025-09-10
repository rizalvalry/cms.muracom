import React from 'react';
import type { Order } from '../types';
import { PaymentMethod } from '../types';
import { StatusBar } from './StatusBar';
import { CalendarIcon, CurrencyDollarIcon, CreditCardIcon } from './Icons';

interface OrderItemProps {
  order: Order;
  index: number;
}

export const OrderItem: React.FC<OrderItemProps> = ({ order, index }) => {
  return (
    <div 
        className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-slate-600/80 animate-fade-in"
        style={{ animationDelay: `${index * 100}ms`}}
    >
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Order #{order.id}</h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400 mt-2">
                <span className="flex items-center gap-1.5"><CalendarIcon /> {order.date}</span>
                <span className="flex items-center gap-1.5"><CurrencyDollarIcon /> ${order.total.toFixed(2)}</span>
                <span className="flex items-center gap-1.5"><CreditCardIcon /> {order.paymentMethod === PaymentMethod.Online ? 'Online Payment' : 'Manual Transfer'}</span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
             <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                order.status === 'Delivered' ? 'bg-green-500/20 text-green-300' :
                order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-300' :
                order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
            }`}>
                {order.status}
            </span>
          </div>
        </div>

        <div className="mb-6">
            <StatusBar status={order.status} />
        </div>

        <div>
            <h3 className="font-semibold text-slate-300 mb-3">Items</h3>
            <div className="space-y-3">
            {order.items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};