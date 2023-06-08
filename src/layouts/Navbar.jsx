import { Logo } from "../icons";
import { Dog, Cat, Toy } from "../icons";
import { useState } from 'react';
import Modal from '../components/Modal';
import RegisterForm from "../features/auth/components/RegisterForm";
import LoginForm from '../features/auth/components/LoginForm'

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [modal, setModal] =useState(false)

  return (
    <>
      <div className=" flex justify-between p-4 bg-secondary shadow-xl shadow-slate-100 px-6 relative">
        <div className="btn btn-secondary">
          <div>
            <Logo />
          </div>
          <a className="text-primary  text-3xl">24/7</a>
        </div>
        <div className="navbar-center gap-4 flex">
          <div >
            <Dog />
          </div>
          <div>
            <Cat />
          </div>
          <div>
            <Toy />
          </div>
        </div>
        <div className="flex gap-4 ">
          <button
            className="btn btn-primary "
            onClick={() => {
              setModal(false)
              setOpen(true)
            }
            }
            >
            Sign Up
          </button>
          <button className="btn btn-outline btn-primary"  onClick={() => {
            setOpen(true)
            setModal(true)
            }}>Login</button>
        </div>
      </div>
      { modal ? (  <Modal
        title="Login" isOpen={open} onClose={() => setOpen(false)}>
        <LoginForm onSuccess={() => setOpen(false)} />
      </Modal>):( <Modal
        title="Sign up" isOpen={open} onClose={() => setOpen(false)}>
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>)}
    </>

  )
}
