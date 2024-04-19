import { Formik, Form, Field } from 'formik';
import {
  OptionTitle,
  FieldContainer,
  GenderContainer,
  RadiosContainer,
  RadioElement,
  StyledRadio,
  Label,
} from './FormUserSettings.styled';

export const FormUserSettings = () => {
  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);
  };

  const initialValues = {
    avatarURL: '',
    gender: '',
    userName: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FieldContainer>
          {/* <img src="" alt="" /> */}
          <OptionTitle htmlFor="avatar">Your Photo</OptionTitle>
          <Field id="avatarURL" name="avatarURL" type="file" accept="image" />
        </FieldContainer>
        <GenderContainer>
          <OptionTitle>Your gender identity</OptionTitle>
          <RadiosContainer>
            <RadioElement>
              <StyledRadio
                type="radio"
                name="gender"
                id="Woman"
                value="Woman"
              />
              <Label htmlFor="Woman">Woman</Label>
            </RadioElement>
            <RadioElement>
              <StyledRadio type="radio" name="gender" id="Man" value="Man" />
              <Label htmlFor="Man">Man</Label>
            </RadioElement>
          </RadiosContainer>
        </GenderContainer>
        <FieldContainer>
          <OptionTitle htmlFor="userName">Your name</OptionTitle>
          <Field type="text" name="userName" id="userName" />
        </FieldContainer>
        <FieldContainer>
          <OptionTitle htmlFor="email">E-mail</OptionTitle>
          <Field type="email" name="email" id="email" />
        </FieldContainer>

        <OptionTitle>Password</OptionTitle>
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
