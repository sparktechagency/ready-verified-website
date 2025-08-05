"use client";

import { useState } from "react";
import {
  Card,
  Radio,
  Input,
  Button,
  Form,
  Row,
  Col,
  Typography,
  Space,
  Checkbox,
  message,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SubscriptionCard from "./SubscriptionCard";
import SuccessModal from "./SuccessModal";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function PaymentPage() {
  const [form] = Form.useForm();
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectInvoice, setSelectInvoice] = useState(false);
  const router = useRouter();

  const handlePayment = async (values: any) => {
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      message.success("Payment processed successfully!");
    }, 2000);
  };

  const handleBack = () => {
    // Handle back navigation
    console.log("Navigate back");
    router.push("/assessments/assessment-process");
  };

  const handleClose = () => {
    setShowSuccessModal(false);
    router.push("/assessments/assessment-process/schedule");
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex flex-col justify-center items-center  p-4">
      <div className="max-w-6xl  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full justify-center items-center">
          {/* Left Column - Payment Methods & Summary */}
          <div>
            <div className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <Title level={5} className="mb-4">
                  Select Payment Method
                </Title>
                <Radio.Group
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full"
                >
                  <Space direction="vertical" className="w-full">
                    <div className="flex flex-col space-y-2">
                      <label className="w-full p-3 rounded bg-[#E8EFF6] h-[44px] px-3 flex justify-between items-center cursor-pointer">
                        <Text
                          style={{
                            color: "#ABABAB",
                            fontWeight: 500,
                          }}
                        >
                          Stripe
                        </Text>
                        <Radio value="stripe" />
                      </label>
                      <label className="w-full p-3 rounded bg-[#E8EFF6] h-[44px] px-3 flex justify-between items-center cursor-pointer">
                        <Text
                          style={{
                            color: "#ABABAB",
                            fontWeight: 500,
                          }}
                        >
                          Debit / Credit card
                        </Text>
                        <Radio value="card" />
                      </label>
                    </div>
                  </Space>
                </Radio.Group>
              </div>

              {/* Payment Summary */}
              <Card style={{ backgroundColor: "#E8EFF6", color: "#ABABAB" }}>
                <div className="space-y-4">
                  <div>
                    <Text className="mb-2">You have to pay</Text>
                    <Title
                      style={{
                        color: "#ABABAB",
                        margin: 0,
                        marginTop: 4,
                      }}
                      level={2}
                      className="text-[#ABABAB] mb-0"
                    >
                      $40.00
                    </Title>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectInvoice}
                      onChange={() => setSelectInvoice(!selectInvoice)}
                      className="text-green-600"
                    >
                      <Text
                        style={{
                          color: "#3D3D3D",
                        }}
                        className="text-[#3D3D3D] font-medium"
                      >
                        Payment & Invoice
                      </Text>
                    </Checkbox>
                  </div>

                  <Text
                    style={{
                      color: "#ABABAB",
                      fontSize: 14,
                      marginBottom: 10,
                    }}
                    className=" text-sm block"
                  >
                    We will have rules about all of your payment. You can make
                    sure you made your complete payments happily.
                  </Text>
                </div>
                {/* Subscription Plan */}
                <SubscriptionCard
                  title="Yearly Subscription Plan"
                  description="You will be 100% guaranteed access of all features and payment management tool without any hidden."
                  features={[
                    "All features and payment management tool",
                    "Without any hidden",
                  ]}
                  onChangeClick={() => router.push("/pricing")}
                />
              </Card>
            </div>
          </div>

          {/* Right Column - Payment Form */}

          <div className=" h-fit">
            <Title
              style={{
                fontWeight: 600,
                color: "#3D3D3D",
              }}
              level={3}
              className="mb-2"
            >
              Payment
            </Title>
            <Text
              style={{
                color: "#ABABAB",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              To finalize your subscription, kindly complete your payment using
              a valid credit/debit card number.
            </Text>

            <Form
              style={{
                marginTop: 20,
              }}
              form={form}
              layout="vertical"
              onFinish={handlePayment}
              className="space-y-4 "
            >
              <Form.Item
                label="Card Holder Name"
                name="cardHolderName"
                rules={[
                  {
                    required: true,
                    message: "Please enter card holder name",
                  },
                ]}
              >
                <Input
                  style={{
                    backgroundColor: "#E8EFF6",
                  }}
                  placeholder="ABCD"
                  size="large"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="cardNumber"
                rules={[
                  { required: true, message: "Please enter card number" },
                  {
                    pattern: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                    message: "Please enter valid card number",
                  },
                ]}
              >
                <Input
                  style={{
                    backgroundColor: "#E8EFF6",
                  }}
                  placeholder="4747 4747 4747 4747"
                  size="large"
                  className="rounded-lg"
                  maxLength={19}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim();
                    form.setFieldsValue({ cardNumber: value });
                  }}
                />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Expire Date"
                    name="expireDate"
                    rules={[
                      { required: true, message: "Please enter expire date" },
                      {
                        pattern: /^\d{2}\/\d{2}$/,
                        message: "Please enter valid date (MM/YY)",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        backgroundColor: "#E8EFF6",
                      }}
                      placeholder="MM/YY"
                      size="large"
                      className="rounded-lg"
                      maxLength={5}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length >= 2) {
                          value =
                            value.substring(0, 2) + "/" + value.substring(2, 4);
                        }
                        form.setFieldsValue({ expireDate: value });
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="CVC"
                    name="cvc"
                    rules={[
                      { required: true, message: "Please enter CVC" },
                      {
                        pattern: /^\d{3,4}$/,
                        message: "Please enter valid CVC",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        backgroundColor: "#E8EFF6",
                      }}
                      placeholder="959"
                      size="large"
                      className="rounded-lg"
                      maxLength={4}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
                className="mt-8"
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  style={{
                    backgroundColor: "#2FB236",
                    color: "white",
                    padding: "20px 64px",
                  }}
                >
                  Pay Now
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Back Button */}

        <Button
          type="text"
          variant="outlined"
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          style={{
            color: "#1A5FA4",
            fontSize: "16px",
            height: "40px",
            borderColor: "#1A5FA426",
            marginTop: "20px",
          }}
        >
          Back
        </Button>
      </div>

      {/* Success Modal */}
      <SuccessModal
        visible={showSuccessModal}
        onClose={handleClose}
        title="Payment Successful"
        description="Your payment has been processed successfully."
      />
    </div>
  );
}
