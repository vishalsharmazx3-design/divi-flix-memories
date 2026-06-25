import img1 from "@/assets/memories/IMG_20260520_142457_647.jpg.asset.json";
import img2 from "@/assets/memories/IMG_20260623_213139_611.jpg.asset.json";
import img3 from "@/assets/memories/IMG_20260623_213212_314.jpg.asset.json";
import img4 from "@/assets/memories/IMG_20260623_213236_154.jpg.asset.json";
import img5 from "@/assets/memories/IMG_20260623_213238_510.jpg.asset.json";
import img6 from "@/assets/memories/IMG_20260623_213406_433.jpg.asset.json";
import img7 from "@/assets/memories/IMG_20260623_213407_784.jpg.asset.json";
import img8 from "@/assets/memories/IMG_20260623_213421_697.jpg.asset.json";
import img9 from "@/assets/memories/IMG_20260623_213448_395.jpg.asset.json";
import img10 from "@/assets/memories/IMG_20260623_213727_081.jpg.asset.json";
import img11 from "@/assets/IMG_20260623_213815_343.jpg.asset.json";
import img12 from "@/assets/IMG_20260623_213823_451.jpg.asset.json";
import img13 from "@/assets/IMG_20260623_213841_096.jpg.asset.json";
import img14 from "@/assets/IMG_20260623_213849_525.jpg.asset.json";
import img15 from "@/assets/IMG_20260623_213919_650.jpg.asset.json";
import nCoupleGlasses from "@/assets/new/couple_glasses.jpg.asset.json";
import nTrioIntro from "@/assets/new/trio_intro.jpg.asset.json";
import nDressBrown from "@/assets/new/dress_brown.jpg.asset.json";
import nMirrorYellow from "@/assets/new/mirror_yellow.jpg.asset.json";
import nHairTilt from "@/assets/new/hair_tilt.jpg.asset.json";
import nBlackSmile from "@/assets/new/black_smile.jpg.asset.json";
import nHugBack from "@/assets/new/hug_back.jpg.asset.json";
import nRedFlowers from "@/assets/new/red_flowers.jpg.asset.json";
import vid1 from "@/assets/videos/VID_20260623_213146_115_1.mp4.asset.json";
import vid2 from "@/assets/videos/VID_20260623_213207_651_1.mp4.asset.json";
import vid3 from "@/assets/videos/VID_20260623_213349_267_1.mp4.asset.json";
import vid4 from "@/assets/videos/VID_20260623_213417_715.mp4.asset.json";
import vBestFriend from "@/assets/videos/bestfriend_era.mp4.asset.json";
import vTheDay from "@/assets/videos/the_day.mp4.asset.json";

export const photos = {
  garden: img1.url,
  bigBazaar: img2.url,
  lift: img3.url,
  bouquetSide: img4.url,
  bouquetSmile: img5.url,
  templeSelfie: img6.url,
  helmetThumbs: img7.url,
  candySelfie: img8.url,
  matchingDay: img9.url,
  cafeTeal: img10.url,
  hoodieHug: img11.url,
  hoodieWatch: img12.url,
  heartFilter: img13.url,
  arcadeMirror: img14.url,
  scarfSmile: img15.url,
  coupleGlasses: nCoupleGlasses.url,
  trioIntro: nTrioIntro.url,
  dressBrown: nDressBrown.url,
  mirrorYellow: nMirrorYellow.url,
  hairTilt: nHairTilt.url,
  blackSmile: nBlackSmile.url,
  hugBack: nHugBack.url,
  redFlowers: nRedFlowers.url,
};

export const videos = {
  bestFriend: vBestFriend.url,
  theDay: vTheDay.url,
};

export const previews = [
  { id: "pv1", title: "Official Teaser", label: "S1 • Teaser", url: vid1.url, poster: photos.garden },
  { id: "pv2", title: "Behind The Smile", label: "Featurette", url: vid2.url, poster: photos.bouquetSmile },
  { id: "pv3", title: "Best Friends Era", label: "Recap", url: vid3.url, poster: photos.candySelfie },
  { id: "pv4", title: "Forever Trailer", label: "S1 • Trailer", url: vid4.url, poster: photos.cafeTeal },
];

export const all = Object.values(photos);

