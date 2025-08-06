export interface Step {
  number: number;
  title: string;
  description: string;
}

export const jobSeekerToEmployerSteps: Step[] = [
  {
    number: 1,
    title: "Create Profile",
    description: "Build your professional profile",
  },
  {
    number: 2,
    title: "Take Assessments",
    description: "Complete skill assessments",
  },
  {
    number: 3,
    title: "Get Verified",
    description: "Receive verification badge",
  },
  {
    number: 4,
    title: "Apply to Jobs",
    description: "Submit applications",
  },
  {
    number: 5,
    title: "Apply to Jobs",
    description: "Continue applying",
  },
];

export const employerToJobSeekerSteps: Step[] = [
  {
    number: 1,
    title: "Post Requirements",
    description: "Define job requirements and skills needed",
  },
  {
    number: 2,
    title: "Browse Verified Talent",
    description: "Access pre-screened candidates",
  },
  {
    number: 3,
    title: "Review Assessments",
    description: "Evaluate verified skill assessments",
  },
  {
    number: 4,
    title: "Connect & Interview",
    description: "Engage with qualified candidates",
  },
  {
    number: 5,
    title: "Hire Confidently",
    description: "Make informed hiring decisions",
  },
];

export const schoolToEmployer: Step[] = [
  {
    number: 1,
    title: "Partner Integration",
    description: "Integrate with educational programs",
  },
  {
    number: 2,
    title: "Student Assessment",
    description: "Assess student skills and competencies",
  },
  {
    number: 3,
    title: "Certification",
    description: "Provide verified skill certificates",
  },
  {
    number: 4,
    title: "Industry Connection",
    description: "Connect graduates with employers",
  },
  {
    number: 5,
    title: "Career Success",
    description: "Track graduate employment outcomes",
  },
];

