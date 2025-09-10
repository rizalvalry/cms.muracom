
import React from 'react';
import { OrderStatus } from '../types';
import { CheckIcon } from './Icons';

interface StatusBarProps {
  status: OrderStatus;
}

const statusSteps = [OrderStatus.Processing, OrderStatus.Shipped, OrderStatus.InTransit, OrderStatus.Delivered];

export const StatusBar: React.FC<StatusBarProps> = ({ status }) => {
  const currentStatusIndex = statusSteps.indexOf(status);

  if (status === OrderStatus.Cancelled) {
    return (
        <div className="text-center py-2 text-red-400 font-medium">Order Cancelled</div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        {statusSteps.map((step, index) => {
          const isActive = index <= currentStatusIndex;
          const isCompleted = index < currentStatusIndex;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-blue-600' : 'bg-slate-700'
                }`}>
                  {isCompleted ? <CheckIcon /> : <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-500'}`}></span>}
                </div>
                <p className={`mt-2 text-xs text-center ${isActive ? 'text-blue-300' : 'text-slate-500'}`}>{step}</p>
              </div>

              {index < statusSteps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                  isCompleted ? 'bg-blue-600' : 'bg-slate-700'
                }`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
