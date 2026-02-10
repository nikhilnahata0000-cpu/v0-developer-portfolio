"use client"

import { BentoCard } from "./bento-card"
import { Code2 } from "lucide-react"

const stack = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "PostgreSQL", level: 82 },
  { name: "Go", level: 70 },
]

export function TechStackCard() {
  return (
    <BentoCard className="md:col-span-2">
      <div className="mb-5 flex items-center gap-2 text-muted-foreground">
        <Code2 className="h-4 w-4" />
        <span className="text-sm font-mono tracking-wider uppercase">Tech Stack</span>
      </div>
      <div className="space-y-3">
        {stack.map((tech) => (
          <div key={tech.name} className="flex items-center gap-4">
            <span className="w-32 shrink-0 text-sm text-foreground">{tech.name}</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-primary/70 transition-all duration-1000"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
