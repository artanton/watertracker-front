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

export const userSettingsSchema = yup.object().shape(
  {
    email: yup.string().matches(emailRegexp, 'Email is not valid'),
    userName: yup
      .string()
      .matches(
        userNameRegexp,
        'Username is not valid. Spaces and punctuiation are not allowed'
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
    oldPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters')
      .when('newPassword', (newPassword, schema) => {
        if (typeof newPassword[0] !== 'undefined') {
          return schema
            .notOneOf(
              [yup.ref('newPassword'), null],
              'New password must not match the old one'
            )
            .required('New password is required');
        }
        return schema;
      }),
    newPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters')
      .when('oldPassword', (oldPassword, schema) => {
        if (typeof oldPassword[0] !== 'undefined') {
          return schema
            .notOneOf(
              [yup.ref('oldPassword'), null],
              'New password must not match the old one'
            )
            .required('New password is required');
        }
        return schema;
      }),
    repeatPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters')
      .when('newPassword', (newPassword, schema) => {
        if (typeof newPassword[0] !== 'undefined') {
          return schema
            .oneOf(
              [yup.ref('newPassword')],
              'Repeted password must match new password'
            )
            .required('Repeted password is required');
        }
        return schema;
      }),
  },
  ['newPassword', 'oldPassword']
);

export const myDailyNorma = yup.object().shape(
  {
    gender: yup
      .string()
      .oneOf(['Man', 'Woman', null], 'Gender must be either Man or Woman')
      .nullable()
      .when('weight', (weight, schema) => {
        if (typeof weight[0] !== 'undefined') {
          return schema.required('Weight is required');
        }
      }),
    weight: yup
      .number('Weight must be a number')
      .positive('Weight must be positive')
      .when('oldPassword', (gender, schema) => {
        if (typeof gender[0] !== 'undefined') {
          return schema.required('Weight is required');
        }
        return schema;
      }),
    sportTime: yup
      .number('Action time must be a number')
      .positive('Sport time must be positive')
      .when('weight', (weight, schema) => {
        if (typeof weight[0] !== 'undefined') {
          return schema.required('Sport time is required');
        }
        return schema;
      }),
    enteredWaterRate: yup
      .number('Water rate must be a number')
      .min(1, 'Minimum water rate must be greater than 0 ml')
      .max(15000, 'Maximum water rate is 15000 ml')
      .when(
        ['gender', 'weight', 'sportTime'],
        ([gender, weight, sportTime], schema) => {
          return !gender && !weight && !sportTime
            ? schema.required('Water rate is required')
            : schema;
        }
      ),
  },
  ['gender', 'weight', 'sportTime']
);
