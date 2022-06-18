

const Card = ({product}) => {
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
               <button className="addProduct"> Añadir </button>
           </div>
    )
}
export default Card