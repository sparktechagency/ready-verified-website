"use client";

import { Card, Row, Col, Typography, Button } from "antd";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import ProfessionalDetailsModal from "./ProfessionalDetailsModal";
import { Edit, Edit2 } from "lucide-react";

const { Title, Text } = Typography;

export default function ProfileDetailsPage() {
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [professionalDetailsVisible, setProfessionalDetailsVisible] =
    useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Asadur",
    middleInitial: "Rahaman",
    lastName: "Yead",
    suffix: "-",
    email: "yead@gmail.com",
    cellNumber: "+1 (555) 123-4567",
    streetAddress: "123 Main Street",
    secondaryStreetAddress: "Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    dateOfBirth: "01/15/1990",
    gender: "Male ✓ Female Other",
    raceOrEthnicGroup: "Prefer not to answer",
    education: "Bachelor's Degree",
    highSchoolName: "Central High School",
    highSchoolGraduationYear: "2008",
    additionalLanguages: "Spanish, French",
  });
  const [professionalInfo, setProfessionalInfo] = useState({
    jobTitle: "Senior Developer",
    industry: "Technology",
    experience: "5+ years",
    linkedInProfile: "linkedin.com/in/denniswillie",
    skills: "React, Node.js, TypeScript",
    languages: "English, Spanish",
    resume: "resume.pdf",
  });

  const handlePersonalInfoUpdate = (updatedInfo: any) => {
    setPersonalInfo(updatedInfo);
    setEditProfileVisible(false);
  };

  const handleProfessionalInfoUpdate = (updatedInfo: any) => {
    setProfessionalInfo(updatedInfo);
    setProfessionalDetailsVisible(false);
  };

  return (
    <div className="w-full ">
      {/* Personal Information Section */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Title
            level={4}
            style={{ margin: 0, color: "#1A5FA4", fontWeight: 500 }}
          >
            Personal Information:
          </Title>
          <Button
            type="primary"
            onClick={() => setEditProfileVisible(true)}
            icon={<Edit size={15} />}
            style={{
              backgroundColor: "#FCDFDE",
              borderColor: "#FCDFDE",
              color: "#FC6057",
              height: 40,
            }}
          >
            Edit Profile
          </Button>
        </div>

        <Row gutter={[32, 16]}>
          <Col span={8}>
            <div>
              <Text strong>Full Name</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.fullName}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Middle Initial</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.middleInitial}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Last Name</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.lastName}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Suffix</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.suffix}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Email</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.email}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Cell Number</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.cellNumber}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Street Address</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.streetAddress}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Secondary Street Address</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.secondaryStreetAddress}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>City</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.city}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>State</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.state}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Zip</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.zip}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Country</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.country}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Date of Birth</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.dateOfBirth}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Gender</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.gender}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Race or Ethnic Group</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.raceOrEthnicGroup}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Education</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.education}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>High School Name</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.highSchoolName}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>High School Graduation Year(YYYY)</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.highSchoolGraduationYear}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Additional Languages</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {personalInfo.additionalLanguages}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Professional Details Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Title
            level={4}
            style={{ margin: 0, color: "#1A5FA4", fontWeight: 500 }}
          >
            Professional Details:
          </Title>
          <Button
            type="primary"
            onClick={() => setProfessionalDetailsVisible(true)}
            icon={<Edit size={15} />}
            style={{
              backgroundColor: "#FCDFDE",
              borderColor: "#FCDFDE",
              color: "#FC6057",
              height: 40,
            }}
          >
            Edit
          </Button>
        </div>

        <Row gutter={[32, 16]}>
          <Col span={8}>
            <div>
              <Text strong>Job Title</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.jobTitle}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Industry</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.industry}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Experience</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.experience}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>LinkedIn Profile website</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.linkedInProfile}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Skills</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.skills}
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <Text strong>Languages</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.languages}
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <div>
              <Text strong>Resume</Text>
              <div style={{ color: "#8c8c8c", marginTop: "4px" }}>
                {professionalInfo.resume}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <EditProfileModal
        visible={editProfileVisible}
        onClose={() => setEditProfileVisible(false)}
        initialValues={personalInfo}
      />
      <ProfessionalDetailsModal
        visible={professionalDetailsVisible}
        onClose={() => setProfessionalDetailsVisible(false)}
        initialValues={professionalInfo}
      />
    </div>
  );
}
