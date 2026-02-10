import { BentoCard } from "./bento-card"

const DAYS = 52 * 7
const LEVELS = [0, 1, 2, 3, 4]

// Deterministic pseudo-random number generator (mulberry32) to avoid hydration mismatch
function seededRandom(seed: number) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function generateContributions() {
  const rand = seededRandom(42)
  const contributions: number[] = []
  for (let i = 0; i < DAYS; i++) {
    const r = rand()
    if (r < 0.3) contributions.push(0)
    else if (r < 0.5) contributions.push(1)
    else if (r < 0.7) contributions.push(2)
    else if (r < 0.9) contributions.push(3)
    else contributions.push(4)
  }
  return contributions
}

const contributions = generateContributions()

const levelColors: Record<number, string> = {
  0: "bg-secondary",
  1: "bg-primary/20",
  2: "bg-primary/40",
  3: "bg-primary/60",
  4: "bg-primary/90",
}

export function GitHubCard() {
  const weeks: number[][] = []
  for (let i = 0; i < DAYS; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  return (
    <BentoCard className="md:col-span-2">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-sm font-mono tracking-wider uppercase">Contributions</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">1,247 this year</span>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`h-[10px] w-[10px] rounded-[2px] ${levelColors[level]} transition-colors`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <span className="text-[10px] text-muted-foreground mr-1">Less</span>
        {LEVELS.map((l) => (
          <div
            key={l}
            className={`h-[10px] w-[10px] rounded-[2px] ${levelColors[l]}`}
          />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1">More</span>
      </div>
    </BentoCard>
  )
}
