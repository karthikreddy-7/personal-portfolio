// Project detail data for the routable case-study modal at /projects/[slug].
//
// Goal: make a project credible to a recruiter / hiring manager / tech lead who
// CANNOT see the source (private repo). Credibility = specific, accurate detail
// + verifiable artifacts + an easy way to follow up.
//
// repoStatus: "public"  -> link the repo + paper directly (strongest proof)
// repoStatus: "private" -> show a "request access" link + optional "why private" note
//
// Artifact fields use a `{ todo: "..." }` convention: it renders a labelled
// placeholder IN DEV ONLY (hidden in production), so a half-filled live page
// never shows a placeholder to a visitor. A real value renders everywhere.

export type ProjectLink = { label: string; href: string }
export type Screenshot = { src: string; caption?: string }
export type Clip = { src: string; caption?: string }

/** A small quantitative results table (headers + rows of equal length). */
export type ResultsTable = { headers: string[]; rows: string[][]; note?: string }

/** A labelled case-study section rendered below the hero. Each can carry prose,
    accent-dash bullets (lead phrase up to the first period is emphasised), and/or
    a results table. */
export type CaseSection = {
  label: string
  body?: string
  bullets?: string[]
  table?: ResultsTable
}

export type LiveDemo = { url?: string; todo?: string }
export type Screenshots = { items?: Screenshot[]; todo?: string }
export type Diagram = "builtin" | { todo: string }
export type Walkthrough = { url?: string; todo?: string }

export type ProjectDetail = {
  slug: string
  /** Short identifier — used for the browser tab, link previews, mailto subjects. */
  name: string
  /** Full display title for the h1. Falls back to `name` when omitted. */
  title?: string
  /** One-line description under the title, also used for link previews. */
  tagline: string
  /** Rendered as "<type> @ <place>". For personal work: "Personal project", etc. */
  type: string
  /** Org / school / company. Omit for personal projects. */
  place?: string
  repoStatus: "public" | "private"
  /** Private: a short "why private" note. Public: usually omitted. */
  repoNote?: string
  /** Concise highlight bullets — optional, currently unused in render. */
  highlights?: string[]
  /** Deeper case-study sections rendered below the hero (Overview, Approach, …). */
  sections?: CaseSection[]
  stack: string[]
  /** Repo / paper / write-up links. Omit the repo when private. */
  links: ProjectLink[]
  artifacts: {
    diagram?: Diagram
    /** Local, muted, autoplay-loop result clips (mp4). Strong, real proof. */
    clips?: Clip[]
    liveUrl?: LiveDemo
    screenshots?: Screenshots
  }
  verify: {
    requestAccessEmail?: string
    walkthrough?: Walkthrough
    contactEmail?: string
  }
}

