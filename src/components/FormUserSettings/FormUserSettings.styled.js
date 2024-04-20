import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Field } from 'formik';

export const AvatarSettingsTitle = styled.h3`
  display: inline-block;
  font-family: Roboto;
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
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UploadPhotoText = styled.span`
  margin-left: 8px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.28;

  color: ${theme.colors.primaryBlue};
`;

export const OptionTitle = styled.label`
  display: inline-block;
  font-family: Roboto;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.listTitle};
`;

export const FieldContainer = styled.div`
  margin-bottom: 24px;
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
  margin-top: 8px;
  width: 256px;
  padding: 12px 10px;
  border: 1px solid ${theme.colors.secondaryGrayBlue};
  border-radius: 6px;
  color: ${theme.colors.primaryBlue};
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledRadio = styled(Field)`
  margin-right: 8px;
`;

export const Label = styled.label`
  font-family: Roboto;
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
  font-family: Roboto;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.listTitle};

  margin-bottom: 12px;
`;
