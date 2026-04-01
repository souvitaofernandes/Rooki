import { homeContent } from "@/data/home";

export function SocialProof() {
  const { socialProof } = homeContent;

  return (
    <section className="border-y border-brand-linen/80 bg-brand-snow py-8 md:py-10">
      <div className="container-wide px-5 md:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {socialProof.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-brand-olive md:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-xs text-brand-grey md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
