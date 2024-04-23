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
import { Form, Formik, ErrorMessage } from 'formik';
import { useState } from 'react';

export const AddWaterForm = () => {
  const [selectedTime, setSelectedTime] = useState(getDefaultTime());
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [otherInputValue, setOtherInputValue] = useState('');

  const handleBlur = event => {
    setOtherInputValue(event.target.value);
  };

  const decrement = () => {
    setCount(count - 50);
  };

  const increment = () => {
    setCount(count + 50);
  };

  const handleSubmit = (values, actions) => {
    console.log('values:', values);
    console.log('actions:', actions);
  };

  function getDefaultTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  }

  console.log(getDefaultTime());

  const handleChange = event => {
    setSelectedTime(event.target.value);
  };

  return (
    <>
      <LabelCount>Amount of water:</LabelCount>
      <CountContainer>
        <ButtonChange onClick={decrement}>
          <Minus />
        </ButtonChange>
        <CountValue>
          {otherInputValue ? `${otherInputValue}ml` : `${count}ml`}
        </CountValue>
        <ButtonChange onClick={increment}>
          <Plus />
        </ButtonChange>
      </CountContainer>
      <Formik
        initialValues={{ time: '', quantity: '' }}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form autoComplete="off">
            <LabelSelect>Recording time:</LabelSelect>
            <SelectInput
              name="time"
              onChange={handleChange}
              $error={errors.time}
            >
              <option>{selectedTime}</option>
              {Array.from({ length: 12 * 12 }).map((_, index) => {
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
            <ErrorMessage name="time" component={Error} />
            <LabelQuantityInput htmlFor="quantity">
              Enter the value of the water used:
            </LabelQuantityInput>
            <QuantityInput
              name="quantity"
              type="number"
              id="quantity"
              placeholder="0"
              $error={errors.quantity}
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
              onBlur={handleBlur}
            />
            <ErrorMessage name="quantity" component={Error} />
            <ButtonContainer>
              <WaterQuantityValue>
                {otherInputValue ? `${otherInputValue}ml` : `${count}ml`}
              </WaterQuantityValue>
              <SaveModalButton />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </>
  );
};
