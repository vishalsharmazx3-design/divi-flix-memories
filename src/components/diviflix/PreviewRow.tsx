import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { previews } from "@/data/memories";

function PreviewCard({ p }: { p: (typeof previews)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
        ref.current?.play().catch(() => {});
      }}
      onHoverEnd={() => {
        setHover(false);
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative aspect-video w-[280px] md:w-[360px] shrink-0 overflow-hidden rounded-md ring-1 ring-white/10 bg-neutral-900 cursor-pointer group"
    >
      <video
        ref={ref}
        src={p.url}
        poster={p.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity ${hover ? "opacity-100" : "opacity-90"}`} />
      {!hover && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white/90 p-3 shadow-xl">
            <Play className="h-6 w-6 fill-black text-black" />
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#E50914]">{p.label}</div>
          <div className="text-sm font-semibold text-white drop-shadow">{p.title}</div>
        </div>
        {hover && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMuted((m) => !m);
            }}
            className="rounded-full bg-black/60 p-1.5 text-white ring-1 ring-white/30 backdrop-blur"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function PreviewRow() {
  return (
    <section className="px-4 md:px-12 py-6">
      <div className="mb-4">
        <div className="text-xs font-bold tracking-[0.2em] text-[#E50914]">SERIES PREVIEWS</div>
        <h2 className="mt-1 text-2xl md:text-4xl font-black" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
          Watch The Trailers
        </h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-6 pt-2 -mx-4 md:-mx-12 px-4 md:px-12 scrollbar-hide">
        {previews.map((p) => (
          <PreviewCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}