export type Memory = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  video?: string;
};

export const episodes: Memory[] = [
  { id: "ep1", title: "The Girl I Couldn't Ignore", date: "S1:E1 • 2019", description: "In 2019, a boy notices a girl who would unknowingly change his life forever.", image: photos.coupleGlasses, category: "Episode" },
  { id: "ep2", title: "A Random Introduction", date: "S1:E2 • 2019", description: "One unexpected introduction from Priya creates the first connection.", image: photos.trioIntro, category: "Episode" },
  { id: "ep3", title: "The Best Friend Era", date: "S1:E3", description: "A year of friendship, trust and silent love.", image: photos.candySelfie, category: "Episode", video: vBestFriend.url },
  { id: "ep4", title: "When Everything Changed", date: "S1:E4", description: "A heartbreak changes everything and brings two hearts closer.", image: photos.matchingDay, category: "Episode" },
  { id: "ep5", title: "The Beginning Of Us", date: "S1:E5", description: "The friendship slowly becomes love.", image: photos.templeSelfie, category: "Episode" },
  { id: "ep6", title: "16 June 2019 ❤️", date: "S1:E6 • 16.06.2019", description: "The day our story officially began.", image: photos.coupleGlasses, category: "Episode", video: vTheDay.url },
  { id: "ep7", title: "Still Streaming", date: "S1:E7 • Now", description: "The journey continues and the best episodes are yet to come.", image: photos.dressBrown, category: "Episode" },
];

export const rows: { title: string; items: Memory[] }[] = [
  {
    title: "Continue Watching",
    items: [
      { id: "cw1", title: "Garden Day", date: "Spring 2026", description: "Bougainvillea, sunshine, and her bouquet.", image: photos.bouquetSide, category: "Moment" },
      { id: "cw2", title: "Lift Selfie", date: "2026", description: "Just us, a mirror, and a quiet smile.", image: photos.lift, category: "Moment" },
      { id: "cw3", title: "Cafe Date", date: "Last Week", description: "Teal kurta, dim lights, soft laughter.", image: photos.cafeTeal, category: "Moment" },
    ],
  },
  {
    title: "Trending Memories",
    items: [
      { id: "tm1", title: "Big Bazaar Walk", date: "2026", description: "An evening stroll that felt like a movie scene.", image: photos.bigBazaar, category: "Trending" },
      { id: "tm2", title: "The Candy Promise", date: "2024", description: "A silly little candy. A very big feeling.", image: photos.candySelfie, category: "Trending" },
      { id: "tm3", title: "Helmet & Thumbs Up", date: "Monsoon", description: "Riding into our own little adventure.", image: photos.helmetThumbs, category: "Trending" },
      { id: "tm4", title: "Matching Day", date: "2024", description: "Resting on his shoulder like it's home.", image: photos.matchingDay, category: "Trending" },
    ],
  },
  {
    title: "Date Nights",
    items: [
      { id: "dn1", title: "Burger Booth", date: "Cafe Night", description: "A neon wall and her brightest smile.", image: photos.cafeTeal, category: "Date" },
      { id: "dn2", title: "Garden Tent", date: "Summer", description: "Bunting flags and the way he looks at her.", image: photos.garden, category: "Date" },
      { id: "dn3", title: "Temple Visit", date: "Festive", description: "Quiet courtyards, loud hearts.", image: photos.templeSelfie, category: "Date" },
    ],
  },
  {
    title: "Cute Moments",
    items: [
      { id: "cm1", title: "Mirror, Mirror", date: "2026", description: "The lift selfie that became a forever frame.", image: photos.lift, category: "Cute" },
      { id: "cm2", title: "Shoulder Nap", date: "Festival", description: "Tired feet, full heart.", image: photos.matchingDay, category: "Cute" },
      { id: "cm3", title: "Candy Heart", date: "Village Walk", description: "Wrapped sweet, wrapped love.", image: photos.candySelfie, category: "Cute" },
    ],
  },
  {
    title: "Adventures Together",
    items: [
      { id: "ad1", title: "Scooter Diaries", date: "Rainy Day", description: "Helmets on, monsoon ahead.", image: photos.helmetThumbs, category: "Adventure" },
      { id: "ad2", title: "Bougainvillea Lane", date: "Spring", description: "A wall of pink, a girl in white.", image: photos.bouquetSide, category: "Adventure" },
      { id: "ad3", title: "Bouquet Smile", date: "Spring", description: "The smile that ended the search.", image: photos.bouquetSmile, category: "Adventure" },
    ],
  },
  {
    title: "Forever Us",
    items: [
      { id: "fu1", title: "Our Story", date: "Since 2019", description: "Best friends to lovers. Forever streaming.", image: photos.garden, category: "Original" },
      { id: "fu2", title: "Just Us", date: "Always", description: "No filter needed.", image: photos.cafeTeal, category: "Original" },
      { id: "fu3", title: "16 June", date: "Anniversary", description: "The day everything became us.", image: photos.bouquetSmile, category: "Original" },
    ],
  },
  {
    title: "New Releases",
    items: [
      { id: "nr1", title: "Hoodie Hug", date: "Tuesday", description: "Two hoodies, one heartbeat.", image: photos.hoodieHug, category: "New" },
      { id: "nr2", title: "Time Stops", date: "2:21 PM", description: "His watch, her giggle, sunlight through trees.", image: photos.hoodieWatch, category: "New" },
      { id: "nr3", title: "Heart Filter", date: "Library Day", description: "Pink hearts couldn't compete with hers.", image: photos.heartFilter, category: "New" },
      { id: "nr4", title: "Arcade Mirror", date: "Cafe Run", description: "Neon walls, mirror selfie, manga case.", image: photos.arcadeMirror, category: "New" },
      { id: "nr5", title: "Pink Scarf", date: "Winter Morning", description: "Foggy skies and her warmest smile.", image: photos.scarfSmile, category: "New" },
    ],
  },
  {
    title: "Just Dropped",
    items: [
      { id: "jd1", title: "Mirror, Sunshine", date: "Thursday", description: "Yellow florals, a quiet smile, our reflection.", image: nMirrorYellow.url, category: "Aesthetic" },
      { id: "jd2", title: "Soft Light", date: "Golden Hour", description: "Her hair, his stare, the calmest frame.", image: nHairTilt.url, category: "Aesthetic" },
      { id: "jd3", title: "Black On Black", date: "Tuesday Night", description: "Matching mood, biggest laugh.", image: nBlackSmile.url, category: "Aesthetic" },
      { id: "jd4", title: "Hug From Behind", date: "Same Night", description: "Held close, smiling wider than the room.", image: nHugBack.url, category: "Aesthetic" },
      { id: "jd5", title: "Red Flowers", date: "Thursday 17:22", description: "Wall flowers, our finger-on-lips secret.", image: nRedFlowers.url, category: "Aesthetic" },
    ],
  },
];

