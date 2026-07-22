import type { ReactElement } from "react"

// Inline SVG architecture diagrams, keyed by slug. Hand-drawn to match the
// site palette (cream #f4f1ec, ink #1a1a1a, accent #1f3a5f). Add a diagram
// component and register it in DIAGRAMS when you have a bespoke artifact for
// a project case study.

const DIAGRAMS: Record<string, () => ReactElement> = {
  // e.g. coderag: CodeRAGDiagram,
}

export function ArchitectureDiagram({ slug }: { slug: string }) {
  const Diagram = DIAGRAMS[slug]
  if (!Diagram) return null
  return <Diagram />
}

export function hasBuiltinDiagram(slug: string): boolean {
  return slug in DIAGRAMS
}
