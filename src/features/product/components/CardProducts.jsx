
import { useState, useEffect } from "react";
import store from "../../../store";
import { selectedAsync } from './slice/product-slice'

export default function CardProducts({ product }) {




    // store.dispatch(fetchAsync())




    const [selected, setSelected] = useState('')
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
        <div onClick={() => handleSelected(product.productId)}>
            <div className="card w-56 bg-base-100 shadow-xl hover:scale-105 duration-200">

                <figure className="px-10 pt-10 ">
                    <img src={product.image1} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title text-primary">{product.brand} <span className=" text-gray-500">#{product.foodType}</span></h2>
                    <div className="card-actions">
                        <button className="btn btn-outline">{product.price}฿</button>
                        <button className="btn btn-primary">{product.productId}</button>
                        <button className="btn btn-success">Buy</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
