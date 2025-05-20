'use client';

import { useState, useEffect } from 'react';
import { MenuComponent } from './Menu';
import { CompanyLogo } from './CompanyLogo';
import { UserAvatar } from './UserAvatar';

export const HeaderComponent = () => {
  const [newNotification, setNewNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <CompanyLogo />
      <MenuComponent />
      <UserAvatar newNotification={newNotification} />
    </div>
  );
};
