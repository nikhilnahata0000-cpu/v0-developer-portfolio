import { BentoCard } from "./bento-card"
import { Terminal } from "lucide-react"

export function CodeSnippetCard() {
  return (
    <BentoCard className="flex flex-col justify-between">
      <div>
        <div className="mb-4 flex items-center gap-2 text-muted-foreground">
          <Terminal className="h-4 w-4" />
          <span className="text-sm font-mono tracking-wider uppercase">Philosophy</span>
        </div>
      </div>
      <div className="rounded-xl bg-secondary/70 p-4 font-mono text-xs leading-relaxed">
        <p className="text-muted-foreground">
          <span className="text-primary/80">const</span>{" "}
          <span className="text-foreground">approach</span> = {"{"}
        </p>
        <p className="pl-4 text-muted-foreground">
          <span className="text-foreground">code</span>:{" "}
          <span className="text-primary/70">{'"'}clean & readable{'"'}</span>,
        </p>
        <p className="pl-4 text-muted-foreground">
          <span className="text-foreground">ship</span>:{" "}
          <span className="text-primary/70">{'"'}fast & often{'"'}</span>,
        </p>
        <p className="pl-4 text-muted-foreground">
          <span className="text-foreground">learn</span>:{" "}
          <span className="text-primary/70">{'"'}always{'"'}</span>,
        </p>
        <p className="text-muted-foreground">{"}"}</p>
      </div>
    </BentoCard>
  )
}
