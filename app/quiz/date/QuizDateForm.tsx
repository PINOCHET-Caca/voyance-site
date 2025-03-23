"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ChevronDown } from "lucide-react"

export default function QuizDateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")
  const [year, setYear] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const [urlParams, setUrlParams] = useState({
    subject: "prediction",
    type: "reves",
  })

  // État pour suivre si l'initialisation a été effectuée
  const [initialized, setInitialized] = useState(false)

  // Récupérer les paramètres d'URL et localStorage au chargement
  useEffect(() => {
    // Éviter les mises à jour multiples
    if (initialized) return

    const initParams = () => {
      if (typeof window === "undefined") return

      // Essayer d'abord de récupérer depuis l'URL
      const subjectParam = searchParams ? searchParams.get("subject") : null
      const typeParam = searchParams ? searchParams.get("type") : null

      let finalSubject = "prediction"
      let finalType = "reves"

      // Récupérer depuis l'URL ou localStorage
      if (subjectParam) {
        finalSubject = subjectParam
        localStorage.setItem("nebula_subject", subjectParam)
      } else {
        const storedSubject = localStorage.getItem("nebula_subject")
        if (storedSubject) {
          finalSubject = storedSubject
        }
      }

      if (typeParam) {
        finalType = typeParam
        localStorage.setItem("nebula_type", typeParam)
      } else {
        const storedType = localStorage.getItem("nebula_type")
        if (storedType) {
          finalType = storedType
        }
      }

      console.log("QuizDateForm - Final params:", { finalSubject, finalType })

      setUrlParams({
        subject: finalSubject,
        type: finalType,
      })

      // Marquer comme initialisé pour éviter les mises à jour multiples
      setInitialized(true)
    }

    initParams()
  }, [searchParams, initialized])

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
      console.log("Form submit with params:", urlParams)

      // Rediriger vers la page de chargement en conservant les paramètres
      router.push(`/quiz/chargement?subject=${urlParams.subject}&type=${urlParams.type}`)
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
      {/* Bouton retour */}
      <div className="self-start mb-8 text-left w-full">
        <Link
          href={`/quiz/typedelecture?subject=${urlParams.subject}`}
          className="text-gray-300 hover:text-white flex items-center transition-colors"
          aria-label="Retour à la question précédente"
        >
          <ArrowLeft className="h-5 w-5 mr-1" aria-hidden="true" />
          <span className="sr-only">Retour</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Sélecteurs de date */}
        <div className="flex gap-4 justify-center mb-8">
          {/* Sélecteur de mois */}
          <div className="relative w-full">
            <select
              value={month}
              onChange={handleMonthChange}
              className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label="Sélectionner le mois"
              required
            >
              <option value="" disabled>
                Mois
              </option>
              {months.map((m) => (
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
              className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label="Sélectionner le jour"
              required
            >
              <option value="" disabled>
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
              className="appearance-none bg-indigo-900 text-white rounded-full py-3 px-4 pr-8 w-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label="Sélectionner l'année"
              required
            >
              <option value="" disabled>
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
          className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-full transition-all text-center cursor-pointer ${
            isFormValid ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
          }`}
        >
          Continuer
        </button>
      </form>
    </>
  )
}

