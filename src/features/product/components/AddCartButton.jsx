import { useDispatch } from 'react-redux';
// import  {addToCart}  from './slice/cart-slice';
import {syncCartWithDatabase} from   './slice/cart-slice';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { useEffect } from 'react';



export default function AddCartButton({product}) {

    const dispatch = useDispatch();
   
    const handleIncrease = () => {

          dispatch(syncCartWithDatabase(product))

          
    };


  return (
    <>
      <button onClick={handleIncrease}
      className="btn btn-primary">Add to cart</button>
    </>
  )
}
