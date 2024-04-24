import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Field } from 'formik';
import { inputValidationStyler } from 'helpers/helpers';

export const InputWrapper = styled.div`
  width: 256px;
  position: relative;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: ${theme.transform.translateY};
  border: none;
  background-color: transparent;
  align-items: center;
`;

export const InputPassword = styled(Field)`
  width: 256px;
  padding: 12px 10px;
  border: 1px solid ${theme.colors.secondaryGrayBlue};
  border-radius: ${theme.radii.small};
  color: ${theme.colors.primaryBlue};
  @media screen and (min-width: 768px) {
    width: 392px;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:focus {
    outline: none;
  }
  ${props => inputValidationStyler(props)};
`;

export const AvatarSettingsTitle = styled.h3`
  display: inline-block;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.listTitle};
  margin-bottom: 8px;
`;

export const AvatarInput = styled(Field)`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 8px;
  object-fit: cover;
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UploadPhotoText = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.28;
  color: ${theme.colors.primaryBlue};
`;

export const OptionTitle = styled.label`
  display: inline-block;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.listTitle};
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const FieldContainerNoMargin = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
`;

export const RadiosContainer = styled.ul`
  margin-top: 12px;
  display: flex;

  > :first-child {
    margin-right: 24px;
  }
`;

export const RadioElement = styled.li``;

export const InputText = styled(Field)`
  position: relative;
  margin-top: 8px;
  width: 256px;
  padding: 12px 10px;
  border: 1px solid ${theme.colors.secondaryGrayBlue};
  border-radius: ${theme.radii.small};
  color: ${theme.colors.primaryBlue};
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 392px;
  }

  ${props => inputValidationStyler(props)}
`;

export const InputRadio = styled(Field)`
  margin-right: 8px;
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.text};
`;

export const PasswordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const PasswordTitle = styled.h3`
  display: inline-block;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.listTitle};
  margin-bottom: 12px;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-top: 24px;
  }
`;

export const PersonalInfo = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 24px;
  }
`;

export const FormInfo = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const Error = styled.div`
  margin-top: 4px;
  color: ${theme.colors.secondaryRed};
  font-size: 13px;
  font-weight: ${theme.fontWeights.regular};
`;
