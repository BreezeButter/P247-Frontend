
// import { useState } from "react";
import CardProducts from "./CardProducts";

import { useState, useEffect } from "react";
import store from "../../../store";
import { selectedAsync } from './slice/product-slice'



 
export default function ProductsList( {array} ) {

  const  prod  = array

  const [selected, setSelected] = useState('')

    console.log('SDSDSD', selected)

    const handleSelected = (id) => {

        setSelected(id);
        console.log('Clicked ID:', id);
        // Do something else with the ID
    };
    // console.log(selected)

    useEffect(() => {
        // dispatch(fetchAsync()).unwrap();
        console.log("g")
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