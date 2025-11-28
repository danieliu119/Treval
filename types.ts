export enum ActivityType {
  Transport = '交通',
  Food = '餐飲',
  Stay = '住宿',
  Ticket = '門票/體驗',
  Shopping = '購物',
  Sightseeing = '觀光',
  Other = '其他'
}

export interface ItineraryItem {
  id: string;
  date: string; // MM/DD
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  type: ActivityType;
  cost: number;
  currency: 'JPY' | 'NTD';
  notes?: string;
  links?: string[];
}

export interface DaySummary {
  date: string;
  dayOfWeek: string;
  totalJpy: number;
  totalNtd: number;
  items: ItineraryItem[];
}

export interface ShoppingItem {
  name: string;
  price: number;
  currency: 'JPY';
}