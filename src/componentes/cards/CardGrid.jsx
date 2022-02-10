import { useEffect, useState } from "react";
import { getAllCards } from "../../service";
import { Card } from "./Card";

export function CardGrid() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllCards().then((response) => setProducts(response));
  });
  return (
    <h1>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </h1>
  );
  // return <h1>{products.map(product =><Card/>)}</h1>
}
