"use client"

import Link from "next/link"

export function SubjectOptions() {
  // Fonction pour créer un lien avec le paramètre subject
  const createSubjectLink = (subject: string) => {
    // Stocker le sujet dans localStorage pour plus de robustesse
    if (typeof window !== "undefined") {
      localStorage.setItem("nebula_subject", subject)
      console.log("Sujet sauvegardé dans localStorage:", subject)
    }
    return `/quiz/typedelecture?subject=${subject}`
  }

  return (
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
  )
}

