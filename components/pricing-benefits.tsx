import { Users, HandCoins, Gift, Star } from "lucide-react"
import Link from "next/link"

export default function PricingBenefits() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte 1: Tarif de base */}
          <div className="bg-indigo-100 rounded-xl p-8 text-center flex flex-col items-center">
            <div className="bg-indigo-900 p-3 rounded-full mb-4 inline-flex">
              <Users className="h-8 w-8 text-purple-300" />
            </div>

            <h3 className="text-indigo-900 text-4xl font-bold mb-2">1€/min</h3>

            <p className="text-indigo-900 font-medium mb-4">
              Consultations psychiques en ligne
              <br />à partir de 1€/min
            </p>

            <div className="mt-auto">
              <Link
                href="/quiz"
                className="bg-purple-200 hover:bg-purple-300 text-indigo-900 font-bold py-3 px-6 rounded-full transition-colors"
              >
                COMMENCER
              </Link>
            </div>
          </div>

          {/* Carte 2: Bonus de bienvenue */}
          <div className="bg-indigo-100 rounded-xl p-8 text-center flex flex-col items-center">
            <div className="bg-indigo-900 p-3 rounded-full mb-4 inline-flex">
              <HandCoins className="h-8 w-8 text-purple-300" />
            </div>

            <h3 className="text-indigo-900 text-4xl font-bold mb-2">
              3 min gratuites
              <br />
              <span className="text-purple-600">+ 80% offert</span>
            </h3>

            <p className="text-indigo-900 font-medium mb-4">
              3 minutes gratuites + 80% de réduction
              <br />
              sur votre première consultation
            </p>

            <div className="mt-auto">
              <Link
                href="/quiz"
                className="bg-purple-200 hover:bg-purple-300 text-indigo-900 font-bold py-3 px-6 rounded-full transition-colors"
              >
                PROFITER DE L'OFFRE
              </Link>
            </div>
          </div>

          {/* Carte 3: Programme de fidélité */}
          <div className="bg-indigo-100 rounded-xl p-8 text-center flex flex-col items-center">
            <div className="bg-indigo-900 p-3 rounded-full mb-4 inline-flex">
              <Gift className="h-8 w-8 text-purple-300" />
            </div>

            <h3 className="text-indigo-900 text-4xl font-bold mb-2">Nebula Rewards</h3>

            <p className="text-indigo-900 font-medium mb-4">
              Obtenez des offres exclusives, avantages et bonus
              <br />
              avec chaque consultation
            </p>

            <ul className="text-left text-indigo-900 mb-4 font-medium">
              <li className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Profitez de bonus hebdomadaires</span>
              </li>
              <li className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Obtenez des avantages généreux</span>
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Débloquez des récompenses exclusives</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Link
                href="/quiz"
                className="bg-purple-200 hover:bg-purple-300 text-indigo-900 font-bold py-3 px-6 rounded-full transition-colors"
              >
                REJOINDRE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

