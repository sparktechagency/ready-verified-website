export interface ICandidate {
  _id: string;
  personal_information: PersonalInformation;
  professional_information: ProfessionalInformation;
  other_information: OtherInformation;
  category: Category;
  user: User;
  level: string;
}

export interface PersonalInformation {
  _id: string;
  name: string;
  email: string;
  contact: string;
  headline: string;
  address: string;
  overview: string;
}

export interface ProfessionalInformation {
  _id: string;
  job_title: string;
  company: string;
  experience: string; // maybe number, but your JSON has "2" as string
  linkedin_url: string;
  skills: string[];
  work_experience: string; // same here, number would be better if consistent
}

export interface OtherInformation {
  _id: string;
  educational_background: string;
  language: string;
  volunter_experience: string; // could be number
  publications: string; // could be number
}

export interface Category {
  _id: string;
  title: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  subscription: Subscription;
}

export interface Subscription {
  _id: string;
  price: number;
}


export enum JOB_LEVEL {
  ALL = "All",
  LEVEL_A = "LEVEL-A",
  LEVEL_B = "LEVEL-B",
  LEVEL_C = "LEVEL-C",
  LEVEL_D = "LEVEL-D",
  LEVEL_E = "LEVEL-E",
  LEVEL_F = "LEVEL-F"
}
