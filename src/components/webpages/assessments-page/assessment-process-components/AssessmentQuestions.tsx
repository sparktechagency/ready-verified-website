"use client";
import { Form, Radio, Typography, Input } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface AssessmentQuestionsProps {
  form: any;
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({ form }) => (
  <div style={{ padding: "20px 0" }}>
    <Title level={3} style={{ marginBottom: "30px", color: "#1f2937" }}>
      Certificate of Credibility: Coachability
    </Title>
    <Form form={form} layout="vertical">
      <div style={{ marginBottom: "24px" }}>
        <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
          Q: 01
        </Text>
        <Text style={{ fontSize: "16px", marginLeft: "8px", color: "#1f2937" }}>
          Is coachability a key trait for success?
        </Text>
        <Radio.Group style={{ marginTop: "12px", display: "block" }}>
          <Radio value="yes" style={{ color: "#52c41a" }}>
            Yes
          </Radio>
          <Radio value="no" style={{ color: "#52c41a", marginLeft: "20px" }}>
            No
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
          Q: 02
        </Text>
        <Text style={{ fontSize: "16px", marginLeft: "8px", color: "#1f2937" }}>
          Can stubborn people be coachable?
        </Text>
        <Radio.Group style={{ marginTop: "12px", display: "block" }}>
          <Radio value="yes" style={{ color: "#52c41a" }}>
            Yes
          </Radio>
          <Radio value="no" style={{ color: "#52c41a", marginLeft: "20px" }}>
            No
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
          Q: 03
        </Text>
        <Text style={{ fontSize: "16px", marginLeft: "8px", color: "#1f2937" }}>
          Can coachability be measured?
        </Text>
        <Radio.Group style={{ marginTop: "12px", display: "block" }}>
          <Radio value="yes" style={{ color: "#52c41a" }}>
            Yes
          </Radio>
          <Radio value="no" style={{ color: "#52c41a", marginLeft: "20px" }}>
            No
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
          Q: 04
        </Text>
        <Text style={{ fontSize: "16px", marginLeft: "8px", color: "#1f2937" }}>
          What is coachability?
        </Text>
        <TextArea
          placeholder="Enter your answer"
          rows={4}
          style={{ marginTop: "12px", backgroundColor: "#E8EFF6" }}
        />
      </div>
    </Form>
  </div>
);

export default AssessmentQuestions;
