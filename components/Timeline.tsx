import React from 'react';
import { ActivityType, ItineraryItem } from '../types';
import { Plane, Car, Utensils, BedDouble, Ticket, ShoppingBag, MapPin, Info } from 'lucide-react';

interface TimelineProps {
  items: ItineraryItem[];
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.Transport: return <Car className="w-5 h-5 text-blue-500" />;
    case ActivityType.Food: return <Utensils className="w-5 h-5 text-orange-500" />;
    case ActivityType.Stay: return <BedDouble className="w-5 h-5 text-indigo-500" />;
    case ActivityType.Ticket: return <Ticket className="w-5 h-5 text-green-500" />;
    case ActivityType.Shopping: return <ShoppingBag className="w-5 h-5 text-pink-500" />;
    case ActivityType.Sightseeing: return <MapPin className="w-5 h-5 text-teal-500" />;
    default: return <Info className="w-5 h-5 text-gray-500" />;
  }
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 my-6">
      {items.map((item) => (
        <div key={item.id} className="mb-8 ml-6 group">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white border border-gray-200 group-hover:border-blue-500 transition-colors">
            {item.description.includes('IT214') || item.description.includes('IT715') ? <Plane className="w-4 h-4 text-sky-600"/> : getActivityIcon(item.type)}
          </span>
          <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{item.location}</h3>
              <time className="block mb-1 text-sm font-normal leading-none text-gray-500 sm:order-last sm:mb-0 bg-gray-50 px-2 py-1 rounded">
                {item.startTime} - {item.endTime}
              </time>
            </div>
            <p className="mb-2 text-base font-normal text-gray-700">{item.description}</p>
            
            {item.notes && (
              <p className="text-sm text-gray-500 mb-2 italic">
                <Info className="inline w-3 h-3 mr-1" />
                {item.notes}
              </p>
            )}

            <div className="flex items-center gap-3 mt-3">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${
                item.type === ActivityType.Food ? 'bg-orange-100 text-orange-800 border-orange-200' :
                item.type === ActivityType.Transport ? 'bg-blue-100 text-blue-800 border-blue-200' :
                item.type === ActivityType.Stay ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                'bg-gray-100 text-gray-800 border-gray-200'
              }`}>
                {item.type}
              </span>
              
              {item.cost > 0 && (
                <span className="text-sm font-semibold text-gray-900">
                  {item.currency} {item.cost.toLocaleString()}
                </span>
              )}

              {item.links && item.links.map((link, idx) => (
                <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                  查看連結
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;