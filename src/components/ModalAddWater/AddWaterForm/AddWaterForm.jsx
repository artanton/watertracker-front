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

  const increment = () => {
    setWaterCount(state => state + 50);
  };

  const decrement = () => {
    setWaterCount(state => Math.max(state - 50));
  };

  const selectChange = event => {
    const [hourStr, minuteStr] = event.target.value.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    const currentDate = new Date();
    currentDate.setHours(hour);
    currentDate.setMinutes(minute);
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDay()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const now = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    setTimeValue(now);
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
    const formData = {
      date: timeValue.toISOString(),
      waterVolume: waterCount,
    };
    dispatch(addWater({ formData }))
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
          disabled={waterCount <= 49 ? true : false}
        >
          <Minus />
        </ButtonChange>
        <CountValue>{`${waterCount}ml`}</CountValue>
        <ButtonChange
          type="button"
          onClick={increment}
          disabled={waterCount >= 1451 ? true : false}
        >
          <Plus />
        </ButtonChange>
      </CountContainer>
      <LabelSelect>Recording time:</LabelSelect>
      <SelectInput name="time" onChange={selectChange}>
        <option value={`${hours}:${minutes}`}>{`${hours}:${minutes}`}</option>
        {Array.from({ length: 24 * 12 }).map((_, index) => {
          const hour = Math.floor(index / 12);
          const minute = (index % 12) * 5;
          const hourStr = hour.toString().padStart(2, '0');
          const minuteStr = minute.toString().padStart(2, '0');
          return (
            <option key={index} value={`${hourStr}:${minuteStr}`}>
              {`${hourStr}:${minuteStr}`}
            </option>
          );
        })}
      </SelectInput>
      <LabelQuantityInput htmlFor="amount">
        Enter the value of the water used:
      </LabelQuantityInput>
      <QuantityInput
        name="amount"
        type="number"
        value={waterCount}
        onChange={handleChange}
      />
      <ButtonContainer>
        <WaterQuantityValue>{`${waterCount}ml`}</WaterQuantityValue>
        <SaveModalButton isLoading={isLoading} />
      </ButtonContainer>
    </form>
  );
};
