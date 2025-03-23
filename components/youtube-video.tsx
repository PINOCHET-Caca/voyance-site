"use client"

import { useState, useEffect } from "react"

interface YouTubeVideoProps {
  videoId: string
  title: string
  thumbnailUrl?: string
}

export default function YouTubeVideo({ videoId, title, thumbnailUrl }: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Utiliser IntersectionObserver pour détecter quand la vidéo est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const videoContainer = document.getElementById(`video-container-${videoId}`)
    if (videoContainer) {
      observer.observe(videoContainer)
    }

    return () => {
      if (videoContainer) {
        observer.unobserve(videoContainer)
      }
      observer.disconnect()
    }
  }, [videoId])

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div
      id={`video-container-${videoId}`}
      className="relative w-full aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      {/* Métadonnées structurées pour SEO */}
      <meta itemProp="name" content={title} />
      <meta
        itemProp="thumbnailUrl"
        content={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      />
      <meta itemProp="uploadDate" content="2023-01-01T08:00:00+08:00" />
      <meta itemProp="duration" content="PT1M33S" />
      <meta itemProp="embedUrl" content={`https://www.youtube.com/embed/${videoId}`} />
      <meta
        itemProp="description"
        content="Découvrez comment les lectures psychiques peuvent transformer votre vie avec Nebula, votre guide vers la clarté spirituelle."
      />

      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer bg-indigo-900/50"
          onClick={handlePlayClick}
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay avec effet de dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />

          {/* Bouton de lecture */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-500/90 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Titre de la vidéo */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg md:text-xl font-medium">{title}</h3>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  )
}

