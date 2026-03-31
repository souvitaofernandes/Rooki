import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeContent } from "@/data/home";
import { Users, Heart, GraduationCap, Briefcase, School, Globe } from "lucide-react";

const icons = [Heart, Users, GraduationCap, Briefcase, School, Globe];

export function ForWhom() {
  const { paraQuemServe } = homeContent;

  return (
    <Section background="linen" id="para-quem">
      <SectionHeading
        title={paraQuemServe.sectionTitle}
        subtitle={paraQuemServe.sectionSubtitle}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paraQuemServe.segments.map((segment, i) => {
          const Icon = icons[i];
          return (
            <div key={segment.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lime/15">
                <Icon className="h-5 w-5 text-brand-olive" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-brand-olive">
                  {segment.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-grey">
                  {segment.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
