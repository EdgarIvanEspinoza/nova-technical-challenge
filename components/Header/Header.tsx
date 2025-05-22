'use client';

import { useState, useEffect } from 'react';
import { MenuComponent } from './Menu';
import { CompanyLogo } from './CompanyLogo';
import { UserAvatar } from './UserAvatar';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [newNotification, setNewNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex items-center gap-4 p-4 border-b border-gray-200">
        <CompanyLogo />
        <MenuComponent />
        <UserAvatar newNotification={newNotification} />
      </div>
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 border-b border-gray-200">
        <CompanyLogo />
        <UserAvatar newNotification={newNotification} />
        <MobileMenu />
      </div>
    </>
  );
};
