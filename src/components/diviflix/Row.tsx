import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MemoryCard } from "./MemoryCard";
import type { Memory } from "@/data/memories";

export function Row({ title, items, onOpen }: { title: string; items: Memory[]; onOpen: (m: Memory) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section className="group/row relative py-4 md:py-6">
      <h2 className="mb-3 px-4 md:px-12 text-base md:text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="relative">
        <button onClick={() => scroll(-1)} className="absolute left-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-black/40 opacity-0 transition group-hover/row:opacity-100 md:flex"><ChevronLeft className="h-8 w-8 text-white" /></button>
        <div ref={ref} className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth px-4 md:px-12 pb-6 pt-2">
          {items.map((it) => <MemoryCard key={it.id} item={it} onClick={() => onOpen(it)} />)}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-black/40 opacity-0 transition group-hover/row:opacity-100 md:flex"><ChevronRight className="h-8 w-8 text-white" /></button>
      </div>
    </section>
  );
}