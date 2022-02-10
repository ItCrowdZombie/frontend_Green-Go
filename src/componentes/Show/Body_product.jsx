import React from "react";
import { useEffect, useState } from "react";
import { getCardById } from "../../service";

import "../Show/body_product.css";
import { CardsSeller } from "../cards/CardsSeller";



export default function Body_product () {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCardById().then((response) => setProducts(response));
  });

  return (
    <main>
      <div className="bigcontainer">
        <div className="ContainerProduct">
          <div className="imgplant">
            <img src="http://localhost:3000/media/cucharitaflor.png" alt="" />
          </div>

          <div className="textproduct">
            <p>{products.name}</p>
          </div>
          <div className="textshop">
            <p>{products.seller.name}</p>
          </div>
          <div className="price">
            <p>{products.price}</p>
          </div>
          <div className="description">
            <p>
              {products.description}
            </p>
          </div>
        </div>

        <div className="Allproductsshop">
          <div className="textcards">
            <p>More PenguinShop products</p>
          </div>
          <div className="cards">
            <CardsSeller />
          </div>
        </div>
      </div>
    </main>
  );
};

