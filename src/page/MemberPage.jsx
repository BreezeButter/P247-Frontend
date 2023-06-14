import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchOrderAsync } from '../features/order/slice/order-slice'
import { logout } from '../features/auth/slice/auth-slice'
import OrderContainer from "../components/OrderContainer";
import { toast } from "react-toastify";



export default function MemberPage() {




  // if (!isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchOrderAsync())

  }, [])

  //  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const orderList = useSelector(state => state.order.orderUser)



  console.log(orderList)



  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mb-6'>
        <ul className="menu menu-horizontal bg-primary rounded-box mt-6 text-white">
          <li onClick={() => navigate("/member/info",)}>
            <a className="tooltip" data-tip="Member Information">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </a>
          </li>
          <li onClick={() => navigate("/member/order")}>
            <a className="tooltip" data-tip="History Order">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
          </li>
          <li >
            <a className="tooltip" data-tip="Log out" onClick={() => {
              dispatch(logout())
              navigate('/')
              toast.info('Already Logout')
              setTimeout(() => {
              location.reload()
              }, 2500)
            }
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className=' font-bold text-lg'>History Order</h1>
      </div>
      <div>
        <OrderContainer orderList={orderList} />
      </div>
    </div>
  )
}
