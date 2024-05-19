import { SaveModalButton } from 'components';
import {
  CountContainer,
  ButtonChange,
  CountValue,
  LabelCount,
  LabelSelect,
  SelectInput,
  LabelQuantityInput,
  QuantityInput,
  ButtonContainer,
  WaterQuantityValue,
} from './AddWaterForm.styled';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWater } from '../../../redux/waterData/thunk';
import { toast } from 'react-toastify';
import { closeModal } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/selectors';

export const AddWaterForm = () => {
  const [waterCount, setWaterCount] = useState(50);
  const [timeValue, setTimeValue] = useState(new Date());
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const hours = timeValue.getHours().toString().padStart(2, '0');
  const minutes = timeValue.getMinutes().toString().padStart(2, '0');

  const incrementWater = () => {
    setWaterCount(state => state + 50);
  };

  const decrementWater = () => {
    setWaterCount(state => Math.max(state - 50));
  };

  const selectChange = selectDate => {
    setTimeValue(selectDate.$d);
  };

  const handleWaterChange = event => {
    if (event.target.value.length > 4) {
      return;
    }
    const value = Math.floor(event.target.value);
    if (value || value === 0) {
      setWaterCount(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const waterData = {
      date: timeValue,
      waterDose: waterCount,
    };
    if (waterCount === 0) {
      return toast.error('Amount of water must be greater than zero');
    }

    if (waterCount < 1 || waterCount > 1500) {
      return toast.error('Enter a value between 1 and 1500');
    }
    dispatch(addWater(waterData))
      .unwrap()
      .then(res => {
        toast.success('Record added successfully');
        dispatch(closeModal());
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <LabelCount>Amount of water:</LabelCount>
      <CountContainer>
        <ButtonChange
          type="button"
          onClick={decrementWater}
          disabled={waterCount <= 49 ? true : false}
        >
          <Minus />
        </ButtonChange>
        <CountValue>{`${waterCount}ml`}</CountValue>
        <ButtonChange
          type="button"
          onClick={incrementWater}
          disabled={waterCount >= 1451 ? true : false}
        >
          <Plus />
        </ButtonChange>
      </CountContainer>
      <LabelSelect>Recording time:</LabelSelect>
      <SelectInput
        placeholder={`${hours}:${minutes}`}
        format="HH:mm"
        onChange={selectChange}
      />
      <LabelQuantityInput htmlFor="amount">
        Enter the value of the water used:
      </LabelQuantityInput>
      <QuantityInput
        name="amount"
        type="number"
        value={waterCount}
        onChange={handleWaterChange}
      />
      <ButtonContainer>
        <WaterQuantityValue>{`${waterCount}ml`}</WaterQuantityValue>
        <SaveModalButton isLoading={isLoading} />
      </ButtonContainer>
    </form>
  );
};
