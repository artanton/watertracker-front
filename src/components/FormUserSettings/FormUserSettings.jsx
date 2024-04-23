import { useState } from 'react';

import { apiUpdateUserSettings } from '../../redux/authorization/authReducer';
import { closeModal } from '../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, selectIsLoading } from '../../redux/selectors';

import { Formik, Form, ErrorMessage } from 'formik';
import { SaveModalButton } from 'components';
import { UploadPhoto } from 'components/Icons/UploadPhoto';
import { userSettingsSchema } from 'schemas/schemas';

import { Eye } from '../../components/Icons/Eye';
import { EyeSlash } from '../../components/Icons/EyeSlash';
import {
  FormInfo,
  PersonalInfo,
  AvatarSettingsTitle,
  AvatarInput,
  Avatar,
  AvatarLabel,
  UploadPhotoText,
  OptionTitle,
  FieldContainer,
  FieldContainerNoMargin,
  GenderContainer,
  RadiosContainer,
  RadioElement,
  InputRadio,
  Label,
  InputText,
  PasswordsContainer,
  PasswordTitle,
  InputWrapper,
  IconButton,
  InputPassword,
  SaveButtonContainer,
  Error,
} from './FormUserSettings.styled';

import { toast } from 'react-toastify';

export const FormUserSettings = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const data = useSelector(selectUserData);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [localAvatarUrl, setlocalAvatarUrl] = useState(null);
  const [avatarFile, setavatarFile] = useState(null);
  const swapOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const swapNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const swapRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleChange = e => {
    setlocalAvatarUrl(URL.createObjectURL(e.currentTarget.files[0]));
    setavatarFile(e.currentTarget.files[0]);
  };

  const handleSubmit = (values, actions) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (
        value !== '' &&
        value !== undefined &&
        value !== null &&
        key !== 'repeatPassword'
      ) {
        formData.append(key, value);
      }
    });
    avatarFile && formData.append('avatarURL', avatarFile);
    dispatch(apiUpdateUserSettings(formData))
      .unwrap()
      .then(res => {
        toast.success('Settings updated successfully');
        dispatch(closeModal());
      })
      .catch(e => {
        toast.error(e.response.data.message);
      });
  };

  const initialValues = {
    avatarURL: '',
    gender: data?.gender ? data.gender : null,
    userName: data?.userName ? data.userName : '',
    email: data?.email ? data.email : '',
    oldPassword: '',
    newPassword: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSettingsSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form autoComplete="off">
          <FormInfo>
            <PersonalInfo>
              <FieldContainer>
                <AvatarSettingsTitle>Your Photo</AvatarSettingsTitle>
                <AvatarLabel>
                  <Avatar
                    src={
                      (localAvatarUrl && localAvatarUrl) ||
                      (data?.avatarURL && data.avatarURL)
                    }
                    alt="avatar"
                  />
                  <UploadPhoto />
                  <UploadPhotoText>Upload a photo</UploadPhotoText>
                  <AvatarInput
                    id="avatarURL"
                    name="avatarURL"
                    type="file"
                    accept="image"
                    onChange={handleChange}
                  />
                </AvatarLabel>
                <ErrorMessage name="avatarURL" component={Error} />
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
                    <ErrorMessage name="gender" component={Error} />
                    <Label htmlFor="Woman">Woman</Label>
                  </RadioElement>
                  <RadioElement>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="Man"
                      value="Man"
                    />
                    <Label htmlFor="Man">Man</Label>
                  </RadioElement>
                </RadiosContainer>
              </GenderContainer>
              <FieldContainer>
                <OptionTitle htmlFor="userName">Your name</OptionTitle>
                <InputText
                  name="userName"
                  type="text"
                  id="userName"
                  placeholder="Name"
                  $error={errors.userName}
                />
                <ErrorMessage name="userName" component={Error} />
              </FieldContainer>
              <FieldContainerNoMargin>
                <OptionTitle htmlFor="email">E-mail</OptionTitle>
                <InputText
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  $error={errors.email}
                />
                <ErrorMessage name="email" component={Error} />
              </FieldContainerNoMargin>
            </PersonalInfo>
            <PasswordsContainer>
              <PasswordTitle>Password</PasswordTitle>
              <FieldContainer>
                <Label htmlFor="oldPassword">Outdated password</Label>
                <InputWrapper>
                  <InputPassword
                    type={showOldPassword ? 'text' : 'password'}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Password"
                    $error={errors.oldPassword}
                  />
                  <IconButton type="button" onClick={swapOldPassword}>
                    {showOldPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <Label htmlFor="newPassword">New password</Label>
                <InputWrapper>
                  <InputPassword
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    id="newPassword"
                    placeholder="Password"
                    $error={errors.newPassword}
                  />
                  <IconButton type="button" onClick={swapNewPassword}>
                    {showNewPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </FieldContainer>
              <FieldContainerNoMargin>
                <Label htmlFor="repeatPassword">Repeat password</Label>
                <InputWrapper>
                  <InputPassword
                    type={showRepeatPassword ? 'text' : 'password'}
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="Password"
                    $error={errors.repeatPassword}
                  />
                  <IconButton type="button" onClick={swapRepeatPassword}>
                    {showRepeatPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </FieldContainerNoMargin>
            </PasswordsContainer>
          </FormInfo>
          <SaveButtonContainer>
            <SaveModalButton isLoading={isLoading} />
          </SaveButtonContainer>
        </Form>
      )}
    </Formik>
  );
};
