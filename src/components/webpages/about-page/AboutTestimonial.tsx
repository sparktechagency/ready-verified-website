"use client";

import { Card, Rate } from "antd";
import { QuoteIcon } from "lucide-react";
import { Grid } from "antd";

const testimonials = [
  {
    name: "Sabika Gulson",
    title: "Web Developer",
    content:
      "The Assessments here are truly high-quality and easy to follow. The instructors explain everything clearly, with practical examples that make learning effective. I feel much more confident in my skills now.",
    rating: 5,
    color: "text-orange-500",
  },
  {
    name: "Sabika Gulson",
    title: "Web Developer",
    content:
      "The Assessments here are truly high-quality and easy to follow. The instructors explain everything clearly, with practical examples that make learning effective. I feel much more confident in my skills now.",
    rating: 5,
    color: "text-teal-500",
  },
  {
    name: "Sabika Gulson",
    title: "Web Developer",
    content:
      "The Assessments here are truly high-quality and easy to follow. The instructors explain everything clearly, with practical examples that make learning effective. I feel much more confident in my skills now.",
    rating: 5,
    color: "text-orange-500",
  },
];

const AboutTestimonial = () => {
  const { lg } = Grid.useBreakpoint();

  return (
    <section className="  px-4 text-center my-12 pb-12">
      <h2 className="text-2xl md:text-[40px] font-semibold text-gray-800 mb-12">
        What our candidates say
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <Card
            key={idx}
            className={`rounded-xl shadow-sm hover:shadow-md transition duration-300  h-[280px] `}
            style={{
              marginTop: lg && idx === 1 ? "-24px" : "",
              position: lg && idx === 1 ? "relative" : undefined,
              border: "none",
            }}
          >
            <div className="flex justify-center mb-4">
              <QuoteIcon className={`text-2xl ${testimonial.color}`} />
            </div>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
            <p className="text-gray-700 text-sm mb-4">{testimonial.content}</p>
            <Rate disabled defaultValue={testimonial.rating} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonial;
