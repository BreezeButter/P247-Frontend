import { useSelector } from "react-redux";
import { Shop } from "../icons";






export default function Cart() {

    // const amount = useSelector(state=> state.counter.cartItem)
    // console.log( 'cartItem',amount)

   
    return (
      
            <div className="indicator">
                <span className="indicator-item badge badge-error">{}</span>
                <button className="btn btn-secondary btn-outline outline-4 ">
                    <Shop />
                </button>
            </div>
  
    )
}
