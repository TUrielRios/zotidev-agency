"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import lacocina from "../assets/lacocina-admin.png"
import lacocina2 from "../assets/lacocina-admin2.png"
import lacocina3 from "../assets/lacocina3.png"
import lacocinaapp from "../assets/lacocina-app.png"
import defrancisco1 from "../assets/carrusel-defrancisco/1.png"
import defrancisco2 from "../assets/carrusel-defrancisco/2.png"
import defrancisco3 from "../assets/carrusel-defrancisco/3.png"
import defrancisco4 from "../assets/carrusel-defrancisco/4.png"
import defrancisco5 from "../assets/carrusel-defrancisco/5.png"
import defrancisco6 from "../assets/carrusel-defrancisco/6.png"
import defrancisco7 from "../assets/carrusel-defrancisco/7.png"
import pacta from "../assets/pacta.png"
import martinvirasoro from "../assets/martinvirasoro.png"
import martinvirasorometidoenlaptop from "../assets/martin-virasoro-metido-en-laptop.png"
import robochef from "../assets/robochef.png"
import cocteler from "../assets/cocteler.png"

interface ProjectImage {
  url: string
  caption: string
}

interface Project {
  id: number
  titleKey: string
  category: string
  images: ProjectImage[]
  descriptionKey: string
  challengeKey: string
  solutionKey: string
  resultsKey: string
  technologies: string[]
  features: string[]
  clientKey: string
  websiteUrl?: string
  appStoreUrl?: string
  playStoreUrl?: string
}

