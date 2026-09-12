# Isabelle Ebener Nutrição Comportamental

Landing page institucional de página única para a nutricionista comportamental Isabelle
Ebener, com foco em conversão via WhatsApp e apresentação da abordagem, credenciais,
programas e canais de conteúdo.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) via Vite
- Tailwind CSS 4
- [lucide-react](https://lucide.dev) para ícones de interface
- Deploy no Netlify (`@netlify/vite-plugin-tanstack-start`)

## Estrutura

- `src/routes/__root.tsx` — shell HTML, título da aba e meta tags (SEO/Open Graph).
- `src/routes/index.tsx` — página única com todas as seções (capa, sobre, abordagem,
  depoimentos, como funciona, programas, conteúdo vivo, FAQ, contato).
- `src/components/site-header.tsx` — cabeçalho fixo com navegação e o helper `waLink`
  que monta links `wa.me` com mensagem pré-preenchida.
- `src/components/faq-accordion.tsx` — acordeão de perguntas frequentes.
- `src/components/veggie-icons.tsx` — ilustrações lineares (SVG) de vegetais/frutas usadas
  como acentos de marca.
- `public/images/` — logo em versão horizontal e em badge (quadrada), e o pattern
  orgânico de fundo.

## Rodando localmente

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:3000`.

## Build

```bash
npm run build
```
