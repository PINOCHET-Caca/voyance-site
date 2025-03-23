import type React from "react"
import Link from "next/link"
import { DollarSign, Globe, Heart, Sparkles, Coins, Users } from "lucide-react"

interface TopicCard {
  id: string
  title: string
  icon: React.ReactNode
  href: string
}

export default function ExploreTopics() {
  const topics: TopicCard[] = [
    {
      id: "cheap",
      title: "VOYANCE ÉCONOMIQUE",
      icon: (
        <div className="bg-yellow-400 p-3 rounded-full inline-flex">
          <DollarSign className="h-8 w-8 text-indigo-900" />
        </div>
      ),
      href: "/quiz",
    },
    {
      id: "chat",
      title: "CHAT PSYCHIQUE",
      icon: (
        <div className="bg-purple-400 p-3 rounded-full inline-flex">
          <Globe className="h-8 w-8 text-indigo-900" />
        </div>
      ),
      href: "/quiz",
    },
    {
      id: "love",
      title: "VOYANCE AMOUREUSE",
      icon: (
        <div className="bg-pink-400 p-3 rounded-full inline-flex">
          <Heart className="h-8 w-8 text-indigo-900 fill-pink-600" />
        </div>
      ),
      href: "/quiz",
    },
    {
      id: "tarot",
      title: "TAROT",
      icon: (
        <div className="bg-purple-300 p-3 rounded-full inline-flex">
          <Sparkles className="h-8 w-8 text-indigo-900" />
        </div>
      ),
      href: "/quiz",
    },
    {
      id: "free",
      title: "LECTURE GRATUITE",
      icon: (
        <div className="bg-yellow-400 p-3 rounded-full inline-flex">
          <Coins className="h-8 w-8 text-indigo-900" />
        </div>
      ),
      href: "/quiz",
    },
    {
      id: "soulmate",
      title: "ÂME SŒUR",
      icon: (
        <div className="bg-pink-400 p-3 rounded-full inline-flex">
          <Users className="h-8 w-8 text-indigo-900" />
        </div>
      ),
      href: "/quiz",
    },
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Explorez les sujets populaires sur Nebula</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={topic.href}
              className="bg-indigo-800/70 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-700/70 transition-all group hover:shadow-lg hover:shadow-indigo-900/30 hover:-translate-y-1"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{topic.icon}</div>
              <h3 className="text-white font-bold text-sm">{topic.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

