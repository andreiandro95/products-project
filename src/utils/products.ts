export interface Product {
  id: number
  productName: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  imageUrl: string;
}

export const pestControlProducts: Product[] = [
  {
    id: 1,
    productName: "BugBuster Ultra Spray",
    price: 14.99,
    category: "Insecticide",
    description:
      "Fast-acting spray designed to eliminate ants, cockroaches, and spiders within minutes.",
    rating: 4.6,
    imageUrl: "https://placehold.co/150x150?text=BugBuster+Ultra+Spray",
  },
  {
    id: 2,
    productName: "RodentShield Pro Bait",
    price: 19.5,
    category: "Rodent Control",
    description:
      "Highly effective bait for controlling mice and rats in residential and commercial spaces.",
    rating: 4.8,
    imageUrl: "https://placehold.co/150x150?text=RodentShield+Pro+Bait",
  },
  {
    id: 3,
    productName: "TermiGone Barrier Gel",
    price: 25.0,
    category: "Termite Control",
    description:
      "Protective gel that creates an invisible barrier to stop termites from damaging wood structures.",
    rating: 4.4,
    imageUrl: "https://placehold.co/150x150?text=TermiGone+Barrier+Gel",
  },
  {
    id: 4,
    productName: "FlyFree Outdoor Lantern",
    price: 29.95,
    category: "Fly & Mosquito Control",
    description:
      "Solar-powered lantern that attracts and eliminates mosquitoes, flies, and gnats in outdoor areas.",
    rating: 4.2,
    imageUrl: "https://placehold.co/150x150?text=FlyFree+Outdoor+Lantern",
  },
  {
    id: 5,
    productName: "MiteAway Carpet Powder",
    price: 12.75,
    category: "Mite Control",
    description:
      "Powder formula for carpets and upholstery to kill dust mites and prevent reinfestation.",
    rating: 4.5,
    imageUrl: "https://placehold.co/150x150?text=MiteAway+Carpet+Powder",
  },
  {
    id: 6,
    productName: "SlugStop Garden Pellets",
    price: 9.99,
    category: "Garden Pest Control",
    description:
      "Pet-safe pellets that deter slugs and snails from damaging plants and flowers.",
    rating: 4.3,
    imageUrl: "https://placehold.co/150x150?text=SlugStop+Garden+Pellets",
  },
  {
    id: 7,
    productName: "WaspAway Foam Blaster",
    price: 16.5,
    category: "Wasp & Hornet Control",
    description:
      "Thick foam spray that instantly immobilizes wasps and hornets, destroying their nests on contact.",
    rating: 4.7,
    imageUrl: "https://placehold.co/150x150?text=WaspAway+Foam+Blaster",
  },
  {
    id: 8,
    productName: "BedBugGuard Heat Pad",
    price: 34.99,
    category: "Bed Bug Control",
    description:
      "Portable heat pad system that eradicates bed bugs from mattresses and bedding without chemicals.",
    rating: 4.4,
    imageUrl: "https://placehold.co/150x150?text=BedBugGuard+Heat+Pad",
  },
  {
    id: 9,
    productName: "GardenGuard Netting",
    price: 15.2,
    category: "Bird Control",
    description:
      "Durable netting to protect crops and fruit trees from birds while allowing sunlight and rain through.",
    rating: 4.1,
    imageUrl: "https://placehold.co/150x150?text=GardenGuard+Netting",
  },
  {
    id: 10,
    productName: "AntAway Granules",
    price: 11.49,
    category: "Ant Control",
    description:
      "Outdoor granules that create a protective barrier against ants, including fire ants and carpenter ants.",
    rating: 4.6,
    imageUrl: "https://placehold.co/150x150?text=AntAway+Granules",
  },
  {
    id: 11,
    productName: "ScorpionShield Spray",
    price: 22.0,
    category: "Scorpion Control",
    description:
      "Long-lasting formula to repel and eliminate scorpions from indoor and outdoor environments.",
    rating: 4.3,
    imageUrl: "https://placehold.co/150x150?text=ScorpionShield+Spray",
  },
  {
    id: 12,
    productName: "MothMaster Closet Strips",
    price: 8.99,
    category: "Moth Control",
    description:
      "Scented strips that protect clothes and fabrics from moth damage for up to six months.",
    rating: 4.2,
    imageUrl: "https://placehold.co/150x150?text=MothMaster+Closet+Strips",
  },
];
