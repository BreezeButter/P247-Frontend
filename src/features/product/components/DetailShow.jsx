// import { useSelector } from "react-redux"
// import store from "../../../store"
// import {selectedAsync} from './slice/product-slice'
// import { useEffect } from "react"


export default function DetailShow({prodId}) {

  const  prodIdShow = prodId
  console.log(prodIdShow)



  return (
    <div>
    {prodIdShow ? (<div >
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={ prodIdShow.image1 } alt="img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{prodIdShow.brand}</h2>
          <p>{prodIdShow.productName}</p>
        </div>
        <div className="grid grid-cols-3">
          <div>{prodIdShow.foodType}</div>
          <div>{prodIdShow.petAge}</div>
          <div>{prodIdShow.productWeight}</div>
        </div>
        <div className=" flex  flex-col items-center text-center justify-center">
         <div>
          detail
         </div>
         <detail>
         {prodIdShow.productWeight}
         </detail>
        </div>
        <div className="card-actions flex justify-centeritems-center">
          <button className="btn btn-outline">{prodIdShow.price}</button>
        </div>
      </div>
      <div>
      <button className="btn btn-primary">Add to cart</button>
      <button className="btn btn-success">BUY</button>
      </div>
    </div>):
    (<div> Hi </div>)}
    </div>
    
  )

}
