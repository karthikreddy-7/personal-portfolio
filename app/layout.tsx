import type { Metadata, Viewport } from "next"
import ReactDOM from "react-dom"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://basupallykarthikreddy.vercel.app"),
  title: "Karthik Reddy · Agentic AI Engineer",
  description:
    "Agentic AI Engineer — multi-agent orchestration, hybrid RAG and evals in production. Lead Software Engineer at Persistent Systems; ex-Nomura (GenAI platform, ~15k daily users).",
  openGraph: {
    title: "Karthik Reddy · Agentic AI Engineer",
    description: "Multi-agent orchestration, hybrid RAG and evals in production.",
    url: "https://basupallykarthikreddy.vercel.app",
  },
}

// schema.org Person: lets search engines tie this site to the same person on
// LinkedIn, GitHub and Medium, so a name search surfaces them together.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karthik Reddy Basupally",
  jobTitle: "Agentic AI Engineer",
  worksFor: { "@type": "Organization", name: "Persistent Systems" },
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  url: "https://basupallykarthikreddy.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/basupallykarthikreddy/",
    "https://github.com/karthikreddy-7",
    "https://medium.com/@basupallykarthikreddy",
  ],
  knowsAbout: ["Agentic AI", "Multi-agent systems", "LLMs", "RAG", "MCP", "LangGraph", "LLM evaluation"],
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  // Self-hosted fonts (see @font-face in globals.css). Preload only the
  // above-the-fold latin roman files so first paint isn't render-blocked.
  // ReactDOM.preload dedupes correctly; a manual <link> in <head> gets
  // double-emitted by React 19's resource hoisting.
  ReactDOM.preload("/fonts/google-sans-latin.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  })
  ReactDOM.preload("/fonts/google-sans-code-latin.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  })

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {modal}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
