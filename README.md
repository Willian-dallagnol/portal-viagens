# Portal de Viagens

Portal de turismo brasileiro desenvolvido com **Next.js 15 + TypeScript**, demonstrando os principais recursos do App Router em um projeto com visual e UX cuidados.

## ✨ O que este projeto demonstra

- **Next.js 15 App Router** com Server e Client Components
- **Rotas dinâmicas** (`/destinos/[id]`) com `generateStaticParams`
- **TypeScript** com interfaces tipadas em todos os dados e props
- **CSS Modules** para estilização isolada por componente
- **Internacionalização PT/EN** com troca de idioma em tempo real
- **Favoritos** persistidos via `localStorage`
- **Avaliações/comentários** com estado local por destino
- **Metadados SEO** configurados via `export const metadata`
- **Formulário de contato** com feedback visual de envio
- **Link ativo** no menu conforme rota atual (`usePathname`)
- **Acessibilidade**: `aria-label`, `aria-pressed`, `lang="pt-BR"`, roles semânticos

## 🛠️ Tecnologias

- Next.js 15
- React 19
- TypeScript 5
- CSS Modules
- Tailwind CSS 4

## 📁 Estrutura

```
app/
├── page.tsx              # Home: banner, destaques, estatísticas
├── layout.tsx            # Layout raiz com metadados SEO
├── destinos/
│   ├── page.tsx          # Listagem com busca e favoritos
│   └── [id]/page.tsx     # Detalhe: info, vídeo, avaliações
└── contato/page.tsx      # Formulário com feedback de envio
components/
├── Layout.tsx            # Header, nav, footer, i18n, link ativo
└── CardDestino.tsx       # Card com favorito integrado
data/
├── destinos.ts           # Interface + array de destinos tipados
├── api.ts                # Simulação de fetch assíncrono
└── i18n.ts               # Textos PT e EN
styles/
├── Layout.module.css
└── CardDestino.module.css
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## 🌐 Deploy

Importar no Vercel — nenhuma variável de ambiente necessária.
