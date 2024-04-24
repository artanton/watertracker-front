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
import { onChange } from 'react-toastify/dist/core/store';

export const AddWaterForm = () => {
  const [waterCount, setWaterCount] = useState(50);
  const [timeValue, setTimeValue] = useState(new Date());
  const dispatch = useDispatch();

  const hours = timeValue.getHours().toString().padStart(2, '0');
  const minutes = timeValue.getMinutes().toString().padStart(2, '0');

  const increment = () => {
    setWaterCount(state => state + 50);
  };

  const decrement = () => {
    setWaterCount(state => Math.max(state - 50));
  };

  const onChange = event => {
    setTimeValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(timeValue);
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
        <CountValue>{waterCount}</CountValue>
        <ButtonChange
          type="button"
          onClick={increment}
          disabled={waterCount >= 1451 ? true : false}
        >
          <Plus />
        </ButtonChange>
      </CountContainer>
      <LabelSelect>Recording time:</LabelSelect>
      <SelectInput name="time" onChange={onChange}>
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
      {/* <ErrorMessage name="time" component={Error} /> */}
      <LabelQuantityInput htmlFor="quantity">
        Enter the value of the water used:
      </LabelQuantityInput>
      <QuantityInput
        name="number"
        type="number"
        id="quantity"
        placeholder="0"
        // $error={errors.quantity}
        // value={inputValue}
        // onChange={event => setInputValue(event.target.value)}
        // onBlur={handleBlur}
      />
      {/* <ErrorMessage name="quantity" component={Error} /> */}
      <ButtonContainer>
        <WaterQuantityValue>
          {/* {otherInputValue ? `${otherInputValue}ml` : `${count}ml`} */}
        </WaterQuantityValue>
        <SaveModalButton />
      </ButtonContainer>
    </form>
  );
};
