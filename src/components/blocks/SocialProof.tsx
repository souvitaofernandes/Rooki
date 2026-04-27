import { homeContent } from "@/data/home";

export function SocialProof() {
  const { socialProof } = homeContent;

  return (
    <section className="border-y border-white/8 bg-brand-surface">
      <div className="container-wide px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {socialProof.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-2xl font-bold gradient-text md:text-3xl">{item.value}</div>
              <div className="mt-1 text-sm text-brand-soft">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
