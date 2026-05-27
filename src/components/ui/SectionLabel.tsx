import { cn } from "@/lib/utils";

type SectionLabelProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-10 bg-[#c8b89a]/50" aria-hidden="true" />
        <p className="text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.28em] text-[#c8b89a]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-4xl font-medium leading-[0.96] text-[#f4f0e8] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-[#cfc8bb] sm:max-w-2xl sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
