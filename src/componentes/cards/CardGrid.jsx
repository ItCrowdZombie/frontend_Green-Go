import { useState } from "react";

export function CardGrid (){
    const [products,setProducts] = useState([
        {
            id:1,
            name:"piraña"
        },
        {
            id:2,
            name:"cucharita"
        }
    ]);
    return <h1>{products.map(product =><li>{product.id} {product.name}</li>)}</h1>
}

