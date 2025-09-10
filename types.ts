export enum OrderStatus {
  Processing = 'Processing',
  Shipped = 'Shipped',
  InTransit = 'In Transit',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

export enum PaymentMethod {
  Online = 'Online',
  Offline = 'Offline',
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: Product[];
  paymentMethod: PaymentMethod;
}

export interface User {
  name: string;
  email: string;
  avatarUrl: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}