import React from "react";
import { useEffect, useState } from "react";
import { getCardById } from "../../service";

import "../Show/body_product.css";
import { CardsSeller } from "../cards/CardsSeller";
import { useParams } from "react-router-dom";

export default function Body_product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getCardById().then((response) => setProduct(response));
  }, []);
  const { id } = useParams();
 

  return (
    <main>
      <div className="bigcontainer">
        <div className="ContainerProduct">
          <div className="imgplant">
            <img src="http://localhost:3000/media/cucharitaflor.png" alt="" />
          </div>

          <div className="textproduct">
            {id}
           
            

            <p>{product.name}</p>
          </div>
          <div className="textshop">{/* <p>{product.seller.name}</p> */}</div>
          <div className="price">{/* <p>{product.price}</p> */}</div>
          <div className="description">
            <p>{/* {product.description} */}</p>
          </div>
        </div>

        <div className="Allproductsshop">
          <div className="textcards">
            <p>More PenguinShop products</p>
          </div>
          <div className="cards">{/* <CardsSeller /> */}</div>
        </div>
      </div>
    </main>
  );
}
