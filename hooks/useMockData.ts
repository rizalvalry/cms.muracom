import { useState, useEffect } from 'react';
import type { User, Order } from '../types';
import { OrderStatus, PaymentMethod } from '../types';

// IMPORTANT: In a real-world application, this data would be fetched from a secure backend API.
// Frontend code should NEVER connect directly to a database like MySQL.
// This hook simulates that asynchronous data fetching process.

const mockUser: User = {
  name: 'Alexandre Dubois',
  email: 'alex.dubois@example.com',
  avatarUrl: 'https://picsum.photos/seed/user123/200/200',
  address: {
    street: '123 Rue de Rivoli',
    city: 'Paris',
    state: 'Île-de-France',
    zip: '75001'
  }
};

const mockOrders: Order[] = [
  {
    id: 'ORD-2024-7B3A1',
    date: '2024-07-28',
    status: OrderStatus.Delivered,
    total: 249.99,
    items: [
      { id: 'p1', name: 'Quantum Noise-Cancelling Headphones', imageUrl: 'https://picsum.photos/seed/product1/100/100', quantity: 1 },
    ],
    paymentMethod: PaymentMethod.Online,
  },
  {
    id: 'ORD-2024-8C4D2',
    date: '2024-07-25',
    status: OrderStatus.Shipped,
    total: 89.50,
    items: [
      { id: 'p2', name: 'ErgoFlow Wireless Mouse', imageUrl: 'https://picsum.photos/seed/product2/100/100', quantity: 1 },
      { id: 'p3', name: 'Aether Mechanical Keyboard', imageUrl: 'https://picsum.photos/seed/product3/100/100', quantity: 1 },
    ],
    paymentMethod: PaymentMethod.Offline,
  },
  {
    id: 'ORD-2024-9E5F3',
    date: '2024-07-22',
    status: OrderStatus.Processing,
    total: 1200.00,
    items: [
      { id: 'p4', name: 'Helios 4K Ultra-Wide Monitor', imageUrl: 'https://picsum.photos/seed/product4/100/100', quantity: 1 },
    ],
    paymentMethod: PaymentMethod.Online,
  },
    {
    id: 'ORD-2024-1A2B9',
    date: '2024-06-15',
    status: OrderStatus.Cancelled,
    total: 45.00,
    items: [
      { id: 'p5', name: 'Nova Smart Water Bottle', imageUrl: 'https://picsum.photos/seed/product5/100/100', quantity: 2 },
    ],
    paymentMethod: PaymentMethod.Offline,
  },
];


export const useMockData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(mockUser);
      setOrders(mockOrders);
      setLoading(false);
    }, 1500); // Simulate network delay

    return () => clearTimeout(timer);
  }, []);

  return { user, orders, loading };
};