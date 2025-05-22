import { BriefcaseBusiness, House, Mail, Network } from 'lucide-react';
import { Button } from '../ui/button';

export const MobileMenuBottom = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-20 w-full border-t bg-background px-2">
      <div className="flex items-center justify-around w-full">
        <Button variant={'ghost'} className="flex flex-col items-center p-6">
          <House />
          <span className="text-xs text-gray-500">Home</span>
        </Button>
        <Button variant={'ghost'} className="flex flex-col items-center p-6">
          <Network />
          <span className="text-xs text-gray-500">Network</span>
        </Button>
        <Button variant={'ghost'} className="flex flex-col items-center p-6">
          <BriefcaseBusiness />
          <span className="text-xs text-gray-500">Jobs</span>
        </Button>
        <Button variant={'ghost'} className="flex flex-col items-center p-6">
          <Mail />
          <span className="text-xs text-gray-500">Messages</span>
        </Button>
      </div>
    </div>
  );
};
