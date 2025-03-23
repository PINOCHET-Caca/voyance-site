import type { Metadata } from "next"
import ResultContent from "./ResultContent"

export const metadata: Metadata = {
  title: "Votre médium idéal | Résultats du Quiz | Nebula",
  description:
    "Découvrez les médiums parfaitement compatibles avec votre profil. Commencez une consultation avec l'un de nos experts en voyance et obtenez 3 minutes gratuites.",
  keywords: "médium compatible, résultat voyance, consultation psychique, médium en ligne, voyance personnalisée",
  openGraph: {
    title: "Votre médium idéal | Résultats du Quiz | Nebula",
    description: "Découvrez les médiums parfaitement compatibles avec votre profil.",
    images: [
      {
        url: "/images/nebula-results-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nebula - Résultats de votre quiz personnalisé",
      },
    ],
  },
  alternates: {
    canonical: "/quiz/resultat",
  },
}

export default function ResultPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950">
      <ResultContent />
    </div>
  )
}

