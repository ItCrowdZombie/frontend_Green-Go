import "../Show/body_product.css";

export function ShowProduct(props) {
  return (
    <main>
      <div className="bigcontainer">
        <div className="ContainerProduct">
          <div >
            <img className="imgplant" src={props.product.image} alt="{props.product.name}" />
          </div>

          <div className="textproduct">
            <p>{props.product.name}</p>
          </div>
{/*           <div className="textshop"><p>{props.product.seller.name}</p></div> */}
          <div className="price">
            {" "}
            <p>{props.product.price}</p>
          </div>
          <div className="description">
            <p> {props.product.description}</p>
          </div>
        </div>

        <div className="Allproductsshop">
          <div className="textcards">
            <p>More PenguinShop products</p>
          </div>

        </div>
      </div>
    </main>
  );
}
