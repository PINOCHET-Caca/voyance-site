"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import SignupModal from "@/components/signup-modal"
import Link from "next/link"

interface PsychicReader {
  id: string
  name: string
  rating: number
  reviews: number
  online: boolean
  yearsExperience: number
  consultations: number
  description: string
  fullDescription: string
  chatPrice: number
  imageSrc: string
}

const psychicReaders: PsychicReader[] = [
  {
    id: "claire",
    name: "Claire Voyance",
    rating: 4.9,
    reviews: 37,
    online: true,
    yearsExperience: 15,
    consultations: 546,
    description:
      "Mon voyage dans l'astrologie a commencé il y a 15 ans lorsque je suis devenue fascinée par le sujet...",
    fullDescription:
      "Mon voyage dans l'astrologie a commencé il y a 15 ans lorsque je suis devenue fascinée par le sujet. Je vous offre des lectures précises et honnêtes pour vous guider vers votre meilleur chemin. Spécialisée dans les relations amoureuses et les chemins de vie, je peux vous aider à comprendre les énergies qui vous entourent et à prendre les meilleures décisions pour votre avenir. Mes lectures sont basées sur une combinaison d'astrologie, d'intuition et de connexion énergétique.",
    chatPrice: 40,
    imageSrc: "/images/claire-voyante-femme.jpg",
  },
  {
    id: "magalie",
    name: "Magalie Guérison",
    rating: 4.9,
    reviews: 23,
    online: true,
    yearsExperience: 11,
    consultations: 42,
    description: "Bonjour belle âme, je suis Magalie, une spécialiste en guérison avec plus de 11 ans d'expérience...",
    fullDescription:
      "Bonjour belle âme, je suis Magalie, une spécialiste en guérison avec plus de 11 ans d'expérience. Je vous aiderai à trouver la paix intérieure et la clarté. Ma spécialité est la guérison émotionnelle et spirituelle, utilisant des techniques énergétiques pour vous aider à surmonter les blocages et à retrouver l'équilibre. Chaque séance est personnalisée selon vos besoins spécifiques, et je m'engage à créer un espace sûr et bienveillant pour votre processus de guérison.",
    chatPrice: 40,
    imageSrc: "/images/magalie-voyante-femme.jpg",
  },
  {
    id: "anissa",
    name: "Anissa Spirituelle",
    rating: 5,
    reviews: 92,
    online: true,
    yearsExperience: 10,
    consultations: 2869,
    description:
      "En tant qu'astrologue certifiée et numérologue avec des années d'expérience, je me spécialise dans...",
    fullDescription:
      "En tant qu'astrologue certifiée et numérologue avec des années d'expérience, je me spécialise dans les lectures précises qui vous aideront à comprendre votre chemin de vie. Mon approche combine l'astrologie traditionnelle, la numérologie et l'intuition spirituelle pour vous offrir des perspectives profondes sur votre vie. Je peux vous aider à comprendre les cycles planétaires qui influencent votre vie, à identifier vos forces et défis numériques, et à naviguer les transitions importantes avec confiance et clarté.",
    chatPrice: 45,
    imageSrc: "/images/anissa-voyante-femme.jpg",
  },
  {
    id: "emilie",
    name: "Émilie Lumière",
    rating: 5,
    reviews: 110,
    online: true,
    yearsExperience: 21,
    consultations: 3941,
    description:
      "Mon approche consiste à écouter et comprendre les situations de mes clients, en m'accordant à leur énergie...",
    fullDescription:
      "Mon approche consiste à écouter et comprendre les situations de mes clients, en m'accordant à leur énergie et en traduisant les messages que je reçois avec clarté et compassion. Avec plus de 20 ans d'expérience dans la lecture psychique, j'ai développé une méthode unique qui combine l'intuition, la clairvoyance et l'empathie. Je suis particulièrement douée pour aider les personnes à traverser des périodes de transition et à trouver leur véritable but dans la vie. Mes lectures sont toujours honnêtes, mais délivrées avec bienveillance et respect.",
    chatPrice: 50,
    imageSrc: "/images/emilie-voyante-femme.jpg",
  },
  {
    id: "jean-claude",
    name: "Jean-Claude Intuition",
    rating: 5,
    reviews: 59,
    online: false,
    yearsExperience: 4,
    consultations: 405,
    description:
      "Bonjour ! Je suis Jean-Claude, un guérisseur par les cristaux et lecteur intuitif concentré sur l'aide aux personnes...",
    fullDescription:
      "Bonjour ! Je suis Jean-Claude, un guérisseur par les cristaux et lecteur intuitif concentré sur l'aide aux personnes traversant des moments difficiles. Je vous offre des conseils clairs et pratiques. Ma connexion avec le monde spirituel et ma compréhension profonde des énergies des cristaux me permettent d'offrir des lectures qui sont à la fois précises et transformatrices. Je me spécialise dans la guérison des blessures émotionnelles passées et l'alignement des chakras pour favoriser un bien-être holistique.",
    chatPrice: 40,
    imageSrc: "/images/jean-claude-voyant-homme.jpg",
  },
  {
    id: "julie",
    name: "Julie Harmonie",
    rating: 4.9,
    reviews: 51,
    online: true,
    yearsExperience: 9,
    consultations: 1971,
    description:
      "Les contraintes financières, les problèmes amoureux et les questions de vie ou de mort me hantent depuis des années...",
    fullDescription:
      "Les contraintes financières, les problèmes amoureux et les questions de vie ou de mort me hantent depuis des années. Je peux vous aider à trouver des solutions à ces défis. Grâce à mon don de clairvoyance et ma connexion avec le monde spirituel, je peux vous guider à travers les moments les plus difficiles de votre vie. Je suis particulièrement douée pour les questions concernant les finances, l'amour et les décisions importantes. Mes lectures sont directes et honnêtes, mais toujours avec l'intention de vous aider à trouver votre chemin vers le bonheur et l'épanouissement.",
    chatPrice: 40,
    imageSrc: "/images/julie-voyante-femme.jpg",
  },
]

