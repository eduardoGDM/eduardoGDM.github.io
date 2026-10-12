// Fonte única de conteúdo do portfólio, em português e inglês.
// Para atualizar o site, edite apenas este arquivo.

export type Locale = "pt" | "en"

export type Capability = { title: string; text: string; tags: string[] }

export type Job = {
  company: string
  role: string
  start: string
  end: string
  yearLabel: string
  intro?: string
  highlights: string[]
  tech: string[]
}

export type Project = {
  id: string
  /** Rótulo curto da aba. */
  tab: string
  /** Categoria, ex.: "Web app · Comércio". */
  kind: string
  title: string
  summary: string
  /** Para quem o sistema foi pensado. */
  audience: string
  /** Módulos ou funcionalidades principais: título + descrição. */
  features: { title: string; text: string }[]
  /** Opcional: tecnologias usadas. Deixe vazio para não exibir. */
  tech: string[]
  /** Opcional: links do projeto (demo, repositório). */
  links: { label: string; href: string }[]
}

export type Resume = {
  profile: {
    role: string
    headline: string
    summary: string[]
    pullQuote: string
    /** Hobbies e vida fora do trabalho. `since` vazio mostra o rótulo de rotina. */
    offline: { intro: string; items: { since: string; name: string; text: string }[] }
  }
  capabilities: Capability[]
  stack: { group: string; items: string[] }[]
  experience: Job[]
  projects: Project[]
  education: { course: string; school: string; short: string; finished: string }
  languages: { name: string; level: string; score: number }[]
}

/** Dados que não mudam entre idiomas. */
export const identity = {
  name: "Eduardo Gonçalves",
  fullName: "Eduardo Gonçalves Dias Machado",
  email: "goncalves.zkeduardo@gmail.com",
  // Coloque a foto em public/ com este nome. Use "" para mostrar o monograma no lugar.
  photo: `${import.meta.env.BASE_URL}foto-eduardo.jpg`,
  cvPdf: `${import.meta.env.BASE_URL}curriculo-eduardo-goncalves.pdf`,
  links: {
    linkedin:
      "https://www.linkedin.com/in/eduardo-gon%C3%A7alves-dias-machado-34b3a7214/",
    github: "https://github.com/eduardoGDM",
  },
}

const laonTech = [
  "Laravel",
  "Blade",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "SQL",
  "Expo",
  "AWS",
  "CI/CD",
  "Claude Code",
  "Pinecone",
  "Stripe",
  "Figma",
  "Git",
]

