"use client";
import { useState, useRef, useEffect } from "react";
import { Steps, Button, Form } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import AssessmentSelection from "./AssessmentSelection";
import PersonalInformation from "./PersonalInformation";
import ProfessionalDetails from "./ProfessionalDetails";
import OthersInformation from "./OthersInformation";
import AssessmentQuestions from "./AssessmentQuestions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IAssessment, IUser, IUserProfile } from "@/types/types";
import getProfile from "@/utils/getProfile";
import SchedulePage from "./schedule-page/SchedulePage";
import { myFetch } from "@/utils/myFetch";
import { imgUrl } from "@/app/(website)/layout";

const steps = [
  { title: "Assessment", description: "" },
  { title: "Personal Information", description: "" },
  { title: "Professional Details", description: "" },
  { title: "Others Information", description: "" },
  { title: "Quiz", description: "" },
  { title: "Schedule", description: "" },
];

function buildFullDate(
  year: number,
  month: number,
  day: number,
  timeSlot: string
) {
  const startTime = timeSlot.split(" "); // "2:00 PM"

  const AmOrPm = startTime.pop();

  const standerTime = `${startTime[0]} ${AmOrPm}`;

  const dateStr = `${year}-${month}-${day} ${standerTime}`;
  return new Date(dateStr).toISOString();
}

const AssessmentProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAssessment, setSelectedAssessment] = useState<string>("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [form] = Form.useForm();
  const router = useRouter();
  const [allFormValues, setAllFormValues] = useState<Record<string, any>>();
  const [questionValues, setQuestionValues] = useState<Record<string, any>>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const [scheduleData, setSchuduleData] = useState({
    date: new Date().getDate(),
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    time: "9:00 - 9:30 AM",
  });

  function setScheduleDataFunc(data: any) {
    setSchuduleData({
      ...scheduleData,
      ...data,
    });
  }

  const scrollToContent = () => {
    if (window.innerWidth <= 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNext = async () => {
    try {
      scrollToContent();

      let currentValues: Record<string, any> = {};

      if ([1, 2, 3, 4].includes(currentStep)) {
        currentValues = await form.validateFields();
        console.log("Current Values:", currentValues, "step", currentStep);

        setAllFormValues((prev) => ({
          ...prev,
          ...(currentStep === 4 ? { quiz: currentValues } : currentValues),
        }));
      }

      if (showQuestions) {
        setShowQuestions(false);
        setCurrentStep(currentStep + 1);
        return;
      }

      // Final submit
      if (currentStep === steps.length - 1) {
        const finalValues = {
          ...allFormValues,
          startTime: buildFullDate(
            scheduleData.year,
            scheduleData.month,
            scheduleData.date,
            scheduleData.time
          ),
          selectedAssessment,
        };

        const assData = finalValues as any as IUserProfile;
        console.log(assData);

        const asssessmentData = {
          personal_information: {
            name: assData.fullName,
            email: assData.email,
            contact: assData.contactNumber,
            headline: assData.headline,
            address: assData.address,
            overview: assData.overview,
          },
          professional_information: {
            job_title: assData.jobTitle,
            company: assData.industry,
            experience: assData.experience,
            linkedin_url: assData.linkedinProfile,
            skills: assData?.skills?.split(",") || [],
            resume_url: assData.resume,
            work_experience: assData.experience,
          },
          other_information: {
            educational_background: assData.education,
            language: assData.language,
            publications: assData.publications,
            references: assData.references,
            volunter_experience: assData.volunteerExperience,
          },
          qna: Object.keys(assData?.quiz || {}).map((key) => ({
            question: key,
            answer: assData?.quiz?.[key],
          })),
          category: selectedAssessment,
          start_time: finalValues.startTime as any,
        };

        const formdata = new FormData();

        formdata.append(
          "personal_information",
          JSON.stringify(asssessmentData.personal_information)
        );
        formdata.append(
          "professional_information",
          JSON.stringify(asssessmentData.professional_information)
        );
        formdata.append(
          "other_information",
          JSON.stringify(asssessmentData.other_information)
        );
        formdata.append("qna", JSON.stringify(asssessmentData.qna));
        formdata.append("category", selectedAssessment);
        formdata.append("start_time", asssessmentData.start_time);

        const res = myFetch("/assessment", {
          method: "POST",
          body: formdata,
        });

        toast.promise(res, {
          loading: "Submitting Assessment...",
          success: (res) => {
            console.log(res);

            if (res?.success) {
              globalThis.open(res?.data, "_blank");
              return res?.message || "Assessment Submitted Successfully!";
            }
            throw new Error(res?.message || "Error Submitting Assessment");
          },
          error: (err) => err.message || "Error Submitting Assessment",
        });

        return;
      }

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      toast.error("Please answer all the questions!");
    }
  };

  const handleBack = () => {
    if (showQuestions) {
      setShowQuestions(false);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    getProfile().then((user) => {
      const userData = {
        fullName: user?.name!,
        address: user?.street_address!,
        email: user?.email!,
        contactNumber: user?.contact!,
        education: user?.education!,
        experience: user?.proffessional_details?.experience?.toString()!,
        headline: ""!,
        industry: user?.proffessional_details?.industry!,
        jobTitle: user?.proffessional_details?.job_title!,
        language: user?.additional_languages?.toString()!,
        linkedinProfile: user?.proffessional_details?.linkedin_url!,
        previousExperience:
          user?.proffessional_details?.experience?.toString()!,
        publications: ""!,
        resume: user?.proffessional_details?.resume_url
          ? [
              {
                uid: "-1",
                name: "resume.pdf",
                status: "done",
                url: imgUrl + user?.proffessional_details?.resume_url,
              },
            ]
          : [],
        skills: user?.proffessional_details?.skills.toString()!,
        volunteerExperience: ""!,
      };
      form.setFieldsValue(userData);
      setUser(user);
    });
  }, [form]);

  // console.log("scheduleData",scheduleData);

  const handleAssessmentSelect = (assessmentId: string) => {
    setSelectedAssessment(assessmentId);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AssessmentSelection
            selectedAssessment={selectedAssessment}
            handleAssessmentSelect={handleAssessmentSelect}
          />
        );
      case 1:
        return <PersonalInformation form={form} />;
      case 2:
        return <ProfessionalDetails form={form} />;
      case 3:
        return <OthersInformation form={form} />;
      case 4:
        return (
          <AssessmentQuestions
            selectedAssessment={selectedAssessment}
            setQuestionsValues={setQuestionValues}
            currentStep={currentStep}
            form={form}
          />
        );
      case 5:
        return <SchedulePage setSchuduleData={setScheduleDataFunc} />;
      default:
        return (
          <AssessmentSelection
            selectedAssessment={selectedAssessment}
            handleAssessmentSelect={handleAssessmentSelect}
          />
        );
    }
  };

  const getButtonText = () => {
    if (showQuestions) return "Submit";
    if (currentStep === steps.length - 1) return "Submit";
    return "Next";
  };

  const isNextDisabled = () => {
    if (currentStep === 0 && !selectedAssessment) return true;
    return false;
  };

  return (
    <div className="container mx-auto px-4 my-12 flex justify-center items-center flex-col min-h-[calc(100vh-180px)]">
      <div>
        <div
          ref={contentRef}
          className={`${selectedAssessment ? "block" : "hidden"}`}
          style={{
            marginBottom: "40px",
            borderRadius: "10px",
          }}
        >
          <Steps
            current={showQuestions ? 0 : currentStep}
            items={steps.map((step, index) => ({
              title: step.title,
              description: step.description,
              status: showQuestions && index === 0 ? "process" : undefined,
            }))}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <div>{renderStepContent()}</div>
        <div
          className={`${selectedAssessment ? "flex" : "hidden"}`}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Button
            type="text"
            variant="outlined"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
            disabled={currentStep === 0 && !selectedAssessment}
            style={{
              color: "#1A5FA4",
              fontSize: "16px",
              height: "40px",
              borderColor: "#1A5FA426",
            }}
          >
            Back
          </Button>
          <Button
            type="primary"
            onClick={handleNext}
            disabled={isNextDisabled()}
            style={{
              backgroundColor: "#1A5FA4",
              borderColor: "#1A5FA4",
              borderRadius: "8px",
              height: "40px",
              padding: "0 24px",
              fontSize: "16px",
            }}
          >
            {getButtonText()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentProcess;
