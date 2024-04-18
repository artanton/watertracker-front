import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
// import { UseDispatch } from 'react-redux';
import { signInSchema } from 'schemas/schemas';
import { LayoutSignIn } from 'components/LayoutSignIn/LayoutSignIn';
import {
  Label,
  SignInTitle,
  Input,
  Error,
  Button,
  SignInForm,
  Wrap,
} from './SignIn.styled';

import { useState } from 'react';
import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };
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
    <LayoutSignIn>
      <SignInForm onSubmit={handleSubmit}>
        <SignInTitle>Sign in</SignInTitle>
        <Label>
          Enter email
          <Input
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
          <Wrap>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              $error={touched.password && errors.password}
            />
            <button type="button" onClick={swapPassword}>
              {showPassword ? <Eye /> : <EyeSlash />}
            </button>
          </Wrap>
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </Label>

        <Button type="submit">Sign in</Button>
        <Link to="/signup">Signup</Link>
      </SignInForm>
    </LayoutSignIn>
  );
}

export default Signin;
