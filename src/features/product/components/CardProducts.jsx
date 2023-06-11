
import { useState, useEffect } from "react";
import store from "../../../store";
import { selectedAsync } from './slice/product-slice'
import AddCartButton from "./AddCartButton";


export default function CardProducts({ product}) {

    const [selected, setSelected] = useState('')

    console.log('SDSDSD',selected)
    
    const handleSelected = (id) => {
 
        setSelected(id);
        console.log('Clicked ID:', id);
        // Do something else with the ID
    };

    useEffect(() => {
        // dispatch(fetchAsync()).unwrap();
        
        store.dispatch(selectedAsync(selected))
    
    }, [selected])

    return (
        <div>
            <div className="card w-56 bg-base-100 shadow-xl hover:scale-105 duration-200">

                <figure className="px-10 pt-10 ">
                    <img src={product.image1} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title text-primary">{product.brand} </h2>
                    <div className="card-actions flex items-center justify-center">
                        <button className="btn btn-outline">{product.price}฿</button>
                        <button className="btn"
                         onClick={() =>{
                            handleSelected(product.productId)
                        }
                       }>See Detail</button>
                        <AddCartButton  product={product} />
                     
                            <button className="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
