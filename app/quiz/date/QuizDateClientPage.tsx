"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, ChevronDown } from "lucide-react"

export default function QuizDateClientPage() {
  const router = useRouter()
  const [month, setMonth] = useState<string>("")
  const [day, setDay] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [isFormValid, setIsFormValid] = useState(false)

  // Vérifier si le formulaire est valide à chaque changement
  const checkFormValidity = (m: string, d: string, y: string) => {
    setIsFormValid(m !== "" && d !== "" && y !== "")
  }

  // Gérer les changements de mois
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setMonth(value)
    checkFormValidity(value, day, year)
  }

  // Gérer les changements de jour
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDay(value)
    checkFormValidity(month, value, year)
  }

  // Gérer les changements d'année
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setYear(value)
    checkFormValidity(month, day, value)
  }

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      router.push("/quiz/chargement")
    }
  }

  // Générer les options pour les jours (1-31)
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())

  // Générer les options pour les années (1940-2006)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => (1940 + i).toString())

  // Liste des mois en français
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]

  return (
    <>
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
          {/* Bouton retour */}
          <div className="self-start mb-8">
            <Link
              href="/quiz/typedelecture"
              className="text-gray-300 hover:text-white flex items-center transition-colors"
              aria-label="Retour à la question précédente"
            >
              <ArrowLeft className="h-5 w-5 mr-1" aria-hidden="true" />
              <span className="sr-only">Retour</span>
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

            <form onSubmit={handleSubmit}>
              {/* Sélecteurs de date */}
              <div className="flex gap-4 justify-center mb-8">
                {/* Sélecteur de mois */}
                <div className="relative w-full">
                  <select
                    value={month}
                    onChange={handleMonthChange}
                    className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label="Sélectionner le mois"
                    required
                  >
                    <option value="" disabled selected>
                      Mois
                    </option>
                    {months.map((m, index) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Sélecteur de jour */}
                <div className="relative w-full">
                  <select
                    value={day}
                    onChange={handleDayChange}
                    className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label="Sélectionner le jour"
                    required
                  >
                    <option value="" disabled selected>
                      Jour
                    </option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Sélecteur d'année */}
                <div className="relative w-full">
                  <select
                    value={year}
                    onChange={handleYearChange}
                    className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label="Sélectionner l'année"
                    required
                  >
                    <option value="" disabled selected>
                      Année
                    </option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Bouton Continuer */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-full transition-all text-center ${
                  isFormValid ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Continuer
              </button>
            </form>
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
            name: "Quelle est votre date de naissance? | Quiz Personnalisé | Nebula",
            description:
              "Votre date de naissance nous aide à déterminer votre signe astrologique et votre compatibilité avec nos médiums.",
            url: "https://nebula-voyance.fr/quiz/date",
            mainEntity: {
              "@type": "Quiz",
              name: "Quiz de compatibilité avec les médiums",
              about: "Trouver le médium parfait pour vos besoins spécifiques",
              step: {
                "@type": "Question",
                name: "Quelle est votre date de naissance?",
                text: "Votre date de naissance nous aide à déterminer votre signe astrologique et votre compatibilité avec les autres.",
              },
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", "p"],
            },
          }),
        }}
      />
    </>
  )
}

