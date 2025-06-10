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

  // Animación simple para las tarjetas del portfolio
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("portfolio.title")} <span className="gradient-text">{t("portfolio.titleHighlight")}</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("portfolio.subtitle")}
          </motion.p>
        </div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-secondary hover:bg-secondary-dark"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05 + 0.3,
                duration: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t(category.nameKey)}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                className="group card bg-background overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
                layout
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 flex gap-4">
                      <button
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProjectClick(project.id)
                        }}
                      >
                        {t("portfolio.viewDetails")} <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t(project.titleKey)}
                  </h3>
                  <p className="mb-4 text-sm opacity-80">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary hover:bg-secondary-dark transition-colors duration-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.03,
                          duration: 0.3,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Portfolio