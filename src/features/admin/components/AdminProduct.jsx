

import { useState, useRef } from "react";
import RegisterInput from "../../auth/components/RegisterInput";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { createProduct } from '../../product/components/slice/product-slice'



export default function AdminProduct() {



    const [input, setInput] = useState('');
    const [file, setFile] = useState(null)


    // const imageUrl = URL.createObjectURL(file)
    // const defaultImage = '/src/assets/cat-card.jpg'
    // const imgElement = document.createElement('img');
    // if (imageUrl) {
    //     imgElement.src = imageUrl;
    //   } else {
    //     imgElement.src = defaultImage;
    //   }
    const inputRef = useRef("")

    console.log(file)

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });

    };

    console.log(input)



    const hdlCreateProduct = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        if (file) {
            formData.append("image1", file);
        }
        if (input.productName) {
            formData.append("productName", input.productName);
        }
        if (input.brand) {
            formData.append("brand", input.brand);
        }
        if (input.price) {
            formData.append("price", input.price);
        }
        if (input.productWeight) {
            formData.append("productWeight", input.productWeight);
        }
        if (input.petAge) {
            formData.append("petAge", input.petAge);
        }
        if (input.detail) {
            formData.append("detail", input.detail);
        }
        if (input.petType) {
            formData.append("petType", input.petType);
        }
        if (input.foodType) {
            formData.append("foodType", input.foodType);
        }
        if (input.productType) {
            formData.append("productType", input.productType);
        }

        try {
            dispatch(createProduct(formData));

        } catch (err) {
            toast.error('Payment Error')
        }
    }




    return (
        <div className="grid grid-cols-1">
            <div>
                <form onSubmit={hdlCreateProduct}>
                    <div>
                        <div>
                            <div className="avatar">
                                {/* <div className="w-[400px] rounded-xl"> */}
                                {/* <img src={  imageUrl || defaultImage  } /> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <RegisterInput
                            name="productName"
                            placeholder="productName"
                            value={input.productName}
                            onChange={handleChangeInput}

                        // isInvalid={error.userName}
                        />
                        <RegisterInput
                            name="brand"
                            placeholder="brand"
                            value={input.brand}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                        <RegisterInput
                            name="price"
                            placeholder="price"
                            value={input.price}
                            onChange={handleChangeInput}
                        // isInvalid={error.lastName} 
                        />
                        <RegisterInput
                            name="productType"
                            placeholder="productType"
                            value={input.productType}
                            onChange={handleChangeInput}
                        // isInvalid={error.email} 
                        />
                        <RegisterInput
                            name="productWeight"
                            placeholder="productWeight"
                            value={input.productWeight}
                            onChange={handleChangeInput}
                        // isInvalid={error.password }
                        />
                        <RegisterInput
                            name="petAge"
                            placeholder="petAge"
                            value={input.petAge}
                            onChange={handleChangeInput}
                        // isInvalid={error.userName}
                        />
                        <RegisterInput
                            name="detail"
                            placeholder="detail"
                            value={input.detail}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                        <RegisterInput
                            name="petType"
                            placeholder="petType"
                            value={input.petType}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                        <RegisterInput
                            name="foodType"
                            placeholder="foodType"
                            value={input.foodType}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                    </div>
                    <div>
                                <div className="avatar m-12">
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
                                </div>
                            </div>
                        <div>
                        <button type="submit" className="btn btn-primary flex items-center mx-auto">Create Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}