import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Bell } from "lucide-react";
import { profiles } from "@/data/memories";

export function Navbar({ profileId }: { profileId?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const profile = profiles.find((p) => p.id === profileId) ?? profiles[2];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
      <div className="flex items-center gap-6 px-4 md:px-12 py-3">
        <Link to="/browse" className="text-2xl md:text-3xl font-black tracking-tight text-[#E50914]" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.02em" }}>DIVIFLIX</Link>
        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-200">
          <Link to="/browse" className="hover:text-white">Home</Link>
          <a href="#episodes" className="hover:text-white">Our Series</a>
          <a href="#timeline" className="hover:text-white">Timeline</a>
          <a href="#letter" className="hover:text-white">Forever Note</a>
        </nav>
        <div className="ml-auto flex items-center gap-4 text-white/80">
          <Search className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <Link to="/" className="flex items-center gap-2">
            <img src={profile.image} alt={profile.name} className="h-8 w-8 rounded object-cover" />
          </Link>
        </div>
      </div>
    </header>
  );
}