import { Input } from "antd";

export const ReadOnlyField = ({
  label,
  value,
  required = false,
  isLink = false,
}: {
  label: string;
  value: string | undefined;
  required?: boolean;
  isLink?: boolean;
}) => (
  <div>
    <label className="block font-semibold mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    {isLink && value ? (
      <a href={value} target="_blank" rel="noopener noreferrer">
        <Input
          value={value}
          readOnly
          className="!bg-[#E8EFF6] rounded-md !border-[#E8EFF6] cursor-pointer text-blue-600 hover:underline"
        />
      </a>
    ) : (
      <Input
        value={value ?? ""}
        readOnly
        className="!bg-[#E8EFF6] rounded-md !border-[#E8EFF6]"
      />
    )}
  </div>
);
