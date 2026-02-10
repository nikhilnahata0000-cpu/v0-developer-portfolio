"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
}

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  )
}
