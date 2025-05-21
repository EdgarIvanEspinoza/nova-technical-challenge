import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Mail, UserPlus } from 'lucide-react';
import { Card, CardFooter, CardHeader } from '../ui/card';
import { User } from '@/types/types';

type Props = {
  user: User;
};

export const UserProfileCard = ({ user }: Props) => {
  return (
    <Card className="w-full md:max-w-[350px] min-h-[200px] max-h-[300px] text-center">
      <CardHeader className="flex flex-row md:flex-col items-center justify-center ">
        <Image
          src={`/photos${user.image}`}
          alt="User Avatar"
          className="w-24 h-24 rounded-full m-auto"
          width={96}
          height={96}
        />
        <div className="flex flex-col md:items-center items-start justify-center gap-2 basis-[70%]">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.position}</p>
          <p className="text-blue-600 font-bold">{user.company}</p>
        </div>
      </CardHeader>
      <CardFooter className="flex gap-4 justify-center">
        <Button asChild className="w-[50%]">
          <Link href="/#">
            <UserPlus />
            Connect
          </Link>
        </Button>
        <Button variant="secondary" asChild className="w-[50%]">
          <Link href="/#">
            <Mail />
            Message
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
