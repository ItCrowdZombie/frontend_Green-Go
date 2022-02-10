import axios from "axios";

const cards = [
  {
    id :1,
    img: "http://localhost:3000/media/planta3.jpg",
    name: "cucharita",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    id :2,
    img: "http://localhost:3000/media/planta2.png",
    name: "tenedor",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
  {
    id :3,
    img: "http://localhost:3000/media/planta1.jpg",
    name: "cuchillo thc",
    seller: { name: "PenguinShop", id: 1 },
    price: 15,
    description: "decorative",
  },
  {
    id :4,
    img: "http://localhost:3000/media/planta1.jpg",
    name: "plato cbd",
    seller: { name: "PepeShop", id: 2 },
    price: 16,
    description: "decorative tambien",
  },
];

export async function getAllCards() {
  return axios.get("http://localhost:8080/products").then((res) => res.data);
}

export async function getAllCardsBySellerId() {
  return cards.filter((card) => card.seller.id === 1);
  
  
  
}

export async function getCardById() {
  
  return cards.filter((card) => card.id === 1)
  
  
}