// Images pour la section "Voir plus de médiums"
const additionalReaders = [
  { id: "reader1", imageSrc: "/images/claire-voyante-femme.jpg" },
  { id: "reader2", imageSrc: "/images/jean-claude-voyant-homme.jpg" },
  { id: "reader3", imageSrc: "/images/anissa-voyante-femme.jpg" },
  { id: "reader4", imageSrc: "/images/emilie-voyante-femme.jpg" },
  { id: "reader5", imageSrc: "/images/julie-voyante-femme.jpg" },
]

export default function PsychicReaders() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedReaderId, setSelectedReaderId] = useState<string | null>(null)

  const toggleDescription = (e: React.MouseEvent, readerId: string) => {
    e.stopPropagation() // Empêcher le clic de propager à la carte
    setExpandedDescriptions((prev) => ({
      ...prev,
      [readerId]: !prev[readerId],
    }))
  }

  const handleCardClick = (readerId: string) => {
    setSelectedReaderId(readerId)
    setIsModalOpen(true)
  }

  return (
    <section className="pt-8 pb-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Rencontrez nos médiums doués</h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Obtenez une lecture psychique pour clarifier votre chemin de vie, vous sentir plus confiant face à l'avenir,
          et simplement recevoir des conseils bienveillants sur votre amour, carrière, finances et autres domaines de
          vie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {psychicReaders.map((reader) => (
            <div
              key={reader.id}
              className="bg-indigo-900/50 rounded-lg overflow-hidden cursor-pointer hover:bg-indigo-900/70 transition-colors duration-200"
              onClick={() => handleCardClick(reader.id)}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={reader.imageSrc || "/placeholder.svg"}
                      alt={`${reader.name} - Médium psychique avec ${reader.yearsExperience} ans d'expérience en lecture spirituelle`}
                      width={64}
                      height={64}
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 64px, 64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{reader.name}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-white">{reader.rating}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{reader.reviews} avis</span>
                    </div>
                    <div className="mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${reader.online ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}
                      >
                        {reader.online ? "en ligne" : "hors ligne"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">{reader.yearsExperience} ans</span>
                    <span>d'expérience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">{reader.consultations}</span>
                    <span>consultations</span>
                  </div>
                </div>

                <div className="text-gray-200 text-sm mb-6 flex-grow">
                  <p>{expandedDescriptions[reader.id] ? reader.fullDescription : reader.description}</p>
                  <button
                    onClick={(e) => toggleDescription(e, reader.id)}
                    className="text-purple-300 hover:text-purple-200 mt-1 text-sm font-medium cursor-pointer"
                  >
                    {expandedDescriptions[reader.id] ? "Lire moins" : "Lire plus"}
                  </button>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm text-gray-300">
                    Chat pour <span className="text-purple-300">{reader.chatPrice} crédits/min</span>
                  </div>
                  <Link
                    href="/quiz"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer text-sm font-bold"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    Démarrer chat
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section "Voir plus de médiums" */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            {additionalReaders.map((reader) => (
              <div
                key={reader.id}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-600 -ml-2 first:ml-0 relative"
              >
                <Image
                  src={reader.imageSrc || "/placeholder.svg"}
                  alt="Médium psychique"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full bg-indigo-600 -ml-2 flex items-center justify-center text-white font-medium">
              +124
            </div>
          </div>

          <Link
            href="/quiz"
            className="flex items-center text-purple-300 hover:text-purple-200 font-medium cursor-pointer group"
          >
            Voir plus de médiums
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Modal de connexion/inscription */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

