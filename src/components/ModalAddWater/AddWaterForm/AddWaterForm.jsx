import {
  CountContainer,
  ButtonChange,
  CountValue,
} from './AddWaterForm.styled';

export const AddWaterForm = () => {
  return (
    <CountContainer>
      <ButtonChange>-</ButtonChange>
      <CountValue></CountValue>
      <ButtonChange>+</ButtonChange>
    </CountContainer>
  );
};
