import ButtonSearch from "../components/ButtonSearch";
import ProductsList from '../features/product/components/ProductsList'
import { useSelector } from 'react-redux';
// import store from '../store/index';
import { useDispatch } from "react-redux";
import { fetchAsync } from "../features/product/components/slice/product-slice";

import { useEffect } from "react";
import DetailShow from "../features/product/components/DetailShow";
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { useEffect, useState } from "react";
// import * as productService from "../api/product";






export default function DogPage() {

  const dispatch = useDispatch()

  

   useEffect( () => {
        // dispatch(fetchAsync()).unwrap();
      dispatch(fetchAsync())
     

    },[])

    // store.dispatch(fetchAsync())

    const array = useSelector(state => state.product.product)

    const prodId = useSelector(state => state.product.selected)

    
  return (
    <div>
      <div className="flex items-center justify-center mb-12">
        <div className="text-3xl text-primary mt-12 mr-12">
          <h1> 🐶 Dog Products</h1>
        </div>
        <div className="mt-12 z-10">
          <ButtonSearch array={array} 
         />
        </div>
      </div>
      <div className="grid grid-cols-3" >
        <div className="col-span-2">
        <ProductsList array={array}   />
        </div>
        <div>
          <DetailShow prodId={prodId}/>
        </div>
      </div>

    </div>

  )
}
