

export default function CardOrder({ product }) {

  const { Product } = product
  const PricePerProd = Product.price * product.productAmount






  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-[800px] mx-12  ">
          <tbody>
            <tr className="flex  items-center justify-center  ">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-[100px] flex items-center justify-center">
                        <button className="btn btn-accent text-[#01722a] btn-sm text-xl m-2">+</button>
                        <button className="btn  text-[#a3a3a3]  btn-sm text-xl m-2">-</button>
                    </div>
                    <div className="mask mask-squircle w-24 h-24">
                      <img src={Product.image1}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="font-bold text-xl">{Product.brand}</div>
                    <div className="font-bold text-sm">{Product.productName}</div>
                  </div>
                </div>
              </td>
              <td className="flex my-auto items-center justify-center ">
                <br />
                <span className="badge badge-ghost badge-lg text-xl">{product.productAmount} Pics</span>
              </td>
              <th>
                <button className="btn btn-accent text-[#01722a] btn-xs text-xl">{PricePerProd}฿</button>
              </th>
              <td>
                <button className="btn btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </td>
            </tr>
          </tbody >
        </table>

      </div >
    </div >
  )
}
