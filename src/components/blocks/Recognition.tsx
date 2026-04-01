import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeContent } from "@/data/home";
import { Award, Rocket } from "lucide-react";

const icons = [Award, Rocket];

export function Recognition() {
  const { recognition } = homeContent;

  return (
    <Section background="snow">
      <SectionHeading
        badge="Reconhecimento"
        title="Quem já aposta na Rooki"
        subtitle="Uma startup jovem, validada por quem entende de inovação."
      />

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {recognition.map((item, i) => {
          const Icon = icons[i] || Award;
          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-brand-lime/20 bg-brand-lime/5 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lime/20">
                <Icon className="h-5 w-5 text-brand-olive" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-olive">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-grey">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
