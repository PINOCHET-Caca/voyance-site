import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiz Personnalisé | Nebula",
  description: "Trouvez le médium parfait pour vos besoins spécifiques grâce à notre quiz personnalisé.",
}

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-indigo-950">{children}</div>
}

