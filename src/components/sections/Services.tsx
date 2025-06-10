"use client"

import type React from "react"
import { useState } from "react"
import { Globe, Smartphone, Database, Cpu, Lock, Trophy } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { motion } from "framer-motion"

interface Service {
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  featureKeys: string[]
  color: string
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null)
  const { t } = useLanguage()

  const services: Service[] = [
    {
      icon: <Globe className="h-8 w-8" />,
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
      featureKeys: [
        "services.web.feature1",
        "services.web.feature2",
        "services.web.feature3",
        "services.web.feature4",
        "services.web.feature5",
      ],
      color: "from-primary to-primary-light",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      titleKey: "services.mobile.title",
      descriptionKey: "services.mobile.description",
      featureKeys: [
        "services.mobile.feature1",
        "services.mobile.feature2",
        "services.mobile.feature3",
        "services.mobile.feature4",
        "services.mobile.feature5",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Database className="h-8 w-8" />,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
      featureKeys: [
        "services.custom.feature1",
        "services.custom.feature2",
        "services.custom.feature3",
        "services.custom.feature4",
        "services.custom.feature5",
      ],
      color: "from-success to-primary",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      titleKey: "services.api.title",
      descriptionKey: "services.api.description",
      featureKeys: [
        "services.api.feature1",
        "services.api.feature2",
        "services.api.feature3",
        "services.api.feature4",
        "services.api.feature5",
      ],
      color: "from-warning to-accent",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      titleKey: "services.analytics.title",
      descriptionKey: "services.analytics.description",
      featureKeys: [
        "services.analytics.feature1",
        "services.analytics.feature2",
        "services.analytics.feature3",
        "services.analytics.feature4",
        "services.analytics.feature5",
      ],
      color: "from-error to-accent",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      titleKey: "services.transformation.title",
      descriptionKey: "services.transformation.description",
      featureKeys: [
        "services.transformation.feature1",
        "services.transformation.feature2",
        "services.transformation.feature3",
        "services.transformation.feature4",
        "services.transformation.feature5",
      ],
      color: "from-primary to-success",
    },
  ]

  const handleServiceHover = (index: number) => {
    setActiveService(index)
  }

  const handleServiceLeave = () => {
    setActiveService(null)
  }

  // // Variantes de animación para las tarjetas
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 50, rotateX: -15 },
  //   visible: (index: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     rotateX: 0,
  //     transition: {
  //       delay: index * 0.1,
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   }),
  // }

  // Variantes para animaciones desde diferentes direcciones
  const getDirectionVariant = (index: number) => {
    const directions = [
      { x: -100, y: 0 }, // izquierda
      { x: 0, y: -100 }, // arriba
      { x: 100, y: 0 }, // derecha
      { x: -100, y: 0 }, // izquierda
      { x: 0, y: 100 }, // abajo
      { x: 100, y: 0 }, // derecha
    ]

    return {
      hidden: {
        opacity: 0,
        x: directions[index].x,
        y: directions[index].y,
        scale: 0.8,
        rotateY: index % 2 === 0 ? -30 : 30,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          delay: index * 0.15,
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        },
      },
    }
  }

  return (
    <section id="services" className="relative bg-secondary py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("services.title")} <span className="gradient-text">{t("services.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`card p-8 h-full bg-background hover:shadow-xl transition-all duration-300 ${
                activeService === index ? "scale-105 shadow-2xl" : ""
              }`}
              variants={getDirectionVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={handleServiceLeave}
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                className="text-xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {t(service.titleKey)}
              </motion.h3>

              <motion.p
                className="mb-6 opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {t(service.descriptionKey)}
              </motion.p>

              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {service.featureKeys.map((featureKey, fIndex) => (
                  <motion.li
                    key={fIndex}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.6 + fIndex * 0.1,
                      duration: 0.4,
                    }}
                  >
                    <motion.span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: fIndex * 0.2,
                      }}
                    ></motion.span>
                    {t(featureKey)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
