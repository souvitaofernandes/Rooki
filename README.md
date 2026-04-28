# Rooki — Mostra pra Rooki antes de clicar

Landing page institucional da Rooki, plataforma brasileira que ajuda pessoas e empresas a identificar mensagens suspeitas e potenciais golpes digitais antes do clique.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Inter** via `next/font/google`
- **Framer Motion** (animações sutis)
- **lucide-react** (ícones, uso pontual)

## Estrutura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # Landing
│   ├── globals.css
│   ├── privacidade/page.tsx
│   └── termos/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problema.tsx
│   ├── OQueE.tsx
│   ├── ComoFunciona.tsx
│   ├── ParaQuem.tsx
│   ├── PorQue.tsx
│   ├── QuemSomos.tsx
│   ├── CtaFinal.tsx
│   ├── Footer.tsx
│   ├── LegalLayout.tsx
│   ├── Container.tsx
│   └── FadeIn.tsx
└── lib/
    └── utils.ts            # cn(), WHATSAPP_URL, CONTACT_EMAIL
```

## Scripts

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Identidade visual

- Branco `#FFFFFF` e navy `#0A0E27` dominam.
- Acentos pontuais: primária `#443CFF`, ciano `#04C5FF`, verde `#00FC6E`.
- Tipografia única: Inter, peso 700/800 nas headlines.

## Substituições antes de publicar

- `public/logo.svg` — substituir pelo SVG final da Rooki.
- LinkedIn e Instagram no `Footer.tsx` — trocar pelos links reais.
- Número do WhatsApp em `src/lib/utils.ts` — confirmar.

## Licença

Proprietário © Rooki Tecnologia LTDA.
