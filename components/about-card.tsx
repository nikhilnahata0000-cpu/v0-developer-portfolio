import { BentoCard } from "./bento-card"
import { MapPin } from "lucide-react"

export function AboutCard() {
  return (
    <BentoCard className="flex flex-col justify-between">
      <div>
        <div className="mb-4 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-mono tracking-wider uppercase">San Francisco, CA</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          5+ years building for startups and enterprises. Passionate about design systems, 
          developer tooling, and open source.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-2xl font-bold text-foreground">40+</p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">12k+</p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Commits</p>
        </div>
      </div>
    </BentoCard>
  )
}
