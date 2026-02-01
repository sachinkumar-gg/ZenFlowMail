import { Email } from '@/types/email';

export const mockEmails: Email[] = [
  {
    id: '1',
    sender: 'Sarah Chen',
    senderEmail: 'sarah.chen@company.com',
    senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    subject: 'URGENT: Q1 Budget Review Meeting',
    body: 'Hi! We need to discuss the Q1 budget allocation. Can we meet tomorrow at 2 PM? This is time-sensitive and requires immediate attention.',
    priority: 'urgent',
    category: 'inner',
    categoryContext: 'Direct report, works closely on finance team',
    meetingInfo: {
      date: '2026-02-02',
      time: '14:00',
      venue: 'Conference Room B'
    },
    isImportant: true,
    timestamp: new Date('2026-02-01T09:00:00')
  },
  {
    id: '2',
    sender: 'Spotify',
    senderEmail: 'premium@spotify.com',
    senderAvatar: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=150&h=150&fit=crop',
    subject: 'Your Premium subscription renewal',
    body: 'Your Spotify Premium subscription will automatically renew on February 1, 2026. We\'ll charge $9.99 to your card ending in 1234.',
    priority: 'purchase',
    category: 'peripheral',
    meetingInfo: {
      date: '2026-02-09',
      time: '09:00'
    },
    isImportant: true,
    timestamp: new Date('2026-01-31T10:00:00')
  },
  {
    id: '3',
    sender: 'Marcus Johnson',
    senderEmail: 'marcus.j@tech.com',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    subject: 'Project Alpha - Critical Bug Report',
    body: 'Found a critical issue in the authentication flow. Users are unable to log in via OAuth. Can you review this ASAP?',
    priority: 'urgent',
    category: 'known',
    categoryContext: 'Met at TechConf 2025, lead developer',
    isImportant: true,
    timestamp: new Date('2026-02-01T08:30:00')
  },
  {
    id: '4',
    sender: 'Emily Rodriguez',
    senderEmail: 'emily.r@design.co',
    senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    subject: 'Design Review Session - January 26',
    body: 'Let\'s review the new UI mockups for the mobile app. I\'ve prepared some exciting concepts! Meeting scheduled for January 26 at 3 PM.',
    priority: 'meeting',
    category: 'inner',
    categoryContext: 'Senior designer on core team',
    meetingInfo: {
      date: '2026-01-26',
      time: '15:00',
      venue: 'Design Studio'
    },
    isImportant: true,
    timestamp: new Date('2026-01-25T14:00:00')
  },
  {
    id: '5',
    sender: 'Lisa Park',
    senderEmail: 'lisa@ventures.com',
    senderAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    subject: 'Investor Meeting - Series A Discussion',
    body: 'Excited to discuss the Series A funding round. Can we schedule a call for January 28 at 11 AM? Looking forward to the conversation.',
    priority: 'urgent',
    category: 'known',
    categoryContext: 'Met through mutual connection, VC partner',
    meetingInfo: {
      date: '2026-01-28',
      time: '11:00',
      venue: 'Video Call'
    },
    isImportant: true,
    timestamp: new Date('2026-01-27T09:00:00')
  },
  {
    id: '6',
    sender: 'David Kim',
    senderEmail: 'david.kim@company.com',
    senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    subject: 'Team Standup - Daily Sync',
    body: 'Daily standup at 9 AM tomorrow. Please share your updates and blockers. Let\'s keep it brief and focused.',
    priority: 'routine',
    category: 'inner',
    categoryContext: 'Team lead, daily collaboration',
    meetingInfo: {
      date: '2026-02-02',
      time: '09:00',
      venue: 'Main Conference Room'
    },
    isImportant: true,
    timestamp: new Date('2026-02-01T16:00:00')
  },
  {
    id: '7',
    sender: 'Amazon',
    senderEmail: 'orders@amazon.com',
    senderAvatar: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=150&fit=crop',
    subject: 'Your order has shipped!',
    body: 'Great news! Your order #12345 has been shipped and will arrive by February 3, 2026. Track your package for real-time updates.',
    priority: 'purchase',
    category: 'peripheral',
    isImportant: false,
    timestamp: new Date('2026-01-31T12:00:00')
  },
  {
    id: '8',
    sender: 'LinkedIn',
    senderEmail: 'messages@linkedin.com',
    senderAvatar: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=150&h=150&fit=crop',
    subject: 'You appeared in 15 searches this week',
    body: 'Your profile is gaining traction! Companies in tech and finance are viewing your profile. Keep your information updated.',
    priority: 'social',
    category: 'peripheral',
    isImportant: false,
    timestamp: new Date('2026-01-30T11:00:00')
  },
  {
    id: '9',
    sender: 'Netflix',
    senderEmail: 'info@netflix.com',
    senderAvatar: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=150&h=150&fit=crop',
    subject: 'New releases you might like',
    body: 'Check out these new shows and movies we think you\'ll love. Start watching today and discover your next favorite series!',
    priority: 'promotion',
    category: 'peripheral',
    isImportant: false,
    timestamp: new Date('2026-01-29T10:00:00')
  },
  {
    id: '10',
    sender: 'Jessica Thompson',
    senderEmail: 'jthompson@client.com',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    subject: 'Q&A Session for Product Launch',
    body: 'Planning a Q&A session for the upcoming product launch. Can we meet on February 5 at 10 AM to prepare talking points?',
    priority: 'meeting',
    category: 'custom',
    categoryContext: 'Client from ABC Corp, met at product demo',
    meetingInfo: {
      date: '2026-02-05',
      time: '10:00',
      venue: 'Client Office'
    },
    isImportant: true,
    timestamp: new Date('2026-02-01T07:00:00')
  },
  {
    id: '11',
    sender: 'GitHub',
    senderEmail: 'notifications@github.com',
    senderAvatar: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=150&h=150&fit=crop',
    subject: 'Pull Request Review Requested',
    body: 'You have been requested to review a pull request in the main repository. Please review at your earliest convenience.',
    priority: 'routine',
    category: 'peripheral',
    isImportant: false,
    timestamp: new Date('2026-01-31T15:30:00')
  },
  {
    id: '12',
    sender: 'Airbnb',
    senderEmail: 'trips@airbnb.com',
    senderAvatar: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=150&h=150&fit=crop',
    subject: 'Complete your booking for San Francisco',
    body: 'You\'re almost done! Complete your booking for the beautiful loft in San Francisco. Limited availability - book now!',
    priority: 'purchase',
    category: 'peripheral',
    isImportant: false,
    timestamp: new Date('2026-01-28T13:00:00')
  }
];
