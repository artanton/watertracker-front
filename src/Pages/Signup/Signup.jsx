import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/authorization/authReducer';
import { useFormik } from 'formik';
import { signUpSchema } from 'schemas/schemas';

import {
  Label,
  SignUpTitle,
  EmailInput,
  PasswordInput,
  RepeatPasswordInput,
  Error,
  Button,
  SignUpForm,
} from './SignUp.styled';

const Signup = () => {
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

    const formData = {
      email,
      password,
    };
    //console.log(formData);
    dispatch(apiRegisterUser(formData));

    handleChange({ target: { name: 'email', value: '' } });
    handleChange({ target: { name: 'password', value: '' } });
    handleChange({ target: { name: 'repeatPassword', value: '' } });

    //// event.currentTarget.reset();
  };

  return (
    <>
      <div>SIGNUP PAGE HERE</div>
      <Link to="/signin">Signin</Link>

      <SignUpForm onSubmit={onSubmit}>
        <SignUpTitle>Sign up</SignUpTitle>
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
          <PasswordInput
            type="password"
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
        <Label>
          Repeat password
          <RepeatPasswordInput
            type="password"
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Repeat password"
            $error={touched.repeatPassword && errors.repeatPassword}
          />
          {touched.repeatPassword && errors.repeatPassword && (
            <Error>{errors.repeatPassword}</Error>
          )}
        </Label>
        <Button type="submit" disabled={!isValid}>
          Sign up
        </Button>
      </SignUpForm>
    </>
  );
};

export default Signup;
