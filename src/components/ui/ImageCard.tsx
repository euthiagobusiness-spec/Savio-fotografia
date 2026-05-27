import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCardProps = {
  src: string;
  alt: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  priority?: boolean;
};

export function ImageCard({
  src,
  alt,
  title,
  eyebrow,
  description,
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <figure
      className={cn(
        "image-depth group relative isolate min-h-[360px] overflow-hidden rounded-[8px] border border-white/10 bg-[#111111]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/92 via-[#070707]/22 to-transparent" />
      <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-[#c8b89a]/35 transition duration-500 group-hover:opacity-100" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        {eyebrow ? (
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-3xl font-medium leading-none text-[#f4f0e8]">
          {title}
        </h3>
        {description ? (
          <p className="mt-3 max-w-sm translate-y-2 text-sm leading-6 text-[#d7d0c3] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {description}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
