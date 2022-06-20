import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './cards';

export function Products() {
    const [handle, setHandle] = useState(false); // Genero un estado para controlar el input de busqueda
    const [data, setData] = useState([]); // Genero un estado para guardar los datos de la API
    const [sort, setSort] = useState(false); // Genero dos estados para controlar el orden de los productos
    const [reverse, setReverse] = useState(false);
    const [message , setMessage] = useState(""); // Genero un estado que guarde la búsqueda en caso de que el input esté vacío
    const searchFetch = async (value : string) => { // Genero una funcion para hacer la petición por nombre (busqueda)
        axios.get('http://localhost:3001/name/'+ value).then((req) => {
                if (req.data?.length > 0) {
                    setData(req.data)
                } else {
                    setMessage("No se encontraron productos con ese nombre")
                }
            }).catch((err) => {
                console.log(err);
                getData();
            }
        );
    }
    const getData = async () => {
        axios.get('http://localhost:3001/products').then((req) => { 
            // Genero una funcion para mostrar todos los productos por defecto
            setData(req.data);
        });   
    }  
    const sortAsc = async () => {
        axios.get('http://localhost:3001/sort/asc').then((req) => { 
            // Genero una funcion para mostrar los productos por precio asc
            setData(req.data);
        });   
    }    
    const sortDesc = async () => {
        axios.get('http://localhost:3001/sort/desc').then((req) => { 
            // Genero una funcion para mostrar los productos por precio desc
            setData(req.data);
        });   
    }   
  
    useEffect(() => { 
        // Redirecciono los caminos por defecto a la API
        if (sort === true){
            sortAsc();
            setSort(false) 
        } else if (reverse === true){
            sortDesc();
            setReverse(false)
        } else if (handle === false ) {
            getData();
        } 
    })

    const showCards = () => data.map((product, id) => { 
        // Muestro los productos en forma de tarjetas
        return <Card product={product} key={id} />
    })
    return (
    <div className="containerAll">
          <nav className="nav">
                <input placeholder="Buscar" name="search" onChange={(event) => {
                    searchFetch(event.target.value);
                    setHandle(true);
                    setMessage(event.target.value.toString()); // Guardo el valor del input en el estado
                    }}/> 
                <div>
                    {/* adjunto los controladores para ordenar los productos por precio: */}
                    <button onClick={() => {setSort(true);}} > - </button>
                    <button onClick={() => {setReverse(true);}} > + </button>
                </div>
            </nav>
        <div id="productsContainer" className="products">
            {showCards()}
        </div>
    </div>
    )
}

export default Products;