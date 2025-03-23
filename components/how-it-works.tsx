import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Créez votre compte",
      description:
        "Vous pouvez simplifier le processus, mais nous vous recommandons de compléter notre questionnaire d'inscription. C'est l'une des fonctionnalités clés de Nebula, et cela nous aidera à sélectionner les meilleurs médiums pour vous.",
      bgColor: "bg-purple-100",
      textColor: "text-indigo-950",
    },
    {
      number: "2",
      title: "Ajoutez vos informations de paiement",
      description:
        "Pour pouvoir discuter avec un conseiller, vous devrez ajouter un moyen de paiement à votre compte. Ne vous inquiétez pas, vous ne serez pas facturé avant de commencer votre première séance de lecture en ligne.",
      bgColor: "bg-amber-100",
      textColor: "text-indigo-950",
    },
    {
      number: "3",
      title: "Choisissez votre médium",
      description:
        "Nous vous proposerons les meilleurs médiums en fonction de vos réponses à notre questionnaire. Vous pouvez choisir l'un d'entre eux ou consulter notre liste complète de médiums si vous souhaitez plus d'options.",
      bgColor: "bg-purple-200",
      textColor: "text-indigo-950",
    },
    {
      number: "4",
      title: "Commencez votre consultation",
      description:
        "Commencez à discuter avec le médium que vous avez choisi, soit ici, sur Nebula, soit via notre application mobile. Choisissez ce qui vous convient le mieux.",
      bgColor: "bg-green-100",
      textColor: "text-indigo-950",
    },
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Comment ça marche</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step) => (
            <div key={step.number} className={`${step.bgColor} rounded-lg p-6 ${step.textColor}`}>
              <div className="text-3xl font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/quiz" className="btn-nebula">
            Commencer maintenant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

