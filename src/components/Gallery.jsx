import { useRef, useState } from 'react'

const images = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery-${i + 1}.jpeg`,
  title: `Sacred Study ${String(i + 1).padStart(2, '0')}`,
}))

export default function Gallery() {
  const dialogRef = useRef(null)
  const [selected, setSelected] = useState(null)

  function openImage(image) {
    setSelected(image)
    dialogRef.current?.showModal()
  }

  return (
    <section
      id="collection"
      className="relative bg-[#0B0B0E] px-5 py-24 text-[#F5ECDC] md:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-5 text-[11px] uppercase tracking-[.4em] text-[#C9A15B]">
            The Permanent Collection
          </p>

          <h2 className="font-serif text-5xl md:text-7xl">
            A Gallery of
            <span className="italic text-[#C9A15B]"> Wonders.</span>
          </h2>

          <div className="mx-auto my-7 flex items-center justify-center gap-4 text-[#C9A15B]">
            <span className="h-px w-14 bg-[#C9A15B]/50" />
            <span>✦</span>
            <span className="h-px w-14 bg-[#C9A15B]/50" />
          </div>

          <p className="mx-auto max-w-xl font-serif text-xl italic leading-relaxed text-[#C8BBA8]">
            An intimate visual journey through sacred art,
            architecture, and timeless beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openImage(image)}
              aria-label={`View ${image.title}`}
              className={`group relative overflow-hidden border border-[#C9A15B]/25 bg-[#171518] p-2 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A15B] hover:shadow-[0_15px_45px_rgba(201,161,91,.15)] ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src={image.src}
                  alt={`Sacred Gallery photograph ${image.id}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-80 md:h-[420px]' : 'h-72'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 border border-[#C9A15B]/60 bg-black/60 px-3 py-2 text-xs tracking-widest text-[#C9A15B]">
                  {String(image.id).padStart(2, '0')}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[.3em] text-[#C9A15B]">
                    The Collection
                  </p>

                  <h3 className="font-serif text-3xl text-[#F5ECDC]">
                    {image.title}
                  </h3>

                  <p className="mt-3 text-xs tracking-wider text-[#D7C5A6] opacity-80 transition-opacity group-hover:opacity-100">
                    VIEW ARTWORK +
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span className="font-serif text-2xl italic text-[#C9A15B]">
            Eleven images. One beautiful collection.
          </span>
          <p className="mt-4 text-xs uppercase tracking-[.25em] text-[#8D8170]">
            Curated with admiration for sacred beauty
          </p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current.close()
          }
        }}
        className="m-auto max-h-[95vh] w-[95vw] max-w-5xl border border-[#C9A15B]/50 bg-[#111114] p-4 text-[#F5ECDC] backdrop:bg-black/90 md:p-8"
      >
        {selected && (
          <div>
            <div className="mb-5 flex items-center justify-between gap-5">
              <span className="font-serif text-xl tracking-wider text-[#C9A15B]">
                SACRED GALLERY
              </span>

              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="btn btn-ghost text-xl text-[#C9A15B]"
                aria-label="Close image"
              >
                ✕
              </button>
            </div>

            <img
              src={selected.src}
              alt={`Enlarged view of ${selected.title}`}
              className="mx-auto max-h-[65vh] w-auto max-w-full object-contain"
            />

            <div className="mt-6 border-t border-[#C9A15B]/30 pt-5 text-center">
              <h3 className="font-serif text-3xl text-[#C9A15B]">
                {selected.title}
              </h3>
              <p className="mt-2 text-xs tracking-widest text-[#AFA08A]">
                THE SACRED COLLECTION
              </p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
