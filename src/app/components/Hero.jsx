"use client"

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Computer Science Student <br /> & Software Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-gray-500 max-w-xl"
      >
        I’m Pete Njagi, a 3rd-year Computer Science student at Strathmore
        University, passionate about software engineering and modern web
        applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4"
      >
       <div className="mt-8 flex gap-4">
  <a href="#projects">
    <Button>View Projects</Button>
  </a>
        <a href="/PETE NJAGI MBITHI.pdf" download>
          <Button variant="outline">Download CV</Button>
        </a>
        </div>
      </motion.div>
    </section>
  )
}
