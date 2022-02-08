import React from "react";

import "../Show/body_product.css";
import { CardsSeller } from "../cards/CardsSeller";

        const Body_product = () => {
            return ( 
      
            <main>
                <div className="bigcontainer">
                    <div  className="ContainerProduct">
                        <div className="imgplant">
                            <img src={require("../media/cucharitaflor.png")}  alt=""/>
                        </div>
                        {/* <img src={require("../media/Rectangle12.png")} alt=""/> */}
                        <div className="textproduct">
                            <p>cucharita</p>
                        </div>
                        <div className="textshop">
                            <p>PenguinShop</p>
                        </div>
                        <div className="price">
                            <p>15,20€</p>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        
                    </div>

                     <div className="Allproductsshop">
                        <div className="textcards">
                            <p>More PenguinShop products</p>
                        </div>
                        <div className="cards">
                            <CardsSeller/>
                        </div>
                    </div>
                </div>
            </main>

        );
    }


export default Body_product;