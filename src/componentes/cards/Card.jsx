import style from './Card.module.css'


export function Card(props) {
  return (
    <div className={style.cardStyle}>
        <div className= {style.imgStyle}>
        <img src={props.product.img}/>
        </div>
        <div className= {style.nameStyle}>name: {props.product.name}</div>
        <div className={style.priceStyle}>price:{props.product.price}</div>
        <div className={style.contentStyle}>description:{props.product.description}</div>
        <div className={style.sellerStyle}>seller:{props.product.seller.name}</div>
    </div>
  );
}