const pt: Resume = {
  profile: {
    role: "Desenvolvedor Full Stack Pleno",
    headline:
      "Construo produtos web e mobile de ponta a ponta, do requisito e da modelagem de dados até o deploy e a sustentação em produção.",
    summary: [
      "Sou desenvolvedor Full Stack com experiência no ciclo completo de aplicações web e mobile: levantamento de requisitos, modelagem de dados, implementação, deploy, integração e sustentação de sistemas em produção.",
      "No dia a dia, atuo em code review, definição de arquitetura e decisões técnicas, com domínio de Laravel, React, React Native, Next.js, Node.js, SQL e AWS. Já construí APIs REST, integrações com gateways de pagamento e assinatura digital, soluções de web scraping e de Inteligência Artificial, além de deploy em nuvem com CI/CD e controle de acesso. Também faço uso avançado de Claude Code no desenvolvimento.",
    ],
    pullQuote:
      "Foco em escalabilidade, qualidade de código e evolução contínua de produtos digitais com regras de negócio complexas.",
    offline: {
      intro:
        "Fora do trabalho, meus principais hobbies são os games competitivos e a academia. Não à toa, dois dos meus projetos pessoais nasceram daí: o gestor de treinos e o CS2 Resolução.",
      items: [
        { since: "2013", name: "Dota 2", text: "Jogo desde a época do beta." },
        { since: "2014", name: "Counter-Strike", text: "Do CS:GO ao CS2." },
        { since: "", name: "Academia", text: "Treino como parte fixa da rotina." },
      ],
    },
  },
  capabilities: [
    {
      title: "Produto de ponta a ponta",
      text: "Dos requisitos e da modelagem do banco até a entrega e a manutenção em produção, em conjunto com os times de Produto e Design.",
      tags: ["Laravel", "React", "Next.js", "SQL"],
    },
    {
      title: "APIs e integrações",
      text: "APIs REST com serviços externos, assinatura digital e fluxos financeiros com Stripe, incluindo a venda de ingressos para eventos.",
      tags: ["REST", "Stripe", "Node.js"],
    },
    {
      title: "Cloud e entrega contínua",
      text: "Deploy e gestão na AWS (EC2, S3), permissões via IAM e pipelines de CI/CD para entregas automatizadas.",
      tags: ["AWS", "IAM", "CI/CD"],
    },
    {
      title: "IA aplicada",
      text: "Busca e processamento inteligente de dados com Node.js e Pinecone, além de padrões, skills e automações com Claude Code para o time.",
      tags: ["Pinecone", "Claude Code"],
    },
    {
      title: "Mobile e tempo real",
      text: "Apps nativos e uma rede social internacional com painel administrativo e chat em tempo real.",
      tags: ["React Native", "Expo", "Ionic"],
    },
    {
      title: "Dados e legado",
      text: "Web scraping para coleta e tratamento de dados, e modernização de sistemas legados para reduzir dívida técnica.",
      tags: ["Scraping", "Refatoração"],
    },
  ],
  stack: [
    { group: "Back-end", items: ["Laravel", "PHP", "Node.js", "REST APIs", "SQL", "Firebase"] },
    {
      group: "Front & mobile",
      items: ["React", "Next.js", "React Native", "Expo", "Ionic", "JavaScript", "Tailwind CSS"],
    },
    { group: "Cloud & entrega", items: ["AWS EC2", "S3", "IAM", "CI/CD", "Git"] },
    { group: "IA & dados", items: ["Claude Code", "Pinecone", "Web Scraping", "Stripe"] },
    {
      group: "Processo",
      items: ["Arquitetura de Software", "Code Review", "Modelagem de Dados", "Figma", "UI/UX", "User Flows"],
    },
  ],
  experience: [
    {
      company: "Laon Labs",
      role: "Desenvolvedor Full Stack Pleno",
      start: "Nov 2024",
      end: "Atual",
      yearLabel: "2024—",
      intro:
        "Atuação em todo o ciclo de desenvolvimento de produtos web e mobile, da definição de requisitos e modelagem de dados à implementação e manutenção em produção.",
      highlights: [
        "Code review e participação em decisões de arquitetura, contribuindo para qualidade, padronização e escalabilidade do código.",
        "Plataforma internacional de rede social: app mobile, painel administrativo e chat em tempo real.",
        "Venda de ingressos para eventos integrada aos pagamentos da plataforma, com fluxos financeiros via Stripe.",
        "APIs REST com integrações a serviços externos e assinatura digital.",
        "Deploy na AWS (EC2 e S3), permissões via IAM e pipelines de CI/CD.",
        "Soluções de IA com Node.js e Pinecone para busca e processamento de dados.",
        "Adoção de IA no desenvolvimento com Claude Code: padrões, boas práticas, skills e automações para o time.",
        "Dashboards analíticos e apps nativos com foco em performance e usabilidade.",
        "Modelagem de bancos e regras de negócio junto ao Produto; validação de user flows e interfaces no Figma.",
        "Web scraping para automatizar coleta, tratamento e disponibilização de dados.",
        "Refatoração e modernização de sistemas legados, reduzindo dívida técnica.",
      ],
      tech: laonTech,
    },
    {
      company: "Webfloat",
      role: "Desenvolvedor Full Stack",
      start: "Abr 2024",
      end: "Out 2024",
      yearLabel: "2024",
      highlights: [
        "Back-end em Laravel e PHP para sistemas de e-commerce.",
        "Planejamento de interfaces e features no Figma, com front-end em Ionic.",
        "Modelagem de bancos pensando em escalabilidade e nas regras de negócio do e-commerce.",
        "Reestruturação de funcionalidades e correção de bugs em regras de negócio complexas, visando performance.",
        "Versionamento com Git para deploys eficientes e seguros.",
      ],
      tech: ["Laravel", "PHP", "Ionic", "SQL", "Git"],
    },
    {
      company: "E2C Empresa Júnior",
      role: "Desenvolvedor Full Stack (Estágio)",
      start: "2023",
      end: "2024",
      yearLabel: "2023",
      highlights: [
        "Landing pages e dashboards para clientes com React.js e Tailwind CSS.",
        "APIs REST em Node.js integradas a Firebase e bancos SQL, versionadas no GitHub.",
      ],
      tech: ["React.js", "Node.js", "Firebase", "SQL", "Tailwind CSS", "GitHub"],
    },
  ],
  projects: [
    {
      id: "comercio",
      tab: "Estoque e finanças",
      kind: "Projeto pessoal · Gestão comercial",
      title: "Dashboard de estoque e finanças para comércio",
      summary:
        "Painel de gestão para pequenos e médios comércios que reúne, em um só lugar, o controle do estoque e a saúde financeira do negócio. A ideia é que o lojista saiba o que tem na prateleira, quanto está gastando e quanto realmente está lucrando, sem depender de planilhas soltas.",
      audience: "Lojistas e gestores de pequenos e médios comércios.",
      features: [
        {
          title: "Controle de estoque",
          text: "Cadastro de produtos e registro de entradas e saídas, com a quantidade disponível sempre atualizada.",
        },
        {
          title: "Gestão de gastos",
          text: "Lançamento e organização das despesas do negócio, para enxergar para onde o dinheiro está indo.",
        },
        {
          title: "Receitas e lucro",
          text: "Registro do que entra e cálculo do lucro, cruzando vendas e custos.",
        },
        {
          title: "Visão geral em dashboard",
          text: "Indicadores do estoque e das finanças reunidos em um painel para apoiar decisões do dia a dia.",
        },
      ],
      tech: [],
      links: [],
    },
    {
      id: "treinos",
      tab: "Gestor de treinos",
      kind: "Projeto pessoal · Saúde e fitness",
      title: "Gestor de treinos para academia",
      summary:
        "Aplicação para planejar e acompanhar treinos de musculação, conectando personal trainers e alunos. Cada série fica registrada com carga e repetições, o que transforma o histórico de treinos em dados de evolução.",
      audience: "Personal trainers e seus alunos, e quem treina por conta própria.",
      features: [
        {
          title: "Base de exercícios",
          text: "Catálogo de exercícios pronto para montar fichas de treino sem começar do zero.",
        },
        {
          title: "Registro de carga e repetições",
          text: "Anotação de cada série durante o treino, de forma rápida e prática.",
        },
        {
          title: "Evolução por exercício",
          text: "Histórico de cargas e repetições para acompanhar o progresso ao longo do tempo.",
        },
        {
          title: "Personal e aluno",
          text: "O personal monta e ajusta os treinos dos alunos e acompanha o desempenho de cada um.",
        },
      ],
      tech: [],
      links: [],
    },
    {
      id: "fii",
      tab: "Analisador de FIIs",
      kind: "Projeto pessoal · Investimentos",
      title: "Analisador de fundos imobiliários (FIIs)",
      summary:
        "Aplicativo desktop que ajuda a decidir onde colocar o aporte do mês. Ele busca dados atualizados dos fundos imobiliários, faz uma triagem com os critérios do próprio investidor e compara o rendimento de cada fundo com o de um CDB, já descontando o imposto. É uma ferramenta de estudo e triagem, não uma recomendação de investimento.",
      audience: "Investidores pessoa física que montam uma carteira de FIIs.",
      features: [
        {
          title: "Dados sempre atualizados",
          text: "Cotação, Dividend Yield, P/VP e vacância obtidos via web scraping no Fundamentus, e CDI do dia pela API do Banco Central.",
        },
        {
          title: "Triagem por critérios próprios",
          text: "O investidor define o DY mínimo e o P/VP máximo, e cada fundo da lista recebe um sinal: comprar, manter ou vender.",
        },
        {
          title: "FII ou CDB?",
          text: "Compara o DY do fundo, isento de IR, com o CDB líquido de imposto, mostrando qual rende mais e por quantos pontos percentuais.",
        },
        {
          title: "Distribuição do aporte",
          text: "Divide o valor disponível em cotas inteiras entre os fundos aprovados, priorizando o maior DY, e sugere o destino da sobra.",
        },
      ],
      tech: ["Python", "Tkinter", "pandas", "Requests", "Web Scraping", "API do Banco Central", "PyInstaller"],
      links: [],
    },
    {
      id: "rastreador",
      tab: "Rastreador veicular",
      kind: "Projeto pessoal · Mobile e IoT",
      title: "Rastreador veicular com app mobile",
      summary:
        "Sistema para saber onde o carro está. A localização do veículo fica registrada em um banco de dados, uma API disponibiliza esses dados e um app mobile mostra as coordenadas atuais e abre a posição direto no mapa.",
      audience: "Donos de veículos que querem acompanhar a localização do carro pelo celular.",
      features: [
        {
          title: "API de localização",
          text: "API REST em Node.js e Express, com rotas para cadastrar, consultar, atualizar e remover usuários e suas coordenadas, salvas em MySQL.",
        },
        {
          title: "App mobile",
          text: "Aplicativo em Flutter que consome a API e exibe o usuário e a última latitude e longitude registradas.",
        },
        {
          title: "Posição no mapa",
          text: "Com um toque, o app abre a localização do veículo no Google Maps.",
        },
      ],
      tech: ["Flutter", "Dart", "Node.js", "Express", "MySQL"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/eduardoGDM/projeto-hardware" }],
    },
    {
      id: "siga",
      tab: "SIGA · Educação especial",
      kind: "Projeto · Educação",
      title: "SIGA: relatórios para a educação especial",
      summary:
        "Plataforma web criada para substituir o Word e o Google Drive no dia a dia de professores da educação especial. Em vez de documentos espalhados em pastas, o professor cadastra seus alunos, monta os relatórios de acompanhamento por tópicos e emite o documento final em PDF, tudo em um só lugar.",
      audience: "Professores da Sala de Recursos Multifuncionais e da educação especial.",
      features: [
        {
          title: "Acesso do professor",
          text: "Cadastro e login com Firebase Authentication, com áreas protegidas para cada professor.",
        },
        {
          title: "Cadastro de alunos",
          text: "Ficha com dados escolares, responsáveis, histórico e diagnóstico, com busca, edição e exclusão.",
        },
        {
          title: "Relatórios por tópicos",
          text: "O relatório é montado em tópicos que podem ser adicionados, editados e removidos, com cabeçalho preenchido a partir dos dados do aluno.",
        },
        {
          title: "Emissão em PDF",
          text: "O relatório pronto é gerado em PDF, e um painel geral mostra o total de alunos e de relatórios emitidos.",
        },
      ],
      tech: ["Next.js", "React", "Firebase", "Firestore", "Tailwind CSS", "Material UI", "React-PDF"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/eduardoGDM/ProjetosSIGA" }],
    },
    {
      id: "chamados",
      tab: "Central de chamados",
      kind: "Projeto pessoal · Suporte técnico",
      title: "Plataforma de chamados para suporte",
      summary:
        "Aplicação web para abrir e acompanhar chamados de suporte. Usuários autenticados registram problemas com assunto, categoria, urgência e descrição. Os chamados ficam reunidos em um mural com busca, e cada usuário gerencia os seus em um painel próprio.",
      audience: "Equipes que precisam organizar pedidos de suporte e resolução de problemas.",
      features: [
        {
          title: "Autenticação completa",
          text: "Cadastro, login, recuperação de senha e autenticação em dois fatores com Laravel Jetstream.",
        },
        {
          title: "Abertura de chamados",
          text: "Formulário com assunto, data, categoria, urgência (baixa, média ou alta), descrição e situação do chamado.",
        },
        {
          title: "Mural com busca",
          text: "Todos os chamados em cards, com data e urgência, e busca por assunto.",
        },
        {
          title: "Painel do usuário",
          text: "Cada usuário vê, edita e exclui os chamados que abriu.",
        },
      ],
      tech: ["Laravel", "PHP", "Blade", "Jetstream", "Tailwind CSS", "MySQL"],
      links: [{ label: "Ver no GitHub", href: "https://github.com/eduardoGDM/Plataforma-Chamadas" }],
    },
    {
      id: "cs2",
      tab: "CS2 Resolução",
      kind: "Projeto pessoal · Desktop e games",
      title: "CS2 Resolução: troca automática de resolução",
      summary:
        "Utilitário para Windows que automatiza a troca de resolução para quem joga Counter-Strike 2 em uma resolução diferente da do desktop, como o 4:3 esticado. Quando o jogo abre, a resolução muda sozinha; quando fecha, o Windows volta ao normal, sem precisar mexer nas configurações de vídeo toda vez. Começou como um script em PowerShell e evoluiu para um aplicativo desktop completo em C#.",
      audience: "Jogadores de CS2 que usam uma resolução diferente da do dia a dia.",
      features: [
        {
          title: "Troca automática",
          text: "Monitora os processos do Windows, aplica a resolução do jogo assim que o CS2 abre e restaura a resolução normal quando ele fecha.",
        },
        {
          title: "Resoluções favoritas",
          text: "Salva combinações de resolução e taxa de atualização e permite alternar entre elas pela janela ou pelo menu da bandeja.",
        },
        {
          title: "Validação com o monitor",
          text: "Consulta a API do Windows para listar os modos suportados, ajusta a taxa de atualização automaticamente e avisa quando a resolução não existe no monitor.",
        },
        {
          title: "Discreto na bandeja",
          text: "Roda em segundo plano com ícone de status e notificações, abre uma única instância e devolve a resolução original ao sair.",
        },
      ],
      tech: ["C#", ".NET Framework", "Windows Forms", "Win32 API", "PowerShell", "NirCmd"],
      links: [],
    },
  ],
  education: {
    course: "Bacharelado em Engenharia de Computação",
    school: "Universidade Estadual de Ponta Grossa",
    short: "UEPG",
    finished: "Nov 2024",
  },
  languages: [
    { name: "Português", level: "Nativo", score: 5 },
    { name: "Inglês", level: "Avançado", score: 4 },
  ],
}

const en: Resume = {
  profile: {
    role: "Mid-level Full Stack Developer",
    headline:
      "I build web and mobile products end to end, from requirements and data modeling to deployment and keeping them healthy in production.",
    summary: [
      "I'm a Full Stack developer with experience across the full lifecycle of web and mobile applications: gathering requirements, data modeling, implementation, deployment, integration and maintaining systems in production.",
      "Day to day, I do code reviews and take part in architecture and technical decisions, working mainly with Laravel, React, React Native, Next.js, Node.js, SQL and AWS. I've built REST APIs, payment gateway and e-signature integrations, web scraping and AI solutions, and cloud deployments with CI/CD and access control. I'm also an advanced Claude Code user in my development workflow.",
    ],
    pullQuote:
      "Focused on scalability, code quality and the continuous evolution of digital products with complex business rules.",
    offline: {
      intro:
        "Outside of work, my main hobbies are competitive games and the gym. No coincidence that two of my personal projects came from there: the workout manager and CS2 Resolution.",
      items: [
        { since: "2013", name: "Dota 2", text: "Playing since the beta days." },
        { since: "2014", name: "Counter-Strike", text: "From CS:GO to CS2." },
        { since: "", name: "Gym", text: "Training is a fixed part of my routine." },
      ],
    },
  },
  capabilities: [
    {
      title: "End-to-end product",
      text: "From requirements and database design to delivery and production maintenance, working closely with Product and Design.",
      tags: ["Laravel", "React", "Next.js", "SQL"],
    },
    {
      title: "APIs & integrations",
      text: "REST APIs connected to external services, e-signature and Stripe payment flows, including event ticket sales.",
      tags: ["REST", "Stripe", "Node.js"],
    },
    {
      title: "Cloud & continuous delivery",
      text: "Deploying and running apps on AWS (EC2, S3), IAM permissions and CI/CD pipelines for automated releases.",
      tags: ["AWS", "IAM", "CI/CD"],
    },
    {
      title: "Applied AI",
      text: "Smart data search and processing with Node.js and Pinecone, plus Claude Code standards, skills and automations for the team.",
      tags: ["Pinecone", "Claude Code"],
    },
    {
      title: "Mobile & real time",
      text: "Native apps and an international social network with an admin panel and real-time chat.",
      tags: ["React Native", "Expo", "Ionic"],
    },
    {
      title: "Data & legacy",
      text: "Web scraping to collect and process data, and modernizing legacy systems to reduce technical debt.",
      tags: ["Scraping", "Refactoring"],
    },
  ],
  stack: [
    { group: "Back end", items: ["Laravel", "PHP", "Node.js", "REST APIs", "SQL", "Firebase"] },
    {
      group: "Front end & mobile",
      items: ["React", "Next.js", "React Native", "Expo", "Ionic", "JavaScript", "Tailwind CSS"],
    },
    { group: "Cloud & delivery", items: ["AWS EC2", "S3", "IAM", "CI/CD", "Git"] },
    { group: "AI & data", items: ["Claude Code", "Pinecone", "Web Scraping", "Stripe"] },
    {
      group: "Process",
      items: ["Software Architecture", "Code Review", "Data Modeling", "Figma", "UI/UX", "User Flows"],
    },
  ],
  experience: [
    {
      company: "Laon Labs",
      role: "Mid-level Full Stack Developer",
      start: "Nov 2024",
      end: "Present",
      yearLabel: "2024—",
      intro:
        "Working across the whole development cycle of web and mobile products, from defining requirements and modeling data to implementation and production maintenance.",
      highlights: [
        "Code reviews and architecture decisions, improving code quality, consistency and scalability.",
        "International social network platform: mobile app, admin panel and real-time chat.",
        "Event ticket sales integrated with the platform's payments, with financial flows on Stripe.",
        "REST APIs integrated with external services and digital signatures.",
        "Deployment on AWS (EC2 and S3), IAM permissions and CI/CD pipelines.",
        "AI solutions with Node.js and Pinecone for data search and processing.",
        "Rolled out AI-assisted development with Claude Code: standards, best practices, skills and automations for the team.",
        "Analytics dashboards and native apps focused on performance and usability.",
        "Database and business rule modeling with Product; user flow and interface reviews in Figma.",
        "Web scraping to automate collecting, processing and serving data.",
        "Refactoring and modernizing legacy systems, reducing technical debt.",
      ],
      tech: laonTech,
    },
    {
      company: "Webfloat",
      role: "Full Stack Developer",
      start: "Apr 2024",
      end: "Oct 2024",
      yearLabel: "2024",
      highlights: [
        "Back-end development in Laravel and PHP for e-commerce systems.",
        "Planned interfaces and features in Figma, with Ionic front ends.",
        "Database design built for scale and for e-commerce business rules.",
        "Reworked features and fixed bugs in complex business logic, with a focus on performance.",
        "Git version control for efficient, safe deployments.",
      ],
      tech: ["Laravel", "PHP", "Ionic", "SQL", "Git"],
    },
    {
      company: "E2C Empresa Júnior",
      role: "Full Stack Developer (Intern)",
      start: "2023",
      end: "2024",
      yearLabel: "2023",
      highlights: [
        "Landing pages and dashboards for clients with React.js and Tailwind CSS.",
        "Node.js REST APIs integrated with Firebase and SQL databases, versioned on GitHub.",
      ],
      tech: ["React.js", "Node.js", "Firebase", "SQL", "Tailwind CSS", "GitHub"],
    },
  ],
  projects: [
    {
      id: "comercio",
      tab: "Inventory and finance",
      kind: "Personal project · Retail management",
      title: "Inventory and finance dashboard for retail",
      summary:
        "A management dashboard for small and mid-sized shops that brings inventory control and the financial health of the business into one place. The goal is for owners to know what's on the shelf, how much they're spending and how much they're actually making, without juggling scattered spreadsheets.",
      audience: "Owners and managers of small and mid-sized shops.",
      features: [
        {
          title: "Inventory control",
          text: "Product catalog with stock in and stock out, so available quantities are always up to date.",
        },
        {
          title: "Expense tracking",
          text: "Log and organize business expenses to see where the money is going.",
        },
        {
          title: "Revenue and profit",
          text: "Record income and calculate profit by matching sales against costs.",
        },
        {
          title: "Dashboard overview",
          text: "Inventory and financial indicators gathered in one panel to support day-to-day decisions.",
        },
      ],
      tech: [],
      links: [],
    },
    {
      id: "treinos",
      tab: "Workout manager",
      kind: "Personal project · Health and fitness",
      title: "Gym workout manager",
      summary:
        "An app to plan and track strength training, connecting personal trainers and their clients. Every set is logged with load and reps, turning the workout history into progress data.",
      audience: "Personal trainers and their clients, and anyone training on their own.",
      features: [
        {
          title: "Exercise library",
          text: "A ready-made exercise catalog to build workout plans without starting from scratch.",
        },
        {
          title: "Load and rep logging",
          text: "Log each set during the workout, quickly and easily.",
        },
        {
          title: "Progress per exercise",
          text: "Load and rep history to follow progress over time.",
        },
        {
          title: "Trainer and client",
          text: "Trainers build and adjust their clients' workouts and follow each one's performance.",
        },
      ],
      tech: [],
      links: [],
    },
    {
      id: "fii",
      tab: "REIT analyzer",
      kind: "Personal project · Investing",
      title: "Brazilian REIT (FII) analyzer",
      summary:
        "A desktop app that helps decide where to put each month's investment. It pulls up-to-date data on Brazilian real estate funds, screens them against the investor's own criteria and compares each fund's yield with a fixed-income CDB after tax. It's a study and screening tool, not investment advice.",
      audience: "Individual investors building a portfolio of Brazilian real estate funds.",
      features: [
        {
          title: "Always up-to-date data",
          text: "Price, dividend yield, P/B and vacancy scraped from Fundamentus, plus the current CDI rate from the Central Bank of Brazil API.",
        },
        {
          title: "Screening by your own rules",
          text: "The investor sets a minimum yield and a maximum P/B, and each fund on the list gets a signal: buy, hold or sell.",
        },
        {
          title: "Fund or CDB?",
          text: "Compares the fund's tax-exempt yield with an after-tax CDB, showing which pays more and by how many percentage points.",
        },
        {
          title: "Splitting the investment",
          text: "Spreads the available amount in whole shares across the approved funds, highest yield first, and suggests where to put what's left.",
        },
      ],
      tech: ["Python", "Tkinter", "pandas", "Requests", "Web Scraping", "Central Bank of Brazil API", "PyInstaller"],
      links: [],
    },
    {
      id: "rastreador",
      tab: "Vehicle tracker",
      kind: "Personal project · Mobile and IoT",
      title: "Vehicle tracker with a mobile app",
      summary:
        "A system to know where your car is. The vehicle's location is stored in a database, an API serves that data and a mobile app shows the current coordinates and opens the position straight on the map.",
      audience: "Car owners who want to follow their vehicle's location from their phone.",
      features: [
        {
          title: "Location API",
          text: "REST API in Node.js and Express with routes to create, read, update and delete users and their coordinates, stored in MySQL.",
        },
        {
          title: "Mobile app",
          text: "Flutter app that consumes the API and shows the user and the latest recorded latitude and longitude.",
        },
        {
          title: "Position on the map",
          text: "One tap opens the vehicle's location in Google Maps.",
        },
      ],
      tech: ["Flutter", "Dart", "Node.js", "Express", "MySQL"],
      links: [{ label: "View on GitHub", href: "https://github.com/eduardoGDM/projeto-hardware" }],
    },
    {
      id: "siga",
      tab: "SIGA · Special education",
      kind: "Project · Education",
      title: "SIGA: reports for special education",
      summary:
        "A web platform built to replace Word and Google Drive in the daily work of special education teachers. Instead of documents scattered across folders, teachers register their students, build progress reports topic by topic and export the final document as a PDF, all in one place.",
      audience: "Special education and resource room teachers.",
      features: [
        {
          title: "Teacher access",
          text: "Sign-up and login with Firebase Authentication, with protected areas for each teacher.",
        },
        {
          title: "Student records",
          text: "Student profiles with school data, guardians, history and diagnosis, with search, editing and deletion.",
        },
        {
          title: "Topic-based reports",
          text: "Reports are built from topics that can be added, edited and removed, with a header filled in from the student's data.",
        },
        {
          title: "PDF export",
          text: "The finished report is exported as a PDF, and an overview shows the total of students and reports issued.",
        },
      ],
      tech: ["Next.js", "React", "Firebase", "Firestore", "Tailwind CSS", "Material UI", "React-PDF"],
      links: [{ label: "View on GitHub", href: "https://github.com/eduardoGDM/ProjetosSIGA" }],
    },
    {
      id: "chamados",
      tab: "Help desk",
      kind: "Personal project · Technical support",
      title: "Support ticket platform",
      summary:
        "A web app to open and track support tickets. Signed-in users report issues with a subject, category, urgency and description. Tickets are gathered on a searchable board, and each user manages their own from a personal dashboard.",
      audience: "Teams that need to organize support requests and problem solving.",
      features: [
        {
          title: "Full authentication",
          text: "Sign-up, login, password recovery and two-factor authentication with Laravel Jetstream.",
        },
        {
          title: "Opening tickets",
          text: "Form with subject, date, category, urgency (low, medium or high), description and ticket status.",
        },
        {
          title: "Searchable board",
          text: "All tickets as cards showing date and urgency, with search by subject.",
        },
        {
          title: "User dashboard",
          text: "Each user sees, edits and deletes the tickets they opened.",
        },
      ],
      tech: ["Laravel", "PHP", "Blade", "Jetstream", "Tailwind CSS", "MySQL"],
      links: [{ label: "View on GitHub", href: "https://github.com/eduardoGDM/Plataforma-Chamadas" }],
    },
    {
      id: "cs2",
      tab: "CS2 Resolution",
      kind: "Personal project · Desktop and gaming",
      title: "CS2 Resolution: automatic resolution switching",
      summary:
        "A Windows utility that automates resolution switching for Counter-Strike 2 players who play at a different resolution than their desktop, such as stretched 4:3. When the game opens, the resolution changes on its own; when it closes, Windows goes back to normal, with no need to touch display settings every time. It started as a PowerShell script and grew into a full desktop app in C#.",
      audience: "CS2 players who use a different resolution in game than on their desktop.",
      features: [
        {
          title: "Automatic switching",
          text: "Watches Windows processes, applies the game resolution as soon as CS2 opens and restores the normal one when it closes.",
        },
        {
          title: "Favorite resolutions",
          text: "Saves resolution and refresh rate combinations and switches between them from the window or the tray menu.",
        },
        {
          title: "Monitor-aware",
          text: "Queries the Windows API for supported display modes, picks a valid refresh rate automatically and warns when a resolution isn't available.",
        },
        {
          title: "Quiet in the tray",
          text: "Runs in the background with a status icon and notifications, allows a single instance and restores the original resolution on exit.",
        },
      ],
      tech: ["C#", ".NET Framework", "Windows Forms", "Win32 API", "PowerShell", "NirCmd"],
      links: [],
    },
  ],
  education: {
    course: "B.Sc. in Computer Engineering",
    school: "State University of Ponta Grossa (Brazil)",
    short: "UEPG",
    finished: "Nov 2024",
  },
  languages: [
    { name: "Portuguese", level: "Native", score: 5 },
    { name: "English", level: "Advanced", score: 4 },
  ],
}

export const resume: Record<Locale, Resume> = { pt, en }
