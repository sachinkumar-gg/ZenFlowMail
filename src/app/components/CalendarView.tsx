import React, { useMemo } from 'react';
import { useEmail } from '@/context/EmailContext';
import { MentalCapacityBar } from './MentalCapacityBar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay, parseISO } from 'date-fns';

export const CalendarView: React.FC = () => {
  const { mentalCapacity, calendarEvents } = useEmail();
  
  // Generate dates for the current week
  const weekDates = useMemo(() => {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 1 }); // Start on Monday
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, []);

  const getEventsForDate = (date: Date) => {
    return calendarEvents.filter(event => {
      const eventDate = parseISO(event.date);
      return isSameDay(eventDate, date);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">ZenFlow</h1>
          <p className="text-gray-600">Email Stream</p>
        </div>

        {/* Mental Capacity */}
        <MentalCapacityBar capacity={mentalCapacity} />

        {/* Filters (matching EmailStream) */}
        <div className="flex items-center gap-3 mb-6">
          <button className="px-4 py-2 rounded-full font-medium bg-blue-400 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-full font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Today
          </button>
          <button className="px-4 py-2 rounded-full font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Act
          </button>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <CalendarIcon className="w-6 h-6" />
            <h2 className="text-xl font-bold">This Week</h2>
          </div>

          {/* Week View */}
          <div className="space-y-6">
            {weekDates.map((date, index) => {
              const events = getEventsForDate(date);
              const dayName = format(date, 'EEE');
              const dayNumber = format(date, 'd');
              
              return (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-semibold text-gray-700 w-12">{dayName}</span>
                    <span className="font-semibold text-gray-900">{dayNumber}</span>
                  </div>
                  
                  {events.length === 0 ? (
                    <p className="text-gray-400 italic text-center py-4">No events</p>
                  ) : (
                    <div className="space-y-2 ml-16">
                      {events.map(event => (
                        <div
                          key={event.id}
                          className="p-3 rounded-lg border-l-4"
                          style={{ 
                            borderLeftColor: event.color,
                            backgroundColor: `${event.color}15`
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-sm">{event.title}</h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {event.time}
                                {event.venue && ` • ${event.venue}`}
                              </p>
                            </div>
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: event.color }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        {calendarEvents.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>{calendarEvents.length}</strong> event{calendarEvents.length !== 1 ? 's' : ''} scheduled this week
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
