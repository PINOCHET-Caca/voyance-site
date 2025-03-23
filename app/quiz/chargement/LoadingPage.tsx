"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Star } from "lucide-react"

// Définir le type pour les avis clients
interface Testimonial {
  id: number
  name: string
  date: string
  rating: number
  text: string
  imageSrc?: string
}

// Liste des avis clients
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Thérèse Dubois",
    date: "11/10/2023",
    rating: 5,
    text: "Merci infiniment, Olivia ! Vos lectures ont joué un rôle crucial dans mon parcours de guérison après ma rupture.",
    imageSrc: "/images/claire-voyante-femme.jpg",
  },
  {
    id: 2,
    name: "Marie Lambert",
    date: "03/09/2023",
    rating: 5,
    text: "Je suis impressionnée par la précision des prédictions. Tout ce que vous m'avez dit s'est réalisé en moins de deux mois !",
    imageSrc: "/images/julie-voyante-femme.jpg",
  },
  {
    id: 3,
    name: "Laurent Martin",
    date: "22/08/2023",
    rating: 5,
    text: "Grâce à vos conseils, j'ai enfin trouvé le courage de changer de carrière. Je n'ai jamais été aussi épanoui professionnellement.",
    imageSrc: "/images/jean-claude-voyant-homme.jpg",
  },
  {
    id: 4,
    name: "Sophie Moreau",
    date: "15/07/2023",
    rating: 4,
    text: "Vos conseils m'ont aidée à prendre du recul sur ma situation amoureuse. J'ai maintenant une vision plus claire de ce que je veux vraiment.",
    imageSrc: "/images/anissa-voyante-femme.jpg",
  },
]

export default function LoadingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  // Effet pour animer la progression
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Augmenter progressivement jusqu'à 100%
        const newProgress = prev + Math.random() * 5

        // Rediriger vers la page de résultats une fois à 100%
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            router.push("/quiz/resultat")
          }, 500)
          return 100
        }

        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [router])

  // Effet pour faire défiler les témoignages
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(testimonialInterval)
  }, [])

  // Témoignage actuel
  const currentTestimonial = testimonials[currentTestimonialIndex]

  // Formater le pourcentage pour l'affichage
  const formattedProgress = Math.min(Math.floor(progress), 100)

  return (
    <div className="flex flex-col min-h-screen bg-indigo-950 items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wider text-white">NEBULA</h1>
        </div>

        {/* Message principal */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Tout est prêt, nous vous associons</h2>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">aux meilleurs médiums</h2>

        {/* Cercle de progression */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Cercle de fond */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#4B5563" strokeWidth="8" />

            {/* Cercle de progression */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              className="transition-all duration-300 ease-out"
            />

            {/* Pourcentage au centre */}
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="white" fontWeight="bold">
              {formattedProgress}%
            </text>
          </svg>
        </div>

        <p className="text-gray-300 mb-12">Nous vous associons aux meilleurs médiums...</p>

        {/* Statistiques */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">30 millions de personnes</h3>
          <p className="text-gray-300">ont choisi Nebula</p>
        </div>

        {/* Carrousel de témoignages */}
        <div className="bg-white rounded-lg p-4 shadow-lg max-w-md mx-auto">
          <div className="flex items-start gap-3 mb-2">
            {currentTestimonial.imageSrc ? (
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.imageSrc || "/placeholder.svg"}
                  alt={`Photo de ${currentTestimonial.name}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium">{currentTestimonial.name.charAt(0)}</span>
              </div>
            )}

            <div>
              <h4 className="font-medium text-gray-900">{currentTestimonial.name}</h4>
              <div className="flex items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < currentTestimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">{currentTestimonial.date}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-sm">{currentTestimonial.text}</p>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentTestimonialIndex ? "bg-purple-500" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

