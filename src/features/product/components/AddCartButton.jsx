import { useDispatch } from 'react-redux';
import { increaseValue } from './slice/couter-slice';



export default function AddCartButton({product}) {


 

    const dispatch = useDispatch();
   
  
    const handleIncrease = () => {
      dispatch(increaseValue(product));
      console.log("AddCartButton",product)
    };

  return (
    <>
      <button onClick={
      handleIncrease
    }
    className="btn btn-primary">Add to cart</button>
    </>



  

  )
}
