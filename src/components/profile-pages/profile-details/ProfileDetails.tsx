"use client";

import { Card, Row, Col, Typography, Button, Input } from "antd";
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
    fullName: "Dennis",
    middleInitial: "E",
    lastName: "Willie",
    suffix: "",
    email: "dennis_willie@gmail.com",
    cellNumber: "+1 9864752060",
    streetAddress: "Secondary Street Address",
    secondaryStreetAddress: "",
    city: "San Jose",
    state: "California",
    zip: "95132",
    country: "United States",
    dateOfBirth: "",
    gender: "Male",
    raceOrEthnicGroup: "Caucasian/White",
    education: "College 1",
    highSchoolName: "Independence",
    highSchoolGraduationYear: "2009",
    additionalLanguages: "College 1",
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
  const labelStyle = {
    display: "block",
    fontWeight: 600,
    marginBottom: "4px",
  };

  const inputStyle = {
    backgroundColor: "#E8EFF6",
    borderRadius: "6px",
    borderColor: "#E8EFF6",
  };
  interface ReadOnlyFieldProps {
    label: string;
    value: string;
    required?: boolean;
  }

  const ReadOnlyField = ({
    label,
    value,
    required = false,
  }: ReadOnlyFieldProps) => (
    <div>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <Input value={value} readOnly style={inputStyle} />
    </div>
  );

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
          <h1 className="m-0 text-[#1A5FA4] font-semibold text-lg md:text-[24px]">
            Personal Information:
          </h1>
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
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Full Name"
              value={personalInfo.fullName}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Middle Initial"
              value={personalInfo.middleInitial}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Last Name"
              value={personalInfo.lastName}
              required
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Suffix" value={personalInfo.suffix} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Email" value={personalInfo.email} required />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Cell Number"
              value={personalInfo.cellNumber}
              required
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Street Address"
              value={personalInfo.streetAddress}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Secondary Street Address"
              value={personalInfo.secondaryStreetAddress}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="City" value={personalInfo.city} required />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="State" value={personalInfo.state} required />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Zip" value={personalInfo.zip} required />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Country"
              value={personalInfo.country}
              required
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Date of Birth"
              value={personalInfo.dateOfBirth}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Gender"
              value={personalInfo.gender}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Race or Ethnic Group"
              value={personalInfo.raceOrEthnicGroup}
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Education" value={personalInfo.education} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="High School Name"
              value={personalInfo.highSchoolName}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="High School Graduation Year(YYYY)"
              value={personalInfo.highSchoolGraduationYear}
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Additional Languages"
              value={personalInfo.additionalLanguages}
            />
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
          <h1 className="m-0 text-[#1A5FA4] font-semibold text-lg md:text-[24px]">
            Professional Details:
          </h1>
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
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Job Title"
              value={professionalInfo.jobTitle}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Industry"
              value={professionalInfo.industry}
              required
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Experience"
              value={professionalInfo.experience}
              required
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="LinkedIn Profile website"
              value={professionalInfo.linkedInProfile}
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Skills" value={professionalInfo.skills} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField
              label="Languages"
              value={professionalInfo.languages}
            />
          </Col>
        </Row>

        <Row gutter={[32, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <ReadOnlyField label="Resume" value={professionalInfo.resume} />
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