export const timeline: { year: string; title: string; text: string; image: string; video?: string }[] = [
  { year: "2019", title: "First Saw Her", text: "A glance that wouldn't leave his mind.", image: photos.coupleGlasses },
  { year: "2019", title: "Priya Introduced Us", text: "A small hello. A massive beginning.", image: photos.trioIntro },
  { year: "2019-20", title: "Best Friend Phase", text: "Late night calls, silent love.", image: photos.candySelfie, video: vBestFriend.url },
  { year: "2020", title: "Her Breakup", text: "Hearts heal closer than apart.", image: photos.matchingDay },
  { year: "2020", title: "Dating Phase", text: "Friendship blooming into love.", image: photos.templeSelfie },
  { year: "16.06.2019", title: "The Day", text: "Our story officially began.", image: photos.bouquetSmile, video: vTheDay.url },
  { year: "Trips", title: "Adventures", text: "Scooter rides, temples, gardens.", image: photos.helmetThumbs },
  { year: "Now", title: "Present Day", text: "Still streaming. Best is yet to come.", image: photos.dressBrown },
];

export const profiles = [
  { id: "vishal", name: "Vishal", image: photos.candySelfie, color: "from-blue-500 to-indigo-700" },
  { id: "devanshi", name: "Devanshi", image: photos.bouquetSmile, color: "from-rose-400 to-pink-700" },
  { id: "us", name: "Us", image: photos.garden, color: "from-red-500 to-rose-700", isUs: true },
];