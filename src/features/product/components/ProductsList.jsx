
// import { useState } from "react";
import CardProducts from "./CardProducts";

import { useState, useEffect } from "react";
import store from "../../../store";
import { selectedAsync } from './slice/product-slice'



 
export default function ProductsList( {array} ) {

  const  prod  = array

  const [selected, setSelected] = useState('')



    const handleSelected = (id) => {

        setSelected(id);
     

    };


    useEffect(() => {
    
        store.dispatch(selectedAsync(selected))

    }, [selected])
   
 

  return (
    <div 
    className=" flex flex-wrap gap-6 m-2">
      {prod.map(el => (
         <CardProducts key={el.productId} product={el} handleSelected={handleSelected} />
      ))}
    </div>
  )
}