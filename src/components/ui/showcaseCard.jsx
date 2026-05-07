import React from 'react'

export default function ShowcaseCard({
  title,
  subtitle,
  role,
  description,
  bgImage,
  accent = 'from-indigo-600 to-transparent',
}) {
  return (
    <article
      className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[320px] md:min-h-[420px]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(11,11,15,0.6) 0%, rgba(11,11,15,0.2) 50%), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="relative z-10 flex items-center h-full">
        <div className="px-8 py-12 md:pl-16 md:pr-8 w-full md:w-2/3 text-left text-white">
          <p className="uppercase text-sm text-indigo-300 tracking-wide">{role}</p>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
          {subtitle && <p className="text-sm text-indigo-200 mt-2">{subtitle}</p>}

          <p className="mt-4 text-sm text-white/90 max-w-xl">{description}</p>
        </div>

        {/* Right vertical menu */}
        <div className="hidden md:flex flex-col items-start gap-4 absolute right-6 top-16 text-sm text-white/80">
          <div className="font-semibold">ABOUT</div>
          <nav className="flex flex-col gap-2 text-xs">
            <a className="hover:text-white" href="#">Affiliation</a>
            <a className="hover:text-white" href="#">Status</a>
            <a className="hover:text-white" href="#">Relationships</a>
            <a className="hover:text-white" href="#">Skills</a>
            <a className="hover:text-white" href="#">Troops</a>
            <a className="hover:text-white" href="#">Weapons</a>
          </nav>
        </div>
      </div>
    </article>
  )
}
