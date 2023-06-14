import ButtonSearch from "../components/ButtonSearch";
import { useSelector } from 'react-redux';
// import store from '../store/index';
import { useDispatch } from "react-redux";
import { fetchAsyncCat } from "../features/product/components/slice/product-slice";
// import {syncCartAll} from "../features/product/components/slice/cart-slice"
import { useEffect } from "react";
import DetailShow from "../features/product/components/DetailShow";
import ProductsListCat from "../features/product/components/ProductsListCat";
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { useEffect, useState } from "react";
// import * as productService from "../api/product";






export default function CatPage() {

  const dispatch = useDispatch()

  

   useEffect( () => {
        // dispatch(fetchAsync()).unwrap();
      dispatch(fetchAsyncCat())
     

    },[])

    // store.dispatch(fetchAsync())

    const array = useSelector(state => state.product.productCat)

    const prodId = useSelector(state => state.product.selectedCat)

    
  return (
    <div>
      <div className="flex items-center justify-center mb-12">
        <div className="text-3xl text-primary mt-12 mr-12">
          <h1> Cat Products</h1>
        </div>
        <div className="mt-12 z-10">
          <ButtonSearch array={array} 
         />
        </div>
      </div>
      <div className="grid grid-cols-3" >
        <div className="col-span-2">
        <ProductsListCat array={array}   />
        </div>
        <div>
          <DetailShow prodId={prodId}/>
        </div>
      </div>

    </div>

  )
}