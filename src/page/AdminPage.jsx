// import { useNavigate } from "react-router-dom";
// import { useDispatch} from 'react-redux';
// import { useEffect } from "react";
// import { logout } from '../features/auth/slice/auth-slice'
import AdminProduct from "../features/admin/components/AdminProduct";
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';


export default function AdminPage() {

  const initialLoading = useSelector(state => state.product.loading);
  if (initialLoading) {
    return <Loading />;
  }

  // const dispatch = useDispatch()

  // useEffect(() => {

  //   // dispatch(createProductAsync())

  // }, [])


  // const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <div className='mb-6'>
      <ul className="menu menu-horizontal bg-primary rounded-box mt-6 text-white">
        <li onClick={()=>navigate("/admin",)}>
          <a className="tooltip" data-tip="Member Information">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </a>
        </li>
        <li onClick={()=>navigate("/admin/order")}>
          <a className="tooltip" data-tip="History Order">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </a>
        </li>
        <li >
          <a className="tooltip" data-tip="Log out" onClick={() => dispatch(logout())}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </a>
        </li>
      </ul>
      </div> */}
      <div>
        <h1 className='my-8 font-bold text-2xl'>Admin Create Product Page</h1>
      </div>
      <div>
      <AdminProduct/>
      </div>
    </div>
    
  )
}
