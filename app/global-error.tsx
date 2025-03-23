"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Vous pouvez logger l'erreur sur un service d'analyse
    console.error("Erreur globale:", error)
  }, [error])

  return (
    <html lang="fr">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950 text-white p-4">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Erreur critique</h2>
            <p className="mb-6 text-gray-300">
              Une erreur critique s&apos;est produite. Nous sommes désolés pour la gêne occasionnée.
            </p>
            <Button onClick={reset} className="bg-purple-500 hover:bg-purple-600 text-white">
              Réessayer
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

