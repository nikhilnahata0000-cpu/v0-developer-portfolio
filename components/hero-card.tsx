import { BentoCard } from "./bento-card"

export function HeroCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between p-8 lg:p-10">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
            Available for work
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
          Alex Chen
        </h1>
        <p className="mt-3 text-lg lg:text-xl text-muted-foreground font-light">
          Full-Stack Developer
        </p>
      </div>
      <div className="mt-8">
        <p className="max-w-md text-muted-foreground leading-relaxed">
          I craft performant, accessible digital experiences with modern web technologies. 
          Currently focused on building products that scale.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}
