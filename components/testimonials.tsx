import { Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  initial: string
  rating: number
  text: string
  bgColor: string
}

const testimonials: Testimonial[] = [
  {
    id: "nicole",
    name: "Nicole",
    initial: "N",
    rating: 5,
    text: "C'était exactement ce dont j'avais besoin. Les conseils pour avoir confiance en moi et en mes croyances. La lecture psychique sur le site Nebula était directe comme j'en ai besoin, surtout avec qui je suis en tant que personne. Je recommande vivement !",
    bgColor: "bg-indigo-700",
  },
  {
    id: "valerie",
    name: "Valérie",
    initial: "V",
    rating: 5,
    text: "C'est effrayant de voir à quel point cet horoscope Nebula est précis. Je n'arrive pas à y croire. Je n'écris jamais d'avis mais je devais absolument le faire pour celui-ci. J'adore, ça m'a tellement aidée à me comprendre moi-même.",
    bgColor: "bg-purple-700",
  },
  {
    id: "miriam",
    name: "Miriam",
    initial: "M",
    rating: 5,
    text: "Très rassurant et au niveau. Cela a vraiment renforcé ma confiance pour prendre des décisions importantes qui s'annonçaient. Je suis reconnaissante pour cette guidance précieuse.",
    bgColor: "bg-indigo-600",
  },
  {
    id: "thomas",
    name: "Thomas",
    initial: "T",
    rating: 4,
    text: "J'étais sceptique au début, mais après ma première consultation, j'ai été bluffé par la précision des prédictions. Six mois plus tard, tout s'est réalisé comme prévu. Une expérience incroyable !",
    bgColor: "bg-purple-600",
  },
  {
    id: "sophie",
    name: "Sophie",
    initial: "S",
    rating: 5,
    text: "Ma médium a su identifier exactement les blocages dans ma relation amoureuse. Grâce à ses conseils, j'ai pu résoudre ces problèmes et aujourd'hui nous sommes plus heureux que jamais.",
    bgColor: "bg-indigo-800",
  },
  {
    id: "marc",
    name: "Marc",
    initial: "M",
    rating: 5,
    text: "Après des années d'incertitude professionnelle, une seule consultation m'a donné la clarté dont j'avais besoin. J'ai changé de carrière et je ne me suis jamais senti aussi épanoui. Merci Nebula !",
    bgColor: "bg-purple-800",
  },
]

export default function Testimonials() {
  return (
    <section className="pt-0 pb-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nos clients nous adorent</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-white">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-indigo-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-medium`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-300 text-sm italic relative">
                <span className="text-purple-300 text-3xl font-serif absolute -left-1 -top-2 opacity-50">&quot; </span>
                <p className="pl-4">{testimonial.text}</p>
                <span className="text-purple-300 text-3xl font-serif absolute right-0 bottom-0 opacity-50">&quot; </span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}