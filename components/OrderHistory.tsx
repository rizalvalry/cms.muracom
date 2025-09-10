
import React from 'react';
import type { Order } from '../types';
import { OrderItem } from './OrderItem';

interface OrderHistoryProps {
  orders: Order[];
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-2">Order History</h1>
      <p className="text-slate-400 mb-8">Check the status of your recent orders.</p>
      
      <div className="space-y-6">
        {orders.map((order, index) => (
          <OrderItem key={order.id} order={order} index={index} />
        ))}
      </div>
    </div>
  );
};
