// app/profile/[username]/page.tsx
import { RecommendationCard } from '@/components/RecommendationCard/RecommendationCard';
import { RecommendationForm } from '@/components/RecommendationForm/RecommendationForm';
import { UserProfileCard } from '@/components/UserProfileCard/UserProfileCard';
import { notFound } from 'next/navigation';

const MOCK_USERS: {
  [key: string]: {
    name: string;
    position: string;
    company: string;
    image: string;
  };
} = {
  'ivan-espinoza': {
    name: 'Ivan Espinoza',
    position: 'Senior Developer',
    company: 'Nova Inc',
    image: '/ivan-avatar.jpeg',
  },
};

const MOCK_RECOMMENDATIONS = [
  {
    user: {
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateTech',
      image: '/ivan-avatar.jpeg',
    },
    publicationDate: 'March 15, 2025',
    recommendationText:
      'Ivan is an exceptional developer! His skills in React and Node.js are top-notch. He consistently delivers high-quality work and is a great team player. I highly recommend him for any development role.',
  },
  {
    user: {
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'Tech Solutions',
      image: '/ivan-avatar.jpeg',
    },
    publicationDate: 'April 10, 2025',
    recommendationText:
      'I had the pleasure of working with Ivan on several projects. His attention to detail and problem-solving skills are impressive. He is a valuable asset to any team.',
  },
];

type Props = {
  params: { username: string };
};

const ProfilePage = ({ params }: Props) => {
  const user = MOCK_USERS[params.username];

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen p-4 gap-4">
      <UserProfileCard user={user} />
      <div className="flex flex-col gap-4 w-full">
        <RecommendationForm />
        {MOCK_RECOMMENDATIONS.map((recommendation, index) => (
          <RecommendationCard
            key={index}
            user={recommendation.user}
            publicationDate={recommendation.publicationDate}
            recommendationText={recommendation.recommendationText}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
