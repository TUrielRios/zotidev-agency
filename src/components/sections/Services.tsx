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
  console.log(activeService)

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

  // Animación simple para las tarjetas
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="services" className="relative bg-secondary py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("services.title")} <span className="gradient-text">{t("services.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-8 h-full bg-background hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Icono con animación simple */}
              <motion.div
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {service.icon}
              </motion.div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-4">
                {t(service.titleKey)}
              </h3>

              {/* Descripción */}
              <p className="mb-6 opacity-80">
                {t(service.descriptionKey)}
              </p>

              {/* Lista de características */}
              <ul className="space-y-2">
                {service.featureKeys.map((featureKey, fIndex) => (
                  <motion.li
                    key={fIndex}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + fIndex * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}
                    />
                    {t(featureKey)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services