import { HeroCard } from "@/components/hero-card"
import { AboutCard } from "@/components/about-card"
import { TechStackCard } from "@/components/tech-stack-card"
import { ProjectsCard } from "@/components/projects-card"
import { ExperienceCard } from "@/components/experience-card"
import { GitHubCard } from "@/components/github-card"
import { ConnectCard } from "@/components/connect-card"
import { CodeSnippetCard } from "@/components/code-snippet-card"

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(180px,auto)]">
        {/* Row 1: Hero (2x2) + About + Code Snippet */}
        <HeroCard />
        <AboutCard />
        <CodeSnippetCard />

        {/* Row 2: Tech Stack (2 cols) + Experience */}
        <TechStackCard />

        {/* Row 3: Projects (2x2) + Experience + Connect */}
        <ProjectsCard />
        <ExperienceCard />
        <ConnectCard />

        {/* Row 4: GitHub Contributions (2 cols) */}
        <GitHubCard />
      </div>

      <footer className="mt-12 flex items-center justify-center gap-1 text-xs text-muted-foreground font-mono">
        <span>&copy; {new Date().getFullYear()} Alex Chen</span>
        <span className="mx-2 text-border">|</span>
        <span>Built with Next.js & Tailwind</span>
      </footer>
    </main>
  )
}
