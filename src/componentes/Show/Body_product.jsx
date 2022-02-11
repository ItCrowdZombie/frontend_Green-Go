import React from "react";
import { useEffect, useState } from "react";
import { getCardById } from "../../service";
import { Card } from "../cards/Card";
import "../Show/body_product.css";
import { CardsSeller } from "../cards/CardsSeller";
import { useParams } from "react-router-dom";




export function CardById ()
{
  const {id} = useParams();
  const [ product, setProduct ] = useState( [] );
  useEffect(() => {
    getCardById(id).then((response) => setProduct(response));
  },[]);
  /* const { id } = useParams();  */
  return (
    <h1>

        <Card product={product}/>

    </h1>
  );
  // return <h1>{products.map(product =><Card/>)}</h1>
}
