import CardOrder from './CardOrder'

export default function OrderList({array}) {

   

    const  prod  = array
    console.log('Cart all array2', prod)

  return (
    <div className=" flex flex-wrap gap-6 m-2 items-center justify-center">
        {prod.map(el => (
       <CardOrder key={el.cartId} product={el}  />
    ))}
    </div>
  )
}
