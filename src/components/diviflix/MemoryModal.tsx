import { AnimatePresence, motion } from "framer-motion";
import { X, Play, Plus, ThumbsUp } from "lucide-react";
import type { Memory } from "@/data/memories";

export function MemoryModal({ memory, onClose }: { memory: Memory | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-[#181818] shadow-2xl ring-1 ring-white/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <img src={memory.image} alt={memory.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/30 to-transparent" />
              <button onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-white hover:bg-black"><X className="h-5 w-5" /></button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>{memory.title}</h2>
                <div className="mt-4 flex gap-3">
                  <button className="flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-semibold text-black"><Play className="h-4 w-4 fill-black" /> Relive</button>
                  <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/40 text-white hover:border-white"><Plus className="h-4 w-4" /></button>
                  <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/40 text-white hover:border-white"><ThumbsUp className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
              <div className="md:col-span-2 space-y-3">
                <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                  <span className="text-emerald-400 font-semibold">98% Match</span>
                  <span>{memory.date}</span>
                  <span className="rounded border border-neutral-500 px-1">HD</span>
                  <span className="rounded border border-neutral-500 px-1">Forever</span>
                </div>
                <p className="text-base text-neutral-100 leading-relaxed">{memory.description}</p>
              </div>
              <div className="space-y-2 text-sm text-neutral-300">
                <div><span className="text-neutral-500">Cast: </span>Vishal, Devanshi</div>
                <div><span className="text-neutral-500">Genres: </span>Romance, Slice of Life</div>
                <div><span className="text-neutral-500">This memory is: </span>Heartfelt, Romantic, Forever</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}