const CONTACT_EMAIL = "basupallykarthikreddy@gmail.com"

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  coderag: {
    slug: "coderag",
    name: "CodeRAG",
    title: "CodeRAG — search code by structure",
    tagline:
      "Indexes methods and call graphs (not random text chunks) so you can search a codebase the way engineers actually think about it.",
    type: "Personal project",
    repoStatus: "public",
    sections: [
      {
        label: "Problem",
        body: "Normal RAG splits code into text chunks. That breaks the links between functions. CodeRAG keeps method signatures and call relationships so answers can follow real control flow.",
      },
      {
        label: "What it does",
        bullets: [
          "Indexes structure. Methods and call graphs live next to embeddings.",
          "Search API + chat UI. Ask questions about a repo in plain language.",
          "Flexible vector stores. Works with ChromaDB, PGVector, or Weaviate.",
        ],
      },
      {
        label: "Stack",
        body: "Python / FastAPI backend, React + TypeScript UI, Sentence Transformers for embeddings.",
      },
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "Sentence Transformers", "ChromaDB"],
    links: [{ label: "github", href: "https://github.com/karthikreddy-7/coderag" }],
    artifacts: {},
    verify: { contactEmail: CONTACT_EMAIL },
  },

  "sonar-autofix": {
    slug: "sonar-autofix",
    name: "Sonar AutoFix",
    tagline:
      "CI tool that reads SonarQube findings, proposes fixes with an LLM, and opens merge requests for review — ~40% of team issues cleared.",
    type: "Internal platform",
    place: "Nomura",
    repoStatus: "private",
    repoNote:
      "Internal Nomura tooling. Happy to walk through the design and results in an interview.",
    sections: [
      {
        label: "What it does",
        body: "Sits in GitLab CI. When SonarQube reports smells or complexity issues, an agent proposes a fix and opens an MR. Developers still review before merge.",
      },
      {
        label: "Results",
        body: "About 40% of Sonar issues cleared across the team's services. Won a Nomura Star award.",
      },
      {
        label: "Stack",
        body: "Python, LLMs, javalang, GitLab CI, Docker, SonarQube.",
      },
    ],
    stack: ["Python", "LLMs", "javalang", "GitLab CI/CD", "Docker", "SonarQube"],
    links: [],
    artifacts: {},
    verify: { contactEmail: CONTACT_EMAIL },
  },

  serverconnect: {
    slug: "serverconnect",
    name: "ServerConnect",
    title: "ServerConnect — MCP server for ops",
    tagline:
      "Ask an AI assistant to pull logs, metrics, and tickets instead of SSHing and tab-hopping yourself.",
    type: "Internal tooling",
    place: "Nomura",
    repoStatus: "private",
    repoNote:
      "Personal internal tool (not a team-wide rollout). Happy to demo the MCP surface.",
    sections: [
      {
        label: "What it does",
        body: "An MCP server (FastMCP) that exposes logs over SSH, Tomcat, Grafana, GitLab, and Jira to Claude Code so failure investigation stays in one conversation.",
      },
      {
        label: "Why it matters",
        body: "Shows MCP from the server side — building tools, not only calling them — for real ops work.",
      },
      {
        label: "Stack",
        body: "Python, FastMCP, MCP, SSH, Grafana, GitLab API, Jira API.",
      },
    ],
    stack: ["Python", "FastMCP", "MCP", "SSH", "Grafana", "GitLab API", "Jira API"],
    links: [],
    artifacts: {},
    verify: { contactEmail: CONTACT_EMAIL },
  },


  "agri-ai": {
    slug: "agri-ai",
    name: "AGRI.AI",
    tagline:
      "Final-year ML project for agriculture, with a React UI, Django backend, and a live demo.",
    type: "Academic project",
    place: "VIT",
    repoStatus: "public",
    sections: [
      {
        label: "Overview",
        body: "College capstone that uses machine learning (including CNNs) to support agriculture use cases. Ships with a React front end, Django services, and a public demo.",
      },
      {
        label: "Engineering",
        body: "React, Django, Python, CNN / ML pipelines. Live at agriai.vercel.app.",
      },
    ],
    stack: ["React", "Django", "Machine Learning", "CNN", "Python"],
    links: [
      { label: "github", href: "https://github.com/karthikreddy-7/AGRIAI-IMPROVED" },
      { label: "live", href: "https://agriai.vercel.app" },
    ],
    artifacts: {},
    verify: { contactEmail: CONTACT_EMAIL },
  },

  "smart-shuttle": {
    slug: "smart-shuttle",
    name: "Smart Shuttle",
    title: "Smart Shuttle — IoT + RFID payments",
    tagline:
      "Tap student RFID cards to pay for campus shuttles, recharge online, and track buses — roughly 50–60% faster than older payment methods.",
    type: "Academic project",
    place: "VIT",
    repoStatus: "public",
    sections: [
      {
        label: "Overview",
        body: "End-to-end campus shuttle system: RFID payments on student cards, a website for balance and recharges, and basic bus tracking.",
      },
      {
        label: "Results",
        body: "About 50–60% faster transactions than the previous campus payment options.",
      },
      {
        label: "Engineering",
        body: "Arduino, ESP8266, RFID, PHP, MySQL. Live at smartshuttlesystem.shop.",
      },
    ],
    stack: ["IoT", "Arduino", "ESP8266", "RFID", "PHP", "MySQL"],
    links: [
      {
        label: "github",
        href: "https://github.com/karthikreddy-7/Smart-Shuttle-System-An-IOT-Machine-Learning-Based-Approach",
      },
      { label: "live", href: "https://smartshuttlesystem.shop/" },
    ],
    artifacts: {},
    verify: { contactEmail: CONTACT_EMAIL },
  },
}

// ─────────────────────────────────────────────────────────────────────────
// TEMPLATE — copy for a new (esp. PRIVATE-repo) project:
//
// "<slug>": {
//   slug: "<slug>",
//   name: "Project Name",
//   tagline: "One specific sentence: what it is and why it's impressive.",
//   type: "Personal project",
//   place: "Org / school",
//   repoStatus: "private",
//   repoNote: "Source is private because <reason>. Happy to grant read access or walk through it.",
//   stack: ["..."],
//   links: [],
//   artifacts: {},
//   verify: {
//     requestAccessEmail: "basupallykarthikreddy@gmail.com",
//     contactEmail: "basupallykarthikreddy@gmail.com",
//   },
// },
// ─────────────────────────────────────────────────────────────────────────

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return PROJECT_DETAILS[slug]
}

export const PROJECT_DETAIL_SLUGS = Object.keys(PROJECT_DETAILS)

export function hasProjectDetail(slug: string): boolean {
  return slug in PROJECT_DETAILS
}
