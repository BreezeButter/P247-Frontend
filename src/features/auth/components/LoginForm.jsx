import LoginInput from '../components/LoginInput'
import { useState } from "react";
// import { LoginAsync } from '../slice/auth-slice';
import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import validateRegister from '../validator/validate-register';

const initialInput = {
  userName: '',
  passWord: '',

};

///Waiting for validate////
export default function RegisterForm({ onSuccess }) {


  const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({});

  // const dispatch = useDispatch();

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
      console.log(input)

      // await dispatch(LoginAsync(input)).unwrap();

      toast.success('Login successfully');
      onSuccess();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div >
        <LoginInput
          name="userName"
          placeholder="Username"
          value={input.userName}
          onChange={handleChangeInput}
        // isInvalid={error.userName}
        />
        <LoginInput
          name="passWord"
          placeholder="Password"
          value={input.passWord}
          onChange={handleChangeInput}
        // isInvalid={error.password }
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary flex items-center mx-auto">Login</button>
      </div>
    </form>

  )
}
