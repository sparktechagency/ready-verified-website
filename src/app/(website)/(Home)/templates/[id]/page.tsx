import TemplateDetailPage from "@/components/webpages/home/template-section/TemplateDetailPage";
import { myFetch } from "@/utils/myFetch";
import React from "react";

interface TemplateDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function page({ params }: TemplateDetailPageProps) {
  const { id } = await params;
  const { data: template } = await myFetch(`/template/${id}`);
  // console.log(template);
  return <TemplateDetailPage template={template} />;
}
