import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, ErrorMessage } from 'formik';

import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import { apiUpdateUserSettings } from '../../redux/authorization/authReducer';
import { closeModal } from '../../redux/modal/modalSlice';
import { selectUserData, selectIsLoading } from '../../redux/selectors';

import { userSettingsSchema } from 'schemas/schemas';

import { SaveModalButton } from 'components';
import { UploadPhoto } from 'components/Icons/UploadPhoto';

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

export const FormUserSettings = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

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
                <AvatarSettingsTitle>
                  {t('UserSettings.UserSettingsPhotoTitle')}
                </AvatarSettingsTitle>
                <AvatarLabel>
                  <Avatar
                    src={
                      (localAvatarUrl && localAvatarUrl) ||
                      (data?.avatarURL && data.avatarURL)
                    }
                    alt="avatar"
                  />
                  <UploadPhoto />
                  <UploadPhotoText>
                    {t('UserSettings.UserSettingsPhotoUpload')}
                  </UploadPhotoText>
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
                <OptionTitle>
                  {t('UserSettings.UserSettingsGenderTitle')}
                </OptionTitle>
                <RadiosContainer>
                  <RadioElement>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="Woman"
                      value="Woman"
                    />
                    <ErrorMessage name="gender" component={Error} />
                    <Label htmlFor="Woman">
                      {t('UserSettings.UserSettingsGenderWoman')}
                    </Label>
                  </RadioElement>
                  <RadioElement>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="Man"
                      value="Man"
                    />
                    <Label htmlFor="Man">
                      {t('UserSettings.UserSettingsGenderMan')}
                    </Label>
                  </RadioElement>
                </RadiosContainer>
              </GenderContainer>
              <FieldContainer>
                <OptionTitle htmlFor="userName">
                  {t('UserSettings.UserSettingsNameLabel')}
                </OptionTitle>
                <InputText
                  name="userName"
                  type="text"
                  id="userName"
                  placeholder={t('UserSettings.UserSettingsNamePlaceholder')}
                  $error={errors.userName}
                />
                <ErrorMessage name="userName" component={Error} />
              </FieldContainer>
              <FieldContainerNoMargin>
                <OptionTitle htmlFor="email">
                  {t('UserSettings.UserSettingsEmailLabel')}
                </OptionTitle>
                <InputText
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t('UserSettings.UserSettingsEmailPlaceholder')}
                  $error={errors.email}
                />
                <ErrorMessage name="email" component={Error} />
              </FieldContainerNoMargin>
            </PersonalInfo>
            <PasswordsContainer>
              <PasswordTitle>
                {t('UserSettings.UserSettingsPasswordTitle')}
              </PasswordTitle>
              <FieldContainer>
                <Label htmlFor="oldPassword">
                  {t('UserSettings.UserSettingsOldPassLabel')}
                </Label>
                <InputWrapper>
                  <InputPassword
                    type={showOldPassword ? 'text' : 'password'}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder={t(
                      'UserSettings.UserSettingsPasswordPlaceholder'
                    )}
                    $error={errors.oldPassword}
                  />
                  <IconButton type="button" onClick={swapOldPassword}>
                    {showOldPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <Label htmlFor="newPassword">
                  {t('UserSettings.UserSettingsNewPassLabel')}
                </Label>
                <InputWrapper>
                  <InputPassword
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    id="newPassword"
                    placeholder={t(
                      'UserSettings.UserSettingsPasswordPlaceholder'
                    )}
                    $error={errors.newPassword}
                  />
                  <IconButton type="button" onClick={swapNewPassword}>
                    {showNewPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </FieldContainer>
              <FieldContainerNoMargin>
                <Label htmlFor="repeatPassword">
                  {t('UserSettings.UserSettingsRepeatPassLabel')}
                </Label>
                <InputWrapper>
                  <InputPassword
                    type={showRepeatPassword ? 'text' : 'password'}
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder={t(
                      'UserSettings.UserSettingsPasswordPlaceholder'
                    )}
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
