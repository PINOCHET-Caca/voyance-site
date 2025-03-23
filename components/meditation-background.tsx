"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Définir des types pour éviter les erreurs TypeScript
interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  angle: number
}

export default function MeditationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const animationFrameIdRef = useRef<number | null>(null)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    // Charger l'animation après le LCP (Largest Contentful Paint)
    const loadTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 300) // Délai légèrement plus long pour assurer que le contenu principal est chargé

    // Gérer la visibilité de la page
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearTimeout(loadTimer)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || !isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Définir la taille du canvas avec un ratio de pixel correct
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1

      // Définir la taille réelle du canvas en tenant compte du ratio de pixels
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio

      // Définir la taille d'affichage CSS
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      // Mettre à l'échelle le contexte
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Créer des étoiles - Réduire le nombre pour améliorer les performances
    if (starsRef.current.length === 0) {
      const starCount = window.innerWidth < 768 ? 80 : 120 // Moins d'étoiles sur mobile

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const size = 0.5 + Math.random() * 1 // Points plus petits entre 0.5 et 1.5 pixels
        const opacity = 0.6 + Math.random() * 0.4
        const speed = 0.03 + Math.random() * 0.08 // Vitesse réduite
        const angle = Math.random() * Math.PI * 2

        starsRef.current.push({
          x,
          y,
          size,
          opacity,
          speed,
          angle,
        })
      }
    }

    // Limiter le FPS pour réduire l'impact CPU/GPU
    let lastFrameTime = 0
    const targetFPS = 30 // Limiter à 30 FPS au lieu de 60
    const frameInterval = 1000 / targetFPS

    // Animation
    const animate = (timestamp: number) => {
      if (!isVisible) return

      // Limiter le FPS
      const elapsed = timestamp - lastFrameTime
      if (elapsed < frameInterval) {
        animationFrameIdRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = timestamp - (elapsed % frameInterval)

      ctx.fillStyle = "#1e1b4b" // bg-indigo-950
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Dessiner les étoiles
      starsRef.current.forEach((star) => {
        // Mouvement lent
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Rebondir sur les bords
        if (star.x < 0 || star.x > window.innerWidth) {
          star.angle = Math.PI - star.angle
        }
        if (star.y < 0 || star.y > window.innerHeight) {
          star.angle = -star.angle
        }

        // Dessiner le halo lumineux
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Dessiner le cercle central blanc
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.fill()
      })

      // Dessiner quelques lignes de connexion entre les étoiles proches
      // Réduire le nombre de connexions pour améliorer les performances
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      // Limiter le nombre de connexions
      const maxConnections = window.innerWidth < 768 ? 50 : 100
      let connectionCount = 0

      for (let i = 0; i < starsRef.current.length && connectionCount < maxConnections; i++) {
        for (let j = i + 1; j < starsRef.current.length && connectionCount < maxConnections; j++) {
          const dx = starsRef.current[i].x - starsRef.current[j].x
          const dy = starsRef.current[i].y - starsRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(starsRef.current[i].x, starsRef.current[i].y)
            ctx.lineTo(starsRef.current[j].x, starsRef.current[j].y)
            ctx.stroke()
            connectionCount++
          }
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    // Démarrer l'animation avec un délai pour permettre au contenu principal de se charger
    const animationTimer = setTimeout(() => {
      if (isVisible) {
        animationFrameIdRef.current = requestAnimationFrame(animate)
      }
    }, 500)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearTimeout(animationTimer)
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [isLoaded, isVisible])

  return (
    <div className="absolute inset-0 z-0 bg-indigo-950">
      {/* Image statique de fond avant le chargement du canvas */}
      <div
        className={`absolute inset-0 bg-indigo-950 bg-[url('/images/static-stars-bg.jpg')] bg-cover bg-center transition-opacity duration-1000 ${isLoaded ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      ></div>

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{
          pointerEvents: "none",
        }}
        aria-label="Fond d'étoiles animées pour l'ambiance mystique"
        role="img"
      />

      {/* Alternative pour les utilisateurs sans JavaScript */}
      <noscript>
        <div className="absolute inset-0 bg-indigo-950 bg-[url('/images/static-stars-bg.jpg')] bg-cover bg-center">
          <Image
            src="/images/static-stars-bg.jpg"
            alt="Ciel étoilé mystique"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </noscript>
    </div>
  )
}

