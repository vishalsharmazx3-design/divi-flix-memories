import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { profiles } from "@/data/memories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DiviFlix — Who's Watching?" },
      { name: "description", content: "A streaming platform built entirely from our love story." },
      { property: "og:title", content: "DiviFlix" },
      { property: "og:description", content: "The Netflix of our love story." },
    ],
  }),
  component: ProfileSelect,
});

function ProfileSelect() {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-20 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="mb-2 text-4xl md:text-6xl font-light text-white/90"
      >
        Who's Watching?
      </motion.h1>
      <p className="mb-14 text-sm text-neutral-500">Welcome to DiviFlix — pick a profile to enter our story.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {profiles.map((p, i) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            onClick={() => navigate({ to: "/browse", search: { p: p.id } as never })}
            className="group flex flex-col items-center gap-3"
          >
            <div className={`relative h-28 w-28 md:h-44 md:w-44 overflow-hidden rounded-md ring-0 transition-all duration-200 group-hover:ring-4 group-hover:ring-white ${p.isUs ? "shadow-[0_0_60px_-10px_rgba(229,9,20,0.6)]" : ""}`}>
              <img src={p.image} alt={p.name} className="h-full w-full object-cover grayscale-[0.05] group-hover:grayscale-0" />
              {p.isUs && (
                <div className="absolute bottom-1 right-1 rounded bg-[#E50914] px-1.5 py-0.5 text-[10px] font-bold tracking-wider">❤ US</div>
              )}
            </div>
            <span className="text-base md:text-xl text-neutral-400 group-hover:text-white transition">{p.name}</span>
          </motion.button>
        ))}
      </div>
      <button className="mt-16 flex items-center gap-2 border border-neutral-600 px-5 py-2 text-sm tracking-widest text-neutral-400 hover:border-white hover:text-white">
        <Pencil className="h-4 w-4" /> MANAGE PROFILES
      </button>
    </div>
  );
}
