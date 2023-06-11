
// import { useState } from "react";
import CardProducts from "./CardProducts";



 
export default function ProductsList( {array} ) {


  const  prod  = array
   
 

  return (
    <div 
    className=" flex flex-wrap gap-6 m-2">
      {prod.map(el => (
         <CardProducts key={el.productId} product={el}  />
      ))}
    </div>
  )
}