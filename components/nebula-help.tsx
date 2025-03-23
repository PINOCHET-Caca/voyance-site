import { Sparkles, Heart, HandHeart, HeartCrack, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NebulaHelp() {
  const benefits = [
    {
      id: "future",
      icon: <Sparkles className="w-10 h-10 text-purple-300" />,
      text: "Vous découvrirez ce que l'avenir vous réserve. Laissons place uniquement aux bonnes surprises.",
    },
    {
      id: "love",
      icon: <Heart className="w-10 h-10 text-purple-300" />,
      text: "Votre vie amoureuse s'améliorera, et vous oublierez ce que c'est que de vous sentir seul(e), une fois pour toutes.",
    },
    {
      id: "subconscious",
      icon: <HandHeart className="w-10 h-10 text-purple-300" />,
      text: "Nous vous aiderons à explorer votre subconscient et à entrevoir l'avenir grâce aux cartes de tarot ou à l'analyse des rêves.",
    },
    {
      id: "breakup",
      icon: <HeartCrack className="w-10 h-10 text-purple-300" />,
      text: "Si vous avez récemment vécu une rupture difficile ou subi une perte, vous trouverez un moyen de guérir et d'aller de l'avant.",
    },
    {
      id: "answers",
      icon: <Brain className="w-10 h-10 text-purple-300" />,
      text: "Nos conseillers vous aideront à trouver des réponses à tout ce qui vous préoccupe, que ce soit dans votre carrière ou votre vie personnelle.",
    },
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Comment Nebula peut vous aider</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                L&aposastrologie n&aposest qu&aposune des nombreuses choses que Nebula a à offrir. Nous avons des conseillers
                expérimentés qui se spécialisent dans les horoscopes, la compatibilité zodiacale, les cartes de tarot,
                la chiromancie, et d&aposautres techniques psychiques dont vous n&aposavez peut-être jamais entendu parler.
              </p>
              <p>
                Ils sont toujours là pour vous. Qu&aposil s&aposagisse de votre vie amoureuse, de votre carrière, ou de tout
                autre aspect de votre vie, vous pouvez toujours compter sur l&aposaide de nos conseillers psychiques.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <p className="text-gray-200">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/quiz" className="btn-nebula">
            Découvrir nos conseillers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

