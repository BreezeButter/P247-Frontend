
export default function CardSum({array}) {


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
        <div className="stat-title">Order ID</div>
        <div className="stat-value">1234</div>

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
