import { BentoCard } from "./bento-card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Vercel",
    period: "2023 — Present",
  },
  {
    role: "Full-Stack Developer",
    company: "Stripe",
    period: "2021 — 2023",
  },
  {
    role: "Software Engineer",
    company: "Linear",
    period: "2020 — 2021",
  },
]

export function ExperienceCard() {
  return (
    <BentoCard>
      <div className="mb-5 flex items-center gap-2 text-muted-foreground">
        <Briefcase className="h-4 w-4" />
        <span className="text-sm font-mono tracking-wider uppercase">Experience</span>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-foreground">{exp.role}</p>
              <p className="text-sm text-primary/80">{exp.company}</p>
            </div>
            <span className="shrink-0 text-xs font-mono text-muted-foreground whitespace-nowrap">
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
