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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const rect = heroRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const moveX = (x - centerX) / 30
      const moveY = (y - centerY) / 30

      const orbs = heroRef.current.querySelectorAll(".orb")
      orbs.forEach((orb, index) => {
        const speed = index === 0 ? 0.5 : index === 1 ? 0.75 : 1
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb absolute top-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-[60px] opacity-70"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="orb absolute bottom-[10%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-tr from-primary/20 to-success/20 blur-[80px] opacity-60"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
        ></motion.div>
        <motion.div
          className="orb absolute top-[30%] left-[20%] w-[15vw] h-[15vw] rounded-full bg-gradient-to-bl from-accent/10 to-warning/10 blur-[50px] opacity-50"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-8">
            <motion.div
              className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              {t("hero.title.part1")} <span className="gradient-text">{t("hero.title.highlight")}</span>{" "}
              {t("hero.title.part2")}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <motion.button
                onClick={handleEmailContact}
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("hero.startProject")} <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>

              <motion.a
                href="#portfolio"
                className="btn btn-outline"
                whileHover={{ scale: 1.05, borderColor: "currentColor" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("hero.exploreWork")}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              {/* 3D Abstract Shape */}
              {/* 3D Abstract Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-square">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/20 rotate-6 blur-sm"
                    animate={{ rotate: [6, 12, 6] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/40 rotate-12 shadow-lg"
                    animate={{ rotate: [12, 18, 12] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/80 rotate-6 shadow-xl backdrop-blur-md"
                    animate={{ rotate: [6, -6, 6] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>

                  <motion.div
                    className="absolute top-[10%] left-[10%] w-[20%] h-[20%] rounded-full bg-white/50 floating-item-1"
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-[15%] right-[15%] w-[15%] h-[15%] rounded-full bg-white/50 floating-item-2"
                    animate={{
                      y: [10, -10, 10],
                      x: [5, -5, 5],
                      scale: [1, 0.9, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-[30%] left-[25%] w-[10%] h-[10%] rounded-md bg-white/40 floating-item-3"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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