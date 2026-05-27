import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
};

const variants = {
  primary:
    "border-[#d6c7aa] bg-[#f4f0e8] text-[#070707] hover:bg-[#d8c7a5] hover:border-[#d8c7a5]",
  secondary:
    "border-white/20 bg-[#070707]/30 text-[#f4f0e8] backdrop-blur-md hover:border-[#c8b89a]/70 hover:bg-[#c8b89a]/10",
  ghost:
    "border-transparent bg-transparent text-[#f4f0e8] hover:border-white/15 hover:bg-white/[0.04]",
};

export function Button({
  children,
  className,
  variant = "primary",
  icon = true,
  style,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "premium-button group relative inline-flex min-h-11 max-w-full items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-center text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.17em] transition duration-300 focus-visible:outline-[#c8b89a] sm:min-h-12 sm:px-6",
        variants[variant],
        className,
      )}
      style={{
        color: variant === "primary" ? "#070707" : undefined,
        ...style,
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70"
      />
      <span className="min-w-0">{children}</span>
      {icon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : null}
    </a>
  );
}
