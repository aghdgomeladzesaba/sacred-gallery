
import { useState } from 'react'

const icons = [
  {
    id: 'christ',
    name: 'Christ Pantocrator',
    subtitle: 'The Ruler of All',
    image: '/images/chapel/christ.jpg',
    description:
      'Christ Pantocrator means Christ the Ruler of All. In Orthodox iconography, Jesus is often shown holding the Holy Gospels and raising His hand in blessing. The icon represents His divine authority, wisdom, and mercy.',
    prayer:
      'Lord Jesus Christ, Son of God, have mercy on me, a sinner. Guide my heart toward truth, humility, and love. Let Your light lead me through darkness and help me walk in Your ways. Amen.'
  },
  {
    id: 'theotokos',
    name: 'The Theotokos',
    subtitle: 'The Mother of God',
    image: '/images/chapel/theotokos.jpg',
    description:
      'The Theotokos is the Virgin Mary, honored as the Mother of God. Orthodox icons often depict her holding the Christ Child, emphasizing the Incarnation of Jesus Christ and her special place in Christian tradition.',
    prayer:
      'Most Holy Theotokos, Mother of God, pray for us before your beloved Son. Comfort those who suffer, guide those who are lost, and help us grow in humility, patience, and love for Christ. Amen.'
  },
  {
    id: 'george',
    name: 'Saint George',
    subtitle: 'The Great Martyr',
    image: '/images/chapel/george.jpg',
    description:
      'Saint George is remembered as a Christian martyr whose courage and faith inspired generations of believers. He is frequently depicted defeating a dragon, a powerful image of the triumph of good over evil.',
    prayer:
      'Holy Great Martyr George, courageous servant of Christ, pray for us. Ask the Lord to strengthen our faith, give us courage in difficult times, and help us stand firmly for truth and goodness. Amen.'
  },
  {
    id: 'nicholas',
    name: 'Saint Nicholas',
    subtitle: 'The Wonderworker',
    image: '/images/chapel/nicholas.jpg',
    description:
      'Saint Nicholas was a bishop of Myra, remembered for his generosity, compassion, and care for those in need. He is one of the most beloved saints in Orthodox Christianity.',
    prayer:
      'Holy Father Nicholas, compassionate shepherd and servant of God, pray for us. Help us remember those who are poor, lonely, or suffering. May Christ teach us to give generously and love without expecting anything in return. Amen.'
  },
  {
    id: 'michael',
    name: 'Archangel Michael',
    subtitle: 'The Heavenly Protector',
    image: '/images/chapel/michael.jpg',
    description:
      'Archangel Michael is honored in Orthodox Christianity as a leader of the heavenly hosts. He is often shown wearing armor, representing spiritual strength, protection, and the struggle against evil.',
    prayer:
      'Holy Archangel Michael, leader of the heavenly hosts, intercede for us before the Lord. Ask God to protect us from evil, strengthen our hearts against temptation, and guide us toward peace, righteousness, and faith. Amen.'
  },
  {
    id: 'nino',
    name: 'Saint Nino',
    subtitle: 'The Enlightener of Georgia',
    image: '/images/chapel/nino.jpg',
    description:
      'Saint Nino is especially beloved in Georgian Orthodox Christianity. She is remembered for spreading Christianity in Georgia during the fourth century and is traditionally associated with a cross made from grapevines.',
    prayer:
      'Holy Equal-to-the-Apostles Nino, Enlightener of Georgia, pray to Christ our God for us. Just as you brought the light of the Gospel to Georgia, ask the Lord to fill our hearts with faith, wisdom, and love. May we carry His light into the world. Amen.'
  }
]

