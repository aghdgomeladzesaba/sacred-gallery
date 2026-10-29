import { Link } from 'react-router'

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0E] text-[#F5ECDC]">

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-24 text-center md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,161,91,0.09),transparent_65%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-7 text-[11px] uppercase tracking-[.4em] text-[#C9A15B]">
            The Story Behind the Collection
          </p>

          <h1 className="font-serif text-6xl leading-none md:text-8xl">
            Beyond the
            <br />
            <span className="italic text-[#C9A15B]">
              Canvas.
            </span>
          </h1>

          <div className="my-10 flex items-center justify-center gap-5 text-[#C9A15B]">
            <span className="h-px w-16 bg-[#C9A15B]/50" />
            <span className="text-2xl">✦</span>
            <span className="h-px w-16 bg-[#C9A15B]/50" />
          </div>

          <p className="mx-auto max-w-xl font-serif text-xl italic leading-relaxed text-[#C8BBA8] md:text-2xl">
            Every work of art tells a story.
            Some stories are meant to be experienced,
            not simply observed.
          </p>
        </div>
      </section>

      {/* About the gallery */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 md:grid-cols-2 md:items-center md:gap-20">

        <div className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[#C9A15B]" />
          <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-[#C9A15B]" />

          <div className="border border-[#C9A15B]/40 p-3">
            <img
              src="/images/church.jpg"
              alt="Ornate Orthodox church interior"
              className="w-full object-cover shadow-2xl"
            />
          </div>

          <p className="mt-6 text-center text-[10px] uppercase tracking-[.25em] text-[#AFA08A]">
            Sacred Spaces — Collection No. 001
          </p>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[.3em] text-[#C9A15B]">
            Our Philosophy
          </p>

          <h2 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
            A Celebration
            <br />
            of <span className="italic text-[#C9A15B]">Beauty.</span>
          </h2>

          <div className="space-y-6 text-sm leading-8 text-[#C8BBA8] md:text-base">
            <p>
              Sacred Gallery is a digital exhibition
              celebrating the relationship between
              art, architecture, faith, and tradition.
            </p>

            <p>
              Inspired by the extraordinary beauty
              of Orthodox Christian churches, the
              collection explores how sacred spaces
              combine artistic expression with
              centuries of cultural heritage.
            </p>

            <p>
              Every detail of this gallery, from its
              antique-gold accents to its dramatic
              presentation, was designed to create
              a peaceful and immersive experience.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-[#C9A15B] pl-5">
            <p className="font-serif text-2xl italic text-[#E8D6B8]">
              Art. Faith. Heritage.
            </p>
            <p className="mt-2 text-xs tracking-wide text-[#AFA08A]">
              Three inspirations. One collection.
            </p>
          </div>
        </div>
      </section>

      {/* Project information */}
      <section className="border-y border-[#C9A15B]/20 bg-[#141216] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-[11px] uppercase tracking-[.3em] text-[#C9A15B]">
            Behind the Experience
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Art Meets <span className="italic text-[#C9A15B]">Technology.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#C8BBA8]">
            This digital gallery was created as a
            Mobile Web Development project at Pace University.
            It combines modern web technologies with
            classical visual inspiration to create
            a responsive, interactive experience.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['React', 'DaisyUI', 'Tailwind CSS', 'Vite', 'React Router'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#C9A15B]/30 px-5 py-2 text-xs tracking-wide text-[#C9A15B]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-24 text-center">
        <span className="text-3xl text-[#C9A15B]">✧</span>

        <h2 className="mt-7 font-serif text-4xl italic md:text-5xl">
          Return to the Collection
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#AFA08A]">
          Discover the timeless beauty of sacred spaces
          through our featured exhibition.
        </p>

        <Link
          to="/"
          className="btn btn-outline mt-9 border-[#C9A15B] bg-transparent px-9 font-normal tracking-[.15em] text-[#C9A15B] transition-all duration-300 hover:bg-[#C9A15B] hover:text-black"
        >
          Explore the Gallery →
        </Link>
      </section>

      <footer className="border-t border-[#C9A15B]/20 py-8 text-center">
        <p className="font-serif tracking-[.2em] text-[#C9A15B]">
          SACRED GALLERY
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[.2em] text-[#857C70]">
          Art • Faith • Heritage • 2026
        </p>
      </footer>

    </main>
  )
}
