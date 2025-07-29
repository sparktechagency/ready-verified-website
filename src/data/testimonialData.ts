export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Olivia Bennett",
    position: "App Developer",
    company: "TechCorp",
    quote:
      "The platform's assessments helped me identify my strengths and areas for improvement. The certifications I earned opened doors to new opportunities and significantly boosted my career prospects.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    position: "Marketing Manager",
    company: "Digital Solutions",
    quote:
      "I was impressed by the quality and relevance of the assessments. They perfectly aligned with industry standards and helped me validate my skills to potential employers.",
  },
  {
    id: "3",
    name: "Sarah Chen",
    position: "UX Designer",
    company: "Creative Studio",
    quote:
      "The interactive assessments were engaging and comprehensive. I appreciated the detailed feedback and personalized recommendations that helped me focus on skill development.",
  },
  {
    id: "4",
    name: "David Thompson",
    position: "Data Analyst",
    company: "Analytics Pro",
    quote:
      "The certification process was thorough and professional. Having these credentials on my resume has definitely made me stand out in job applications and interviews.",
  },
  {
    id: "5",
    name: "Emily Johnson",
    position: "Project Manager",
    company: "Innovation Labs",
    quote:
      "The self-paced learning approach worked perfectly for my busy schedule. The assessments were challenging yet fair, and the results gave me confidence in my abilities.",
  },
];
