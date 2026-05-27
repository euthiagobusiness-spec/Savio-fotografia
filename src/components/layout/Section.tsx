import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-18 sm:py-24 lg:py-32", className)}
    >
      {children}
    </section>
  );
}
