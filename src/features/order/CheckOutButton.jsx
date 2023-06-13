
import { useDispatch } from "react-redux";
import { checkOutProduct } from '../../features/product/components/slice/cart-slice'
import { useNavigate } from "react-router-dom";


export default function CheckOutButton() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

const handleOnClick = () => {

  dispatch(checkOutProduct())
  navigate("/payment")
}




  return (
    <button 
    className="btn btn-sm btn-success sm:btn-sm md:btn-md lg:btn-lg"
    onClick={handleOnClick}
    >Check Out</button>
  )
}
