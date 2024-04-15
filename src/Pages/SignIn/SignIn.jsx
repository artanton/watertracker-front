// import { useFormik } from 'formik';
// import { UseDispatch } from 'react-redux';
// import { signInSchema } from 'schemas/schemas';
// import { Label, SignInTitle } from './SignIn.styled';

// export const SignIn = () => {
//   // const dispatch = useDispatch();
//   // const isLoading = useSelector(isLoading);

//   // const onSubmit = e => {
//   //   dispatch(signInThunk(e));
//   // };

//   const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
//     useFormik({
//       initialValues: {
//         email: '',
//         password: '',
//       },
//       validationSchema: signInSchema,
//       onSubmit,
//     });

//   return (
//     <SignInForm>
//       <SignInTitle>Sign in</SignInTitle>
//       <Label>
//         Enter email
//         <EmailInput
//           type="email"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           placeholder="Email"
//           $error={touched.email && errors.email}
//         />
//         {touched.email && errors.email && (
//           <InputError>{errors.email}</InputError>
//         )}
//       </Label>
//       <Label>
//         Enter password
//         <PasswordInput
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           placeholder="Password"
//           $error={touched.password && errors.password}
//         />
//         {touched.password && errors.password && (
//           <InputError>{errors.password}</InputError>
//         )}
//       </Label>
//       <Button type="submit" disabled={isLoading}>
//         Sign in {isLoading && <ButtonLoader />}
//       </Button>
//       <RouterLink to="/forgot-password">Forgot password?</RouterLink>
//     </SignInForm>
//   );
// };