export default function SacredChapel() {
  const [isLit, setIsLit] = useState(false)
  const [revealed, setRevealed] = useState({})
  const [prayerViews, setPrayerViews] = useState({})

  const chapelImage = '/images/chapel/chapel-interior.jpeg'

  function revealIcon(id) {
    setRevealed(previous => ({
      ...previous,
      [id]: true
    }))
  }

  function togglePrayer(id) {
    setPrayerViews(previous => ({
      ...previous,
      [id]: !previous[id]
    }))
  }

  return (
    <section
      className="bg-[#0B0B0E] px-5 py-20 text-center text-[#F5ECDC]"
      aria-labelledby="chapel-title"
    >

      <style>{`
        @keyframes chapelFogLift {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.75;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }

        @keyframes chapelFocus {
          from {
            filter: blur(18px) brightness(0.5);
            transform: scale(1.08);
          }
          to {
            filter: blur(0) brightness(1);
            transform: scale(1);
          }
        }

        @keyframes chapelFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Flicker without horizontal movement */
        @keyframes candleFlicker {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12, 0.93);
          }
        }

        @keyframes chapelTextIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chapel-fog {
          animation: chapelFogLift 5s ease-in-out both;
        }

        .chapel-image {
          animation: chapelFocus 5s ease-out both;
        }

        .chapel-entrance {
          animation: chapelFadeIn 1.5s ease-out both;
        }

        .candle-flame {
          transform-origin: center bottom;
          animation: candleFlicker 1.5s ease-in-out infinite;
        }

        .chapel-changing-text {
          animation: chapelTextIn 0.4s ease-out both;
        }

        /* Deep charcoal velvet curtains */
        .icon-curtain {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          z-index: 2;

          background:
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(0,0,0,0.25) 15px,
              rgba(160,126,91,0.13) 25px,
              transparent 40px
            ),
            linear-gradient(
              110deg,
              #100F13,
              #30272A,
              #171316,
              #44352F,
              #141115
            );

          box-shadow:
            inset 0 0 30px rgba(0,0,0,0.7);

          transition:
            transform 1.4s cubic-bezier(0.76, 0, 0.24, 1);
        }

        .curtain-left {
          left: 0;
          border-right: 1px solid #C9A15B;
        }

        .curtain-right {
          right: 0;
          border-left: 1px solid #C9A15B;
        }

        .curtain-left.open {
          transform: translateX(-105%);
        }

        .curtain-right.open {
          transform: translateX(105%);
        }

        @media (prefers-reduced-motion: reduce) {
          .chapel-fog {
            animation: none;
            opacity: 0;
          }

          .chapel-image,
          .chapel-entrance,
          .candle-flame,
          .chapel-changing-text {
            animation: none;
          }

          .icon-curtain {
            transition: none;
          }
        }
      `}</style>

      {/* Chapel introduction */}
      <div className="mx-auto max-w-3xl">

        <p className="text-xs uppercase tracking-[.35em] text-[#C9A15B]">
          An Interactive Sacred Experience
        </p>

        <h2
          id="chapel-title"
          className="mt-5 font-serif text-4xl text-[#C9A15B] md:text-6xl"
        >
          The Sacred Chapel
        </h2>

        <div className="mx-auto mt-7 h-px w-24 bg-[#C9A15B]/50" />

        <p className="mt-7 font-serif text-xl text-[#C8BBA8]">
          Every journey begins with a light.
        </p>

      </div>

      {/* Interactive candle with Flexbox alignment */}
      <div className="relative mx-auto mt-16 h-28 w-12">

        {/* Flame container is always centered */}
        {isLit && (
          <div
            className="pointer-events-none absolute inset-x-0
              -top-9 flex justify-center"
          >
            <div
              className="candle-flame h-9 w-5 rounded-full
                bg-amber-300 blur-[1px]
                shadow-[0_0_30px_10px_rgba(245,180,50,0.6)]"
            />
          </div>
        )}

        {/* Wick also uses Flexbox centering */}
        <div
          className="absolute inset-x-0 top-0
            flex justify-center"
        >
          <div className="h-4 w-1 bg-stone-700" />
        </div>

        {/* Candle body */}
        <div
          className="absolute bottom-0 left-0
            h-24 w-full rounded-t-md
            bg-gradient-to-b from-[#F1E0B7] to-[#A98553]"
        />

      </div>

      {/* Light the candle */}
      {!isLit ? (
        <button
          type="button"
          onClick={() => setIsLit(true)}
          className="mt-10 rounded border border-[#C9A15B]
            px-8 py-3 text-[#C9A15B]
            transition-colors duration-300
            hover:bg-[#C9A15B] hover:text-black
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-[#C9A15B]"
        >
          Light a Candle
        </button>
      ) : (
        <p className="mt-10 font-serif text-xl text-[#C9A15B]">
          The light has awakened.
        </p>
      )}

      {/* Chapel appears after candle is lit */}
      {isLit && (
        <>
          <div
            className="chapel-entrance relative mx-auto mt-16
              max-w-5xl overflow-hidden
              border border-[#C9A15B]/40 p-3
              shadow-[0_0_60px_rgba(201,161,91,0.15)]"
          >

            <div className="relative overflow-hidden bg-[#151316]">

              <img
                src={chapelImage}
                alt="Interior of an Orthodox church"
                className="chapel-image mx-auto max-h-[600px]
                  w-full object-contain"
              />

              {/* Fog overlay */}
              <div
                aria-hidden="true"
                className="chapel-fog pointer-events-none
                  absolute inset-0"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at 30% 80%,
                      rgba(210,205,198,0.85),
                      transparent 75%
                    ),
                    radial-gradient(
                      ellipse at 75% 30%,
                      rgba(230,220,205,0.75),
                      transparent 70%
                    ),
                    linear-gradient(
                      to top,
                      rgba(215,210,202,0.85),
                      rgba(180,170,160,0.35)
                    )
                  `
                }}
              />

            </div>

            <div className="px-5 py-8">

              <h3 className="font-serif text-3xl text-[#C9A15B]">
                Welcome to the Sacred Chapel
              </h3>

              <p className="mt-4 font-serif text-lg italic text-[#C8BBA8]">
                Within these walls, every image tells a story.
              </p>

            </div>

          </div>

          {/* Six sacred icons */}
          <div className="mx-auto mt-24 max-w-6xl">

            <p className="text-xs uppercase tracking-[.3em] text-[#C9A15B]">
              The Sacred Collection
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#F5ECDC]">
              The Veiled Icons
            </h3>

            <p
              className="mx-auto mt-5 max-w-2xl
                font-serif text-lg leading-relaxed text-[#AFA08A]"
            >
              Six sacred images await discovery.
              Select a curtain to unveil the icon,
              learn its story, and enter a moment of prayer.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

              {icons.map(icon => {
                const isRevealed = Boolean(revealed[icon.id])
                const isPrayer = Boolean(prayerViews[icon.id])

                return (
                  <article
                    key={icon.id}
                    className="border border-[#C9A15B]/30
                      bg-[#131216] p-4
                      shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
                  >

                    {/* Framed icon */}
                    <div
                      className="relative aspect-[3/4]
                        overflow-hidden border-2
                        border-[#C9A15B]/60 bg-[#1B1718]"
                    >

                      <img
                        src={icon.image}
                        alt={icon.name}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />

                      {/* Left curtain */}
                      <div
                        aria-hidden="true"
                        className={
                          'icon-curtain curtain-left' +
                          (isRevealed ? ' open' : '')
                        }
                      />

                      {/* Right curtain */}
                      <div
                        aria-hidden="true"
                        className={
                          'icon-curtain curtain-right' +
                          (isRevealed ? ' open' : '')
                        }
                      />

                      {/* Unveil button */}
                      {!isRevealed && (
                        <button
                          type="button"
                          onClick={() => revealIcon(icon.id)}
                          aria-label={'Unveil ' + icon.name}
                          className="absolute inset-0 z-10 flex
                            flex-col items-center justify-end
                            pb-8 text-[#E8D2A7]
                            transition-colors hover:text-white
                            focus-visible:outline
                            focus-visible:outline-4
                            focus-visible:outline-offset-[-5px]
                            focus-visible:outline-[#F1D28C]"
                        >
                          <span
                            className="border border-[#C9A15B]/60
                              bg-[#0B0B0E]/90
                              px-5 py-3 font-serif text-lg
                              tracking-wide"
                          >
                            ✧ Unveil the Icon
                          </span>
                        </button>
                      )}

                    </div>

                    {/* Icon information */}
                    <h4 className="mt-7 font-serif text-2xl text-[#C9A15B]">
                      {icon.name}
                    </h4>

                    <p
                      className="mt-2 text-xs uppercase
                        tracking-[.2em] text-[#AFA08A]"
                    >
                      {icon.subtitle}
                    </p>

                    {isRevealed ? (
                      <div
                        className="mt-6 border-t border-[#C9A15B]/25 pt-6"
                      >

                        {/* Description or prayer */}
                        <div aria-live="polite" aria-atomic="true">

                          <p
                            className="text-[10px] uppercase
                              tracking-[.25em] text-[#C9A15B]"
                          >
                            {isPrayer
                              ? 'A Moment of Prayer'
                              : 'Discover Its Meaning'}
                          </p>

                          <p
                            key={isPrayer ? 'prayer' : 'description'}
                            className={
                              'chapel-changing-text mt-5 font-serif ' +
                              'text-base leading-relaxed text-[#D5C6B0] ' +
                              (isPrayer ? 'italic' : '')
                            }
                          >
                            {isPrayer
                              ? icon.prayer
                              : icon.description}
                          </p>

                        </div>

                        <div
                          className="mx-auto mt-7 h-px w-12
                            bg-[#C9A15B]/50"
                        />

                        {/* Prayer toggle */}
                        <button
                          type="button"
                          onClick={() => togglePrayer(icon.id)}
                          aria-pressed={isPrayer}
                          className="mt-7 w-full border
                            border-[#C9A15B]/60
                            bg-transparent px-4 py-3
                            font-serif text-base text-[#C9A15B]
                            transition-all duration-300
                            hover:border-[#C9A15B]
                            hover:bg-[#C9A15B]
                            hover:text-[#0B0B0E]
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#F1D28C]"
                        >
                          {isPrayer
                            ? '← Return to Its Meaning'
                            : '✧ A Moment of Prayer'}
                        </button>

                      </div>
                    ) : (
                      <p
                        className="mt-6 font-serif text-sm
                          italic text-[#857C70]"
                      >
                        A story waits behind the veil.
                      </p>
                    )}

                  </article>
                )
              })}

            </div>

            {/* Closing message */}
            <div className="mx-auto mt-20 max-w-xl">

              <div className="mx-auto h-px w-20 bg-[#C9A15B]/50" />

              <p
                className="mt-8 font-serif text-xl
                  italic leading-relaxed text-[#C8BBA8]"
              >
                May every image inspire reflection,
                every prayer bring peace,
                and every light remind us of faith.
              </p>

            </div>

          </div>
        </>
      )}

    </section>
  )
}
