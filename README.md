# Rooki — Você suspeita, a gente detecta

Site institucional da Rooki, inteligência artificial especializada em golpes brasileiros, acessada pelo WhatsApp.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **React Hook Form + Zod** (validação de formulários)
- **Supabase** (persistência de leads e contatos)
- **Lucide React** (ícones)
- **Framer Motion** (disponível para animações)

## Estrutura do Projeto

```
src/
├── app/                    # Rotas (App Router)
│   ├── page.tsx            # Home
│   ├── como-funciona/
│   ├── casos-de-uso/
│   ├── insights/
│   ├── educacao/
│   ├── escolas/
│   ├── sobre/
│   ├── faq/
│   ├── contato/
│   ├── politica-de-privacidade/
│   ├── termos-de-uso/
│   ├── aviso-legal/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── ui/                 # Button, Input, Textarea, Checkbox, Badge, Card
│   ├── layout/             # Header, Footer, Section
│   ├── blocks/             # Hero, HowItWorks, WhatWeAnalyze, ForWhom, etc.
│   ├── forms/              # B2CForm, B2BForm
│   └── shared/             # Logo, WhatsAppButton, SectionHeading
├── config/                 # Site configuration
├── data/                   # All page content (typed constants)
├── lib/                    # Utilities, Supabase client, analytics, schemas
├── styles/                 # Global CSS
└── types/                  # Type declarations
supabase/
└── sql/                    # Database migrations
docs/
└── implementation-plan.md
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/souvitaofernandes/Rooki.git
cd Rooki

# Instale as dependências
npm install

# Copie o arquivo de ambiente
cp .env.example .env

# Rode o servidor de desenvolvimento
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
# Supabase (obrigatório para persistência de formulários)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon

# WhatsApp (número para redirecionamento)
NEXT_PUBLIC_WHATSAPP_NUMBER=551151999871

# Site URL (para SEO e Open Graph)
NEXT_PUBLIC_SITE_URL=https://rooki.com.br

# Substack (Rooki Insights)
NEXT_PUBLIC_SUBSTACK_URL=https://rooki.substack.com
```

## Supabase Setup

1. Crie um projeto no [Supabase](https://supabase.com)
2. No SQL Editor, execute o conteúdo de `supabase/sql/001_create_tables.sql`
3. Copie a URL e a chave anon para o `.env`
4. Os formulários já estão configurados para persistir automaticamente

> O site funciona sem Supabase (os formulários simplesmente não persistem dados).

## Deploy na Vercel

1. Conecte o repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no painel
3. Deploy automático a cada push

## Onde alterar

| O que mudar | Onde |
|---|---|
| Número do WhatsApp | `.env` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| URL do Substack | `.env` → `NEXT_PUBLIC_SUBSTACK_URL` |
| Conteúdo das páginas | `src/data/*.ts` |
| Links de navegação | `src/config/site.ts` |
| Logotipo | `public/logo-rooki.svg` |
| Cores da marca | `tailwind.config.ts` → `theme.extend.colors.brand` |
| Redes sociais | `src/config/site.ts` → `socialLinks` |
| Textos legais | `src/data/legal.ts` |

## Scripts

```bash
npm run dev     # Servidor de desenvolvimento
npm run build   # Build de produção
npm run start   # Servidor de produção
npm run lint    # Linting
```

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Supabase configurado com tabelas criadas
- [ ] Número do WhatsApp correto
- [ ] URL do Substack configurada
- [ ] Logotipo oficial em `public/logo-rooki.svg`
- [ ] URL do site em `NEXT_PUBLIC_SITE_URL`
- [ ] Textos legais revisados
- [ ] Favicon/ícone personalizado

## Licença

Todos os direitos reservados. Rooki &copy; 2026.
