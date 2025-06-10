"use client"

import type React from "react"
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"
import lacocina from "../../assets/lacocina-admin.png"
import defrancisco from "../../assets/defrancisco.png"
import pacta from "../../assets/pacta.png"
import martinvirasoro from "../../assets/martinvirasoro.png"
import robochef from "../../assets/robochef.png"
import cocteler from "../../assets/cocteler.png"

interface Project {
  id: number
  titleKey: string
  category: string
  image: string
  descriptionKey: string
  technologies: string[]
  externalUrl?: string
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [filter, setFilter] = useState<string>("all")

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "portfolio.project1.title",
      category: "web",
      image: defrancisco,
      descriptionKey: "portfolio.project1.description",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
      externalUrl: "https://defranciscoestudio.com",
    },
    {
      id: 2,
      titleKey: "portfolio.project2.title",
      category: "mobile",
      image: robochef,
      descriptionKey: "portfolio.project2.description",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"],
    },
    {
      id: 3,
      titleKey: "portfolio.project3.title",
      category: "enterprise",
      image: lacocina,
      descriptionKey: "portfolio.project3.description",
      technologies: ["Next.js", "Typescript", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      id: 4,
      titleKey: "portfolio.project4.title",
      category: "web",
      image: martinvirasoro,
      descriptionKey: "portfolio.project4.description",
      technologies: ["Wordpress", "Elementor", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 5,
      titleKey: "portfolio.project5.title",
      category: "mobile",
      image: cocteler,
      descriptionKey: "portfolio.project5.description",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"],
    },
    {
      id: 6,
      titleKey: "portfolio.project6.title",
      category: "web",
      image: pacta,
      descriptionKey: "portfolio.project6.description",
      technologies: ["Next.js", "Typescript", "Tailwind"],
    },
  ]

  const categories = [
    { id: "all", nameKey: "portfolio.categories.all" },
    { id: "web", nameKey: "portfolio.categories.web" },
    { id: "mobile", nameKey: "portfolio.categories.mobile" },
    { id: "enterprise", nameKey: "portfolio.categories.enterprise" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Función para navegar al detalle del proyecto usando el ID
  const handleProjectClick = (projectId: number) => {
    navigate(`/${projectId}`)
  }

  // Variantes de animación para las tarjetas del portfolio
  const getProjectVariant = (index: number) => {
    const directions = [
      { x: -200, y: -100, rotate: -15 }, // izquierda-arriba
      { x: 0, y: -200, rotate: 0 }, // arriba
      { x: 200, y: -100, rotate: 15 }, // derecha-arriba
      { x: -200, y: 100, rotate: 15 }, // izquierda-abajo
      { x: 0, y: 200, rotate: 0 }, // abajo
      { x: 200, y: 100, rotate: -15 }, // derecha-abajo
    ]

    const direction = directions[index % directions.length]

    return {
      hidden: {
        opacity: 0,
        x: direction.x,
        y: direction.y,
        rotate: direction.rotate,
        scale: 0.6,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        y: -50,
        transition: {
          duration: 0.3,
        },
      },
    }
  }

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("portfolio.title")} <span className="gradient-text">{t("portfolio.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {t("portfolio.subtitle")}
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-secondary hover:bg-secondary-dark"
              }`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t(category.nameKey)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                className="group card bg-background overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={getProjectVariant(index)}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="p-6 flex gap-4">
                      <motion.button
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProjectClick(project.id)
                        }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {t("portfolio.viewDetails")} <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {t(project.titleKey)}
                  </motion.h3>
                  <motion.p
                    className="mb-4 text-sm opacity-80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {t(project.descriptionKey)}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1 + 0.8 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(var(--primary), 0.1)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
