"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Vous pouvez logger l'erreur sur un service d'analyse
    console.error("Erreur d'application:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950 text-white p-4">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Une erreur est survenue</h2>
        <p className="mb-6 text-gray-300">
          Nous sommes désolés, une erreur inattendue s'est produite. Veuillez réessayer.
        </p>
        <Button onClick={reset} className="bg-purple-500 hover:bg-purple-600 text-white">
          Réessayer
        </Button>
      </div>
    </div>
  )
}

