"use client";

import { Button } from "antd";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import ProfessionalDetailsModal from "./ProfessionalDetailsModal";
import { Edit } from "lucide-react";
import { imgUrl } from "@/app/(website)/layout";
import { ReadOnlyField } from "./ReadOnlyField";
import { IUser } from "@/types/types";

export default function ProfileDetailsPage({ user }: { user: IUser | null }) {
  // split full name into first, middle, last
  const nameParts = user?.name?.trim()?.split(" ") || [];
  const firstName = nameParts[0] || "";
  const middleInitial = nameParts.length === 3 ? nameParts[1] : "";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

  console.log(user);

  const personalInfo = {
    firstName,
    middleInitial,
    lastName,
    suffix: user?.suffix,
    email: user?.email,
    contact: user?.contact,
    street_address: user?.street_address,
    secondary_street_address: user?.secondary_street_address,
    city: user?.city,
    state: user?.state,
    zip_code: user?.zip_code,
    country: user?.country,
    date_of_birth: new Date(user?.date_of_birth!),
    gender: user?.gender,
    ethic: user?.ethic,
    education: user?.education,
    school_name: user?.school_name,
    graduation_year: user?.graduation_year,
    additional_languages: user?.additional_languages,
  };

  const professionalInfo = {
    jobTitle: user?.proffessional_details?.job_title,
    industry: user?.proffessional_details?.industry,
    experience: user?.proffessional_details?.experience?.toString(),
    linkedInProfile: user?.proffessional_details?.linkedin_url,
    skills: user?.proffessional_details?.skills?.join(", "),
    languages: user?.proffessional_details?.languages?.join(", "),
    resume: imgUrl + user?.proffessional_details?.resume_url,
  };

  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [professionalDetailsVisible, setProfessionalDetailsVisible] =
    useState(false);

  // Reusable ReadOnlyField

  // Grid wrapper for fields
  const GridFields = ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {children}
    </div>
  );

  // Section wrapper with title + edit button
  const Section = ({
    title,
    onEdit,
    children,
  }: {
    title: string;
    onEdit: () => void;
    children: React.ReactNode;
  }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="m-0 text-[#1A5FA4] font-semibold text-lg md:text-2xl">
          {title}
        </h1>
        <Button
          type="primary"
          onClick={onEdit}
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
      {children}
    </div>
  );

  return (
    <div className="w-full">
      {/* Header / Customer Info */}
      <div className="px-4 py-4 bg-[#487FB6] rounded-sm text-[#F1F1F1] text-sm flex items-center justify-between mb-6">
        <h4>
          Customer ID:{" "}
          <span className="text-[#FFC400] font-bold uppercase">
            #{user?._id?.slice(-6) ?? "123456"}
          </span>
        </h4>
        <p>
          Last update:{" "}
          {new Date(user?.updatedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Personal Information Section */}
      <Section
        title="Personal Information:"
        onEdit={() => setEditProfileVisible(true)}
      >
        <GridFields>
          <ReadOnlyField
            label="First Name"
            value={personalInfo?.firstName}
            required
          />
          <ReadOnlyField
            label="Middle Initial"
            value={personalInfo?.middleInitial}
          />
          <ReadOnlyField
            label="Last Name"
            value={personalInfo?.lastName}
            required
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField label="Suffix" value={personalInfo?.suffix} />
          <ReadOnlyField label="Email" value={personalInfo?.email} required />
          <ReadOnlyField
            label="Cell Number"
            value={personalInfo?.contact}
            required
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField
            label="Street Address"
            value={personalInfo?.street_address}
            required
          />
          <ReadOnlyField
            label="Secondary Street Address"
            value={personalInfo?.secondary_street_address}
          />
          <ReadOnlyField label="City" value={personalInfo?.city} required />
        </GridFields>

        <GridFields>
          <ReadOnlyField label="State" value={personalInfo?.state} required />
          <ReadOnlyField
            label="zip_code"
            value={personalInfo?.zip_code}
            required
          />
          <ReadOnlyField
            label="Country"
            value={personalInfo?.country}
            required
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField
            label="Date of Birth"
            value={new Date(personalInfo?.date_of_birth!).toLocaleDateString()}
            required
          />
          <ReadOnlyField label="Gender" value={personalInfo?.gender} required />
          <ReadOnlyField
            label="Race or Ethnic Group"
            value={personalInfo?.ethic}
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField label="Education" value={personalInfo?.education} />
          <ReadOnlyField
            label="High School Name"
            value={personalInfo?.school_name}
          />
          <ReadOnlyField
            label="High School Graduation Year(YYYY)"
            value={personalInfo?.graduation_year}
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField
            label="Additional Languages"
            value={personalInfo?.additional_languages?.toString()}
          />
        </GridFields>
      </Section>

      {/* Professional Details Section */}
      <Section
        title="Professional Details:"
        onEdit={() => setProfessionalDetailsVisible(true)}
      >
        <GridFields>
          <ReadOnlyField
            label="Job Title"
            value={professionalInfo?.jobTitle}
            required
          />
          <ReadOnlyField
            label="Industry"
            value={professionalInfo?.industry}
            required
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField
            label="Experience"
            value={professionalInfo?.experience}
            required
          />
          <ReadOnlyField
            isLink={true}
            label="LinkedIn Profile website"
            value={professionalInfo?.linkedInProfile}
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField label="Skills" value={professionalInfo?.skills} />
          <ReadOnlyField
            label="Languages"
            value={professionalInfo?.languages}
          />
        </GridFields>

        <GridFields>
          <ReadOnlyField
            isLink={user?.proffessional_details?.resume_url ? true : false}
            label="Resume"
            value={
              user?.proffessional_details?.resume_url
                ? professionalInfo?.resume
                : "N/A"
            }
          />
        </GridFields>
      </Section>

      {/* Modals */}
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
