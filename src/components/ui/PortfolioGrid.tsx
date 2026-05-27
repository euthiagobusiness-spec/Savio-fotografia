import { portfolioItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/components/ui/ImageCard";

const sizeClasses = {
  large: "md:col-span-7 md:row-span-2 min-h-[500px] lg:min-h-[620px]",
  wide: "md:col-span-7 min-h-[340px] lg:min-h-[390px]",
  tall: "md:col-span-5 md:row-span-2 min-h-[500px] lg:min-h-[620px]",
  standard: "md:col-span-6 min-h-[340px] lg:min-h-[390px]",
};

export function PortfolioGrid() {
  return (
    <div className="grid auto-rows-[minmax(320px,auto)] gap-4 md:grid-cols-12 md:gap-5">
      {portfolioItems.map((item) => (
        <ImageCard
          key={item.id}
          src={item.image}
          alt={item.alt}
          eyebrow={item.eyebrow}
          title={item.category}
          description={item.title}
          className={cn(sizeClasses[item.size])}
        />
      ))}
    </div>
  );
}
