"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Portfolio from "./components/sections/Portfolio"
import Technologies from "./components/sections/Technologies"
import Process from "./components/sections/Process"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen transition-colors duration-300 overflow-hidden">
            <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <Navbar />
              <Routes>
                {/* Página principal con todas las secciones */}
                <Route
                  path="/"
                  element={
                    <main>
                      <Hero />
                      <Services />
                      <Portfolio />
                      <Technologies />
                      <Process />
                    </main>
                  }
                />

                {/* Página individual para cada proyecto */}
                <Route path="/:projectId" element={<ProjectDetail />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
