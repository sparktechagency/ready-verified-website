export type IUser = {
  name: string;
  contact: string;
  email: string;
  password: string;
  location: string;
  image?: string;
  verified: boolean;
  suffix?: string;
  street_address?: string;
  secondary_street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  date_of_birth?: string;
  gender?: string;
  ethic?: string;
  education?: string;
  school_name?: string;
  graduation_year?: string;
  additional_languages?: string[]
  subscription?:string;
  _id:string;
  updatedAt:any
  proffessional_details?: {
    job_title: string;
    industry: string;
    experience:number;
    linkedin_url?: string;
    skills: string[];
    languages: string[];
    resume_url: string;
  },

  tier_resume_taken?: number;

  
};

export interface ISubscription {
  _id: string;
  user: string;
  package: {
    _id: string;
    name: string;
    price: number;
    recurring: string;
    price_id: string;
    payment_link: string;
    product_id: string;
    features: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'canceled';
  price: number;
  subscriptionId: string;
  createdAt: string;
  updatedAt: string;
  
  __v: number;
}

export interface IPackage {
  _id: string;
  name: string;
  price: number;
  recurring: string;
  price_id: string;
  payment_link: string;
  product_id: string;
  features: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITemplate {
  _id: string;
  image: string;
  title: string;
  type: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  thumbnail: string;
}
export interface IOrder {
  _id: string;
  user: IUser;
  template: ITemplate;
  status: string; // e.g. "completed", "pending", etc.
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  file: string;
  paymentId: string;
  trxId: string;
}

export type ICategory = {
    icon: string,
    title: string,
    questions:{
        question: string,
        type:"boolean" | "plain",
    }[],
    status:"active" | "deleted"
    _id:string
}