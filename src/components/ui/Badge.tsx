import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#c8b89a]/35 bg-[#070707]/35 px-4 py-2 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f4f0e8] shadow-lg shadow-black/20 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
