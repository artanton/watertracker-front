import {
  CountContainer,
  ButtonChange,
  CountValue,
  LabelCount,
} from './AddWaterForm.styled';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';

export const AddWaterForm = () => {
  return (
    <>
      <LabelCount>Amount of water:</LabelCount>
      <CountContainer>
        <ButtonChange>
          <Minus />
        </ButtonChange>
        <CountValue>50ml</CountValue>
        <ButtonChange>
          <Plus />
        </ButtonChange>
      </CountContainer>
    </>
  );
};
