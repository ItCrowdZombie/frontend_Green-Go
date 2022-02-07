
export function Card(props){
    return (
        <div>
            {/* img: <img src=""></img> */}
            name: {props.product.name}
            description:{props.product.description}
            price:{props.product.price}
            seller:{props.product.seller.name}
        </div>
    )
}


