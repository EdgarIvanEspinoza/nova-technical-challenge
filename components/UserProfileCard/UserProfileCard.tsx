import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Mail, UserPlus } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Props = {
  user: {
    name: string;
    position: string;
    company: string;
    image: string;
  };
};

export const UserProfileCard = ({ user }: Props) => {
  return (
    <Card className="w-[350px] h-[300px] text-center">
      <CardHeader>
        <Image
          src={`/photos${user.image}`}
          alt="User Avatar"
          className="w-24 h-24 rounded-full m-auto"
          width={96}
          height={96}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">
          {user.position} at {user.company}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/#">
            <UserPlus />
            Connect
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/#">
            <Mail />
            Message
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
