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
import { GoogleBtn } from 'components/googleBtn/GoogleBtn';

import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';

import {
  Label,
  SignUpTitle,
  Input,
  Error,
  Button,
  SignUpForm,
  Wrap,
  StyledLink,
} from './SignUp.styled';

const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { t } = useTranslation();
  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

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

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const repeatPassword = event.currentTarget.elements.repeatPassword.value;

    if (password !== repeatPassword) {
      return toast.error('Please, write a correct email or password!');
    }
    const formData = {
      email,
      password,
    };
    dispatch(apiRegisterUser(formData));

    handleChange({ target: { name: 'email', value: '' } });
    handleChange({ target: { name: 'password', value: '' } });
    handleChange({ target: { name: 'repeatPassword', value: '' } });  
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
          <GoogleBtn/> 

        </SignUpForm>
      </LayoutSignIn>
    </>
  );
};

export default Signup;
