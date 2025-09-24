"use client";

import { useState } from "react";
import { Modal, Typography, Space, Tag, Button } from "antd";
import { FaFilePdf } from "react-icons/fa";
import { imgUrl } from "@/helpers/constants";

const { Title, Text, Paragraph } = Typography;

interface candidateModalProps {
  modalVisible: boolean;
  setModalVisible: Function;
  selectedCandidate: any;
}

export default function CandidateDetailsModal({
  modalVisible,
  setModalVisible,
  selectedCandidate,
}: candidateModalProps) {
  console.log(selectedCandidate);
  
  return (
    <Modal
      centered
      title="Candidate Details"
      open={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={null}
      width={800}
      style={{ top: 20 }}
    >
      {selectedCandidate && (
        <div>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <div className="flex justify-between">
              <div>
                <Title level={3} style={{ marginBottom: "8px" }}>
                  Name
                </Title>
                <Text style={{ fontSize: "16px", color: "#999" }}>
                  {selectedCandidate?.name}
                </Text>
              </div>
              <div>
                   <div>
                <Title level={3} style={{ marginBottom: "8px" }}>
                Download Resume
              </Title>
              <Text style={{ color: "#999" }}>
               <div className="text-red-500 cursor-pointer" onClick={()=>window.open(selectedCandidate?.professional_information?.resume_url?imgUrl+selectedCandidate?.professional_information?.resume_url:"")}>
                 <FaFilePdf size={30} />
               </div>
              </Text>
              </div>
              </div>
            </div>

            <div>
              <Title level={3} style={{ marginBottom: "8px" }}>
                Level
              </Title>
              <Text style={{ fontSize: "16px", color: "#999" }}>
                {selectedCandidate?.level}
              </Text>
            </div>

            <div>
              <Title level={3} style={{ marginBottom: "16px" }}>
                Overview
              </Title>
              <Paragraph style={{ color: "#999", lineHeight: "1.6" }}>
                {selectedCandidate?.overview}
              </Paragraph>
            </div>

            <div>
              <Title level={3} style={{ marginBottom: "16px" }}>
                Skills
              </Title>
              <Space wrap>
                {selectedCandidate.skills.map((skill: any, index: any) => (
                  <Tag key={index} style={{ padding: "4px 8px" }}>
                    {skill}
                  </Tag>
                ))}
              </Space>
            </div>

            <div className="flex justify-between">
              <div>
                <Title level={3} style={{ marginBottom: "8px" }}>
                Ready Verified
              </Title>
              <Text style={{ color: "#999" }}>
                📍 {selectedCandidate.address}
              </Text>
              </div>
           
            </div>
          </Space>
        </div>
      )}
    </Modal>
  );
}
