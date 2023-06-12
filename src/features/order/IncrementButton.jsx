import { useDispatch } from 'react-redux';
import {incrementProduct} from   '../../features/product/components/slice/cart-slice';


export default function IncrementButton(input) {


  const dispatch = useDispatch();


  const handleSelect = () => {
    dispatch(incrementProduct(input))

  };

  return (
    <button
    className="btn btn-accent text-[#01722a] btn-sm text-xl m-2"
    onClick={handleSelect}
    >+</button>
  )
}
