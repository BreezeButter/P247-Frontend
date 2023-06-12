// import { useSelector } from "react-redux"
// import store from "../../../store"
// import {selectedAsync} from './slice/product-slice'
// import { useEffect } from "react"


export default function DetailShow({prodId}) {

  const  prodIdShow = prodId


  return (
    <div>
    {prodIdShow ? (<div >
      <div className="card w-96 bg-base-100 shadow-xl p-12">
        <figure><img src={ prodIdShow.image1 } alt="img" /></figure>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title">{prodIdShow.brand}</h2>
          <p>{prodIdShow.productName}</p>
        </div>
        <div className="grid grid-cols-3 text-center gap-8 text-primary font-bold">
          <div>FoodType</div>
          <div>PetAge</div>
          <div>Weight</div>
        </div>
        <div className="grid grid-cols-3 text-center gap-8 ">
          <div>{prodIdShow.foodType}</div>
          <div>{prodIdShow.petAge} yr.</div>
          <div>{prodIdShow.productWeight} g.</div>
        </div>
        <div className=" flex  flex-col items-center text-center justify-center mt-4 ">
         <div className="text-primary font-bold">
          Detail
         </div>
         <detail>
         {prodIdShow.detail}
         </detail>
        </div>
        <div className="card-actions flex justify-center items-center mt-4">
          <button className="btn btn-outline">Price  {prodIdShow.price }฿</button>
        </div>
      </div>
      <div className="flex  justify-evenly items-center  mt-16 w-96">
      <button className="btn btn-primary">Add to cart</button>
      <button className="btn btn-success">BUY</button>
      </div>
    </div>):
    (<div> Hi </div>)}
    </div>
    
  )

}
