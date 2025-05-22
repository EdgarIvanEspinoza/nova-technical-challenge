'use client';

import { RecommendationCard } from '@/components/RecommendationCard/RecommendationCard';
import { RecommendationForm } from '@/components/RecommendationForm/RecommendationForm';
import { UserProfileCard } from '@/components/UserProfileCard/UserProfileCard';
import { MOCK_USERS, MOCK_RECOMMENDATIONS } from '@/mocks/Mocks';
import { notFound } from 'next/navigation';

type Props = {
  params: { username: string };
};

const ProfilePage = ({ params }: Props) => {
  const user = MOCK_USERS[params.username];
  const userRecommendations = MOCK_RECOMMENDATIONS || [];

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 gap-4">
      <UserProfileCard user={user} />
      <div className="flex flex-col gap-4 w-full">
        <RecommendationForm />
        {userRecommendations.map((recommendation, index) => (
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
