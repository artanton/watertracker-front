import { Formik, Form, Field } from 'formik';

export const FormUserSettings = () => {
  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);
  };

  const initialValues = {
    avatarURL: '',
    gender: '',
    userName: '',
    email: 'halo@mail.com',
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        {/* <img src="" alt="" /> */}
        <label htmlFor="avatar">Your Photo</label>
        <Field id="avatarURL" name="avatarURL" type="file" accept="image" />
        <h3>Your gender identity</h3>
        <Field type="radio" name="gender" id="Woman" value="Woman" />
        <label htmlFor="Woman">Woman</label>
        <Field type="radio" name="gender" id="Man" value="Man" />
        <label htmlFor="Man">Man</label>
        <label htmlFor="userName">Your name</label>
        <Field type="text" name="userName" id="userName" />
        <label htmlFor="email">E-mail</label>
        <Field type="email" name="email" id="email" />

        <h3>Password</h3>
        <label htmlFor="oldPassword">Outdated password</label>
        <Field type="password" name="oldPassword" id="oldPassword" />
        <label htmlFor="newPassword">New password</label>
        <Field type="password" name="newPassword" id="newPassword" />
        <label htmlFor="repeatPassword">Repeat password</label>
        <Field type="password" name="repeatPassword" id="repeatPassword" />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};
