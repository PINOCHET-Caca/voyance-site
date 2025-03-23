import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-indigo-950 text-white py-12 px-4 w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold tracking-wider mb-6">NEBULA</h2>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mb-6">
            <Link
              href="/quiz"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Suivez-nous sur Instagram"
              title="Instagram Nebula"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="/quiz"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Suivez-nous sur TikTok"
              title="TikTok Nebula"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="/quiz"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Suivez-nous sur Facebook"
              title="Facebook Nebula"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="/quiz"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Suivez-nous sur Twitter"
              title="Twitter Nebula"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Liens du footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <nav aria-labelledby="footer-nebula">
            <h3 id="footer-nebula" className="font-bold mb-4">
              Nebula
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Communiqués de presse Nebula"
                >
                  Presse
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Avis des clients sur Nebula"
                >
                  Avis Nebula
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-support">
            <h3 id="footer-support" className="font-bold mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Centre d'aide et support Nebula"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Politique de confidentialité Nebula"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Paramètres de consentement Nebula"
                >
                  Paramètres de consentement
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Conditions générales d'utilisation Nebula"
                >
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Conditions de paiement Nebula"
                >
                  Conditions de paiement
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Politique de remboursement Nebula"
                >
                  Politique de remboursement
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Règles du chat en direct Nebula"
                >
                  Règles du chat en direct
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="font-bold mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Contacter le service client Nebula"
                >
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Questions fréquemment posées sur Nebula"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-account">
            <h3 id="footer-account" className="font-bold mb-4">
              Compte
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Créer un compte ou se connecter à Nebula"
                >
                  Inscription | Connexion
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-300 hover:text-white text-sm" title="Devenir médium sur Nebula">
                  Devenir médium
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-app">
            <h3 id="footer-app" className="font-bold mb-4">
              Application Astrologie
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white text-sm"
                  title="Application d'astrologie Nebula"
                >
                  Application Nebula
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Méthodes de paiement et copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-3">
              <Image src="/images/paypal-logo.7b064d80.png" alt="Paiement par PayPal accepté" width={38} height={24} />
              <Image
                src="/images/mastercard-logo.f474a1bf.png"
                alt="Paiement par Mastercard accepté"
                width={38}
                height={24}
              />
              <Image src="/images/visa-logo.71ed65de.png" alt="Paiement par Visa accepté" width={38} height={24} />
              <Image
                src="/images/amex-logo.01cbcbc5.png"
                alt="Paiement par American Express accepté"
                width={38}
                height={24}
              />
              <Image src="/images/jcb-logo.73ce881a.png" alt="Paiement par JCB accepté" width={38} height={24} />
              <Image
                src="/images/apple-pay-logo.82178260.png"
                alt="Paiement par Apple Pay accepté"
                width={38}
                height={24}
              />
              <Image
                src="/images/discover-logo.b0835f0d.png"
                alt="Paiement par Discover accepté"
                width={38}
                height={24}
              />
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>2025 Spiritual Nebula Limited. © Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

