import React, { useState } from 'react';
import { EmailListItem } from './EmailListItem';
import { MentalCapacityBar } from './MentalCapacityBar';
import { useEmail } from '@/context/EmailContext';
import { Mail, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router';

type FilterType = 'all' | 'today' | 'act';
type SortType = 'priority' | 'date' | 'sender';

export const EmailStream: React.FC = () => {
  const { emails, mentalCapacity, sortEmails } = useEmail();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('priority');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredEmails = emails.filter(email => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'today') {
      const today = new Date();
      return email.timestamp.toDateString() === today.toDateString();
    }
    if (activeFilter === 'act') {
      return email.action === 'act';
    }
    return true;
  });

  const handleSort = (sort: SortType) => {
    setSortBy(sort);
    sortEmails(sort);
    setShowSortMenu(false);
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

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-blue-400 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('today')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'today' 
                ? 'bg-blue-400 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveFilter('act')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'act' 
                ? 'bg-blue-400 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Act
          </button>
          
          {/* Sort Menu */}
          <div className="ml-auto relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            </button>
            
            {showSortMenu && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-10">
                <button
                  onClick={() => handleSort('priority')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    sortBy === 'priority' ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  Priority
                </button>
                <button
                  onClick={() => handleSort('date')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    sortBy === 'date' ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  Date
                </button>
                <button
                  onClick={() => handleSort('sender')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    sortBy === 'sender' ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  Sender
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Email Count */}
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5" />
          <h2 className="font-semibold">Emails ({filteredEmails.length})</h2>
        </div>

        {/* Email List */}
        <div className="space-y-2">
          {filteredEmails.map(email => (
            <EmailListItem 
              key={email.id} 
              email={email}
              onClick={() => navigate(`/email/${email.id}`)}
            />
          ))}
        </div>

        {filteredEmails.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No emails found
          </div>
        )}
      </div>
    </div>
  );
};
