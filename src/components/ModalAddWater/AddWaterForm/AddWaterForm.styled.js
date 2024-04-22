import styled from "styled-components";
import { theme } from "styles/theme";
import { Minus } from "components/Icons/Minus";

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 24px;
`;

export const ButtonChange = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${theme.colors.primaryBlue};
  border: 1px solid ${theme.colors.primaryBlue};
  background-color: transparent;
  text-align: center;
`;

export const MinusIcon = styled(Minus)`
  margin: 0 auto;
`;

export const LabelCount = styled.p`
  margin-bottom: 12px;
`;

export const CountValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 36px;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primaryBlue};
  background-color: ${theme.colors.secondaryGrayBlue};
  border-radius: 40px;
`;

export const LabelSelect = styled.label`
  display: block;
  margin-bottom: 12px;
`;

export const SelectInput = styled.select`
  display: block;
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${theme.colors.secondaryGrayBlue};
  border-radius: 6px;
  margin-bottom: 24px;
  color: ${theme.colors.primaryBlue};
`;

export const LabelQuantityInput = styled.label`
  display: block;
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: 16px;
`;

export const QuantityInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${theme.colors.secondaryGrayBlue};
  border-radius: 6px;
  color: ${theme.colors.primaryBlue};
  &::placeholder {
    color: ${theme.colors.primaryBlue};
  }
`;