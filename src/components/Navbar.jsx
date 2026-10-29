import { Link } from 'react-router'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#C9A15B]/30 bg-[#101013]/95 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto grid min-h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 md:px-10">

        <details className="dropdown dropdown-bottom justify-self-start">
          <summary className="btn btn-ghost border border-[#C9A15B]/30 text-[#C9A15B] hover:border-[#C9A15B] hover:bg-[#C9A15B]/10">
            <span className="text-xl">☰</span>
            <span className="hidden text-xs tracking-[0.2em] sm:inline">
              MENU
            </span>
          </summary>

          <ul className="menu dropdown-content z-50 mt-4 w-60 rounded-lg border border-[#C9A15B]/30 bg-[#171719] p-4 shadow-2xl">
            <li>
              <Link to="/" className="py-3 text-[#E9D9B8] hover:bg-[#C9A15B]/10">
                Home Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-3 text-[#E9D9B8] hover:bg-[#C9A15B]/10">
                About the Collection
              </Link>
            </li>
          </ul>
        </details>

        <Link to="/" className="group text-center">
          <div className="mb-1 text-lg text-[#C9A15B] transition-transform duration-500 group-hover:rotate-90">
            ✦
          </div>
          <div className="font-serif text-xl tracking-[0.16em] text-[#F2E8D6] sm:text-2xl">
            SACRED GALLERY
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#C9A15B] sm:text-[10px]">
            Art • Faith • Heritage
          </div>
        </Link>

        <div className="justify-self-end text-right">
          <span className="hidden border-b border-[#C9A15B]/40 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#C9A15B] md:inline-block">
            The Collection / 2026
          </span>
          <span className="text-[#C9A15B] md:hidden">✧</span>
        </div>

      </div>
    </header>
  )
}
