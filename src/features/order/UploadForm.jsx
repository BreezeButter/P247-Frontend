import { useRef, useState } from "react"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {paymentAsync} from '../../features/product/components/slice/cart-slice'
import { toast } from "react-toastify";



export default function UploadForm() {


    const inputRef = useRef("")
    const [file, setFile] = useState(null)

    console.log(file)

       const dispatch = useDispatch()
       const res = useSelector(state=> state.cart.order)
       const value = res
      
    

       const createPayment = async (e) => {
        
        e.preventDefault();
        const formData = new FormData();
       if (value) {
        formData.append("orderId", value.orderId );
              }
        if (file) {
        formData.append("paymentUpload", file);
              }
        try{
           dispatch(paymentAsync(formData));
        }catch(err){
            toast.error('Payment Error')
        }
     }
        


    return (
        <>
        <form onSubmit={createPayment}>
            <div className="card  card-normal w-[300px] bg-base-100 shadow-xl">
                <figure><img src="src/assets/IMG_A46B7FA6DFFC-1.jpeg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Please upload here !!!</h2>
                    <div className="card-actions  items-center justify-center my-4">
                        <label className="block">
                            <span className="sr-only">Choose photo</span>
                            <input type="file"
                                ref={inputRef}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setFile(e.target.files[0])
                                    }
                                }}
                                className="block w-full text-sm text-slate-500
                                              file:mr-4 file:py-2 file:px-4
                                             file:rounded-full file:border-0
                                            file:text-sm file:font-semibold   
                                             file:bg-violet-50 file:text-violet-700
                                                 hover:file:bg-violet-100
                                                "
                            />
                        </label>
                        <button
                            className="btn btn-primary mt-4"
                            type='submit'
                        >Upload</button>
                    </div>
                </div>
            </div>
        </form>
       
        </>
    )
}
