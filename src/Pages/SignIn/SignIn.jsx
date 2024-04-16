import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
// import { UseDispatch } from 'react-redux';
import { signInSchema } from 'schemas/schemas';
import {
  Label,
  SignInTitle,
  EmailInput,
  Error,
  Button,
  SignInForm,
} from './SignIn.styled';

function Signin() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(isLoading);

  // const onSubmit = e => {
  //   dispatch(signInThunk(e));
  // };

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: signInSchema,
      // onSubmit,
    });
  return (
    <>
      <SignInForm onSubmit={handleSubmit}>
        <SignInTitle>Sign in</SignInTitle>
        <Label>
          Enter email
          <EmailInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            $error={touched.email && errors.email}
          />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
        </Label>
        <Label>
          Enter password
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            $error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </Label>
        <Button type="submit">Sign in</Button>
      </SignInForm>
      <Link to="/signup">Signup</Link>
    </>
  );
}

export default Signin;
