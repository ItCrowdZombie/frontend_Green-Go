const cards = [
  {
    name: "cucharita",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    name: "tenedor",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
  {
    name: "cuchillo thc",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    name: "plato cbd",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
];

export async function getAllCards() {
  return cards;
}
