type TestimonialCardProps = {
  quote: string;
  name: string;
  context: string;
};

export function TestimonialCard({ quote, name, context }: TestimonialCardProps) {
  return (
    <article className="relative rounded-[8px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c8b89a]/45 hover:bg-white/[0.05] sm:p-8">
      <span
        className="absolute right-6 top-6 font-display text-6xl leading-none text-[#c8b89a]/15"
        aria-hidden="true"
      >
        ”
      </span>
      <p className="relative font-display text-3xl leading-[1.05] text-[#f4f0e8]">
        “{quote}”
      </p>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="text-sm font-semibold text-[#f4f0e8]">{name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8c867c]">
          {context}
        </p>
      </div>
    </article>
  );
}
