"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, ArrowLeft, Clock, X } from "lucide-react"

// Définir le type pour les médiums
interface PsychicReader {
  id: string
  name: string
  rating: number
  reviews: number
  online: boolean
  specialty: string
  description: string
  fullDescription: string
  imageSrc: string
  compatibility: number
  consultations: number
  experience: number
  isBestMatch?: boolean
  fields?: string[]
}

export default function ResultContent() {
  const [showModal, setShowModal] = useState(true)
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({})

  // État pour stocker les préférences de l'utilisateur
  const [userPreferences, setUserPreferences] = useState({
    subject: "",
    readingType: "",
  })

  // État pour suivre si l'initialisation a été effectuée
  const [initialized, setInitialized] = useState(false)

  // Récupérer les préférences de l'utilisateur depuis les paramètres d'URL et localStorage au chargement
  useEffect(() => {
    // Éviter les mises à jour multiples
    if (initialized) return

    const initParams = () => {
      if (typeof window === "undefined") return

      const urlParams = new URLSearchParams(window.location.search)

      // Récupérer les valeurs exactes des paramètres
      const subjectParam = urlParams.get("subject") || ""
      const typeParam = urlParams.get("type") || ""

      console.log("ResultContent - Raw URL params:", { subjectParam, typeParam })

      // Si les paramètres d'URL sont absents, essayer de récupérer depuis localStorage
      let finalSubject = subjectParam
      let finalType = typeParam

      if (!finalSubject) {
        const storedSubject = localStorage.getItem("nebula_subject")
        if (storedSubject) {
          finalSubject = storedSubject
          console.log("ResultContent - Subject from localStorage:", storedSubject)
        }
      }

      if (!finalType) {
        const storedType = localStorage.getItem("nebula_type")
        if (storedType) {
          finalType = storedType
          console.log("ResultContent - Type from localStorage:", storedType)
        }
      }

      // Mapper les paramètres aux valeurs exactes affichées
      const subjects: Record<string, string> = {
        amour: "Amour & Relations",
        carriere: "Carrière & Travail",
        destin: "Destin & Chemin de vie",
        prediction: "Prédiction du futur",
        guidance: "Guidance spirituelle",
        autre: "Autre",
      }

      const readingTypes: Record<string, string> = {
        amour: "Lecture Amour",
        tarot: "Lecture Tarot",
        numerologie: "Analyse Numérologique",
        astrologie: "Astrologie & Horoscope",
        voyance: "Voyance & Prédiction",
        reves: "Analyse des Rêves",
      }

      // Vérifier si les paramètres existent dans nos mappings
      const subjectDisplay = subjects[finalSubject] || "Prédiction du futur"
      const readingTypeDisplay = readingTypes[finalType] || "Analyse des Rêves"

      console.log("ResultContent - Mapped Values:", { subjectDisplay, readingTypeDisplay })

      setUserPreferences({
        subject: subjectDisplay,
        readingType: readingTypeDisplay,
      })

      // Marquer comme initialisé pour éviter les mises à jour multiples
      setInitialized(true)
    }

    initParams()
  }, [initialized])

  // Fonction pour basculer l'affichage de la description complète
  const toggleDescription = (readerId: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [readerId]: !prev[readerId],
    }))
  }

  // Liste des médiums recommandés
  const recommendedReaders: PsychicReader[] = [
    {
      id: "claire",
      name: "Eliott l'Extraordinaire",
      rating: 5,
      reviews: 134,
      online: true,
      specialty: "Amour & Relations",
      description:
        "Bonjour ! Je m'appelle Eliott ! Et oui, je ne suis pas un homme ordinaire. J'entends, je ressens et je vois plus que la plupart des gens dans le monde. Je peux facilement lire vos émotions et comprendre les intentions de quelqu'un. J'aime travailler avec des problèmes personnels...",
      fullDescription:
        "Bonjour ! Je m'appelle Eliott ! Et oui, je ne suis pas un homme ordinaire. J'entends, je ressens et je vois plus que la plupart des gens dans le monde. Je peux facilement lire vos émotions et comprendre les intentions de quelqu'un. J'aime travailler avec des problèmes personnels et je suis particulièrement doué pour aider les gens à trouver leur chemin dans la vie. Avec plus de 11 ans d'expérience en lecture psychique, j'ai développé une méthode unique qui combine l'intuition, la clairvoyance et l'empathie pour vous offrir des conseils précis et personnalisés.",
      imageSrc: "/images/claire-voyante-femme.jpg",
      compatibility: 98,
      consultations: 8883,
      experience: 11,
      isBestMatch: true,
      fields: ["Vie", "Lecture de tarot", "Remèdes"],
    },
    {
      id: "anissa",
      name: "Sophia l'Oracle Voilée",
      rating: 5,
      reviews: 36,
      online: true,
      specialty: "Tarot & Numérologie",
      description:
        "Sophia est une lectrice de tarot et médium expérimentée avec une connaissance profonde de l'astrologie. Son voyage a commencé par l'exploration des énergies des cartes de tarot, ce qui l'a aidée à découvrir les cycles de vie et les vérités cachées. Sophia se spécialise...",
      fullDescription:
        "Sophia est une lectrice de tarot et médium expérimentée avec une connaissance profonde de l'astrologie. Son voyage a commencé par l'exploration des énergies des cartes de tarot, ce qui l'a aidée à découvrir les cycles de vie et les vérités cachées. Sophia se spécialise dans la lecture des énergies subtiles et peut vous aider à comprendre les influences cosmiques qui façonnent votre vie. Avec 7 ans d'expérience et plus de 700 consultations, elle a développé une approche unique qui combine la spiritualité et la psychologie pour vous offrir des conseils pratiques et inspirants.",
      imageSrc: "/images/anissa-voyante-femme.jpg",
      compatibility: 95,
      consultations: 705,
      experience: 7,
      fields: ["Lecture de tarot", "Spiritualité", "Expert en relations"],
    },
    {
      id: "emilie",
      name: "Noah",
      rating: 5,
      reviews: 44,
      online: true,
      specialty: "Voyance & Prédiction",
      description:
        "Rencontrez Noah, un intuitif psychique chevronné passionné par l'accompagnement des autres vers leur plus haut potentiel. Avec des années d'expérience dans les études métaphysiques, Noah combine ses capacités empathiques avec des intuitions profondes...",
      fullDescription:
        "Rencontrez Noah, un intuitif psychique chevronné passionné par l'accompagnement des autres vers leur plus haut potentiel. Avec des années d'expérience dans les études métaphysiques, Noah combine ses capacités empathiques avec des intuitions profondes pour vous offrir des lectures précises et transformatrices. Spécialisé dans la thérapie énergétique et les rituels de guérison, Noah peut vous aider à surmonter les obstacles émotionnels et à trouver votre chemin vers l'épanouissement personnel. Avec plus de 2600 consultations réussies, Noah est reconnu pour sa capacité à connecter profondément avec ses clients.",
      imageSrc: "/images/emilie-voyante-femme.jpg",
      compatibility: 92,
      consultations: 2631,
      experience: 7,
      fields: ["Lecture de tarot", "Thérapie", "Rituels énergétiques"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-indigo-950">
      {/* Bannière supérieure */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2">
          <span className="font-medium">Obtenez 3 minutes GRATUITES pour votre première consultation!</span>
        </div>
      </div>

      {/* Modal pour les 3 minutes gratuites */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xs mx-4 relative overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10 cursor-pointer"
              type="button"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Fermer</span>
            </button>

            <div className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-xl font-bold text-center text-gray-900 mb-2">3 MINUTES GRATUITES</h2>
              <p className="text-sm text-center text-gray-600 mb-6">
                Obtenez des réponses à vos questions par un médium choisi selon vos préférences
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium cursor-pointer"
              >
                Profiter Maintenant
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col px-4 py-8 md:py-12">
        {/* En-tête */}
        <div className="max-w-4xl mx-auto w-full">
          {/* Bouton retour */}
          <div className="mb-8">
            <Link
              href="/quiz/date"
              className="text-gray-300 hover:text-white flex items-center transition-colors cursor-pointer"
              aria-label="Retour à la question précédente"
            >
              <ArrowLeft className="h-5 w-5 mr-1" aria-hidden="true" />
              <span>Retour</span>
            </Link>
          </div>

          {/* Titre dynamique basé sur les choix exacts de l'utilisateur */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Vos Préférences: {userPreferences.subject} + {userPreferences.readingType}
          </h1>
        </div>

        {/* Liste des médiums recommandés */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="space-y-6">
            {recommendedReaders.map((reader) => (
              <div
                key={reader.id}
                className={`${reader.isBestMatch ? "bg-gradient-to-r from-purple-600 to-pink-500 p-1 rounded-lg" : ""}`}
              >
                <div
                  className={`${reader.isBestMatch ? "relative" : ""} bg-indigo-900/50 rounded-lg overflow-hidden hover:bg-indigo-900/70 transition-colors duration-200`}
                >
                  {reader.isBestMatch && (
                    <div className="absolute top-0 left-6 bg-purple-500 text-white text-xs px-3 py-1 rounded-b-md font-medium">
                      Votre Meilleur Match
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Colonne de gauche: Photo, identité et description */}
                      <div className="md:w-1/2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={reader.imageSrc || "/placeholder.svg"}
                              alt={`${reader.name} - Médium psychique spécialisé en ${reader.specialty}`}
                              width={80}
                              height={80}
                              className="object-cover"
                              loading="lazy"
                            />
                            <div
                              className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-indigo-900 ${reader.online ? "bg-green-500" : "bg-gray-500"}`}
                            ></div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h2 className="text-xl font-bold text-white">{reader.name}</h2>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-lg font-bold text-white">{reader.rating}</span>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-300">{reader.reviews} avis</span>
                            </div>
                          </div>
                        </div>

                        {/* Description placée sous l'identité */}
                        <div className="text-gray-300 text-sm mb-4">
                          <p>{expandedDescriptions[reader.id] ? reader.fullDescription : reader.description}</p>
                          <button
                            onClick={() => toggleDescription(reader.id)}
                            className="text-purple-300 hover:text-purple-200 mt-1 text-sm font-medium cursor-pointer"
                          >
                            {expandedDescriptions[reader.id] ? "Lire moins" : "Lire plus"}
                          </button>
                        </div>
                      </div>

                      {/* Colonne de droite: Stats, domaines d'expertise et bouton */}
                      <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between mb-4">
                            <div className="text-center">
                              <p className="text-white font-bold">{reader.consultations}</p>
                              <p className="text-gray-300 text-xs">consultations</p>
                            </div>
                            <div className="text-center">
                              <p className="text-white font-bold">{reader.experience} ans</p>
                              <p className="text-gray-300 text-xs">d&aposexpérience</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-white text-sm mb-2">Domaines d&aposexpertise:</p>
                            <div className="flex flex-wrap gap-2">
                              {reader.fields?.map((field) => (
                                <span key={field} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                                  {field}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                          <div className="text-sm text-gray-300 mr-4">
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                              3 minutes gratuites
                            </span>
                          </div>
                          <Link
                            href="#"
                            className="bg-white text-indigo-900 px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity font-medium cursor-pointer"
                          >
                            Démarrer Chat Gratuit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

