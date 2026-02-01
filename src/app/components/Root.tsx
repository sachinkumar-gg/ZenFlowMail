import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { EmailProvider } from '@/context/EmailContext';

export const Root: React.FC = () => {
  const location = useLocation();
  
  // Hide navigation on email detail page
  const showNavigation = !location.pathname.startsWith('/email/');

  return (
    <EmailProvider>
      <div className="pb-20">
        <Outlet />
      </div>
      {showNavigation && <Navigation />}
    </EmailProvider>
  );
};
