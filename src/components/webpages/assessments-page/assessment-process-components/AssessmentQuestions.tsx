"use client";
import { Form, Radio, Typography, Input } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface AssessmentQuestionsProps {
  form: any;
  selectedAssessment: string;
}

interface Question {
  id: string;
  text: string;
  type: "radio" | "textarea";
  options?: { value: string; label: string }[];
  requiredMessage: string;
}

const questions: Question[] = [
  {
    id: "q1_coachability_key_trait",
    text: "Is coachability a key trait for success?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q2_stubborn_coachable",
    text: "Can stubborn people be coachable?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q3_coachability_measurable",
    text: "Can coachability be measured?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q4_coachability_definition",
    text: "What is coachability?",
    type: "textarea",
    requiredMessage: "Please enter your answer",
  },
  {
    id: "q5_coachability_improve",
    text: "Can coachability be improved over time?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q6_coachability_team_success",
    text: "Does coachability contribute to team success?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q7_coachability_leadership",
    text: "Is coachability important for effective leadership?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    requiredMessage: "Please select an answer",
  },
  {
    id: "q8_coachability_feedback",
    text: "How does receiving feedback relate to coachability?",
    type: "textarea",
    requiredMessage: "Please enter your answer",
  },
  {
    id: "q9_coachability_challenges",
    text: "What are some challenges people face in becoming more coachable?",
    type: "textarea",
    requiredMessage: "Please enter your answer",
  },
];

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({
  form,
  selectedAssessment,
}) => (
  <div className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] mx-auto h-[50vh] overflow-auto px-4">
    <Title level={3} style={{ marginBottom: "30px", color: "#1f2937", borderBottom: "1px solid #96B5D5", paddingBottom: "10px"}}>
      Certificate of Credibility: {selectedAssessment}
    </Title>
    <Form form={form} layout="vertical">
      {questions.map((question, index) => (
        <Form.Item
          key={question.id}
          name={question.id}
          rules={[{ required: true, message: question.requiredMessage }]}
        >
          <div style={{ marginBottom: "24px" }}>
            <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
              Q: {String(index + 1).padStart(2, "0")}
            </Text>
            <Text
              style={{ fontSize: "16px", marginLeft: "8px", color: "#1f2937" }}
            >
              {question.text}
            </Text>
            {question.type === "radio" && question.options ? (
              <Radio.Group style={{ marginTop: "12px", display: "block" }}>
                {question.options.map((option) => (
                  <Radio
                    key={option.value}
                    value={option.value}
                    style={{
                      color: "#52c41a",
                      marginLeft: option.value === "no" ? "20px" : "0",
                    }}
                  >
                    {option.label}
                  </Radio>
                ))}
              </Radio.Group>
            ) : (
              <TextArea
                placeholder="Enter your answer"
                rows={4}
                style={{ marginTop: "12px", backgroundColor: "#E8EFF6" }}
              />
            )}
          </div>
        </Form.Item>
      ))}
    </Form>
  </div>
);

export default AssessmentQuestions;
