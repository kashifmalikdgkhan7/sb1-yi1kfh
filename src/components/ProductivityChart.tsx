import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', productivity: 65 },
  { name: 'Tue', productivity: 59 },
  { name: 'Wed', productivity: 80 },
  { name: 'Thu', productivity: 81 },
  { name: 'Fri', productivity: 56 },
  { name: 'Sat', productivity: 55 },
  { name: 'Sun', productivity: 40 },
];

interface ProductivityChartProps {
  darkMode: boolean;
}

const ProductivityChart: React.FC<ProductivityChartProps> = ({ darkMode }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h4 className="text-xl font-semibold mb-4">Weekly Productivity</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
          <XAxis dataKey="name" stroke={darkMode ? "#9CA3AF" : "#4B5563"} />
          <YAxis stroke={darkMode ? "#9CA3AF" : "#4B5563"} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
              color: darkMode ? '#FFFFFF' : '#000000',
              border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`
            }}
          />
          <Legend />
          <Bar dataKey="productivity" fill={darkMode ? "#5EEAD4" : "#4F46E5"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;