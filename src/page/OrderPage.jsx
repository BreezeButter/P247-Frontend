import CardSum from "../features/order/CardSum";
import OrderList from "../features/order/OrderList";
import { useSelector } from 'react-redux';
import { syncCartAll } from '../features/product/components/slice/cart-slice'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Order} from "../icons";
import CheckOutButton from "../features/order/CheckOutButton";


export default function OrderPage() {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(syncCartAll())

  }, [])

  const array = useSelector(state => state.cart.cart)


  return (
    <div>
      <div className="flex items-center justify-center mb-12  bg-primary shadow-inner">
        <div className="text-3xl font-bold  my-5 text-white">
          <h1>Order Summary</h1>
        </div>
      </div>
      <div className="flex flex-wrap text-center items-center justify-center" >
        <div className="flex  items-center gap-4  mb-6">
          <Order />
          <CardSum array={array} />
        </div>
        <div className="col-span-2 flex-col items-center  justify-center">
          <div className="flex items-center justify-center gap-6 ">
          </div>

          <hr />
          <OrderList array={array}
            className=' m-auto' />
        </div>
      </div>
      
      <div className="flex item justify-center my-4">
        <CheckOutButton />
      </div>
    </div>

  )
}


