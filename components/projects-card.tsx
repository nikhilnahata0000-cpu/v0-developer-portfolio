import { BentoCard } from "./bento-card"
import { ArrowUpRight, Folder } from "lucide-react"

const projects = [
  {
    name: "Synapse",
    description: "Real-time collaboration platform for design teams",
    tags: ["Next.js", "WebSocket", "PostgreSQL"],
    href: "#",
  },
  {
    name: "Axiom CLI",
    description: "A developer-first CLI for rapid API scaffolding",
    tags: ["Go", "gRPC", "OpenAPI"],
    href: "#",
  },
  {
    name: "Lumina UI",
    description: "Accessible component library with 2k+ GitHub stars",
    tags: ["React", "TypeScript", "Radix"],
    href: "#",
  },
]

export function ProjectsCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2">
      <div className="mb-5 flex items-center gap-2 text-muted-foreground">
        <Folder className="h-4 w-4" />
        <span className="text-sm font-mono tracking-wider uppercase">Selected Work</span>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="block rounded-xl border border-border bg-secondary/50 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{project.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-card px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
