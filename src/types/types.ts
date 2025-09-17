export type IUser = {
  name: string;
  contact: string;
  role: string;
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

// small helper for file metadata (adapt if you use DOM File)
export interface IFileMeta {
  name: string;
  size?: number;      // bytes (optional)
  type?: string;      // MIME type (optional)
  url?: string;       // local URL or server path (optional)
  [key: string]: any; // allow extra props from your uploader
}

export interface IQuiz {
  q1_coachability_key_trait: string;
  q2_stubborn_coachable: string;
  q3_coachability_measurable: string;
  q4_coachability_definition: string;
  q5_coachability_improve: string;
  [key: string]: string; // allow other quiz keys as strings
}

export interface IResume {
  file: IFileMeta | null;
  fileList: IFileMeta[];
}

export interface IUserProfile {
  address: string;
  contactNumber: string;
  education: string;
  email: string;
  experience: string;           // sample had "2" (string). change to number if you prefer
  fullName: string;
  headline: string;
  industry: string;
  jobTitle: string;
  language: string;
  linkedinProfile: string;
  previousExperience: string;   // sample had "4"
  publications: string;
  quiz: Record<string, string>;
  references: string;
  resume: string;
  selectedAssessment: string;   // id string
  skills: string;               // CSV string in sample ("sleeping,eating, nothing")
  volunteerExperience: string;
  overview: string
}


export type IAssessment = {
    personal_information:{
        name: string,
        email: string,
        contact: string;
        headline: string;
        address: string;
        overview: string
    },

    professional_information: {
        job_title: string,
        company: string,
        experience: string,
        linkedin_url: string,
        skills: string[],
        resume_url: string,
        work_experience:string;

    },

    other_information:{
        educational_background: string,
        language: string,
        volunter_experience: string;
        publications?: string;
        references?: string;
    },

    qna:{
        question: string,
        answer: string
    }[],

    category:string;
    date:Date;
    start_time:Date;
    end_time:Date;
    isPaid:boolean;
    paymentId?:string;
    badge:string;
    zoomLink?:string;
    cirtificate?:string,
    verificationCode?:string,
    mark?:number,
    duration?:string

}