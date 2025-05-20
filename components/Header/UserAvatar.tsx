import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BellIcon } from 'lucide-react';

export const UserAvatar = ({
  newNotification,
}: {
  newNotification: boolean;
}) => {
  return (
    <div className="flex items-center ml-auto p-4 gap-4 self-end">
      <div className="relative">
        <BellIcon className="h-6 w-6 text-gray-500" />
        {newNotification ? (
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        ) : null}
      </div>
      <Avatar>
        <AvatarImage src="/images/profile.png" alt="User Avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );
};
