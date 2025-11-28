import React, { useState, useMemo } from 'react';
import { RAW_ITINERARY, SHOPPING_LIST } from './constants';
import Timeline from './components/Timeline';
import CostChart from './components/CostChart';
import ChatAssistant from './components/ChatAssistant';
import { Calendar, MapPin, Wallet, ShoppingCart } from 'lucide-react';

function App() {
  const [selectedDate, setSelectedDate] = useState<string>('10/30');

  // Group days for selector
  const days = useMemo(() => {
    const uniqueDays = Array.from(new Set(RAW_ITINERARY.map(i => i.date)));
    return uniqueDays.map(date => {
      const item = RAW_ITINERARY.find(i => i.date === date);
      return { date, dayOfWeek: item?.dayOfWeek || '' };
    });
  }, []);

  // Filter items for selected day
  const dailyItems = useMemo(() => {
    return RAW_ITINERARY.filter(item => item.date === selectedDate);
  }, [selectedDate]);

  // Calculate shopping total
  const shoppingTotal = useMemo(() => {
    return SHOPPING_LIST.reduce((sum, item) => sum + item.price, 0);
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              日本山陰山陽之旅 '24
            </h1>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" /> 岡山 • 廣島 • 島根 • 鳥取
            </p>
          </div>
          <div className="flex gap-4 text-xs font-medium">
             <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                10/30 - 11/06
             </div>
          </div>
        </div>
        
        {/* Day Selector - Sticky beneath header */}
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-sm overflow-x-auto hide-scrollbar">
          <div className="max-w-5xl mx-auto px-4 py-2 flex gap-2 min-w-max">
            {days.map((d) => (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 min-w-[70px] ${
                  selectedDate === d.date
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs font-medium opacity-80">{d.dayOfWeek}</span>
                <span className="text-sm font-bold">{d.date}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
               <Calendar className="w-5 h-5 text-blue-600" />
               <h2 className="text-xl font-bold text-gray-800">{selectedDate} 行程</h2>
            </div>
            <Timeline items={dailyItems} />
            
            {/* Show shopping list on last day */}
            {selectedDate === '11/06' && (
              <div className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-5 h-5 text-pink-600" />
                  <h3 className="text-lg font-bold text-pink-900">購物清單</h3>
                </div>
                <ul className="space-y-3">
                  {SHOPPING_LIST.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm border-b border-pink-100 last:border-0 pb-2 last:pb-0">
                      <span className="text-gray-800">{item.name}</span>
                      <span className="font-semibold text-pink-700">¥{item.price.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-pink-200 flex justify-between font-bold text-pink-900">
                  <span>預估總額</span>
                  <span>¥{shoppingTotal.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Stats & Tools */}
        <div className="space-y-6">
           {/* Daily Cost Chart */}
           <CostChart items={dailyItems} />

           {/* Quick Stats Card */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
               <Wallet className="w-5 h-5 text-green-600" />
               每日概況
             </h3>
             <dl className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 p-3 rounded-lg">
                 <dt className="text-xs text-gray-500 mb-1">活動數</dt>
                 <dd className="text-xl font-bold text-gray-900">{dailyItems.length}</dd>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg">
                 <dt className="text-xs text-gray-500 mb-1">城市數</dt>
                 <dd className="text-xl font-bold text-gray-900">
                   {new Set(dailyItems.map(i => i.location.split(' ')[0])).size}
                 </dd>
               </div>
             </dl>
           </div>
        </div>
      </main>

      <ChatAssistant />
    </div>
  );
}

export default App;