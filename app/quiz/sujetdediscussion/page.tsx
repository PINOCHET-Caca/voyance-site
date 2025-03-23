import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quel sujet souhaitez-vous aborder? | Quiz Personnalisé | Nebula",
  description:
    "Choisissez le sujet qui vous intéresse pour une consultation personnalisée avec nos médiums experts. Amour, carrière, spiritualité et plus.",
  keywords: "voyance en ligne, médium, consultation psychique, amour, carrière, spiritualité, prédiction",
  openGraph: {
    title: "Quel sujet souhaitez-vous aborder? | Nebula Voyance",
    description: "Choisissez le sujet qui vous intéresse pour une consultation personnalisée.",
    images: [
      {
        url: "/images/nebula-quiz-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiz Nebula - Choisissez votre sujet",
      },
    ],
  },
  alternates: {
    canonical: "/quiz/sujetdediscussion",
  },
}

export default function QuizSubjectPage() {
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
            <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
            <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
            <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
          </div>
        </div>

        {/* Question */}
        <div className="w-full max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quel sujet souhaitez-vous aborder avec un médium?
          </h2>
        </div>

        {/* Options de sujets */}
        <SubjectOptions />
      </div>
    </div>
  )
}

import { SubjectOptions } from "./client-components"

