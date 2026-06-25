import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import { photos } from "@/data/memories";

export function Hero({ onPlay, onInfo }: { onPlay: () => void; onInfo: () => void }) {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        src={photos.garden}
        alt="Our Story"
        className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-end gap-4 px-4 md:px-12 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#E50914]">
          <span className="rounded bg-[#E50914] px-2 py-1 text-white">N</span>
          DIVIFLIX ORIGINAL
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
        >
          Our Story
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-sm md:text-base text-neutral-300">
          Since 2019 • Romance • Best Friends To Lovers • Forever Streaming
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="max-w-xl text-sm md:text-lg leading-relaxed text-neutral-200">
          A story about two people who started as strangers, became best friends, and eventually found their forever in each other.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-2 flex flex-wrap gap-3">
          <button onClick={onPlay} className="flex items-center gap-2 rounded bg-white px-6 md:px-8 py-2.5 font-semibold text-black hover:bg-white/80 transition">
            <Play className="h-5 w-5 fill-black" /> Play Story
          </button>
          <button onClick={onInfo} className="flex items-center gap-2 rounded bg-white/20 px-6 md:px-8 py-2.5 font-semibold text-white backdrop-blur hover:bg-white/30 transition">
            <Info className="h-5 w-5" /> More Info
          </button>
        </motion.div>
      </div>
    </section>
  );
}