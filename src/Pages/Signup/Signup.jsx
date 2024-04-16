import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { apiRegisterUser } from './redux/authorization/authReducer';

const Signup = () => {
  const dispatch = useDispatch();

  const onSubmitRegistr = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const repeatPassword = event.currentTarget.elements.repeatPassword.value;

    const formData = {
      email,
      password,
      repeatPassword,
    };
    //console.log(formData);
    // dispatch(apiRegisterUser(formData));
    // .unwrap()
    // .then(() => toast.success('Perfect! Successfully registration!'))
    // .catch(() => toast.error('Please, write a correct email or password!'));
    //// event.currentTarget.reset();
  };

  return (
    <>
      <div>SIGNUP PAGE HERE</div>
      <Link to="/signin">Signin</Link>

      <form onSubmit={onSubmitRegistr}>
        <label>
          Enter your email
          <input type="text" name="email" placeholder="Email" required />
        </label>
        <label>
          Enter your password
          <input type="text" name="password" placeholder="Password" required />
        </label>
        <label>
          Repeat password
          <input
            type="text"
            name="repeatPassword"
            placeholder="Repeat password"
            required
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default Signup;
