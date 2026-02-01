import React from 'react';
import { Email } from '@/types/email';
import { getPriorityColor, getPriorityLabel } from '@/utils/emailHelpers';
import { Calendar, Zap, Clock, AlertCircle } from 'lucide-react';
import { useEmail } from '@/context/EmailContext';

interface EmailCardProps {
  email: Email;
}

export const EmailCard: React.FC<EmailCardProps> = ({ email }) => {
  const { handleEmailAction, addToCalendar } = useEmail();
  const priorityColor = getPriorityColor(email.priority);

  const handleAddToCalendar = () => {
    addToCalendar(email);
  };

  return (
    <div className="mx-auto max-w-xl px-6">
      <div 
        className="bg-white rounded-3xl shadow-lg p-6 border-2"
        style={{ borderColor: priorityColor }}
      >
        {/* Sender Info */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={email.senderAvatar} 
            alt={email.sender}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{email.sender}</h3>
            <p className="text-sm text-gray-500">{email.senderEmail}</p>
          </div>
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: priorityColor }}
          >
            {getPriorityLabel(email.priority)}
          </span>
        </div>

        {/* Subject */}
        <h2 className="text-xl font-bold mb-3">{email.subject}</h2>

        {/* Body */}
        <div className="text-gray-700 mb-4 leading-relaxed">
          {email.body}
        </div>

        {/* Category Info (Second Interaction) */}
        {email.category && email.categoryContext && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold capitalize">{email.category}</span>
            </div>
            <p className="text-xs text-gray-600 ml-4">{email.categoryContext}</p>
          </div>
        )}

        {/* Add to Calendar Button */}
        {email.meetingInfo && (
          <button
            onClick={handleAddToCalendar}
            className="w-full mb-4 py-3 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Add to Cal: {email.meetingInfo.date} at {email.meetingInfo.time}
          </button>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleEmailAction(email.id, 'act')}
            className="py-3 px-4 bg-red-400 hover:bg-red-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <Zap className="w-4 h-4" />
            Act
          </button>
          <button
            onClick={() => handleEmailAction(email.id, 'hold')}
            className="py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <AlertCircle className="w-4 h-4" />
            Hold
          </button>
          <button
            onClick={() => handleEmailAction(email.id, 'later')}
            className="py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <Clock className="w-4 h-4" />
            Later
          </button>
        </div>
      </div>
    </div>
  );
};
