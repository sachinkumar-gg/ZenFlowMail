export type EmailPriority = 'urgent' | 'purchase' | 'promotion' | 'meeting' | 'routine' | 'social';

export type EmailCategory = 'inner' | 'known' | 'peripheral' | 'custom';

export type EmailAction = 'act' | 'hold' | 'later' | 'ignore';

export interface MeetingInfo {
  date: string;
  time: string;
  venue?: string;
}

export interface Email {
  id: string;
  sender: string;
  senderEmail: string;
  senderAvatar: string;
  subject: string;
  body: string;
  priority: EmailPriority;
  category?: EmailCategory;
  categoryContext?: string;
  meetingInfo?: MeetingInfo;
  action?: EmailAction;
  isImportant: boolean;
  timestamp: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue?: string;
  emailId: string;
  color: string;
}
