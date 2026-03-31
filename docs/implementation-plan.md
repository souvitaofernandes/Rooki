# Rooki Website — Implementation Plan

## Vision
Build the complete institutional website for Rooki, a Brazilian AI-powered scam detection assistant accessible via WhatsApp. The site positions Rooki as the central product and organizes content/education extensions without diluting focus.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Custom design system (shadcn/ui patterns where helpful)
- **Icons**: Lucide React
- **Animations**: Framer Motion (subtle, purposeful)
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL)
- **Deploy**: Vercel

## Color Palette
| Token | Name | Hex |
|-------|------|-----|
| background | Bright Snow | #FAFAF8 |
| background-alt | Soft Linen | #E3E1DA |
| foreground | Olive Leaf | #363F06 |
| muted | Grey Olive | #8A8B88 |
| accent | Lime Yellow | #D2F61A |

## Sitemap
```
/                         → Home (hero, how it works, use cases, lead capture, insights, education, FAQ)
/como-funciona            → How Rooki works (detailed)
/casos-de-uso             → Scam use cases
/insights                 → Editorial arm (Rooki Insights → Substack)
/educacao                 → Talks, workshops, digital products
/escolas                  → Schools program (B2B institutional)
/sobre                    → About Rooki
/faq                      → Full FAQ
/contato                  → Contact form (B2B)
/politica-de-privacidade  → Privacy policy
/termos-de-uso            → Terms of use
/aviso-legal              → Legal disclaimer
```

## Component Architecture
```
components/
  ui/           → Button, Input, Textarea, Checkbox, Badge, Card
  layout/       → Header, Footer, Section, Container, MobileMenu
  blocks/       → Hero, HowItWorks, UseCases, LeadCapture, FAQBlock, CTABlock
  forms/        → B2CForm, B2BForm
  shared/       → Logo, WhatsAppButton, SectionHeading
```

## Form Strategy
- **B2C** (lead capture → WhatsApp): name, email, newsletter consent, privacy consent → redirect to WhatsApp with pre-filled message
- **B2B** (contact/schools): name, email, phone, company/school, role, message, privacy consent → persist to Supabase
- Validation: Zod schemas
- State management: React Hook Form
- UTM tracking: captured from URL params, stored with lead

## Supabase Integration
- Client initialized via env vars (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Two tables: `leads`, `contact_requests`
- SQL migrations in `/supabase/sql/`
- Graceful degradation when Supabase is not configured

## UX Decisions
- Mobile-first responsive design
- WhatsApp CTA is always visible/accessible
- Subtle animations (fade-in on scroll, hover states)
- No heavy JavaScript; prioritize Core Web Vitals
- Logo used as-is from official asset (dark version on light backgrounds)
- Sections with generous whitespace ("breathing room")

## Implementation Order
1. Etapa 0: This plan ✅
2. Etapa 1: Next.js scaffold, Tailwind, folder structure, global layout
3. Etapa 2: Design system tokens, base components, Header, Footer
4. Etapa 3: All copy/content as data files
5. Etapa 4: All 12 pages implemented
6. Etapa 5: Forms with validation and WhatsApp redirect
7. Etapa 6: Supabase integration and SQL
8. Etapa 7: SEO metadata, analytics layer, polish
9. Etapa 8: Final QA, README, deploy checklist
