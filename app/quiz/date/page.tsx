import type { Metadata } from "next"
import QuizDateForm from "./QuizDateForm"
import { Clock } from "lucide-react"

// Métadonnées exportées pour le SEO
export const metadata: Metadata = {
  title: "Quelle est votre date de naissance? | Quiz Personnalisé | Nebula",
  description:
    "Votre date de naissance nous aide à déterminer votre signe astrologique et votre compatibilité avec nos médiums. Complétez votre profil pour une expérience personnalisée.",
  keywords:
    "date de naissance, signe astrologique, compatibilité astrologique, horoscope personnalisé, voyance, médium",
  openGraph: {
    title: "Quelle est votre date de naissance? | Nebula Voyance",
    description:
      "Votre date de naissance nous aide à déterminer votre signe astrologique et votre compatibilité avec nos médiums.",
    images: [
      {
        url: "/images/nebula-quiz-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiz Nebula - Sélectionnez votre date de naissance",
      },
    ],
  },
  alternates: {
    canonical: "/quiz/date",
  },
}

export default function QuizDatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950">
      {/* Bannière supérieure */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2">
          <Clock className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">Obtenez 3 minutes GRATUITES pour votre première consultation!</span>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wider text-white">NEBULA</h1>
        </div>

        {/* Texte d'aide */}
        <div className="text-center mb-8">
          <p className="text-white text-lg mb-4">Aidez-nous à vous associer au bon médium</p>

          {/* Barre de progression - 4 barres au lieu de 5 */}
          <div className="flex justify-center items-center gap-2 w-full max-w-md mx-auto">
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
          </div>
        </div>

        {/* Question */}
        <div className="w-full max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quelle est votre date de naissance?</h2>
          <p className="text-gray-300 mb-8">
            Votre date de naissance nous aide à déterminer votre signe astrologique et votre compatibilité avec les
            autres.
          </p>

          <QuizDateForm />
        </div>
      </main>
    </div>
  )
}

