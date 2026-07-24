interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  centered?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {tag && (
        <span className="inline-block font-[Rajdhani] text-[#e63946] text-xs font-semibold uppercase tracking-[0.3em] mb-2">
          {tag}
        </span>
      )}
      <h2 className="font-[Orbitron] text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {title}{" "}
        {highlight && <span className="text-[#e63946]">{highlight}</span>}
      </h2>
    </div>
  );
}
