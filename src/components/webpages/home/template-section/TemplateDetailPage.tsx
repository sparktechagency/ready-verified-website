"use client";
import { ArrowLeft, Download, Star, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { Badge, Button, Card } from "antd";
import { imgUrl } from "@/app/(website)/layout";
import { myFetch } from "@/utils/myFetch";
import { toast } from "sonner";

interface TemplateDetailPageProps {
  template: any;
}
export default function TemplateDetailPage({
  template,
}: TemplateDetailPageProps) {
  const router = useRouter();
  //   const template = templatesData.find((t) => t._id === params.id);
  const buyTemplate = async () => {
    const res = await myFetch("/order", {
      method: "POST",
      body: {
        template: template._id,
      },
    });

    if (res.success) {
      globalThis.location.href = res.data;
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <header className=" ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors "
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Templates</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Template Preview */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src={
                  template?.thumbnail
                    ? imgUrl + template?.thumbnail
                    : "/placeholder.svg"
                }
                alt={template?.title}
                width={600}
                height={800}
                className="w-full h-[calc(100vh-170px)] object-cover object-top rounded-lg border border-border/50 shadow-lg"
              />
              <div className="absolute top-4 right-4">
                {template.isPremium && (
                  <Badge className="bg-primary text-primary-foreground">
                    Premium
                  </Badge>
                )}
              </div>
            </div>

            {/* <div className="flex items-center space-x-4">
              <Button className="flex items-center space-x-2 bg-transparent">
                <Download className="w-4 h-4" />
                <span>Preview PDF</span>
              </Button>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 (124 reviews)</span>
              </div>
            </div> */}
          </div>

          {/* Template Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="!bg-[#1A5FA4] !text-white !px-2 !py-1 !rounded-md">
                  {template?.type?.replace("-", " ").toUpperCase()}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Updated {new Date(template?.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-4 text-balance">
                {template?.title}
              </h1>

              <p className="text-lg text-gray-700 mb-6 text-pretty">
                {template?.description}
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-primary">
                  ${template?.price}
                </span>
                <span className="text-muted-foreground">One-time purchase</span>
              </div>

              <div className="flex space-x-3">
                <Button
                  size="large"
                  onClick={buyTemplate}
                  className="flex-1 !h-[40px] !bg-[#1A5FA4] !text-white !border-none"
                >
                  Buy Now
                </Button>
                {/* <Button size="large">Add to Cart</Button> */}
              </div>
            </div>

            {/* Features */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-4">What's included:</h3>
              <ul className="space-y-3">
                {template?.features?.map((feature: any, index: any) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="my-4">
                <h3 className="font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag: any) => (
                    <Badge
                      className="!bg-black !text-white !px-2 !py-1 !rounded-md"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {/* Additional Info */}

              <div className="py-4">
                <h3 className="font-semibold mb-4">Template Details:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Format:</span>
                    <p className="font-medium">PDF, DOCX</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pages:</span>
                    <p className="font-medium">Multiple layouts</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">License:</span>
                    <p className="font-medium">Commercial use</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Support:</span>
                    <p className="font-medium">Email support</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
