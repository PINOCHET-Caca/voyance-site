"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)

  // Empêcher le scroll du body quand la modal est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Fermer la modal quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      // Ajouter un délai pour éviter que le clic qui ouvre la modal ne la ferme immédiatement
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 100)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inscription avec:", { email, firstName })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div ref={modalRef} className="bg-indigo-950 rounded-xl shadow-xl w-full max-w-md mx-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white z-10 cursor-pointer"
          type="button"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fermer</span>
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-xl font-semibold text-center text-white">Entrez vos informations</h2>
            <p className="text-sm text-center text-gray-300 mt-1">
              Pour vous assurer de ne pas perdre l'accès à votre compte
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Entrez votre prénom"
                className="w-full px-4 py-3 rounded-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-indigo-900 text-white placeholder-gray-400"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                className="w-full px-4 py-3 rounded-full border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-indigo-900 text-white placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 hover:from-purple-600 hover:to-amber-500 text-white font-medium cursor-pointer"
            >
              Créer mon compte
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => {}}
              className="text-sm text-purple-300 hover:text-purple-200 hover:underline cursor-pointer"
              type="button"
            >
              J'ai déjà un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

