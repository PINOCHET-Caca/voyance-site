"use client"

import { useState, useEffect } from "react"
import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="rounded-full w-10 h-10 bg-indigo-900 hover:bg-indigo-800"
    >
      <Moon className="h-5 w-5 text-purple-300" />
      <span className="sr-only">Changer le thème</span>
    </Button>
  )
}

