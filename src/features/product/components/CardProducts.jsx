

export default function CardProducts({ product }) {
    console.log(product)
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
              
                <figure className="px-10 pt-10 ">
                    <img src={product.image1} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
            
                    <h2 className="card-title text-primary">{product.brand} <span className=" text-gray-500">#{product.foodType}</span></h2>
                    <div className="card-actions">
                        <button className="btn btn-outline">{product.price}฿</button>
                        <button className="btn btn-primary">Buy</button>

                    </div>
                </div>
            </div>
        </div>  
    )
}
