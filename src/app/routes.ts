import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { DailyDeck } from './components/DailyDeck';
import { EmailStream } from './components/EmailStream';
import { CalendarView } from './components/CalendarView';
import { EmailDetail } from './components/EmailDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: DailyDeck },
      { path: 'emails', Component: EmailStream },
      { path: 'email/:id', Component: EmailDetail },
      { path: 'calendar', Component: CalendarView }
    ]
  }
]);
