"use client";

import { useEffect, useState } from "react";
import { Layout, Select, Table, Button, Typography, Drawer, Grid } from "antd";
import { FilterOutlined, EyeOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import CandidateDetailsModal from "./CandidateDetailsModal";
import FilterSidebar from "./FilterSidebar";
import { Candidate } from "@/data/CandidatesData";
import { FetchResponse, myFetch } from "@/utils/myFetch";
import { ICandidate, JOB_LEVEL } from "@/types/assignment.type";

const { Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

export default function AdvanceSearchPage() {
  const { lg } = Grid.useBreakpoint();
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [pagination, setPagination] = useState();
  const searchParam = useSearchParams();
  const search = searchParam.get("search");
  const [searchValue, setSearchValue] = useState(search || "");

  const [filters, setFilters] = useState({
    managementLevel: "All",
    department: "All",
  });

  // console.log(selectedCandidate);
  

  useEffect(() => {
    myFetch(`/assessment?${searchValue?`searchTerm=${searchValue}`:""}&${filters.managementLevel!=="All"?`level=${filters.managementLevel}`:""}`,{
      cache:"no-store"
    }).then((res) => {
      if(res?.data){
        setPagination(res?.pagination as any);
        const data:ICandidate[] = res?.data;;
        
        const candidates = data.map((candidate) => {
          const result:Candidate = {
            address: candidate?.personal_information?.address,
            key: candidate._id,
            name: candidate?.personal_information?.name,
            level: candidate?.level,
            skill: candidate?.professional_information?.skills[0],
            category: candidate?.category?.title,
            overview: candidate?.personal_information?.overview,
            skills: candidate?.professional_information?.skills,
            personal_information: candidate?.personal_information,
            professional_information: candidate?.professional_information,
          }
          return result;
        });

        setFilteredCandidates(candidates);

      }
    })
  },[filters,searchValue]);
  const router = useRouter();

  const managementLevels = Object.values(JOB_LEVEL)
  const departments = [
    "All",
    "C-Level",
    "VP-Level",
    "Director",
    "Manager",
    "Non-Manager",
  ];

  const handleFilterChange = (type: string, value: string) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
  };

  const showCandidateDetails = (candidate: Candidate) => {
    // console.log("Candidate details:", candidate);
    
    setSelectedCandidate(candidate);
    setModalVisible(true);
  };

  const columns = [
    {
      title: "Candidate Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Candidate) => (
        
        <Button
          type="link"
          onClick={() => showCandidateDetails(record)}
          style={{ color: "#ff4d4f", padding: 0 }}
        >
          Details
        </Button>
      ),
    },
  ];


  

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-start bg-[#FFFFFF]">
      <div className="container mx-auto flex  gap-4 lg:gap-8 my-12">
        {/* Mobile Filter Drawer */}
        <Drawer
          title="Filters"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={300}
          className="lg:hidden"
        >
          <FilterSidebar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filters={filters}
            handleFilterChange={handleFilterChange}
            managementLevels={managementLevels}
            departments={departments}
          />
        </Drawer>

        {/* Desktop Sidebar */}
        <Sider
          width={360}
          style={{ backgroundColor: "#F1F4F9" }}
          className="hidden lg:block"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <FilterSidebar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filters={filters}
            handleFilterChange={handleFilterChange}
            managementLevels={managementLevels}
            departments={departments}
          />
        </Sider>

        <Content
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ marginBottom: "16px" }}
            >
              Filters
            </Button>
          </div>

          <Table
            className="custom-table"
            style={{
              width: "100%",
            }}
            columns={columns}
            dataSource={filteredCandidates}
            pagination={{
              pageSize: 10,
              total:(pagination as any)?.total,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total} items per page`,
            }}
            scroll={{ x: lg ? 800 : 400 }}
            rowClassName={(_, index) => (index % 2 === 0 ? "even-row" : "")}
          />
        </Content>

        {/* Candidate Details Modal */}
        <CandidateDetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedCandidate={selectedCandidate}
        />
      </div>
    </div>
  );
}
