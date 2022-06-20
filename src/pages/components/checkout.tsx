import React, {useState} from "react";

export const Checkout = ({show, onShowChange, product}) => {

    return(
        <div className="checkout" style={{ display: (show ? 'flex' : 'none')}}>
            <div className="checkoutContainer">
                <div className="checkoutHeader">
                    <h1>
                        Tu compra
                    </h1>
                </div>
                <div className="checkoutBody">
                    <div className="checkoutBodyContainer">
                        {/* me muestra los datos del producto */}
                        <div>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.name}</h1>
                        {/* se muestra un precio u  otro en función del descuento */}
                        {(product.applyDiscount === true)? <h2> {product.discount} €</h2>:<h2>{product.price} €</h2>} 
                        <div className="buttonsContainer">
                            <button className="checkoutButton" onClick={() => {console.log({product: product.id, name:product.name, image: product.image, price: product.price}), onShowChange(false)}}>Agregar al carrito</button>
                            <button className="exitButton" onClick={() => onShowChange(false)}> Salir sin agregar </button>
                        </div>
                    </div>
                </div>
            </div>
          

        </div>

    )

}

export default Checkout;