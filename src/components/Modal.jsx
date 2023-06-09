// import { useState } from "react"





export default function Modal({ isOpen, onClose, title, children }) {
    // const [isOpen, setOpen] = useState(false)
    return (
        <>
            {isOpen ? (
                <div className="card w-96 bg-secondary shadow-xl  z-50 m-52 absolute right-10 top-0 ">
                    <div className="card-body">
                        <div className="flex justify-between">
                        <h2 className="card-title text-primary text">{title}</h2>
                        <div    
                            className="text-gray-500 font-semibold hover:text-gray-600 flex justify-end"
                            role="button"
                            onClick={onClose}
                        >
                            &#10005;
                        </div>
                        </div>
                        <div className="p-4 overflow-auto">
                        {children}
                        </div>
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}
