import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Navbar } from "@/components/diviflix/Navbar";
import { Hero } from "@/components/diviflix/Hero";
import { Row } from "@/components/diviflix/Row";
import { PreviewRow } from "@/components/diviflix/PreviewRow";
import { MemoryCard } from "@/components/diviflix/MemoryCard";
import { MemoryModal } from "@/components/diviflix/MemoryModal";
import { episodes, rows, timeline, type Memory } from "@/data/memories";

const search = z.object({ p: z.string().optional() });

export const Route = createFileRoute("/browse")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "DiviFlix — Our Story, Now Streaming" },
      { name: "description", content: "The Netflix of our love story. Episodes, memories, and forever." },
      { property: "og:title", content: "DiviFlix — Our Story" },
      { property: "og:description", content: "A Diviflix Original. Since 2019. Forever streaming." },
    ],
  }),
  component: Browse,
});

function Browse() {
  const { p } = Route.useSearch();
  const [open, setOpen] = useState<Memory | null>(null);
  const featured = episodes[5];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar profileId={p} />
      <Hero onPlay={() => setOpen(featured)} onInfo={() => setOpen(featured)} />

      <div className="relative z-20 -mt-32 space-y-2 pb-20">
        <Row title="Continue Watching" items={rows[0].items} onOpen={setOpen} />
        <PreviewRow />

        <section id="episodes" className="px-4 md:px-12 py-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-[#E50914]">DIVIFLIX ORIGINAL SERIES</div>
              <h2 className="mt-1 text-3xl md:text-5xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>Our Story — Season 1</h2>
              <p className="mt-2 text-sm text-neutral-400 max-w-2xl">Seven episodes. One love story. From a first glance in 2019 to forever.</p>
            </div>
            <div className="hidden md:block text-sm text-neutral-400">Season 1 ▾</div>
          </div>
          <div className="divide-y divide-white/10 rounded-lg border border-white/5 bg-white/[0.02]">
            {episodes.map((ep, i) => (
              <motion.button
                key={ep.id}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                onClick={() => setOpen(ep)}
                className="grid w-full grid-cols-[40px_180px_1fr] md:grid-cols-[60px_240px_1fr] items-center gap-4 p-4 text-left"
              >
                <div className="text-2xl md:text-3xl font-light text-neutral-500">{i + 1}</div>
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <img src={ep.image} alt={ep.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold text-white">{ep.title}</h3>
                    <span className="shrink-0 text-xs text-neutral-400">{ep.date}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-neutral-400">{ep.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {rows.slice(1).map((r) => (
          <Row key={r.title} title={r.title} items={r.items} onOpen={setOpen} />
        ))}

        <section id="timeline" className="px-4 md:px-12 py-16">
          <div className="text-xs font-bold tracking-[0.2em] text-[#E50914]">CINEMATIC TIMELINE</div>
          <h2 className="mt-1 mb-10 text-3xl md:text-5xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#E50914]/40 to-transparent" />
            <ul className="space-y-12">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="text-sm font-bold tracking-wider text-[#E50914]">{t.year}</div>
                    <h3 className="mt-1 text-2xl md:text-3xl font-bold">{t.title}</h3>
                    <p className="mt-2 text-neutral-400">{t.text}</p>
                  </div>
                  <div className="pl-12 md:pl-0">
                    <div className="relative mx-auto w-full max-w-sm aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="absolute inset-0 h-full w-full object-contain"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 -z-10 scale-110 blur-2xl opacity-40"
                        style={{ backgroundImage: `url(${t.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                      />
                    </div>
                  </div>
                  <span className="absolute left-2 md:left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#E50914] ring-4 ring-black" />
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section id="letter" className="px-4 md:px-12 py-20">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-b from-rose-950/40 via-black to-black p-8 md:p-14 ring-1 ring-rose-900/30 shadow-[0_30px_80px_-30px_rgba(229,9,20,0.4)]">
            <div className="text-xs font-bold tracking-[0.3em] text-[#E50914]">DIVIFLIX EXCLUSIVE</div>
            <h2 className="mt-2 text-4xl md:text-6xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>Forever Note</h2>
            <div className="mt-8 whitespace-pre-line text-lg leading-relaxed text-neutral-100" style={{ fontFamily: "'Caveat', 'Inter', cursive" }}>
{`Dear Devanshi,

You were the best thing that ever happened to me. From the first day I saw you in 2019, something in me knew — this girl is the rest of my life.

Through every season, every fight, every silly fight that ended in laughter, every long call, every short hug — you've been my favorite episode.

If our life is a series, I never want a finale. I just want more seasons with you.

Forever Yours,
Vishal ❤️`}
            </div>
          </div>
        </section>

        <footer className="px-4 md:px-12 py-10 text-center text-xs text-neutral-600">
          A DiviFlix Original • Streaming since 16.06.2019 • Made with ❤ for Devanshi
        </footer>
      </div>

      <MemoryModal memory={open} onClose={() => setOpen(null)} />
    </div>
  );
}

// silence unused
void MemoryCard;