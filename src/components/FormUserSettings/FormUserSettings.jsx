import { Formik, Form, ErrorMessage } from 'formik';
import { SaveModalButton } from 'components';
import { UploadPhoto } from 'components/Icons/UploadPhoto';
import { userSettingsSchema } from 'schemas/schemas';

import { defaultAvatar } from 'constants/constants';
import {
  AvatarSettingsTitle,
  AvatarInput,
  Avatar,
  AvatarLabel,
  UploadPhotoText,
  OptionTitle,
  FieldContainer,
  GenderContainer,
  RadiosContainer,
  RadioElement,
  InputRadio,
  Label,
  InputText,
  PasswordsContainer,
  PasswordTitle,
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
    <Formik
      initialValues={initialValues}
      validationSchema={userSettingsSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form autoComplete="off">
          <FieldContainer>
            <AvatarSettingsTitle>Your Photo</AvatarSettingsTitle>
            <AvatarLabel>
              <Avatar src={defaultAvatar} alt="" />
              <UploadPhoto />
              <UploadPhotoText>Upload a photo</UploadPhotoText>
              <AvatarInput
                id="avatarURL"
                name="avatarURL"
                type="file"
                accept="image"
              />
            </AvatarLabel>
            <ErrorMessage name="avatarURL" />
          </FieldContainer>
          <GenderContainer>
            <OptionTitle>Your gender identity</OptionTitle>
            <RadiosContainer>
              <RadioElement>
                <InputRadio
                  type="radio"
                  name="gender"
                  id="Woman"
                  value="Woman"
                />
                <ErrorMessage name="gender" />
                <Label htmlFor="Woman">Woman</Label>
              </RadioElement>
              <RadioElement>
                <InputRadio type="radio" name="gender" id="Man" value="Man" />
                <Label htmlFor="Man">Man</Label>
              </RadioElement>
            </RadiosContainer>
          </GenderContainer>
          <FieldContainer>
            <OptionTitle htmlFor="userName">Your name</OptionTitle>
            <InputText
              type="text"
              name="userName"
              id="userName"
              placeholder="Name"
              $error={errors.userName}
            />
            <ErrorMessage name="userName" component="div" />
          </FieldContainer>
          <FieldContainer>
            <OptionTitle htmlFor="email">E-mail</OptionTitle>
            <InputText
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              $error={errors.email}
            />
            <ErrorMessage name="email" component="div" />
          </FieldContainer>
          <PasswordsContainer>
            <PasswordTitle>Password</PasswordTitle>
            <FieldContainer>
              <Label htmlFor="oldPassword">Outdated password</Label>
              <InputText
                type="password"
                name="oldPassword"
                id="oldPassword"
                placeholder="Password"
                $error={errors.oldPassword}
              />
              <ErrorMessage name="oldPassword" component="div" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="newPassword">New password</Label>
              <InputText
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Password"
                $error={errors.newPassword}
              />
              <ErrorMessage name="newPassword" component="div" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="repeatPassword">Repeat password</Label>
              <InputText
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Password"
                $error={errors.repeatPassword}
              />
              <ErrorMessage name="repeatPassword" component="div" />
            </FieldContainer>
          </PasswordsContainer>
          <SaveModalButton></SaveModalButton>
        </Form>
      )}
    </Formik>
  );
};
