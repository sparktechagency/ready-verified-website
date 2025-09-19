"use client";

import { Modal, Form, Input, Select, Button, Upload, Row, Col } from "antd";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { myFetch } from "@/utils/myFetch";
import { revalidateTags } from "@/helpers/revalidateHelper";
import { toast } from "sonner";

const { Option } = Select;

interface ProfessionalDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  initialValues: any;
}

export default function ProfessionalDetailsModal({
  visible,
  onClose,
  initialValues,
}: ProfessionalDetailsModalProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(initialValues);
    }
  }, [visible, initialValues, form]);

  const handleSave = () => {
    
    form.validateFields().then(async(values) => {
      const formData = new FormData()
      formData.append('job_title', values.jobTitle)
      formData.append('industry', values.industry)
      formData.append('experience', values.experience)
      formData.append('doc', values.resume.file.originFileObj)
      formData.append('linkedin_url', values.linkedInProfile)
      formData.append('skills', values.skills)
      formData.append('languages', values.languages)

      const res =myFetch('/user/professional-details', {
        method:"PATCH",
        body: formData,
      })

      toast.promise(res, {
        loading:"Updating Professional Details....",
        success:(res)=>{
          if(res.success){
            
            revalidateTags(["user-profile"])
            onClose();
            return res.message
          }

          console.log(res);
          

          throw new Error("Update profile faild")
        },
        error:(err:any)=>{
          return err.message
        }
      })

      
      
    });
  };

  return (
    <Modal
      title={
        <div className="flex items-center justify-between">
          <span>Professional Details</span>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      closable={false}
      centered
    >
      <Form form={form} layout="vertical" style={{ marginTop: "24px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Job Title*" name="jobTitle">
              <Input placeholder="Enter job title" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Industry*" name="industry">
              <Input placeholder="Enter industry" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Experience*" name="experience">
              <Select placeholder="Select experience">
                <Option value="0">0 years</Option>
                <Option value="1">1 year</Option>
                <Option value="2">2 years</Option>
                <Option value="3">3 years</Option>
                <Option value="5+">5+ years</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="LinkedIn Profile website" name="linkedInProfile">
              <Input placeholder="Enter URL here" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Skills" name="skills">
              <Input placeholder="Enter skills (comma separated)" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Languages" name="languages">
              <Input placeholder="Enter languages (comma separated)" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Resume*" name="resume">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Resume</Button>
          </Upload>
        </Form.Item>

        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <Button
            type="primary"
            onClick={handleSave}
            style={{ width: "180px", backgroundColor: "#1A5FA4", height: 40 }}
          >
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
