import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/data/home";
import { UserCircle, Users, Building2, Handshake } from "lucide-react";

const icons = [UserCircle, Users, Building2, Handshake];

export function ForWhom() {
  const { paraQuemServe } = homeContent;

  return (
    <Section background="default" id="para-quem">
      <SectionHeading
        title={paraQuemServe.sectionTitle}
        subtitle={paraQuemServe.sectionSubtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paraQuemServe.segments.map((seg, i) => {
          const Icon = icons[i] || Users;
          return (
            <Card key={seg.title} hover>
              <Icon className="mb-3 h-7 w-7 text-brand-accent" />
              <h3 className="mb-2 font-heading font-semibold text-white">{seg.title}</h3>
              <p className="text-sm text-brand-muted">{seg.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
