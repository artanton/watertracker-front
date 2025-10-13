import { useState } from 'react';

import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { apiRegisterUser } from '../../redux/authorization/authReducer';
import { selectIsLoggedIn } from '../../redux/selectors';

import { signUpSchema } from 'schemas/schemas';

import { LayoutSignIn } from 'components/LayoutSignIn/LayoutSignIn';

import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';

import {
  Label,
  SignUpTitle,
  Input,
  Error,
  Button,
  GoolgleButton,
  ButtonContent,
  SignUpForm,
  Wrap,
  StyledLink,
} from './SignUp.styled';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { t } = useTranslation();
  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

   const loginWithGoogle=()=> {
      window.location.href = 'http://localhost:4000/api/auth/google';
    }

  const swapRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const { values, touched, errors, handleChange, handleBlur, isValid } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        repeatPassword: '',
      },
      validationSchema: signUpSchema,
    });
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const repeatPassword = event.currentTarget.elements.repeatPassword.value;

    if (password !== repeatPassword) {
      return toast.error('Please, write a correct email or password!');
    }

    // if (token === null) {
    //   return toast.error('You dont have token');
    // }

    const formData = {
      email,
      password,
    };
    dispatch(apiRegisterUser(formData));

    handleChange({ target: { name: 'email', value: '' } });
    handleChange({ target: { name: 'password', value: '' } });
    handleChange({ target: { name: 'repeatPassword', value: '' } });

    // dispatch(apiRegisterUser(formData))
    //   .unwrap()
    //   .then(() => handleChange({ target: { name: 'email', value: '' } }))
    //   .then(() => handleChange({ target: { name: 'password', value: '' } }))
    //   .then(() =>
    //     handleChange({ target: { name: 'repeatPassword', value: '' } })
    //   )
    //   .catch(() => toast.error('Please, write a correct email or password!'));

    //// event.currentTarget.reset();
  };

  return (
    <>
      <LayoutSignIn>
        <SignUpForm onSubmit={onSubmit}>
          <SignUpTitle>{t('authForm.signupTitle')}</SignUpTitle>
          <Label>
            {t('authForm.email')}
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('authForm.emailPlaceholder')}
              $error={touched.email && errors.email}
            />
            {touched.email && errors.email && <Error>{errors.email}</Error>}
          </Label>

          <Label>
            {t('authForm.password')}
            <Wrap>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('authForm.passPlaceholder')}
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
            {t('authForm.repeatePass')}
            <Wrap>
              <Input
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('authForm.repeatePass')}
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
            {t('authForm.signupBtnTitle')}
          </Button>
          {isLoggedIn && <Navigate to="/signin" />}

          <StyledLink to="/signin">{t('authForm.signinLink')}</StyledLink>
           <GoolgleButton onClick={loginWithGoogle} >
         <ButtonContent>

            <svg width="24" height="24" viewBox="0 0 32 32">
              <g>
                <path fill="#4285F4" d="M31.68 16.364c0-1.13-.102-2.232-.293-3.273H16.32v6.195h8.64c-.372 2.01-1.49 3.715-3.18 4.86v4.04h5.14c3.01-2.77 4.75-6.85 4.75-11.822z"/>
                <path fill="#34A853" d="M16.32 32c4.32 0 7.95-1.43 10.6-3.89l-5.14-4.04c-1.43.96-3.26 1.53-5.46 1.53-4.2 0-7.75-2.84-9.02-6.66H2.01v4.18C4.65 28.36 10.06 32 16.32 32z"/>
                <path fill="#FBBC05" d="M7.3 18.94c-.32-.96-.5-1.98-.5-3.04s.18-2.08.5-3.04V8.68H2.01A15.98 15.98 0 0 0 0 16c0 2.62.63 5.1 1.74 7.32l5.56-4.38z"/>
                <path fill="#EA4335" d="M16.32 6.36c2.35 0 4.45.81 6.11 2.4l4.58-4.58C24.27 1.43 20.64 0 16.32 0 10.06 0 4.65 3.64 2.01 8.68l5.29 4.18c1.27-3.82 4.82-6.66 9.02-6.66z"/>
              </g>
            </svg>
           Continue with Google
         </ButtonContent>
          </GoolgleButton>
        </SignUpForm>
      </LayoutSignIn>
    </>
  );
};

export default Signup;
