
import AddCartButton from "./AddCartButton";


export default function CardProducts({ product,handleSelected }) {

    

    return (
        <div>
            <div className="card w-56 bg-base-100 shadow-xl hover:scale-105 duration-200">

                <figure className="px-10 pt-10 ">
                    <img src={product.image1} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title text-primary">{product.brand} </h2>
                    <div className="card-actions flex items-center justify-center">
                        <button className="btn btn-outline">{product.price}฿</button>
                        <button className="btn"
                            onClick={() => {
                                handleSelected(product.productId)
                            }
                            }>See Detail</button>
                        <AddCartButton product={product} />

                        <button className="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
