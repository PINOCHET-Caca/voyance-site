import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quel type de lecture vous intéresse? | Quiz Personnalisé | Nebula",
  description:
    "Choisissez le type de lecture qui vous intéresse pour une consultation personnalisée avec nos médiums experts. Tarot, astrologie, numérologie et plus.",
  keywords: "voyance en ligne, médium, consultation psychique, tarot, astrologie, numérologie, prédiction",
  openGraph: {
    title: "Quel type de lecture vous intéresse? | Nebula Voyance",
    description: "Choisissez le type de lecture qui vous intéresse pour une consultation personnalisée.",
    images: [
      {
        url: "/images/nebula-quiz-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiz Nebula - Choisissez votre type de lecture",
      },
    ],
  },
  alternates: {
    canonical: "/quiz/typedelecture",
  },
}

export default function QuizTypeReadingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950">
      <div className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wider text-white">NEBULA</h1>
        </div>

        {/* Texte d'aide */}
        <div className="text-center mb-8 max-w-2xl">
          <p className="text-white text-lg mb-4">Aidez-nous à vous associer au bon médium</p>

          {/* Barre de progression */}
          <div className="flex justify-center items-center gap-2 w-full max-w-md mx-auto">
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
            <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
          </div>
        </div>

        {/* Options de types de lecture */}
        <ReadingTypeOptions />
      </div>
    </div>
  )
}

import { ReadingTypeOptions } from "./client-components"

