import { UserDictionary, Recommendation } from '@/types/types';

export const MOCK_USERS: UserDictionary = {
  'ivan-espinoza': {
    name: 'Ivan Espinoza',
    position: 'Senior Developer',
    company: 'Nova Inc',
    image: '/ivan-avatar.jpeg',
  },
};

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    user: {
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateTech',
      image: '/photos/random-woman.jpg',
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
      image: '/photos/random-man.jpg',
    },
    publicationDate: 'April 10, 2025',
    recommendationText:
      'I had the pleasure of working with Ivan on several projects. His attention to detail and problem-solving skills are impressive. He is a valuable asset to any team.',
  },
];
