import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiRegisterUser } from '../../redux/authorization/authReducer';
import { useFormik } from 'formik';
import { signUpSchema } from 'schemas/schemas';
import { LayoutSignIn } from 'components/LayoutSignIn/LayoutSignIn';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useState } from 'react';
import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';

import {
  Label,
  SignUpTitle,
  Input,
  // PasswordInput,
  // RepeatPasswordInput,
  Error,
  Button,
  SignUpForm,
  Wrap,
  SignUpText,
} from './SignUp.styled';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

  const swapRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const {
    values,
    touched,
    errors,
    //handleSubmit: formikHandleSubmit,
    handleChange,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: signUpSchema,
    // onSubmit,
  });
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const repeatPassword = event.currentTarget.elements.repeatPassword.value;

    if (password !== repeatPassword) {
      return;
    }

    const formData = {
      email,
      password,
    };
    console.log(formData);
    dispatch(apiRegisterUser(formData));

    handleChange({ target: { name: 'email', value: '' } });
    handleChange({ target: { name: 'password', value: '' } });
    handleChange({ target: { name: 'repeatPassword', value: '' } });

    //// event.currentTarget.reset();
  };

  if (isLoggedIn) {
    navigate('/signin');
  }
  return (
    <>
      <LayoutSignIn>
        <SignUpForm onSubmit={onSubmit}>
          <SignUpTitle>Sign up</SignUpTitle>
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

          <Label>
            Repeat password
            <Wrap>
              <Input
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Repeat password"
                $error={touched.repeatPassword && errors.repeatPassword}
              />
              <button type="button" onClick={swapRepeatPassword}>
                {showRepeatPassword ? <Eye /> : <EyeSlash />}
              </button>
            </Wrap>
            {touched.repeatPassword && errors.repeatPassword && (
              <Error>{errors.repeatPassword}</Error>
            )}
          </Label>

          <Button type="submit" disabled={!isValid}>
            Sign up
          </Button>
          {/* {isLoggedIn && <Redirect to="/signin" />} */}

          <Link to="/signin">
            <SignUpText>Signin</SignUpText>
          </Link>
        </SignUpForm>
      </LayoutSignIn>
    </>
  );
};

export default Signup;
