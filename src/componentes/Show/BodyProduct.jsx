import React from "react";
import { useEffect, useState } from "react";
import { getCardById } from "../../service";
import { Card } from "../cards/Card";
import "../Show/body_product.css";
import { CardsSeller } from "../cards/CardsSeller";
import { useParams } from "react-router-dom";
import {ShowProduct} from "./ShowProduct";




export function BodyProduct ()
{
  const {id} = useParams();
  const [ product, setProduct ] = useState( [] );
  useEffect(() => {
    getCardById(id).then((response) => setProduct(response));
  },[]);
  /* const { id } = useParams();  */
  return (
    <div>

        <ShowProduct product={product}/>
        

    </div>
  );
  // return <h1>{products.map(product =><Card/>)}</h1>
}
