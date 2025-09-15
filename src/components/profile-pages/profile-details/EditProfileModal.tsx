"use client";

import { Modal, Form, Input, Select, Radio, Button, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import dayjs from "dayjs";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";
import { revalidateTags } from "@/helpers/revalidateHelper";

const { Option } = Select;

interface EditProfileModalProps {
  visible: boolean;
  onClose: () => void;
  initialValues: any;
}

export default function EditProfileModal({
  visible,
  onClose,
  initialValues,
}: EditProfileModalProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue({
        ...initialValues,
        date_of_birth: initialValues.date_of_birth
          ? dayjs(initialValues.date_of_birth)
          : null,
        name: [
          initialValues.firstName,
          initialValues.middleInitial,
          initialValues.lastName,
        ]
          .filter(Boolean)
          .join(" "),
      });
    }
  }, [visible, initialValues, form]);

  const handleSave =() => {
    form.validateFields().then(async(values) => {
      const formatted = {
        ...values,
        date_of_birth: values.date_of_birth
          ? values.date_of_birth.toDate()
          : null,
      };

      const res = myFetch("/user/profile",{
        method:"PATCH",
        body:formatted,
      })

      toast.promise(res,{
        loading:"Updating Profile....",
        success:(res)=>{
          if(res.success){
            revalidateTags(["user-profile"])
            return res.message
          }

          throw new Error("Update profile faild")
        },
        error:(err)=>{
          return err.message
        }
      })
      

      onClose();
    });


  };

  return (
    <Modal
      title={
        <div className="flex items-center justify-between">
          <span>Edit Profile</span>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      closable={false}
      centered
    >
      <Form form={form} layout="vertical" style={{ marginTop: "24px" }}>
        {/* Name */}
        <Form.Item label="Full Name*" name="name">
          <Input placeholder="Dennis Willie" />
        </Form.Item>

        {/* Contact & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Email*" name="email">
            <Input placeholder="dennis.willie@example.com" />
          </Form.Item>
          <Form.Item label="Contact Number*" name="contact">
            <Input placeholder="+1 (555) 123-4567" value={initialValues.contact} />
          </Form.Item>
        </div>

        {/* Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Street Address*" name="street_address">
            <Input placeholder="123 Main Street" value={initialValues.street_address} />
          </Form.Item>
          <Form.Item
            label="Secondary Street Address"
            name="secondary_street_address"
          >
            <Input placeholder="Apt, Suite, etc." />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Form.Item label="City*" name="city">
            <Input placeholder="New York" />
          </Form.Item>
          <Form.Item label="State*" name="state">
            <Input placeholder="NY" />
          </Form.Item>
          <Form.Item label="Zip Code*" name="zip_code">
            <Input placeholder="10001" />
          </Form.Item>
          <Form.Item label="Country*" name="country">
            <Input placeholder="Bangladesh" />
          </Form.Item>
        </div>

        {/* DOB & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Date of Birth*" name="date_of_birth">
            <DatePicker format="MM/DD/YYYY" className="w-full" />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        {/* Ethnic Group & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Race or Ethnic Group" name="ethic">
            <Input placeholder="Optional/Prefer not to answer" />
          </Form.Item>
          <Form.Item label="Education" name="education">
            <Select placeholder="Select Education Level">
              <Option value="high-school">High School</Option>
              <Option value="bachelors">Bachelor's Degree</Option>
              <Option value="masters">Master's Degree</Option>
              <Option value="phd">PhD</Option>
            </Select>
          </Form.Item>
        </div>

        {/* School Name & Graduation Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="School Name" name="school_name">
            <Input placeholder="Central High School" />
          </Form.Item>
          <Form.Item label="Graduation Year (YYYY)" name="graduation_year">
            <Input placeholder="2008" />
          </Form.Item>
        </div>

        {/* Additional Languages */}
        <Form.Item label="Additional Languages" name="additional_languages">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add languages"
          />
        </Form.Item>

        {/* Save Button */}
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
