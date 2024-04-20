import { Formik, Form } from 'formik';
import { SaveModalButton } from 'components';
import { UploadPhoto } from 'components/Icons/UploadPhoto';

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
  StyledRadio,
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
          <InputText
            type="text"
            name="userName"
            id="userName"
            placeholder="Name"
          />
        </FieldContainer>
        <FieldContainer>
          <OptionTitle htmlFor="email">E-mail</OptionTitle>
          <InputText type="email" name="email" id="email" placeholder="Email" />
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
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="newPassword">New password</Label>
            <InputText
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="Password"
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="repeatPassword">Repeat password</Label>
            <InputText
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              placeholder="Password  "
            />
          </FieldContainer>
        </PasswordsContainer>
        <SaveModalButton></SaveModalButton>
      </Form>
    </Formik>
  );
};
