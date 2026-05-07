import React from 'react'
import '../styles/experience.css'

export const Experience = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-4 text-sm text-gray-700">
          <h3 className="font-semibold">Geek Tech Solutions | 2024 – Present</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Improved POS system load time by ~30% through optimized React rendering and efficient state management.</li>
            <li>Reduced API response latency by ~25% by restructuring frontend data handling and minimizing redundant calls.</li>
            <li>Designed and deployed UI components used by 10+ daily users, enhancing usability and workflow efficiency.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
