import { useEffect, useState } from "react";
import { getAllCardsBySellerId } from "../../service";
import { Card } from "./Card";

export function CardsSeller() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllCardsBySellerId().then((response) => setProducts(response));
  },[]);
  return (
    <h1>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </h1>
  );
  // return <h1>{products.map(product =><Card/>)}</h1>
}
