import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Heart, Briefcase, Sparkles, Globe, Compass, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Choisissez Votre Sujet | Quiz Personnalisé | Nebula",
  description:
    "Sélectionnez le sujet sur lequel vous souhaitez obtenir des réponses de votre médium. Amour, carrière, destin ou autre - nous avons des experts pour chaque domaine.",
  keywords:
    "voyance amour, voyance carrière, voyance destin, prédiction avenir, guidance spirituelle, médium spécialisé",
}

export default function QuizTopicPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-indigo-950">
        {/* Bannière supérieure */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Obtenez 3 minutes GRATUITES pour votre première consultation!</span>
          </div>
        </div>

        {/* Contenu principal */}
        <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
          {/* Bouton retour */}
          <div className="self-start mb-8">
            <Link
              href="/quiz"
              className="text-gray-300 hover:text-white flex items-center transition-colors"
              aria-label="Retour à la question précédente"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
            </Link>
          </div>

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
              <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
              <div className="h-1 bg-gray-600 rounded-full w-1/4"></div>
            </div>
          </div>

          {/* Question */}
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Quel sujet souhaitez-vous aborder avec un médium?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Option Amour & Relations */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Amour & Relations"
              >
                <div className="text-purple-600 mb-4">
                  <Heart className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Amour & Relations</span>
              </Link>

              {/* Option Carrière & Travail */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Carrière & Travail"
              >
                <div className="text-purple-600 mb-4">
                  <Briefcase className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Carrière & Travail</span>
              </Link>

              {/* Option Destin & Chemin de vie */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Destin & Chemin de vie"
              >
                <div className="text-purple-600 mb-4">
                  <Compass className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Destin & Chemin de vie</span>
              </Link>

              {/* Option Prédiction du futur */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Prédiction du futur"
              >
                <div className="text-purple-600 mb-4">
                  <Sparkles className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Prédiction du futur</span>
              </Link>

              {/* Option Guidance spirituelle */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Guidance spirituelle"
              >
                <div className="text-purple-600 mb-4">
                  <Globe className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Guidance spirituelle</span>
              </Link>

              {/* Option Autre */}
              <Link
                href="/quiz/typedelecture"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner Autre sujet"
              >
                <div className="text-purple-600 mb-4">
                  <Sun className="h-16 w-16 stroke-1" />
                </div>
                <span className="text-indigo-950 font-medium text-center">Autre</span>
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Script JSON-LD pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Choisissez Votre Sujet | Quiz Personnalisé | Nebula",
            description: "Sélectionnez le sujet sur lequel vous souhaitez obtenir des réponses de votre médium.",
            url: "https://nebula-voyance.fr/quiz/sujet",
            mainEntity: {
              "@type": "Quiz",
              name: "Quiz de compatibilité avec les médiums",
              about: "Trouver le médium parfait pour vos besoins spécifiques",
            },
          }),
        }}
      />
    </>
  )
}

