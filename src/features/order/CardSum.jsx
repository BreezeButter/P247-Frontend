import { useSelector } from "react-redux"

export default function CardSum({array}) {

   const userKa = useSelector(state=> state.auth.user)
   


  const amountSum = array.reduce((acc,el)=>{
    acc+=el.productAmount
    return acc
  },0)

  const priceSum = array.reduce((acc,el)=>{
    acc+=el.productAmount * el.Product.price
    return acc
  },0)
  

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow ">

      <div className="stat">
        <div className="stat-title">Member owner</div>
        <div className="stat-value">{userKa.userName}</div>

      </div>

      <div className="stat">
        <div className="stat-title">Total Pics</div>
        <div className="stat-value">{amountSum}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total Price</div>
        <div className="stat-value">{priceSum} ฿</div>

      </div>

    </div>
  )
}
