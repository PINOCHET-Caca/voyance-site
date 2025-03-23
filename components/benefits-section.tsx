import { Sparkles } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      id: "birth-chart",
      title: "Obtenez un thème astral précis.",
      description:
        "Découvrez ce que chaque position dans votre thème natal signifie et comment utiliser ces informations pour vous épanouir.",
    },
    {
      id: "zodiac",
      title: "Comprenez votre signe du zodiaque",
      description:
        "Explorez vos caractéristiques zodiacales au-delà des bases pour vous comprendre à un niveau plus profond.",
    },
    {
      id: "horoscopes",
      title: "Nos horoscopes vous préparent à l'avenir",
      description: "Découvrez ce que le futur vous réserve et comment vous préparer à ce qui vous attend.",
    },
    {
      id: "compatibility",
      title: "Apprenez-en plus sur votre compatibilité",
      description:
        "Avec votre partenaire romantique, vos amis et votre famille. Cela vous aidera à construire des relations harmonieuses avec les personnes que vous aimez.",
    },
    {
      id: "readings",
      title: "Essayez les lectures psychiques de Nebula",
      description:
        "Au-delà de l'astrologie. Les cartes de tarot, la chiromancie, la numérologie et l'analyse des rêves sont tout aussi perspicaces.",
    },
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Avantages des Services
              <br />
              d'Astrologie Nebula
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-indigo-900/30">
              {/* Utilisation directe de l'image statique */}
              <img
                src="/images/application-site-voyance-apperçu.webp"
                alt="Application mobile Nebula montrant l'interface des conseillers et l'horoscope personnalisé"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

