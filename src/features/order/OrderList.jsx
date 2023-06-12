import CardOrder from './CardOrder'

export default function OrderList({array}) {

    const  prod  = array

  return (
    <div   className=" flex flex-wrap gap-6 m-2">
        {prod.map(el => (
       <CardOrder key={el.productId} product={el}  />
    ))}
    </div>
  )
}
