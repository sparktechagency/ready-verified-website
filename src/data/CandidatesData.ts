export interface Candidate {
  key: string;
  name: string;
  level: string;
  skill: string;
  employs: string;
  overview: string;
  skills: string[];
  address: string;
}

export const mockCandidates: Candidate[] = [
  {
    key: "1",
    name: "Wade Warren",
    level: "C-Level",
    skill: "c language",
    employs: "200+",
    overview:
      "Wade Warren has one year of professional work experience. Over time, he has developed strong skills in MS Word, programming (including languages like Python and JavaScript), and other technical and soft skills. Additionally, he has experience in data entry, problem-solving, and teamwork. Now, he is actively searching for a job in IT, software development, or office administration—fields that match his expertise. He is eager to apply his knowledge in a new role and grow his career. Md. Jon is open to entry-level or mid-level positions where he can contribute effectively while continuing to learn.",
    skills: ["Problem solving", "MS Word", "Excel", "Python", "JavaScript"],
    address: "4539 N 22nd Street, STE R, Phoenix, AZ 85016",
  },
  {
    key: "2",
    name: "Robert Fox",
    level: "V-Level",
    skill: "ms word",
    employs: "200+",
    overview:
      "Robert Fox is an experienced professional with expertise in various technical skills and management capabilities.",
    skills: ["Management", "MS Word", "Leadership", "Strategy"],
    address: "1234 Main Street, Suite 100, New York, NY 10001",
  },
  {
    key: "3",
    name: "Wade Warren",
    level: "C-Level",
    skill: "c language",
    employs: "200+",
    overview:
      "Another Wade Warren profile with different specializations and experience.",
    skills: ["C Programming", "Software Development", "Team Leadership"],
    address: "5678 Oak Avenue, Los Angeles, CA 90210",
  },
  {
    key: "4",
    name: "Robert Fox",
    level: "V-Level",
    skill: "ms word",
    employs: "200+",
    overview:
      "Robert Fox with additional experience in project management and business development.",
    skills: ["Project Management", "Business Development", "MS Office"],
    address: "9876 Pine Street, Chicago, IL 60601",
  },
  {
    key: "5",
    name: "Wade Warren",
    level: "C-Level",
    skill: "c language",
    employs: "200+",
    overview: "Senior Wade Warren with extensive leadership experience.",
    skills: ["Executive Leadership", "Strategic Planning", "C++"],
    address: "2468 Elm Street, Houston, TX 77001",
  },
];
