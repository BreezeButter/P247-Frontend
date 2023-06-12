import { useDispatch } from 'react-redux';
// import  {addToCart}  from './slice/cart-slice';
import {syncCartWithDatabase} from   './slice/cart-slice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { useEffect } from 'react';



export default function AddCartButton({product}) {


 
    const [ products,setProducts  ] = useState(product)

    const dispatch = useDispatch();
   
    
    const canAddKa = useSelector(state => state.cart.canAdd)
  
    const handleIncrease = () => {

        setProducts({...products, quantity: 1})
        console.log(products)
        dispatch(syncCartWithDatabase(product))

      
      console.log("AddCartButton",product)
    };

  //   useEffect(() => {
    
  //     dispatch(syncCartWithDatabase(itemAdd[0]));

  // }, [itemAdd] )

  return (
    <>{canAddKa && 
      <button onClick={handleIncrease}
      className="btn btn-primary">Add to cart</button>}
    </>
  )
}
