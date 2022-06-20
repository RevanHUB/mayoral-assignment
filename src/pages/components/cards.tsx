import Checkout from './checkout';
import { useState } from 'react';
const Card = ({product}) => {
    const [show, changeShow] = useState(false);
    const showProduct = () => {
        changeShow(true);
    }
    return (
            <div key={product.id} className="card">
               <div className="imgContainer">
                   <img src={product.image} alt={product.name} ></img>
               </div>
               <h2>
                   {product.name}
               </h2>
               {(product.applyDiscount === true) ? <h3> <p className="oldPrice"> {product.price} </p>
               <p className="discountValue">{product.discount} (- { (100 - (product.discount / product.price * 100)).toString().slice(0,2) + "%" } )</p>
               <p className="seeMore hide"> más colores </p>  </h3> : <h3> <p> {product.price} </p> 
               <p className="seeMore"> más colores </p>   </h3>}
               {/* muestro el componente checkout */}
               <button className="addProduct" onClick={() => showProduct()} > Añadir </button>
               {/* integro las opciones del componente checkout */}
                <Checkout show = {show} onShowChange = {changeShow} product = {product} />    
           </div>
    )
}
export default Card