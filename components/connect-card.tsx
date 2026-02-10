import { BentoCard } from "./bento-card"
import { ArrowUpRight, Mail } from "lucide-react"

const links = [
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X / Twitter", href: "#" },
]

export function ConnectCard() {
  return (
    <BentoCard className="flex flex-col justify-between">
      <div>
        <div className="mb-4 flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span className="text-sm font-mono tracking-wider uppercase">Connect</span>
        </div>
        <a
          href="mailto:alex@alexchen.dev"
          className="text-sm text-primary hover:underline underline-offset-4 transition-colors"
        >
          alex@alexchen.dev
        </a>
      </div>
      <div className="mt-6 space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
          >
            <span>{link.name}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
