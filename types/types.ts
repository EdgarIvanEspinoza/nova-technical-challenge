export type User = {
  name: string;
  position: string;
  company: string;
  image: string;
};

export type UserDictionary = {
  [key: string]: User;
};

export type Recommendation = {
  user: User;
  publicationDate: string;
  recommendationText: string;
};
