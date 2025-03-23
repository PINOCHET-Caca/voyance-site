import Image from "next/image"
import Link from "next/link"
import { Clock, MoveRight } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import MeditationBackground from "@/components/meditation-background"
import TestimonialStats from "@/components/testimonial-stats"
import PsychicReaders from "@/components/psychic-readers"
import Testimonials from "@/components/testimonials"
import BenefitsSection from "@/components/benefits-section"
import PricingBenefits from "@/components/pricing-benefits"
import YouTubeVideo from "@/components/youtube-video"
import HowItWorks from "@/components/how-it-works"
import NebulaHelp from "@/components/nebula-help"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Top Banner */}
        <div className="bg-amber-300 py-3 px-4 text-center relative">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-black" />
            <span className="font-medium text-black">
              3 Minutes GRATUITES + 80% de RÉDUCTION pour les nouveaux clients
            </span>
            <Link href="/quiz" className="ml-2 btn-nebula-secondary text-black text-xs py-1 px-3">
              Essayer maintenant
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="bg-indigo-950 text-white py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              NEBULA
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Lectures Psychiques
              </Link>
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Médiums
              </Link>
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Sujets
              </Link>
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Signes du Zodiaque
              </Link>
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Thèmes Astraux
              </Link>
              <Link href="/quiz" className="hover:text-purple-300 transition">
                Articles
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/quiz" className="flex items-center gap-1 hover:text-purple-300 transition">
                Connexion <MoveRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 bg-indigo-950 text-white relative overflow-hidden">
          <MeditationBackground />

          <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lecture Psychique & Guidance Spirituelle</h1>
            <h2 className="text-2xl md:text-3xl text-purple-300 font-medium mb-8">
              par les meilleurs conseillers psychiques
            </h2>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-200">
              Utilisez Nebula — votre guide vers la clarté dans la vie et les relations grâce à des conseils spirituels
              personnalisés, et trouvez la paix et le réconfort à travers des lectures psychiques.
            </p>

            {/* Vidéo YouTube */}
            <div className="mb-10">
              <YouTubeVideo
                videoId="qwc0FUTEUSg"
                title="Découvrez comment les lectures psychiques peuvent transformer votre vie"
              />
            </div>

            <Link href="/quiz" className="btn-nebula">
              <span>Trouvez Votre Médium</span>
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Services Section */}
          <div className="max-w-6xl mx-auto px-4 pb-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Service 1 - Trouvez votre âme sœur */}
              <div className="flex flex-col items-center">
                <Link href="/quiz" className="block">
                  <div className="rounded-full overflow-hidden border-4 border-indigo-800 mb-4 relative w-[200px] h-[200px]">
                    <Image
                      src="/images/portrait-femme-souriante.jpg"
                      alt="Femme souriante avec une veste en jean - Trouvez votre âme sœur"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-purple-300 text-lg font-medium italic">Trouvez votre âme sœur</p>
                </Link>
              </div>

              {/* Service 2 - Récupérez votre ex */}
              <div className="flex flex-col items-center">
                <Link href="/quiz" className="block">
                  <div className="rounded-full overflow-hidden border-4 border-indigo-800 mb-4 w-[200px] h-[200px]">
                    <Image
                      src="/images/couple-heureux-montage (1).jpg"
                      alt="Couple formant un cœur avec leurs mains face à un paysage - Récupérez votre ex"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-purple-300 text-lg font-medium italic">Récupérez votre ex</p>
                </Link>
              </div>

              {/* Service 3 - Restaurez vos relations */}
              <div className="flex flex-col items-center">
                <Link href="/quiz" className="block">
                  <div className="rounded-full overflow-hidden border-4 border-indigo-800 mb-4 w-[200px] h-[200px]">
                    <Image
                      src="/images/femme-heureuse-couple.jpg"
                      alt="Couple se tenant la main face à un coucher de soleil - Restaurez vos relations"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-purple-300 text-lg font-medium italic">Restaurez vos relations</p>
                </Link>
              </div>

              {/* Service 4 - Retrouvez le bonheur */}
              <div className="flex flex-col items-center">
                <Link href="/quiz" className="block">
                  <div className="rounded-full overflow-hidden border-4 border-indigo-800 mb-4 w-[200px] h-[200px]">
                    <Image
                      src="/images/couple-heureux-femme-homme.jpg"
                      alt="Couple heureux admirant un paysage de montagne - Retrouvez le bonheur"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-purple-300 text-lg font-medium italic">Retrouvez le bonheur</p>
                </Link>
              </div>

              {/* Service 5 - Trouvez-vous */}
              <div className="flex flex-col items-center">
                <Link href="/quiz" className="block">
                  <div className="rounded-full overflow-hidden border-4 border-indigo-800 mb-4 w-[200px] h-[200px]">
                    <Image
                      src="/images/femme-heureuse-rire (1).jpg"
                      alt="Femme joyeuse avec des écouteurs sur fond jaune - Trouvez-vous"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-purple-300 text-lg font-medium italic">Trouvez-vous</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonial and Stats Section */}
          <div className="pb-0">
            <TestimonialStats />
          </div>

          {/* Psychic Readers Section */}
          <div className="pt-0">
            <PsychicReaders />
          </div>

          {/* Témoignages clients - avec moins d'espace au-dessus */}
          <div className="pt-0">
            <Testimonials />
          </div>

          {/* Benefits Section */}
          <div className="pt-0">
            <BenefitsSection />
          </div>

          {/* Pricing Benefits */}
          <div className="pt-0">
            <PricingBenefits />
          </div>

          {/* Section Explore Topics temporairement supprimée */}

          {/* How It Works */}
          <div className="pt-0">
            <HowItWorks />
          </div>

          {/* Nebula Help - Nouvelle section */}
          <div className="pt-0">
            <NebulaHelp />
          </div>
        </main>

        {/* Footer - maintenant en dehors du main */}
        <SiteFooter />
      </div>

      {/* Script JSON-LD pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nebula",
            url: "https://nebula-voyance.fr",
            logo: "https://nebula-voyance.fr/logo.png",
            description:
              "Trouvez la clarté dans votre vie et vos relations grâce à des conseils spirituels personnalisés",
            sameAs: [
              "https://www.facebook.com/nebulavoyance",
              "https://www.instagram.com/nebulavoyance",
              "https://twitter.com/nebulavoyance",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "FR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contact@nebula-voyance.fr",
            },
            offers: {
              "@type": "Offer",
              description: "3 Minutes GRATUITES + 80% de RÉDUCTION pour les nouveaux clients",
              url: "https://nebula-voyance.fr/quiz",
            },
          }),
        }}
      />
    </>
  )
}

