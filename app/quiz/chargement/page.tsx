import type { Metadata } from "next"
import LoadingContent from "./LoadingContent"

export const metadata: Metadata = {
  title: "Recherche de votre médium idéal | Nebula",
  description:
    "Nous analysons votre profil pour vous associer au médium parfait pour vos besoins. Patientez quelques instants pendant que nous trouvons votre match idéal.",
  keywords: "médium compatible, voyance personnalisée, association médium, profil astrologique, consultation psychique",
  openGraph: {
    title: "Recherche de votre médium idéal | Nebula",
    description: "Nous analysons votre profil pour vous associer au médium parfait pour vos besoins.",
    images: [
      {
        url: "/images/nebula-matching-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nebula - Recherche de votre médium idéal",
      },
    ],
  },
  alternates: {
    canonical: "/quiz/chargement",
  },
}

export default function ChargementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950">
      <LoadingContent />
    </div>
  )
}

