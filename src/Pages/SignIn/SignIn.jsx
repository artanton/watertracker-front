import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
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
  SignUpText,
} from './SignIn.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { apiLoginUser } from '../../redux/authorization/authReducer';
import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { toast } from 'react-toastify';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch(apiLoginUser(e));
  // };

  const { values, touched, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    //onSubmit,
  });

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
      email,
      password,
    };
    //console.log(formData);

    dispatch(apiLoginUser(formData))
      .unwrap()
      .then(() => handleChange({ target: { name: 'email', value: '' } }))
      .then(() => handleChange({ target: { name: 'password', value: '' } }))
      .catch(() => toast.error('Please, write a correct email or password!'));
  };
  return (
    <LayoutSignIn>
      <SignInForm onSubmit={onSubmit}>
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
          {error && <Error>{`Wrong email or password`}</Error>}
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </Label>

        <Button type="submit" disabled={isLoading}>
          Sign in
        </Button>
        <Link to="/signup">
          <SignUpText>Signup</SignUpText>
        </Link>
      </SignInForm>
    </LayoutSignIn>
  );
}

export default Signin;
