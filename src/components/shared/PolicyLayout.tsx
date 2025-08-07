interface policyPageProps {
  content: string;
  title: string;
}
export default function PolicyLayout({ content, title }: policyPageProps) {
  return (
    <div className="min-h-[calc(100vh-130px)] ">
      <div className="container mx-auto p-4  my-12">
        {/* Header */}
        <div className="mb-8  ">
          <h1 className="text-2xl p-6 rounded-lg font-semibold text-[#3D3D3D] mb-2 bg-[#F1F4F9]">
            {title}
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-transparent rounded-lg shadow-sm border border-[#B8CDE3] p-4 md:p-6 text-[#757575] ">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
