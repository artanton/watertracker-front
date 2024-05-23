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
} from '../../ModalAddWater/AddWaterForm/AddWaterForm.styled';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWater } from '../../../redux/waterData/thunk';
import { toast } from 'react-toastify';
import { closeModal } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/selectors';
import {
  selectModalData,
  selectWaterDate,
  selectWaterDose,
} from '../../../redux/modal/modalSlice.selectors';

export const EditWaterForm = () => {
  const waterId = useSelector(selectModalData);
  const water = useSelector(selectWaterDose);
  const date = useSelector(selectWaterDate);

  const [waterCount, setWaterCount] = useState(water);
  const [timeValue, setTimeValue] = useState(new Date(date));
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const hours = timeValue.getHours().toString().padStart(2, '0');
  const minutes = timeValue.getMinutes().toString().padStart(2, '0');

  const increment = () => {
    setWaterCount(state => state + 50);
  };

  const decrement = () => {
    setWaterCount(state => Math.max(state - 50));
  };

  const selectChange = selectDate => {
    setTimeValue(selectDate.$d);
  };

  const handleChange = event => {
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
      createdDate: timeValue.toISOString(),
      waterDose: waterCount,
    };
    if (waterCount === 0) {
      return toast.error('You cannot send 0 ml');
    }

    if (waterCount < 1 || waterCount > 5000) {
      return toast.error('Enter a value between 1 and 1500');
    }
    dispatch(updateWater({ waterId, waterData }))
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
          onClick={decrement}
          disabled={waterCount <= 1 ? true : false}
        >
          <Minus />
        </ButtonChange>
        <CountValue>{`${waterCount}ml`}</CountValue>
        <ButtonChange
          type="button"
          onClick={increment}
          disabled={waterCount >= 5000 ? true : false}
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
        onChange={handleChange}
        disabled={waterCount >= 5000 || waterCount <= 1 ? true : false}
      />
      <ButtonContainer>
        <WaterQuantityValue>{`${waterCount}ml`}</WaterQuantityValue>
        <SaveModalButton isLoading={isLoading} />
      </ButtonContainer>
    </form>
  );
};
