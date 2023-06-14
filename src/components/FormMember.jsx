

import { useState, useRef, useEffect } from "react";
import RegisterInput from "../features/auth/components/RegisterInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import {imageAsync, userEditAsync, fetchMe} from '../features/auth/slice/auth-slice'




export default function FormMember() {

  
    
   

    const userInfo = useSelector(state=>state.auth.user) 
    console.log(userInfo)

    const [input, setInput] = useState(userInfo);

    const image = userInfo.profileImage
    const src = image
    const defaultImage = '/src/assets/cat-card.jpg'
    const inputRef = useRef("")
    const [file, setFile] = useState(null)


    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });

    };

    const handleOnSubmit =(e)=>{

        e.preventDefault();

        dispatch(userEditAsync(input))

    }

    const editImageProfile = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        if (file) {
            formData.append("profileImage", file);
        }
        try {
            dispatch(imageAsync(formData));

        } catch (err) {
            toast.error('Payment Error')
        }
    }
    // useEffect(()=>{

        // dispatch(fetchMe())

    // },[])




    return (
        <div className="grid grid-cols-2">
            <div>
                <div className="avatar m-12">
                    <div className="w-[400px] rounded-xl">
                        <img src={src || defaultImage} />
                    </div>
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
                        <button className="btn btn-sm"
                        onClick={editImageProfile}>Update Profile</button>
                    </div>
                </div>
            </div>
            <div>

                <form onSubmit={handleOnSubmit}>
                    <div className="grid grid-cols-2 gap-5">

                        <RegisterInput
                            name="userName"
                            placeholder="Username"
                            value={input.userName}
                            onChange={handleChangeInput}


                        // isInvalid={error.userName}
                        />
                        <RegisterInput
                            name="firstName"
                            placeholder="Fist name"
                            value={input.firstName}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                        <RegisterInput
                            name="lastName"
                            placeholder="Last name"
                            value={input.lastName}
                            onChange={handleChangeInput}
                        // isInvalid={error.lastName} 
                        />
                        <RegisterInput
                            name="email"
                            placeholder="Eamil name"
                            value={input.email}
                            onChange={handleChangeInput}
                        // isInvalid={error.email} 
                        />
                        <RegisterInput
                            name="passWord"
                            placeholder="Password"
                            value={input.passWord}
                            onChange={handleChangeInput}
                        // isInvalid={error.password }
                        />
                        <RegisterInput
                            name="mobile"
                            placeholder="mobile"
                            value={input.mobile}
                            onChange={handleChangeInput}
                        // isInvalid={error.userName}
                        />
                        <RegisterInput
                            name="address"
                            placeholder="address"
                            value={input.address}
                            onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                        />
                        <RegisterInput
                            name="country"
                            placeholder="country"
                            value={input.country}
                            onChange={handleChangeInput}
                        // isInvalid={error.lastName} 
                        />
                        <RegisterInput
                            name="postcode"
                            placeholder="postcode"
                            value={input.postcode}
                            onChange={handleChangeInput}
                        // isInvalid={error.email} 
                        />

                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary flex items-center mx-auto">Confirm Edit Information</button>
                    </div>
                </form>
            </div>
        </div>
    );
}