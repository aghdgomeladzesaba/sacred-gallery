import Gallery from '../components/Gallery'
import { Link } from 'react-router'

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0B0B0E] text-[#F5ECDC]">

      {/* Atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 85% 20%, rgba(201,161,91,.11), transparent 45%),
            radial-gradient(ellipse at 0% 75%, rgba(105,55,71,.16), transparent 48%)
          `
        }}
      />

      {/* Hero introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center md:px-12 md:pt-28">

        <div className="mb-8 flex items-center justify-center gap-5">
          <span className="h-px w-12 bg-[#C9A15B]/60" />
          <span className="text-[10px] uppercase tracking-[.35em] text-[#C9A15B]">
            A Digital Exhibition
          </span>
          <span className="h-px w-12 bg-[#C9A15B]/60" />
        </div>

        <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#AFA08A]">
          An exploration of art, faith & timeless beauty
        </p>

        <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
          Where Art
          <br />
          Meets <span className="italic text-[#C9A15B]">Eternity.</span>
        </h1>

        <div className="mx-auto my-9 flex items-center justify-center gap-4 text-[#C9A15B]">
          <span className="h-px w-16 bg-[#C9A15B]/40" />
          <span className="text-xl">✧</span>
          <span className="h-px w-16 bg-[#C9A15B]/40" />
        </div>

        <p className="mx-auto max-w-xl font-serif text-lg leading-relaxed text-[#C8BBA8] md:text-xl">
          A quiet celebration of sacred architecture, artistic
          devotion, and the beauty that transcends time.
        </p>

      </section>

      {/* Featured artwork */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-10">

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#C9A15B]/25 pb-4">
          <span className="text-[10px] uppercase tracking-[.3em] text-[#C9A15B]">
            Featured Collection
          </span>
          <span className="font-serif text-sm italic text-[#AFA08A]">
            No. 001 — Sacred Spaces
          </span>
        </div>

        <div className="group relative border border-[#C9A15B]/45 p-2 shadow-[0_20px_90px_rgba(0,0,0,.6)] md:p-4">

          {/* Decorative frame corners */}
          <span className="absolute -left-1 -top-1 h-7 w-7 border-l-2 border-t-2 border-[#C9A15B]" />
          <span className="absolute -right-1 -top-1 h-7 w-7 border-r-2 border-t-2 border-[#C9A15B]" />
          <span className="absolute -bottom-1 -left-1 h-7 w-7 border-b-2 border-l-2 border-[#C9A15B]" />
          <span className="absolute -bottom-1 -right-1 h-7 w-7 border-b-2 border-r-2 border-[#C9A15B]" />

          <div className="relative overflow-hidden bg-[#151316]">
            <img
              src="/images/church.jpg"
              alt="Orthodox church interior decorated with sacred icons and traditional artwork"
              className="mx-auto max-h-[650px] w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent" />

            <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.25em] text-[#F1DFBD] md:bottom-8 md:left-8">
              The Sacred Collection
            </div>
          </div>
        </div>

        {/* Artwork information */}
        <div className="mt-12 grid gap-8 border-b border-[#C9A15B]/25 pb-12 md:grid-cols-[1fr_1fr] md:items-end">

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.3em] text-[#C9A15B]">
              The Featured Artwork / 01
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              The Beauty of
              <br />
              <span className="italic text-[#C9A15B]">
                Orthodox Christianity
              </span>
            </h2>
          </div>

          <div className="md:pl-10">
            <p className="font-serif text-lg leading-relaxed text-[#C8BBA8]">
              Within these sacred walls, architecture, light,
              and centuries of artistic tradition come together
              to create a space of extraordinary beauty.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[#C9A15B]">
              <span className="h-px w-8 bg-[#C9A15B]" />
              Faith • Heritage • Art
            </div>
          </div>
        </div>

        {/* Navigation reserved for future functionality */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">

          <button
            className="btn btn-outline border-[#C9A15B]/40 bg-transparent font-normal tracking-[.15em] text-[#C9A15B]"
            disabled
          >
            ← Previous
          </button>

          <div className="text-center">
            <span className="font-serif text-2xl text-[#C9A15B]">
              01
            </span>
            <span className="mx-3 text-[#776B5A]">/</span>
            <span className="font-serif text-lg text-[#AFA08A]">
              01
            </span>
          </div>

          <button
            className="btn btn-outline border-[#C9A15B]/40 bg-transparent font-normal tracking-[.15em] text-[#C9A15B]"
            disabled
          >
            Next →
          </button>
        </div>

      </section>

      <Gallery />

      {/* Closing statement */}
      <section className="border-t border-[#C9A15B]/20 bg-[#131216] px-6 py-20 text-center">

        <div className="mb-6 text-3xl text-[#C9A15B]">✦</div>

        <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-[#E3D2B7] md:text-3xl">
          "Beauty invites us to look beyond the ordinary."
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-[#C9A15B]/50" />

        <Link
          to="/about"
          className="mt-8 inline-block border-b border-[#C9A15B]/50 pb-2 text-xs uppercase tracking-[.25em] text-[#C9A15B] transition-all duration-300 hover:border-[#C9A15B] hover:tracking-[.32em]"
        >
          Discover the Collection →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C9A15B]/15 bg-[#0B0B0E] px-6 py-8 text-center">
        <p className="font-serif text-sm tracking-[.15em] text-[#C9A15B]">
          SACRED GALLERY
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[.2em] text-[#857C70]">
          A Digital Art Experience • 2026
        </p>
      </footer>

    </main>
  )
}
