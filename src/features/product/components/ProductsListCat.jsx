
// import { useState } from "react";
import CardProducts from "./CardProducts";

import { useState, useEffect } from "react";
import store from "../../../store";
import { selectedAsyncCat } from './slice/product-slice'




export default function ProductsListCat({ array }) {

  const prod = array

  const [selected, setSelected] = useState('')



  const handleSelected = (id) => {
    console.log(id)

    setSelected(id);


  };


  useEffect(() => {

    store.dispatch(selectedAsyncCat(selected))

  }, [selected])



  return (
    <div
      className=" flex flex-wrap gap-6 m-2">
      {prod.map(el => {
        return ( <div key={el.productId}>
          <CardProducts  product={el} handleSelected={handleSelected} />

        </div>)
      }

      )}
    </div>
  )
}