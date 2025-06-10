"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  // Email de contacto - cambia esto por tu email real
  const CONTACT_EMAIL = 'zotidevelopment@gmail.com'; // Reemplaza con tu email real

  // Función para abrir el cliente de correo
  const handleEmailContact = () => {
    // Textos según el idioma seleccionado
    const emailSubject = language === 'es' 
      ? 'Nuevo proyecto - Consulta desde el sitio web' 
      : 'New project - Inquiry from website';
    
    const emailBody = language === 'es'
      ? 'Hola, estoy interesado en iniciar un nuevo proyecto. Me gustaría obtener más información sobre sus servicios y discutir mis necesidades.'
      : 'Hello, I am interested in starting a new project. I would like to get more information about your services and discuss my needs.';
    
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  // Efecto parallax simplificado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const rect = heroRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const moveX = (x - centerX) / 50 // Reducido de 30 a 50 para movimiento más sutil
      const moveY = (y - centerY) / 50

      const orbs = heroRef.current.querySelectorAll(".orb")
      orbs.forEach((orb, index) => {
        const speed = 0.3 + (index * 0.1) // Velocidades más consistentes y lentas
        const el = orb as HTMLElement
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      ref={heroRef}
    >
      {/* Background Elements - Simplificados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb absolute top-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-[60px] opacity-70"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="orb absolute bottom-[10%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-tr from-primary/20 to-success/20 blur-[80px] opacity-60"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="orb absolute top-[30%] left-[20%] w-[15vw] h-[15vw] rounded-full bg-gradient-to-bl from-accent/10 to-warning/10 blur-[50px] opacity-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-8">
            {/* Badge */}
            <motion.div
              className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("hero.badge")}
            </motion.div>

            {/* Título */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("hero.title.part1")} <span className="gradient-text">{t("hero.title.highlight")}</span>{" "}
              {t("hero.title.part2")}
            </motion.h1>

            {/* Descripción */}
            <motion.p
              className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("hero.description")}
            </motion.p>

            {/* Botones */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={handleEmailContact}
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.startProject")} <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>

              <motion.a
                href="#portfolio"
                className="btn btn-outline"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.exploreWork")}
              </motion.a>
            </motion.div>
          </div>

          {/* Elemento visual simplificado */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square">
              {/* Forma 3D simplificada */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-square">
                  {/* Capas de fondo con animaciones suaves */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/20 rotate-6 blur-sm"
                    animate={{ rotate: [6, 10, 6] }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/40 rotate-12 shadow-lg"
                    animate={{ rotate: [12, 16, 12] }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/80 rotate-6 shadow-xl backdrop-blur-md"
                    animate={{ rotate: [6, 2, 6] }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  ></motion.div>

                  {/* Elementos flotantes simplificados */}
                  <motion.div
                    className="absolute top-[10%] left-[10%] w-[20%] h-[20%] rounded-full bg-white/50"
                    animate={{
                      y: [-5, 5, -5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-[15%] right-[15%] w-[15%] h-[15%] rounded-full bg-white/50"
                    animate={{
                      y: [5, -5, 5],
                      scale: [1, 0.95, 1],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatType: "reverse",
                      delay: 1
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-[30%] left-[25%] w-[10%] h-[10%] rounded-md bg-white/40"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero