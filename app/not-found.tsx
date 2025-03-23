import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950 text-white p-4">
      <div className="max-w-md text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <h3 className="text-2xl font-semibold mb-4">Page non trouvée</h3>
        <p className="mb-6 text-gray-300">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link href="/">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">Retour à l'accueil</Button>
        </Link>
      </div>
    </div>
  )
}

