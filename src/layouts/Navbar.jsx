import { Logo } from "../icons";
import { Dog, Cat, Toy } from "../icons";
import { useState } from 'react';
import Modal from '../components/Modal';
import RegisterForm from "../features/auth/components/RegisterForm";
import LoginForm from '../features/auth/components/LoginForm'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuItem from "./ManuItem";
import Cart from "./Cart";

export default function Navbar() {
  const navigate = useNavigate();
  const userAuthDone = useSelector(state => state.auth.isAuthenticated)
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState('')
  const menus = [
    
    { id: 1, Icon: Dog, to: '/dog' },
    { id: 2, Icon: Cat, to: '/cat' },
    { id: 3, Icon: Toy, to: '/toy' }
   
  ];

  return (
    <>
      <div className="flex text-center justify-center bg-primary text-xl text-white">
        <h1>Welcome to P24/7 Shopping Online</h1>
      </div>
      <div className=" sticky top-0 z-50">
        <div className=" flex justify-between p-4 bg-secondary shadow-sm shadow-gray-200 px-6 relative ">
          <div className="btn btn-secondary" onClick={() => navigate("/")}>
            <div >
              <Logo />
            </div>
            <a className="text-primary  text-3xl hover:scale-125 duration-200">24/7</a>
          </div>
          <div className="navbar-center gap-4 flex">
            {/* <div onClick={()=>navigate("/dog")}>
            <Dog />
          </div>
          <div onClick={()=>navigate("/cat")}>
            <Cat />
          </div>
          <div>
            <Toy onClick={()=>navigate("/toy")} />
          </div> */}
            {menus.map(el => (
              <MenuItem
                Icon={el.Icon}
                to={el.to}
                key={el.id}
                active={location.pathname === el.to}
              />
            ))}
          </div>
          {userAuthDone ? (
            <>
              <div className="flex gap-4">
                <Cart/>
                <div>
                  <button
                    className="btn btn-primary hover:scale-125 duration-200 "
                    onClick={() => navigate("/member")}> Member</button>
                </div>
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/src/assets/dog-card.jpg" />
                  </div>
                </div>
              </div>
            </>


          ) : (<div className="flex gap-4 ">
            <button
              className="btn btn-primary hover:scale-125 duration-200 "
              onClick={() => {
                setModal(false)
                setOpen(true)
              }
              }
            >
              Sign Up
            </button>
            <button className="btn btn-outline btn-primary hover:scale-125 duration-200 " onClick={() => {
              setOpen(true)
              setModal(true)
            }}>Login</button>
          </div>)}

        </div>
        {modal ?
        (<Modal
          title="Login" isOpen={open} onClose={() => setOpen(false)}>
          <LoginForm onSuccess={() => setOpen(false)} />
        </Modal>) 
        : (<Modal
          title="Sign up" isOpen={open} onClose={() => setOpen(false)}>
          <RegisterForm onSuccess={() => setOpen(false)} />
        </Modal>)}
      </div>
    </>

  )
}
