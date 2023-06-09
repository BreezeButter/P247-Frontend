
import CardProducts from "./CardProducts";



 
export default function ProductsList( {array} ) {

  const x =array
  console.log(x)
  

  return (
    <div className=" flex flex-wrap gap-6 m-2">
      
      {x.map(el => (
         <CardProducts key={el.productId} product={el}/>
      ))}
    </div>
  )
}