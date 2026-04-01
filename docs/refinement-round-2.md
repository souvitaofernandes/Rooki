# Refinement Round 2 — Rooki Website

## Audit Summary

### Issues Found
1. **Logo**: Site uses placeholder SVG text, not the official logo (`Public/Logo.png`)
2. **Image analysis claims**: Multiple places promise image/print analysis that isn't in the MVP
3. **No social proof**: No real numbers, no FIAP mention, no acceleration program
4. **Insights page**: Generic placeholder articles, no real Substack links
5. **Education/Schools**: No real proof of talks delivered, testimonials are fictional
6. **Hero**: Functional but not compelling enough — missing urgency and proof
7. **No product demo**: Video (`Public/Demo1.mp4`) not integrated
8. **Sobre numbers**: Uses "50K+ analyses" which is false — real number is ~1000

### Changes Planned

#### Etapa 1 — Home & Positioning
- Rewrite hero: stronger headline, urgency, real proof inline
- Add social proof section with real numbers (40 users, 1000+ messages)
- Add recognition section (Startup One TOP 10, Rock New Ventures Batch 10)
- Improve CTA hierarchy
- Add product demo video block

#### Etapa 2 — Logo Fix
- Update Logo component to use `/Logo.png`
- Ensure header and footer display official logo

#### Etapa 3 — Product Demo Video
- Create VideoDemo component
- Insert in home (after hero or how-it-works)
- Also reference in /como-funciona

#### Etapa 4 — Education & Schools
- Add real proof: Colégio Gaspar Vaz and Colégio Alma Mater (Mogi das Cruzes)
- Replace fictional testimonials with real school references
- Improve commercial positioning

#### Etapa 5 — Rooki Insights
- Replace generic articles with real Substack links
- Create editorial page with actual published content

#### Etapa 6 — Veracity Review
- Remove/adjust all image analysis claims (MVP doesn't support it)
- Fix "50K+ analyses" → real numbers
- Fix sobre.ts timeline to include 2026 milestones
- Ensure all claims match MVP reality

#### Etapa 7 — QA & Documentation
- Build validation
- Visual consistency check
- Update docs
