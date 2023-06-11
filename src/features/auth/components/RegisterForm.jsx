import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { registerAsync } from '../slice/auth-slice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
// import validateRegister from '../validator/validate-register';

const initialInput = {
  userName:'',
  firstName: '',
  lastName: '',
  email: '',
  passWord: '',
  // confirmPassword: ''
};

///Waiting for validate////
export default function RegisterForm({onSuccess}) {
  
  
  const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({});
  
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      // const result = validateRegister(input);
      // if (result) {
      //   return setError(result);
      // }
      // setError({});
     
      
      await dispatch(registerAsync(input)).unwrap();
      
      toast.success('register successfully',{
        icon: "🚀"
      });
      onSuccess();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div >
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
        {/* <RegisterInput
          name="confirmPassword"
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          // isInvalid={error.confirmPassword} 
          /> */}

      </div>
      <div>
      <button type="submit" className="btn btn-primary flex items-center mx-auto">Registration</button>
      </div>
    </form>

  )
}