// Componente Carrusel
const ImageCarousel: React.FC<{ images: ProjectImage[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
        <img 
          src={images[0].url || "/placeholder.svg"} 
          alt={images[0].caption} 
          className="w-full h-90 md:h-96 lg:h-[500px] object-cover" 
        />
        <p className="text-sm text-center p-4 bg-secondary/10">{images[0].caption}</p>
      </div>
    )
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg max-w-6xl mx-auto">
      {/* Imagen principal */}
      <div className="relative">
        <img 
          src={images[currentIndex].url || "/placeholder.svg"} 
          alt={images[currentIndex].caption} 
          className="w-full h-90 md:h-96 lg:h-[550px] object-cover transition-opacity duration-300" 
        />
        
        {/* Botones de navegación */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Contador de imágenes */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Caption */}
      <p className="text-sm text-center p-4 bg-secondary/10">{images[currentIndex].caption}</p>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center space-x-2 p-4 bg-secondary/5">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-primary shadow-md' 
                : 'border-transparent hover:border-primary/50'
            }`}
          >
            <img 
              src={image.url || "/placeholder.svg"} 
              alt={image.caption} 
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Scroll automático al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "portfolio.project1.title",
      category: "web",
      images: [
        { url: defrancisco1, caption: t("portfolio.project1.image2.caption") || "Página de Inicio" },
        { url: defrancisco2, caption: t("portfolio.project1.image3.caption") || "Página" },
        { url: defrancisco3, caption: t("portfolio.project1.image4.caption") || "interactividad" },
        { url: defrancisco4, caption: t("portfolio.project1.image5.caption") || "proyectos" },
        { url: defrancisco5, caption: t("portfolio.project1.image6.caption") || "proyecto detalle" },
        { url: defrancisco6, caption: t("portfolio.project1.image7.caption") || "admin" },
        { url: defrancisco7, caption: t("portfolio.project1.image8.caption") || "admin" },


      ],
      descriptionKey: "portfolio.project1.description",
      challengeKey: "portfolio.project1.challenge",
      solutionKey: "portfolio.project1.solution",
      resultsKey: "portfolio.project1.results",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
      features: [
        t("portfolio.project1.feature1") || "Arquitectura escalable",
        t("portfolio.project1.feature2") || "Interfaz responsiva",
        t("portfolio.project1.feature3") || "Optimización SEO",
        t("portfolio.project1.feature4") || "Panel de administración",
      ],
      clientKey: "portfolio.project1.client",
      websiteUrl: "https://defranciscoestudio.com",
    },
    {
      id: 2,
      titleKey: "portfolio.project2.title",
      category: "mobile",
      images: [{ url: robochef, caption: "App Móvil de Recetas" }],
      descriptionKey: "portfolio.project2.description",
      challengeKey: "portfolio.project2.challenge",
      solutionKey: "portfolio.project2.solution",
      resultsKey: "portfolio.project2.results",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"],
      features: [
        t("portfolio.project2.feature1") ,
        t("portfolio.project2.feature2") ,
        t("portfolio.project2.feature3") ,
        t("portfolio.project2.feature4") ,
      ],
      clientKey: "portfolio.project2.client",
    },
    {
      id: 3,
      titleKey: "portfolio.project3.title",
      category: "enterprise",
      images: [
        { url: lacocinaapp, caption: "Plataforma de Análisis Empresarial" },
        { url: lacocina3, caption: "Dashboard de Administración" },
        { url: lacocina, caption: "Plataforma de Análisis Empresarial" },
        { url: lacocina2, caption: "Dashboard de Administración" },
      ],
      descriptionKey: "portfolio.project3.description",
      challengeKey: "portfolio.project3.challenge",
      solutionKey: "portfolio.project3.solution",
      resultsKey: "portfolio.project3.results",
      technologies: ["Next.js", "Typescript", "Node.js", "Express.js", "PostgreSQL"],
      features: [
        t("portfolio.project3.feature1") ,
        t("portfolio.project3.feature2") ,
        t("portfolio.project3.feature3") ,
        t("portfolio.project3.feature4") ,
      ],
      clientKey: "portfolio.project3.client",
    },
    {
      id: 4,
      titleKey: "portfolio.project4.title",
      category: "web",
      images: [
        { url: martinvirasoro, caption: "Página Web de Escritor" },
        { url: martinvirasorometidoenlaptop, caption: "Página Web de Escritor" },
      ],
      descriptionKey: "portfolio.project4.description",
      challengeKey: "portfolio.project4.challenge",
      solutionKey: "portfolio.project4.solution",
      resultsKey: "portfolio.project4.results",
      technologies: ["Wordpress", "Elementor", "HTML", "CSS", "JavaScript"],
      features: [
        t("portfolio.project4.feature1") ,
        t("portfolio.project4.feature2") ,
        t("portfolio.project4.feature3") ,
        t("portfolio.project4.feature4") ,
      ],
      clientKey: "portfolio.project4.client",
    },
    {
      id: 5,
      titleKey: "portfolio.project5.title",
      category: "mobile",
      images: [{ url: cocteler, caption: "Aplicación Móvil de Coctelería" }],
      descriptionKey: "portfolio.project5.description",
      challengeKey: "portfolio.project5.challenge",
      solutionKey: "portfolio.project5.solution",
      resultsKey: "portfolio.project5.results",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"],
      features: [
        t("portfolio.project5.feature1") ,
        t("portfolio.project5.feature2") ,
        t("portfolio.project5.feature3") ,
        t("portfolio.project5.feature4") ,
      ],
      clientKey: "portfolio.project5.client",
    },
    {
      id: 6,
      titleKey: "portfolio.project6.title",
      category: "web",
      images: [{ url: pacta, caption: "Página Web de Estudio Jurídico" }],
      descriptionKey: "portfolio.project6.description",
      challengeKey: "portfolio.project6.challenge",
      solutionKey: "portfolio.project6.solution",
      resultsKey: "portfolio.project6.results",
      technologies: ["Next.js", "Typescript", "Tailwind"],
      features: [
        t("portfolio.project6.feature1") ,
        t("portfolio.project6.feature2") ,
        t("portfolio.project6.feature3") ,
        t("portfolio.project6.feature4") ,
      ],
      clientKey: "portfolio.project6.client",
    },
  ]

  // Buscar proyecto por ID
  const project = projects.find((p) => p.id === Number.parseInt(projectId || "0"))

  // Función para volver al portfolio
  const handleBackToPortfolio = () => {
    navigate("/", { replace: true })
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToPortfolio}
            className="flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t("portfolio.backToProjects") || "Volver a proyectos"}
          </button>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
            <p className="mb-8">El proyecto que buscas no existe o ha sido removido.</p>
            <button 
              onClick={handleBackToPortfolio} 
              className="btn btn-primary"
            >
              {t("portfolio.backToProjects") || "Volver a proyectos"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={handleBackToPortfolio}
          className="flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("portfolio.backToProjects") || "Volver a proyectos"}
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(project.titleKey)}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images Carousel */}
        <div className="mb-12">
          <ImageCarousel images={project.images} />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("portfolio.overview") || "Descripción general"}</h2>
              <p className="text-lg leading-relaxed">{t(project.descriptionKey)}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("portfolio.challenge") || "Desafío"}</h2>
              <p className="text-lg leading-relaxed">{t(project.challengeKey)}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("portfolio.solution") || "Solución"}</h2>
              <p className="text-lg leading-relaxed">{t(project.solutionKey)}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("portfolio.results") || "Resultados"}</h2>
              <p className="text-lg leading-relaxed">{t(project.resultsKey)}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-secondary/10 rounded-xl p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{t("portfolio.client") || "Cliente"}</h3>
                <p>{t(project.clientKey)}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{t("portfolio.keyFeatures") || "Características principales"}</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.websiteUrl && (
                <div>
                  <h3 className="text-xl font-bold mb-4">{t("portfolio.links") || "Enlaces"}</h3>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full justify-center"
                  >
                    {t("portfolio.visitWebsite") || "Visitar sitio web"}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail