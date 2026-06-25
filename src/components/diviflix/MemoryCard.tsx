import { motion } from "framer-motion";
import type { Memory } from "@/data/memories";

export function MemoryCard({ item, onClick }: { item: Memory; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08, y: -8, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative shrink-0 w-[220px] md:w-[280px] aspect-video overflow-hidden rounded-md bg-neutral-900 text-left shadow-lg ring-1 ring-white/5 hover:ring-white/30 hover:shadow-[0_20px_60px_-10px_rgba(229,9,20,0.5)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 scale-110 blur-2xl opacity-50"
        style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="relative h-full w-full object-contain transition duration-500 group-hover:brightness-110"
      />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-3">
          <div className="flex items-center gap-2 text-[11px] text-neutral-300">
            <span className="rounded border border-neutral-500 px-1 py-px">HD</span>
            <span>{item.date}</span>
          </div>
          <h3 className="mt-1 truncate text-sm font-semibold text-white">{item.title}</h3>
          <p className="line-clamp-2 text-[11px] text-neutral-400">{item.description}</p>
        </div>
      </div>
    </motion.button>
  );
}