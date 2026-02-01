import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Email, CalendarEvent, EmailAction } from '@/types/email';
import { mockEmails } from '@/data/mockEmails';

interface EmailContextType {
  emails: Email[];
  calendarEvents: CalendarEvent[];
  currentEmailIndex: number;
  carouselComplete: boolean;
  mentalCapacity: number;
  setCurrentEmailIndex: (index: number) => void;
  handleEmailAction: (emailId: string, action: EmailAction) => void;
  addToCalendar: (email: Email) => void;
  completeCarousel: () => void;
  updateEmailPriority: (emailId: string, priority: string) => void;
  sortEmails: (sortBy: 'priority' | 'date' | 'sender') => void;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [carouselComplete, setCarouselComplete] = useState(false);
  
  // Calculate mental capacity based on important emails
  const importantEmailsCount = emails.filter(e => e.isImportant && !e.action).length;
  const mentalCapacity = Math.min(100, Math.max(0, 100 - (importantEmailsCount * 8)));

  const handleEmailAction = (emailId: string, action: EmailAction) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, action } : email
      )
    );
  };

  const addToCalendar = (email: Email) => {
    if (email.meetingInfo) {
      const newEvent: CalendarEvent = {
        id: `event-${email.id}`,
        title: email.subject,
        date: email.meetingInfo.date,
        time: email.meetingInfo.time,
        venue: email.meetingInfo.venue,
        emailId: email.id,
        color: getPriorityColor(email.priority)
      };
      setCalendarEvents(prev => [...prev, newEvent]);
    }
  };

  const getPriorityColor = (priority: string): string => {
    const colors: Record<string, string> = {
      urgent: '#EF4444',
      purchase: '#EC4899',
      promotion: '#10B981',
      meeting: '#F59E0B',
      routine: '#EAB308',
      social: '#6366F1'
    };
    return colors[priority] || '#6B7280';
  };

  const completeCarousel = () => {
    setCarouselComplete(true);
  };

  const updateEmailPriority = (emailId: string, priority: string) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, priority: priority as any } : email
      )
    );
  };

  const sortEmails = (sortBy: 'priority' | 'date' | 'sender') => {
    setEmails(prevEmails => {
      const sorted = [...prevEmails];
      if (sortBy === 'priority') {
        const priorityOrder = ['urgent', 'meeting', 'purchase', 'routine', 'promotion', 'social'];
        sorted.sort((a, b) => 
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
        );
      } else if (sortBy === 'date') {
        sorted.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
      } else if (sortBy === 'sender') {
        sorted.sort((a, b) => a.sender.localeCompare(b.sender));
      }
      return sorted;
    });
  };

  return (
    <EmailContext.Provider
      value={{
        emails,
        calendarEvents,
        currentEmailIndex,
        carouselComplete,
        mentalCapacity,
        setCurrentEmailIndex,
        handleEmailAction,
        addToCalendar,
        completeCarousel,
        updateEmailPriority,
        sortEmails
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
