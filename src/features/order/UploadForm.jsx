import { useRef, useState } from "react"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {paymentAsync} from '../../features/product/components/slice/cart-slice'



export default function UploadForm() {

    const inputRef = useRef("")
    const [file, setFile] = useState(null)
    console.log(file)

       const dispatch = useDispatch()
       const orederId = useSelector(state=> state.cart.order)

       const createPayment = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('paymentUpload', file);
        console.log('file -----> ', formData);
      
        try {
          // Assuming you have access to the 'dispatch' function
           await dispatch(paymentAsync(orederId, formData));
          // Success message or further actions
        } catch (error) {
          // Handle error
        }
      };





    // handleSubmit = () => {

    // }

    return (
        <form onSubmit={createPayment}>
            <div className="card  card-normal w-[300px] bg-base-100 shadow-xl">
                <figure><img src="src/assets/IMG_A46B7FA6DFFC-1.jpeg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Please upload here !!!</h2>
                    <div className="card-actions  items-center justify-center my-4">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
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
                        >Confirm Payment</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
