import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Field } from 'formik';

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
  margin-right: 8px;
`;

export const StyledRadio = styled(Field)`
  > :not(:checked) {
    border: 1px solid blue;
    color: blue;
  }
  margin-right: 8px;
`;

export const Label = styled.label`
  font-family: Roboto;
  font-size: ${theme.fontWeights.text};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.text};
`;
