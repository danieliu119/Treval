import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ItineraryItem } from '../types';

interface CostChartProps {
  items: ItineraryItem[];
}

const COLORS = ['#3B82F6', '#F97316', '#6366F1', '#10B981', '#EC4899', '#14B8A6'];

const CostChart: React.FC<CostChartProps> = ({ items }) => {
  // Aggregate costs by type (Only JPY for consistent charting)
  const dataMap = items.reduce((acc, item) => {
    if (item.currency === 'JPY') {
      acc[item.type] = (acc[item.type] || 0) + item.cost;
    }
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(dataMap).map(key => ({
    name: key,
    value: dataMap[key]
  })).filter(d => d.value > 0);

  const totalJPY = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">日幣費用分析</h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <span className="text-sm text-gray-500">預估總花費 (JPY):</span>
        <div className="text-xl font-bold text-gray-900">¥{totalJPY.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CostChart;