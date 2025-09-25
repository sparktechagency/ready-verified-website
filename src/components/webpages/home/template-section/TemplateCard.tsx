import Link from "next/link";
import Image from "next/image";
import { Badge, Card } from "antd";
import { imgUrl } from "@/helpers/constants";

interface TemplateCardProps {
  template: any;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link key={template._id} href={`/templates/${template?._id}`}>
      <Card className="group cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-lg bg-card/50 backdrop-blur-sm">
        <div className="p-0">
          <div className="relative overflow-hidden rounded-t-lg bg-[#F1F4F9]">
            <Image
              src={
                template?.thumbnail
                  ? imgUrl + template?.thumbnail
                  : "/placeholder.svg"
              }
              alt={template.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover object-top transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              <Badge className="bg-black !text-white !px-2 !py-1 rounded-md">
                Premium
              </Badge>
            </div>
            <div className="absolute top-3 left-3">
              <Badge className="!bg-background/80 backdrop-blur-sm  !text-black !px-2 !py-1 rounded-md">
                {template.type.replace("-", " ").toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-balance group-hover:text-primary transition-colors">
                {template.title}
              </h3>
              <span className="text-2xl font-bold text-primary ml-4">
                ${template.price}
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {template.description}
            </p>

            <div className="flex flex-wrap gap-2 ">
              {template.tags.slice(0, 3).map((tag: any) => (
                <Badge className="!bg-[#1A5FA4] !text-white !px-2 !py-1 rounded-md">
                  {tag}
                </Badge>
              ))}
              {template.tags.length > 3 && (
                <Badge className="text-xs !bg-[#1A5FA4] !text-white !px-2 !py-1 rounded-md">
                  +{template.tags.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
