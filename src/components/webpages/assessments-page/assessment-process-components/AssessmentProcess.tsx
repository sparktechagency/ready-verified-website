"use client";
import { useState, useRef } from "react";
import { Steps, Button, Form } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import AssessmentSelection from "./AssessmentSelection";
import PersonalInformation from "./PersonalInformation";
import ProfessionalDetails from "./ProfessionalDetails";
import OthersInformation from "./OthersInformation";
import AssessmentQuestions from "./AssessmentQuestions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const steps = [
  { title: "Assessment", description: "" },
  { title: "Personal Information", description: "" },
  { title: "Professional Details", description: "" },
  { title: "Others Information", description: "" },
  { title: "Quiz", description: "" },
];

const AssessmentProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAssessment, setSelectedAssessment] = useState<string>("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const [allFormValues, setAllFormValues] = useState<Record<string, any>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (window.innerWidth <= 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNext = async () => {
    try {
      scrollToContent();
      // Validate and get current step's form values
      const currentValues = await form.validateFields();
      // Merge current step's values with previous values
      setAllFormValues((prev) => ({
        ...prev,
        ...currentValues,
      }));

      if (showQuestions) {
        setShowQuestions(false);
        setCurrentStep(currentStep + 1);
        return;
      }

      if (currentStep === steps.length - 1) {
        const finalValues = {
          ...allFormValues,
          ...{
            quiz: currentValues,
          },
          selectedAssessment,
        };
        console.log("All Form Values:", finalValues);
        // navigate("/results", { state: { formData: finalValues } })
        router.push("/assessments/assessment-process/payment");
        return;
      }

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      // console.log("Form validation failed: ", error);
      toast.error(`Please answer all the questions! `);
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
            form={form}
          />
        );
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
