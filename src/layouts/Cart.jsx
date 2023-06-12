
import { Shop } from "../icons";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();


   
    return (
      
            <div className="indicator" onClick={() => navigate("/order")}>
                <span className="indicator-item badge badge-error">{}</span>
                <button className="btn btn-secondary btn-outline outline-4 ">
                    <Shop />
                </button>
            </div>
  
    )
}
