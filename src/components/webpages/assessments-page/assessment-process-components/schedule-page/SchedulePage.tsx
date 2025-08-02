"use client";

import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Typography, message } from "antd";
import {
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import SuccessModal from "../payment-page/SuccessModal";
import { useRouter } from "next/navigation";

const { Title } = Typography;

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "9:00 - 9:30 AM", available: true },
  { id: "2", time: "10:00 - 10:30 AM", available: true },
  { id: "3", time: "11:00 - 11:30 AM", available: true },
  { id: "4", time: "12:00 - 12:30 PM", available: true },
  { id: "5", time: "01:00 - 01:30 PM", available: true },
  { id: "6", time: "02:00 - 02:30 PM", available: true },
  { id: "7", time: "03:00 - 03:30 PM", available: true },
  { id: "8", time: "04:00 - 04:30 PM", available: true },
];

export default function SchedulePage() {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState<number | null>(
    today.getDate()
  );
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedTime, setSelectedTime] = useState("9:00 - 9:30 AM");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = 0; i < startDay; i++) {
      days.push({
        day: prevMonthDays - (startDay - 1 - i),
        isCurrentMonth: false,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true });
    }

    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ day, isCurrentMonth: false });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleMonthChange = (direction: "prev" | "next") => {
    setSelectedDate(null);
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      message.error("Please select both date and time");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      console.log("selectedDate:", selectedDate, "selectedTime:", selectedTime);
      message.success("Schedule booked successfully!");
    }, 1500);
  };

  const handleClose = () => {
    setShowSuccessModal(false);
    router.push("/assessments");
  };

  return (
    <div className="min-h-[calc(100vh-86px)] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 items-center">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border">
                  <div className="w-full h-6 bg-red-500 rounded-t-lg flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-white rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <CalendarOutlined className="text-blue-600 text-2xl" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <ClockCircleOutlined className="text-white text-sm" />
                </div>
              </div>

              <Title level={2} className="mb-0">
                Schedule <span className="text-green-500">Date & Time</span>
              </Title>
            </div>
          </div>

          <div>
            <Card className="shadow-sm">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Button
                    type="text"
                    icon={<LeftOutlined />}
                    onClick={() => handleMonthChange("prev")}
                    className="text-gray-600 hover:text-blue-600"
                  />
                  <Title level={4} className="mb-0 text-blue-600">
                    {`${months[currentMonth]} ${currentYear}`}
                  </Title>
                  <Button
                    type="text"
                    icon={<RightOutlined />}
                    onClick={() => handleMonthChange("next")}
                    className="text-gray-600 hover:text-blue-600"
                  />
                </div>

                <div className="grid grid-cols-7 gap-2 mb-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="text-center text-gray-600 font-medium py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((dayObj, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        dayObj.isCurrentMonth && setSelectedDate(dayObj.day)
                      }
                      className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
                        ${
                          !dayObj.isCurrentMonth
                            ? "text-gray-300 cursor-not-allowed"
                            : selectedDate === dayObj.day
                            ? "bg-[#1A5FA4] text-white shadow-md"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }
                      `}
                      disabled={!dayObj.isCurrentMonth}
                    >
                      {dayObj.day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Title level={5} className="mb-4 text-blue-600">
                  Schedule Time
                </Title>
                <Row gutter={[12, 12]}>
                  {timeSlots.map((slot) => (
                    <Col key={slot.id} xs={24} sm={12}>
                      <Button
                        type="default"
                        size="large"
                        onClick={() => {
                          setSelectedTime(slot.time);
                          //   console.log("Selected time:", slot.time);
                        }}
                        className="w-full h-12 rounded-lg font-medium transition-all duration-200"
                        style={
                          selectedTime.trim() === slot.time.trim()
                            ? {
                                backgroundColor: "#1A5FA4",
                                color: "white",
                                borderColor: "#1A5FA4",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                              }
                            : {
                                backgroundColor: "#1A5FA426",
                                color: "#4b5563",
                                borderColor: "#e5e7eb",
                              }
                        }
                      >
                        {slot.time}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex justify-end items-center mt-8">
          {/* <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
            style={{
              color: "#1A5FA4",
              fontSize: "16px",
              height: "40px",
              borderColor: "#1A5FA426",
            }}
          >
            Back
          </Button> */}

          <Button
            style={{
              backgroundColor: "#1A5FA4",
              borderColor: "#1A5FA4",
              borderRadius: "8px",
              height: "40px",
              padding: "0 24px",
              fontSize: "16px",
            }}
            type="primary"
            size="large"
            loading={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <SuccessModal
        visible={showSuccessModal}
        onClose={handleClose}
        title="Schedule Confirmed"
        description={`Your appointment has been scheduled for ${months[currentMonth]} ${selectedDate}, ${selectedTime}. After admin approval, the Zoom link will be emailed to you within 48 hours. Please join at the scheduled date and time.`}
      />
    </div>
  );
}
