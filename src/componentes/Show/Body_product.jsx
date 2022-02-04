import React from "react";

import "../Show/body_product.css";

// class body_product extends Component{
    /* render () {
        let product = {
            name: 'cucharita',
            shop: 'PenguinShop',
            price: '15€',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
        }; */
        const Body_product = () => {
            return ( 
      
            <main>
                <div>
                    <div  className="ContainerProduct">
                        <img src={require("../media/cucharitaflor.png")}  alt=""/>
                        <div className="text">
                            <p>cucharita</p>
                        </div>

                        
                    </div>

                    <div className="containerproduct">
                        <div className="card">
                            cards meli
                        </div>

                    </div>

                </div>
            </main>

        );
    }


export default Body_product;