export interface CVTemplate {
  id: string;
  name: string;
  category: string;
  downloads: number;
  rating: number;
  image: string;
}

export const successfulCVs: CVTemplate[] = [
  {
    id: "1",
    name: "Executive Professional",
    category: "Business",
    downloads: 15420,
    rating: 4.9,
    image: "/cv/demo-cv.png",
  },
  {
    id: "2",
    name: "Creative Designer",
    category: "Design",
    downloads: 12350,
    rating: 4.8,
    image: "/cv/demo-cv.png",
  },
  {
    id: "3",
    name: "Tech Specialist",
    category: "Technology",
    downloads: 18900,
    rating: 4.9,
    image: "/cv/demo-cv.png",
  },
  {
    id: "4",
    name: "Marketing Pro",
    category: "Marketing",
    downloads: 11200,
    rating: 4.7,
    image: "/cv/demo-cv.png",
  },
];

export const popularCVs: CVTemplate[] = [
  {
    id: "5",
    name: "Modern Minimalist",
    category: "General",
    downloads: 25600,
    rating: 4.8,
    image: "/cv/demo-cv.png",
  },
  {
    id: "6",
    name: "Corporate Classic",
    category: "Business",
    downloads: 22100,
    rating: 4.6,
    image: "/cv/demo-cv.png",
  },
  {
    id: "7",
    name: "Fresh Graduate",
    category: "Entry Level",
    downloads: 19800,
    rating: 4.7,
    image: "/cv/demo-cv.png",
  },
  {
    id: "8",
    name: "Senior Manager",
    category: "Leadership",
    downloads: 16500,
    rating: 4.9,
    image: "/cv/demo-cv.png",
  },
];
