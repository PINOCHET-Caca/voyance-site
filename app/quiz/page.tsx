import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Quiz Personnalisé | Trouvez Votre Médium Idéal | Nebula",
  description:
    "Répondez à quelques questions simples pour que nous puissions vous associer au médium parfait pour vos besoins spécifiques. Obtenez 3 minutes gratuites pour votre première consultation!",
  keywords: "voyance personnalisée, médium compatible, quiz astrologique, consultation psychique, voyance gratuite",
  openGraph: {
    title: "Quiz Personnalisé | Trouvez Votre Médium Idéal | Nebula",
    description:
      "Répondez à quelques questions simples pour que nous puissions vous associer au médium parfait pour vos besoins spécifiques.",
    images: [
      {
        url: "/images/nebula-quiz-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quiz Nebula pour trouver votre médium idéal",
      },
    ],
  },
  metadataBase: new URL("https://nebula-voyance.fr"),
  alternates: {
    canonical: "/quiz",
    languages: {
      fr: "/quiz",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Personnalisé | Trouvez Votre Médium Idéal | Nebula",
    description:
      "Répondez à quelques questions simples pour que nous puissions vous associer au médium parfait pour vos besoins spécifiques.",
    images: ["/images/nebula-quiz-og.jpg"],
  },
}

// Ajouter le script JSON-LD pour le SEO
export const generateViewport = () => {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

export default function QuizPage() {
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
              href="/"
              className="text-gray-300 hover:text-white flex items-center transition-colors"
              aria-label="Retour à l'accueil"
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

            {/* Barre de progression */}
            <div className="flex justify-center items-center gap-2 w-full max-w-md mx-auto">
              <div className="h-1 bg-purple-500 rounded-full w-1/5"></div>
              <div className="h-1 bg-gray-600 rounded-full w-1/5"></div>
              <div className="h-1 bg-gray-600 rounded-full w-1/5"></div>
              <div className="h-1 bg-gray-600 rounded-full w-1/5"></div>
              <div className="h-1 bg-gray-600 rounded-full w-1/5"></div>
            </div>
          </div>

          {/* Question */}
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Quel est votre genre?</h2>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Option Femme */}
              <Link
                href="/quiz/sujet"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner genre féminin"
              >
                <div className="text-purple-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M12 13v8" />
                    <path d="M9 18h6" />
                  </svg>
                </div>
                <span className="text-indigo-950 font-medium">Femme</span>
              </Link>

              {/* Option Homme */}
              <Link
                href="/quiz/sujet"
                className="bg-gray-100 hover:bg-white rounded-lg p-6 flex flex-col items-center transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                aria-label="Sélectionner genre masculin"
              >
                <div className="text-purple-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="10" cy="14" r="5" />
                    <path d="M19 5l-4.5 4.5" />
                    <path d="M15 5h4v4" />
                  </svg>
                </div>
                <span className="text-indigo-950 font-medium">Homme</span>
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
            name: "Quiz Personnalisé | Trouvez Votre Médium Idéal | Nebula",
            description:
              "Répondez à quelques questions simples pour que nous puissions vous associer au médium parfait pour vos besoins spécifiques.",
            url: "https://nebula-voyance.fr/quiz",
            potentialAction: {
              "@type": "ReadAction",
              target: "https://nebula-voyance.fr/quiz",
            },
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

