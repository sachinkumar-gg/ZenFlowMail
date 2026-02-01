import React from 'react';

interface MentalCapacityBarProps {
  capacity: number;
}

export const MentalCapacityBar: React.FC<MentalCapacityBarProps> = ({ capacity }) => {
  const getCapacityColor = () => {
    if (capacity >= 70) return 'bg-green-500';
    if (capacity >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getCapacityLabel = () => {
    if (capacity >= 70) return 'Light workload';
    if (capacity >= 40) return 'Moderate workload';
    return 'Heavy workload - focus mode active';
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Mental Capacity</h3>
        <span className="text-lg font-bold" style={{ color: capacity >= 70 ? '#10B981' : capacity >= 40 ? '#F59E0B' : '#EF4444' }}>
          {capacity}%
        </span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getCapacityColor()} transition-all duration-500`}
          style={{ width: `${capacity}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{getCapacityLabel()}</p>
    </div>
  );
};
