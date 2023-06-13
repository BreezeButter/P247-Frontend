
import UploadForm from "../features/order/UploadForm";
import { PaymentIcon } from "../icons";


export default function PaymentPage() {
  return (
    <div className="bg-[#26218f] py-[50px] grid grid-cols-2">
      <div className=" text-4xl text-center items-center flex m-auto text-white font-bold px-[100px]">
        <PaymentIcon/>
       Please Scan QR Code Here !! and upload file
      </div>
      <div className="flex items-center justify-center my-4">
        <UploadForm/>
      </div>
    </div>
  )
}
