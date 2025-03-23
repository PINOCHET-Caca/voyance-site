"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function SubjectPageClient() {
  // Fonction pour créer un lien avec le paramètre subject
  const createSubjectLink = (subject) => {
    // Stocker le sujet dans localStorage pour plus de robustesse
    if (typeof window !== "undefined") {
      localStorage.setItem("nebula_subject", subject)
      console.log("Sujet sauvegardé dans localStorage:", subject)
    }
    return `/quiz/typedelecture?subject=${subject}`
  }

  return (
    <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
        {/* Option 1: Amour & Relations */}
        <Link
          href={createSubjectLink("amour")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Amour & Relations</span>
        </Link>

        {/* Option 2: Carrière & Travail */}
        <Link
          href={createSubjectLink("carriere")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Carrière & Travail</span>
        </Link>

        {/* Option 3: Destin & Chemin de vie */}
        <Link
          href={createSubjectLink("destin")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Destin & Chemin de vie</span>
        </Link>

        {/* Option 4: Prédiction du futur */}
        <Link
          href={createSubjectLink("prediction")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Prédiction du futur</span>
        </Link>

        {/* Option 5: Guidance spirituelle */}
        <Link
          href={createSubjectLink("guidance")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Guidance spirituelle</span>
        </Link>

        {/* Option 6: Autre */}
        <Link
          href={createSubjectLink("autre")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Autre</span>
        </Link>
      </div>
    </main>
  )
}

export function TypeReadingPageClient() {
  // État pour stocker le paramètre subject
  const [subject, setSubject] = useState("prediction")

  // Utiliser useSearchParams pour récupérer les paramètres d'URL côté client
  const searchParams = useSearchParams()

  // État pour suivre si l'initialisation a été effectuée
  const [initialized, setInitialized] = useState(false)

  // Récupérer le paramètre subject au chargement de la page
  useEffect(() => {
    // Éviter les mises à jour multiples
    if (initialized) return

    const initParams = () => {
      if (typeof window === "undefined") return

      // Essayer d'abord de récupérer depuis l'URL
      const subjectParam = searchParams ? searchParams.get("subject") : null

      // Si absent de l'URL, essayer de récupérer depuis localStorage
      if (subjectParam) {
        console.log("TypeDeLecture - Subject from URL:", subjectParam)
        setSubject(subjectParam)
        // Sauvegarder aussi dans localStorage pour plus de robustesse
        localStorage.setItem("nebula_subject", subjectParam)
      } else {
        // Récupérer depuis localStorage si disponible
        const storedSubject = localStorage.getItem("nebula_subject")
        if (storedSubject) {
          console.log("TypeDeLecture - Subject from localStorage:", storedSubject)
          setSubject(storedSubject)
        }
      }

      // Marquer comme initialisé pour éviter les mises à jour multiples
      setInitialized(true)
    }

    initParams()
  }, [searchParams, initialized])

  // Fonction pour créer un lien avec les paramètres
  const createLink = (type) => {
    // Stocker le type dans localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("nebula_type", type)
      console.log("Type sauvegardé dans localStorage:", type)
    }
    return `/quiz/date?subject=${subject}&type=${type}`
  }

  return (
    <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
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

      {/* Bouton retour */}
      <div className="self-start mb-8 text-left w-full max-w-3xl mx-auto">
        <Link
          href="/quiz/sujetdediscussion"
          className="text-gray-300 hover:text-white flex items-center transition-colors cursor-pointer"
          aria-label="Retour à la question précédente"
        >
          <ArrowLeft className="h-5 w-5 mr-1" aria-hidden="true" />
          <span>Retour</span>
        </Link>
      </div>

      {/* Question */}
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quel type de lecture vous intéresse?</h2>
        <p className="text-gray-300">
          Nos médiums ont des domaines d'expertise uniques et des expériences de consultation variées.
        </p>
      </div>

      {/* Options de types de lecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
        {/* Option 1: Lecture Amour */}
        <Link
          href={createLink("amour")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Lecture Amour</span>
        </Link>

        {/* Option 2: Lecture Tarot */}
        <Link
          href={createLink("tarot")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="15" y1="3" x2="15" y2="21" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Lecture Tarot</span>
        </Link>

        {/* Option 3: Analyse Numérologique */}
        <Link
          href={createLink("numerologie")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Analyse Numérologique</span>
        </Link>

        {/* Option 4: Astrologie & Horoscope */}
        <Link
          href={createLink("astrologie")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Astrologie & Horoscope</span>
        </Link>

        {/* Option 5: Voyance & Prédiction */}
        <Link
          href={createLink("voyance")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
              <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
              <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Voyance & Prédiction</span>
        </Link>

        {/* Option 6: Analyse des Rêves */}
        <Link
          href={createLink("reves")}
          className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
        >
          <div className="text-purple-600 mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
          <span className="font-medium text-indigo-900">Analyse des Rêves</span>
        </Link>
      </div>
    </main>
  )
}

