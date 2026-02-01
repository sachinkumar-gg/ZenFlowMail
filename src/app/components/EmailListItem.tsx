import React from 'react';
import { Email } from '@/types/email';
import { getPriorityColor } from '@/utils/emailHelpers';
import { Zap, AlertCircle, Clock } from 'lucide-react';

interface EmailListItemProps {
  email: Email;
  onClick: () => void;
}

export const EmailListItem: React.FC<EmailListItemProps> = ({ email, onClick }) => {
  const priorityColor = getPriorityColor(email.priority);

  const getPriorityIcon = () => {
    switch (email.priority) {
      case 'urgent':
        return <Zap className="w-5 h-5" style={{ color: priorityColor }} />;
      case 'meeting':
        return <AlertCircle className="w-5 h-5" style={{ color: priorityColor }} />;
      default:
        return <Clock className="w-5 h-5" style={{ color: priorityColor }} />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 p-4 bg-white border-l-4 hover:bg-gray-50 cursor-pointer transition-colors"
      style={{ borderLeftColor: priorityColor }}
    >
      {/* Avatar */}
      <img 
        src={email.senderAvatar} 
        alt={email.sender}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold truncate">{email.sender}</h3>
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            {getPriorityIcon()}
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: priorityColor }}
            ></div>
          </div>
        </div>
        <h4 className="font-medium text-sm mb-1 truncate">{email.subject}</h4>
        <p className="text-sm text-gray-600 truncate">{email.body}</p>
        
        {/* Category badge */}
        {email.category && (
          <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full capitalize">
              {email.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
