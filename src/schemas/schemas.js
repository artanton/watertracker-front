import * as yup from 'yup';
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const userNameRegexp = /^[A-Za-zßäöüÄÖÜéèàáÁÉÈÀÑñ0-9]*$/;

export const signInSchema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const userSettingsSchema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not a valid email'),
  userName: yup
    .string()
    .matches(
      userNameRegexp,
      'User name can contain only alphabet characters and numbers without spaces, punctuation'
    )
    .max(64, 'User name should not exceed 64 characters'),
  gender: yup
    .string()
    .oneOf(['Man', 'Woman', null], 'Gender must be either Man or Woman')
    .nullable(),
  avatarURL: yup
    .string()
    .matches(
      /\.(jpg|png|webp|jpeg)$/,
      'Only .jpeg, .jpg, .webp and .png are allowed'
    ),
  oldPassword: yup.string(),
  newPassword: yup.string(),
  repeatPassword: yup.string(),

  // oldPassword: yup
  //   .string()
  //   .min(8, 'Old password must be at least 8 characters long')
  //   .max(64, 'Old password must be at most 64 characters long'),
  // newPassword: yup.string().when(['oldPassword', 'repeatPassword'], {
  //   is: (oldPassword, repeatPassword) => oldPassword || repeatPassword,
  //   then: yup
  //     .string()
  //     .required('New password is required')
  //     .min(8, 'New password must be at least 8 characters long')
  //     .max(64, 'New password must be at most 64 characters long'),
  //   otherwise: yup.string(),
  // }),
  // repeatPassword: yup.string().when(['oldPassword', 'newPassword'], {
  //   is: (oldPassword, newPassword) => oldPassword || newPassword,
  //   then: yup
  //     .string()
  //     .required('Repeat password is required')
  //     .min(8, 'Repeat password must be at least 8 characters long')
  //     .max(64, 'Repeat password must be at most 64 characters long')
  //     .oneOf([yup.ref('newPassword')], 'Passwords must match'),
  //   otherwise: yup.string(),
  // }),
  // oldPassword: yup
  //   .string()
  //   .when(['oldPassword', 'newPassword', 'repeatPassword'], {
  //     is: (oldPassword, newPassword, repeatPassword) =>
  //       oldPassword || newPassword || repeatPassword,
  //     then: yup.string().required('Old password is required'),
  //     otherwise: yup.string(),
  //   }),
  // newPassword: yup
  //   .string()
  //   .when(['oldPassword', 'newPassword', 'repeatPassword'], {
  //     is: (oldPassword, newPassword, repeatPassword) =>
  //       oldPassword || newPassword || repeatPassword,
  //     then: yup
  //       .string()
  //       .required('New password is required')
  //       .min(8, 'New password must be at least 8 characters long')
  //       .max(64, 'New password must be at most 64 characters long'),
  //     otherwise: yup.string(),
  //   }),
  // repeatPassword: yup
  //   .string()
  //   .when(['oldPassword', 'newPassword', 'repeatPassword'], {
  //     is: (oldPassword, newPassword, repeatPassword) =>
  //       oldPassword || newPassword || repeatPassword,
  //     then: yup
  //       .string()
  //       .required('Repeat password is required')
  //       .oneOf([yup.ref('newPassword')], 'Passwords must match'),
  //     otherwise: yup.string(),
  //   }),
  //!
  // oldPassword: yup.string().when(['newPassword', 'repeatPassword'], {
  //   is: (newPassword, repeatPassword) => newPassword || repeatPassword,
  //   then: yup.string().required('Old password is required'),
  //   otherwise: yup.string(),
  // }),
  // newPassword: yup.string().when(['oldPassword', 'repeatPassword'], {
  //   is: (oldPassword, repeatPassword) => oldPassword || repeatPassword,
  //   then: yup
  //     .string()
  //     .required('New password is required')
  //     .min(8, 'New password must be at least 8 characters long')
  //     .max(64, 'New password must be at most 64 characters long'),
  //   otherwise: yup.string(),
  // }),
  // repeatPassword: yup.string().when(['oldPassword', 'newPassword'], {
  //   is: (oldPassword, newPassword) => oldPassword || newPassword,
  //   then: yup
  //     .string()
  //     .required('Repeat password is required')
  //     .oneOf([yup.ref('newPassword')], 'Passwords must match'),
  //   otherwise: yup.string(),
  // }),
});

// userSettingsSchema.test({
//   name: 'passwords',
//   test: function () {
//     const { oldPassword, newPassword, repeatPassword } = this.parent;
//     // Check if at least one password field is filled
//     if (oldPassword || newPassword || repeatPassword) {
//       // Check if all password fields are filled
//       if (!oldPassword || !newPassword || !repeatPassword) {
//         return this.createError({
//           path: 'oldPassword',
//           message: 'All password fields are required',
//         });
//       }
//     }
//     return true;
//   },
// });
