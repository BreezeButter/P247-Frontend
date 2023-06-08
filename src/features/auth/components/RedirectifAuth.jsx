import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuth({children}){

    const isAuth = useSelector(state => state.auth.isAuthenticated)

    console.log(isAuth)
    if(isAuth){
        return <Navigate to='/'/>
    }
    return children;

}