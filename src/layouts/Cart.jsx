
import { Shop } from "../icons";
import { useNavigate } from "react-router-dom";
import { useSelector  } from "react-redux";
import { useDispatch } from "react-redux";
import { syncCartAll } from '../features/product/components/slice/cart-slice'
import { useEffect } from "react";

export default function Cart() {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    useEffect(() => {
  
      dispatch(syncCartAll())
  
    }, [])

    const num = useSelector( state => state.cart.numCart)
   
    return (
      
            <div className="indicator" onClick={() => navigate("/order")}>
                <span className="indicator-item badge badge-error">{num}</span>
                <button className="btn btn-secondary btn-outline outline-4 ">
                    <Shop />
                </button>
            </div>
  
    )
}
