// app/profile/[username]/page.tsx
import { notFound } from 'next/navigation';

const MOCK_USERS: {
  [key: string]: {
    name: string;
    position: string;
    company: string;
    image: string;
  };
} = {
  'michael-anderson': {
    name: 'Michael Anderson',
    position: 'Senior Designer',
    company: 'Nova Inc',
    image: '/avatar-michael.jpg',
  },
};

type Props = {
  params: { username: string };
};

const ProfilePage = ({ params }: Props) => {
  const user = MOCK_USERS[params.username];

  if (!user) {
    return notFound();
  }

  return <>{user.name}</>;
};

export default ProfilePage;
