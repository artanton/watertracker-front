import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

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
  StyledLink,
} from './SignIn.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { apiLoginUser } from '../../redux/authorization/authReducer';
import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';
import { selectIsLoading } from '../../redux/selectors';
import { GoogleBtn } from 'components/googleBtn/GoogleBtn';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const { t } = useTranslation();
 

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

 

  const { values, touched, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    
  });

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
      email,
      password,
    };
    

    dispatch(apiLoginUser(formData))
      .unwrap()
      .then(() => handleChange({ target: { name: 'email', value: '' } }))
      .then(() => handleChange({ target: { name: 'password', value: '' } }))
      .catch(() => toast.error('Please, write a correct email or password!'));
  };
  return (
    <LayoutSignIn>
      <SignInForm onSubmit={onSubmit}>
        <SignInTitle>{t('authForm.signinTitle')}</SignInTitle>
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
        <Button type="submit" disabled={isLoading}>
          {t('authForm.signinBtnTitle')}
        </Button>
        <StyledLink to="/signup">{t('authForm.signupLink')}</StyledLink>
        <GoogleBtn/> 
      </SignInForm>
    </LayoutSignIn>
  );
}

export default Signin;
