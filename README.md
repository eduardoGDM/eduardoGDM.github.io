# Portfólio — Eduardo Gonçalves

Site pessoal construído com **React + Vite + TypeScript**, **Tailwind CSS v4** e **shadcn/ui**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:5173.

## Atualizando o conteúdo

Todo o texto do site vem de um único arquivo: [`src/data/resume.ts`](src/data/resume.ts), com uma versão em português (`pt`) e outra em inglês (`en`).
Edite experiências, stack, formação e links ali, sem mexer nos componentes. Ao mudar algo, atualize os dois idiomas.

Os textos fixos da interface (menu, botões, títulos de seção) ficam em [`src/i18n.tsx`](src/i18n.tsx).

### Projetos pessoais

A seção **Projetos** mostra cada projeto em uma aba. Os dados ficam em `projects`, dentro de `src/data/resume.ts` (nas versões `pt` e `en`).
Cada projeto tem dois campos opcionais, hoje vazios:

- `tech`: lista de tecnologias, por exemplo `["Laravel", "React", "MySQL"]`.
- `links`: demo ou repositório, por exemplo `[{ label: "Ver no GitHub", href: "https://github.com/..." }]`.

Quando preenchidos, aparecem automaticamente no site. Para adicionar um novo projeto, basta incluir mais um item na lista.

### Idiomas

- O botão **PT / EN** no topo troca o idioma e lembra a escolha.
- Links diretos: `/?lang=pt` e `/?lang=en`. Use o segundo para recrutadores de fora.
- Sem parâmetro nem escolha salva, o site segue o idioma do navegador.

### Temas: escuro e claro

- **Escuro** é o padrão do site. O botão "Claro/Escuro" no topo troca o tema e lembra a escolha.
- Um script curto no `index.html` aplica o tema antes de a página aparecer, para não piscar na cor errada.
- As cores ficam em `src/index.css` (`:root` para o claro, `.dark` para o escuro).

### Foto

Salve a foto como `public/foto-eduardo.jpg` (de preferência quadrada ou 4:5, com pelo menos 600px).
Enquanto o arquivo não existir, o site mostra o monograma "EG" no lugar.

### Currículo em PDF

O PDF para download fica em `public/curriculo-eduardo-goncalves.pdf`. Substitua o arquivo mantendo o mesmo nome.

## Identidade visual: "Luz fria"

Preto com azul frio, vermelho só em detalhes pontuais, sem ícones nem símbolos.

| Token   | Escuro    | Uso                                        |
|---------|-----------|--------------------------------------------|
| `night` | `#060709` | fundo                                      |
| `deep`  | `#0D1C38` | painel da foto, seção de contato           |
| `text`  | `#E6EAF2` | texto                                      |
| `muted` | `#8E98AC` | texto secundário                           |
| `cold`  | `#6F98E0` | destaque (sobrenome, cargos, links)        |
| `ember` | `#C23A36` | só detalhes: traço do botão, "Atual"       |

- Títulos: **Cormorant Garamond**. Textos e rótulos: **Inter**.
- A foto aparece em cores, sobre o painel azul-noite (`src/components/Portrait.tsx`).

## Estrutura

```
src/
  data/resume.ts          conteúdo
  components/
    layout.tsx            Wrap, SectionLabel e SectionHead
    sections/             Header, Hero, About, Capabilities, Stack, Experience, Projects, Education, Contact
    ui/                   componentes shadcn (button, tooltip, ...)
```

## Deploy (GitHub Pages)

O site é publicado automaticamente pelo workflow `.github/workflows/deploy.yml`:
a cada `git push` na branch `main`, o GitHub compila o projeto e publica no GitHub Pages.

- Repositório chamado `eduardoGDM.github.io`: o site fica em `https://eduardogdm.github.io/`.
- Qualquer outro nome (ex.: `portfolio`): o site fica em `https://eduardogdm.github.io/portfolio/`.

Configuração única no GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Para gerar a versão de produção localmente:

```bash
npm run build
```
