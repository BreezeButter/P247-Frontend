import Modal from "../../components/Modal";
import { useState } from "react";
import UploadForm from "./UploadForm";


export default function UploadButton() {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);




    return (
        <div className="tooltip tooltip-open tooltip-right" data-tip="please upload payment before check out">
            <button
                className="btn"
                onClick={() => {
                    setOpen(true)
                    setModal(true)
                }}>Upload Payment</button>

            {modal ? (<Modal title="Payment" isOpen={open} onClose={() => setOpen(false)} >
                <UploadForm onSuccess={() => setOpen(false)} />
            </Modal>) : (
                <></>
            )}
        </div >
    )
}
