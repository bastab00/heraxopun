import heroMountain from "@/assets/hero-mountain.jpg";
import campfire from "@/assets/memory-campfire.jpg";
import chai from "@/assets/memory-chai.jpg";
import portrait1 from "@/assets/memory-portrait1.jpg";
import roadtrip from "@/assets/memory-roadtrip.jpg";
import food from "@/assets/memory-food.jpg";
import snow from "@/assets/memory-snow.jpg";
import tawang from "@/assets/journey-tawang.jpg";
import meghalaya from "@/assets/journey-meghalaya.jpg";
import ziro from "@/assets/journey-ziro.jpg";
import t1 from "@/assets/traveler-1.jpg";
import t2 from "@/assets/traveler-2.jpg";
import t3 from "@/assets/traveler-3.jpg";

export const images = {
  heroMountain,
  campfire,
  chai,
  portrait1,
  roadtrip,
  food,
  snow,
  tawang,
  meghalaya,
  ziro,
  t1,
  t2,
  t3,
};

export const memories = [
  { src: heroMountain, alt: "Misty mountain road", caption: "lost but happy", rotate: -2, span: "md:col-span-5 md:row-span-2" },
  { src: campfire, alt: "Campfire", caption: "core memory unlocked", rotate: 2, span: "md:col-span-3" },
  { src: chai, alt: "Roadside chai stall at night", caption: "3AM tea stop", rotate: -3, span: "md:col-span-4" },
  { src: portrait1, alt: "Friend laughing", caption: "she said yes & meant it", rotate: 1, span: "md:col-span-3" },
  { src: snow, alt: "Snowy village", caption: "first snowfall", rotate: -1, span: "md:col-span-4 md:row-span-2" },
  { src: roadtrip, alt: "Old SUV in fog", caption: "we got lost on purpose", rotate: 3, span: "md:col-span-5" },
  { src: food, alt: "Local food", caption: "second helpings, always", rotate: -2, span: "md:col-span-3" },
  { src: meghalaya, alt: "Root bridge", caption: "the jungle was singing", rotate: 1, span: "md:col-span-4" },
  { src: ziro, alt: "Ziro valley dusk", caption: "purple hour", rotate: -2, span: "md:col-span-5" },
  { src: tawang, alt: "Tawang monastery", caption: "morning prayers", rotate: 2, span: "md:col-span-3" },
] as const;

export const stories = [
  {
    name: "Het Rathod",
    city: "Gujrat",
    quote:
      "A massive thank you to the entire HeraXopun team for making my first-ever bike trip so unforgettable! Being a pillion on the Guwahati to Tawang route was a dream, and you all made sure every moment was filled with beauty and safety.",
    favorite: "the meaning of 'Xopun' – Dreams – and how they made my dream come true",
    imageSrc: portrait1,
    rating: 10,
  },
  {
    name: "Namrata",
    city: "Nasik, Maharashtra",
    quote:
      "The best ever trip I had in my life. We got so attached to the entire team that even after reaching home we're missing every bit of it. Heraxopun will always hold a special place in my heart.",
    favorite: "the personal touch of hosting us for dinner at their own home",
    imageSrc: t1,
    rating: 10,
  },
  {
    name: "Priti Solanki",
    city: "Diu",
    quote:
      "Riding to Tawang with Heraxopun was truly a once-in-a-lifetime experience. As a rider, I felt safe, confident, and well supported throughout the entire journey.",
    favorite: "the amazing stays, delicious food, and the warm, homely environment created by the team",
    imageSrc: t2,
    rating: 10,
  },
  {
    name: "Rupak",
    city: "Jamshedpur",
    quote:
      "Very nice experience. From day 1 to last day we all ride together, eat together, dance together and enjoyed together. The whole team was very nice and helpful.",
    favorite: "My birthday celebrations and reaching Bumla pass with such an amazing group",
    imageSrc: t3,
    rating: 9,
  },
  {
    name: "Bivekananda Patra",
    city: "Jharkhand",
    quote:
      "Every single moment was a favorite. The group atmosphere and team bonding made this trip truly awesome. All the coordinators were very nice and helpful.",
    favorite: "every single moment – the rides, the food, the people",
    imageSrc: portrait1,
    rating: 10,
  },
] as const;

export const journeys = [
  {
    destination: "Arunachal Pradesh",
    poeticLine: "Tawang, Namdapha · where clouds touch the roads.",
    imageSrc: tawang,
  },
  {
    destination: "Assam",
    poeticLine: "Kaziranga, Guwahati · where nature breathes wild.",
    imageSrc: heroMountain,
  },
  {
    destination: "Meghalaya",
    poeticLine: "Cherrapunji, Shillong · rivers, root bridges, and rain that knows your name.",
    imageSrc: meghalaya,
  },
  {
    destination: "Manipur",
    poeticLine: "Loktak Lake, Imphal · the gem of northeast, floating gardens.",
    imageSrc: ziro,
  },
  {
    destination: "Mizoram",
    poeticLine: "Aizawl, Mizo Hills · misty mountains and warm hearts.",
    imageSrc: heroMountain,
  },
  {
    destination: "Nagaland",
    poeticLine: "Kohima, Nagaland Hills · where traditions come alive.",
    imageSrc: tawang,
  },
  {
    destination: "Sikkim",
    poeticLine: "Gangtok, Kanyakumari · high peaks and higher dreams.",
    imageSrc: meghalaya,
  },
  {
    destination: "Tripura",
    poeticLine: "Agartala, Ujjayanta Palace · the land of divine blessings.",
    imageSrc: ziro,
  },
] as const;

export const aftermovies = [
  { title: "Eight days in Arunachal", meta: "2026 · 02:14", posterSrc: heroMountain, large: true },
  { title: "Monsoon in Meghalaya", meta: "2026 · 01:48", posterSrc: meghalaya },
  { title: "Ziro after dark", meta: "2026 · 03:02", posterSrc: ziro },
] as const;

// export const stats = [
//   { value: "42", label: "travelers" },
//   { value: "7", label: "states explored" },
//   { value: "1.2k", label: "memories made" },
//   { value: "∞", label: "chai stops" },
// ];