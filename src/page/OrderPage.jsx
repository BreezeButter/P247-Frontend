import CardSum from "../features/order/CardSum";
import OrderList from "../features/order/OrderList";

export default function OrderPage() {

  const array = [
    {brand: 'a' ,amount: 1 ,price: 20 },
    {brand: 'b' ,amount: 3 ,price: 60 }
  ]

  return (
    <div>
    <div className="flex items-center justify-center mb-12">
      <div className="text-3xl text-primary mt-12 mr-12">
      <h1>Order ID</h1>
      </div>
    </div>
    <div className="grid grid-cols-3" >
      <div className="col-span-2">
      <h1>OrderList</h1>
      <OrderList array={array}/>
      </div>
      <div>
        <div>Summary</div>
        <CardSum/>

      </div>
    </div>

  </div>




  )
}


