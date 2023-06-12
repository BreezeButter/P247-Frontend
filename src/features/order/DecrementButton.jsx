import { useDispatch } from 'react-redux';
import {decrementProduct} from   '../../features/product/components/slice/cart-slice';

export default function DecrementButton(input) {

  const dispatch = useDispatch();


  const handleSelect = () => {
    dispatch(decrementProduct(input))
  }


  return (
    <button 
    className="btn  text-[#a3a3a3]  btn-sm text-xl m-2"
    onClick={handleSelect}
    >-</button>
  )
}
