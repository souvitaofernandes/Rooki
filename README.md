# Rooki — Antes de cair, pergunta pra Rooki

Landing page da Rooki, app brasileiro de proteção contra golpes digitais. O app está em desenvolvimento (iOS primeiro); hoje a Rooki funciona via WhatsApp.

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
│   ├── page.tsx                # Landing
│   ├── globals.css
│   ├── api/waitlist/route.ts   # POST endpoint para waitlist
│   ├── privacidade/page.tsx
│   └── termos/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problema.tsx
│   ├── OQueE.tsx
│   ├── ComoFunciona.tsx
│   ├── PorQue.tsx
│   ├── ParaEmpresas.tsx
│   ├── QuemSomos.tsx
│   ├── Waitlist.tsx
│   ├── Footer.tsx
│   ├── LegalLayout.tsx
│   ├── Container.tsx
│   └── FadeIn.tsx
└── lib/
    └── utils.ts                # cn(), WHATSAPP_URL, CONTACT_EMAIL
```

## Scripts

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Antes de publicar

- `public/logo.svg` — substituir pelo SVG final da Rooki
- LinkedIn e Instagram no `Footer.tsx` — trocar pelos links reais
- Número do WhatsApp em `src/lib/utils.ts` — confirmar
- Conectar `/api/waitlist` com serviço de email (Resend, ConvertKit, ou Google Sheets)
- Atualizar Política de Privacidade e Termos de Uso para incluir app mobile
- Validar estatísticas da seção Problema com Larissa

## Licença

Proprietário © Rooki Tecnologia LTDA.
