"use client";

import { Carousel, Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";
import { QuoteIcon } from "lucide-react";
import { testimonials } from "@/data/testimonialData";

const { Title, Paragraph } = Typography;

export default function TestimonialSection() {
  const carouselRef = useRef<CarouselRef>(null);

  const handlePrevious = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="bg-[#F1F4F9]  mt-12 ">
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          padding: "65px 0",
        }}
      >
        {/* Section Header */}

        <h1
          className="text-[26px] md:text-[40px] font-[600] text-[#333] mb-6 leading-[1.3] "
        >
          What Do <span className="text-[#2FB236]">People Think About Us?</span>
        </h1>

        {/* Testimonial Carousel */}
        <div style={{ position: "relative" }}>
          <Carousel
            ref={carouselRef}
            dots={false}
            infinite
            autoplay
            autoplaySpeed={5000}
            speed={800}
            easing="ease-in-out"
            style={{ marginBottom: "10px" }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div style={{ padding: "40px 20px" }}>
                  {/* Testimonial Quote */}
                  <Paragraph
                    style={{
                      fontSize: "18px",
                      color: "#333",
                      lineHeight: "1.6",
                      marginBottom: "32px",
                      fontStyle: "italic",
                      maxWidth: "600px",
                      margin: "0 auto 32px auto",
                    }}
                  >
                    "{testimonial.quote}"
                  </Paragraph>

                  {/* Author Info */}
                  <div>
                    <Title
                      level={4}
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "4px",
                        margin: "0 0 4px 0",
                      }}
                    >
                      <div className="flex items-center justify-center">
                        {/* Quote Icon */}
                        <QuoteIcon
                          size={40}
                          style={{
                            color: "#1A5FA4",
                            marginBottom: "12px",
                            display: "block",
                          }}
                        />
                      </div>
                      {testimonial.name}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        margin: 0,
                      }}
                    >
                      {testimonial.position}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Navigation Arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              //   marginTop: "12px",
            }}
          >
            <Button
              type="text"
              icon={<LeftOutlined />}
              onClick={handlePrevious}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1A5FA4";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#1A5FA4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.borderColor = "#e0e0e0";
              }}
            />
            <Button
              type="text"
              icon={<RightOutlined />}
              onClick={handleNext}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1A5FA4";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#1A5FA4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.borderColor = "#e0e0e0";
              }}
            />
          </div>
        </div>
      </div>
      <style jsx global>{`
        .ant-carousel .slick-slide {
          transition: all 0.8s ease-in-out;
        }

        .ant-carousel .slick-track {
          display: flex;
          align-items: center;
        }

        .ant-carousel .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
