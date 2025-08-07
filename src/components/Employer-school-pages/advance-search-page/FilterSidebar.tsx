"use client";

import { Card, Select, Input, Typography, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

interface FilterSidebarProps {
  filters: any;
  handleFilterChange: any;
  managementLevels: any;
  departments: any;
  searchValue: string;
  setSearchValue: any;
}

const FilterSidebar = ({
  filters,
  handleFilterChange,
  managementLevels,
  departments,
  searchValue,
  setSearchValue,
}: FilterSidebarProps) => (
  <div className="h-90vh ">
    <Card
      title={
        <Space>
          <FilterOutlined />
          <Text strong>Filter</Text>
        </Space>
      }
      style={{
        marginBottom: "16px",
        backgroundColor: "transparent",
        height: "75vh",
      }}
    >
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter Filter Name"
        style={{
          marginBottom: "16px",
          backgroundColor: "#B8CDE333",
          height: 48,
        }}
      />

      <div style={{ marginBottom: "20px" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Text strong style={{ color: "#1890ff" }}>
            <FilterOutlined /> Management Level
          </Text>
          <Select
            value={filters.managementLevel}
            onChange={(value) => handleFilterChange("managementLevel", value)}
            style={{ width: "100%", backgroundColor: "#F6F6F6", height: 48 }}
          >
            {managementLevels.map((level: any) => (
              <Option key={level} value={level}>
                {level}
              </Option>
            ))}
          </Select>
        </Space>
      </div>

      <div>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Text strong style={{ color: "#1890ff" }}>
            <FilterOutlined /> Departments & Job Functions
          </Text>
          <Select
            value={filters.department}
            onChange={(value) => handleFilterChange("department", value)}
            style={{ width: "100%", height: 48 }}
          >
            {departments.map((dept: any) => (
              <Option key={dept} value={dept}>
                {dept}
              </Option>
            ))}
          </Select>
        </Space>
      </div>
    </Card>
  </div>
);

export default FilterSidebar;
