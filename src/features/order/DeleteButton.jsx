import { useDispatch } from 'react-redux';
import {delProduct} from   '../../features/product/components/slice/cart-slice';

export default function DeleteButton(input) {


  const dispatch = useDispatch();


  const handleSelect = () => {
    dispatch(delProduct(input))
    console.log('first2',input)

  };

  
    return (
        <button className="btn btn-circle"
        onClick={handleSelect}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    )
}
