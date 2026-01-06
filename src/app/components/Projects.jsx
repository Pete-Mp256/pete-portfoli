"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { motion } from "framer-motion"

const projects = [ {
    title: "Carbon Emission Tracking System",
    tech: "React, Firebase",
    description:
      "A web application that allows users to track and visualize carbon emissions using an interactive dashboard.",
    link: "https://yourprojectlink.com",
  },
  {
    title: "E-commerce Website – Pricerite Communications",
    tech: "React, Tailwind CSS, shadcn/ui",
    description:
      "An e-commerce platform for electronics and accessories featuring product listings, a shopping cart, and a responsive UI.",
    link: "https://github.com/Pete-Mp256/PriceRite",
  },
  {
    title: "Tafakari Symposium Website",
    tech: "React, HTML, CSS",
    description:
      "Converted static HTML pages into a fully React-based website with multiple content sections.",
    link: "https://yourprojectlink.com", 
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card key={index} className="transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle>
                <a href={project.link} target="_blank" className="text-blue-600 hover:underline">
                  {project.title}
                </a>
              </CardTitle>
              <p className="text-sm text-gray-500">{project.tech}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
