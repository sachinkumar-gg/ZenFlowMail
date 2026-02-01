import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useEmail } from '@/context/EmailContext';
import { getPriorityColor, getPriorityLabel } from '@/utils/emailHelpers';
import { ArrowLeft, Calendar, Zap, Clock, AlertCircle } from 'lucide-react';

export const EmailDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { emails, handleEmailAction, addToCalendar } = useEmail();
  
  const email = emails.find(e => e.id === id);

  if (!email) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Email not found</p>
          <button
            onClick={() => navigate('/emails')}
            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
          >
            Back to Emails
          </button>
        </div>
      </div>
    );
  }

  const priorityColor = getPriorityColor(email.priority);

  const handleAddToCalendar = () => {
    addToCalendar(email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/emails')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Emails
        </button>

        {/* Email Card */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 border-l-8"
          style={{ borderLeftColor: priorityColor }}
        >
          {/* Sender Info */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={email.senderAvatar} 
              alt={email.sender}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{email.sender}</h3>
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
          <h2 className="text-2xl font-bold mb-4">{email.subject}</h2>

          {/* Body */}
          <div className="text-gray-700 mb-6 leading-relaxed text-lg">
            {email.body}
          </div>

          {/* Category Info */}
          {email.category && email.categoryContext && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-semibold capitalize text-blue-900">
                  {email.category} Circle
                </span>
              </div>
              <p className="text-sm text-blue-700 ml-5">{email.categoryContext}</p>
            </div>
          )}

          {/* Meeting Info */}
          {email.meetingInfo && (
            <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold mb-2 text-orange-900">Meeting Details</h4>
              <p className="text-sm text-orange-700">
                <strong>Date:</strong> {email.meetingInfo.date}
              </p>
              <p className="text-sm text-orange-700">
                <strong>Time:</strong> {email.meetingInfo.time}
              </p>
              {email.meetingInfo.venue && (
                <p className="text-sm text-orange-700">
                  <strong>Venue:</strong> {email.meetingInfo.venue}
                </p>
              )}
            </div>
          )}

          {/* Add to Calendar Button */}
          {email.meetingInfo && (
            <button
              onClick={handleAddToCalendar}
              className="w-full mb-4 py-3 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Add to Calendar
            </button>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => {
                handleEmailAction(email.id, 'act');
                navigate('/emails');
              }}
              className="py-3 px-4 bg-red-400 hover:bg-red-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Act
            </button>
            <button
              onClick={() => {
                handleEmailAction(email.id, 'hold');
                navigate('/emails');
              }}
              className="py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              Hold
            </button>
            <button
              onClick={() => {
                handleEmailAction(email.id, 'later');
                navigate('/emails');
              }}
              className="py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Clock className="w-4 h-4" />
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
