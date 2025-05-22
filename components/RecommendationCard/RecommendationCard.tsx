import Image from 'next/image';
import { Card } from '../ui/card';
import { Recommendation } from '@/types/types';

export const RecommendationCard = ({
  user,
  publicationDate,
  recommendationText,
}: Recommendation) => {
  return (
    <Card className="w-full max-h-80 mx-auto p-4 bg-white rounded-lg flex flex-row">
      <Image
        src={user.image}
        alt="User Avatar"
        className="w-16 h-16 rounded-full"
        width={64}
        height={64}
      />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row justify-between  w-full">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">
              {user.position} at {user.company}
            </p>
          </div>
          <p className="text-sm text-gray-500">{publicationDate}</p>
        </div>
        <p className="text-gray-800">{recommendationText}</p>
      </div>
    </Card>
  );
};
