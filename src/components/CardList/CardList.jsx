import { useEffect } from "react";
import { mFetch } from "../../Helppers/Products/products";
import { useState } from "react";

export const CardList = () => {
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        mFetch()
        .then( result => setProductos(result)) 
        .catch((err) => console.log(err));
      },[])
  return (
    <div>
        {productos.map( product => <div key={product.id} className="card w-25">
                                  <div className="card-body p-0">
                                  <h6>{product.nombre}</h6>
                                    <img src={product.imagenProducto} className="w-100" alt="imagen" />
                                    <p>Precio: ${product.precio}</p>
                                    <p>Descripción: {product.descripcion}</p>
                                  </div>
                                  <div className="card-footer">
                                    <button className='btn btn-outline-dark w-100' >Detalle</button>
                                  </div>
                                    
                                  </div>
    )}
    </div>
  )
}
