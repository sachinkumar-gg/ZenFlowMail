import { EmailPriority } from '@/types/email';

export const getPriorityColor = (priority: EmailPriority): string => {
  const colors: Record<EmailPriority, string> = {
    urgent: '#EF4444', // red
    purchase: '#EC4899', // pink
    promotion: '#10B981', // green
    meeting: '#F59E0B', // orange
    routine: '#EAB308', // yellow
    social: '#6366F1' // indigo
  };
  return colors[priority];
};

export const getPriorityBgColor = (priority: EmailPriority): string => {
  const colors: Record<EmailPriority, string> = {
    urgent: 'bg-red-50 border-red-200',
    purchase: 'bg-pink-50 border-pink-200',
    promotion: 'bg-green-50 border-green-200',
    meeting: 'bg-orange-50 border-orange-200',
    routine: 'bg-yellow-50 border-yellow-200',
    social: 'bg-indigo-50 border-indigo-200'
  };
  return colors[priority];
};

export const getPriorityLabel = (priority: EmailPriority): string => {
  const labels: Record<EmailPriority, string> = {
    urgent: 'URGENT',
    purchase: 'PURCHASE',
    promotion: 'PROMOTION',
    meeting: 'MEETING',
    routine: 'ROUTINE',
    social: 'SOCIAL'
  };
  return labels[priority];
};

export const formatMeetingDateTime = (date: string, time: string): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return `${dateObj.toLocaleDateString('en-US', options)} at ${time}`;
};
