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
import { Form, Formik } from 'formik';
import { useState } from 'react';

export const AddWaterForm = () => {
  const [selectedTime, setSelectedTime] = useState(getDefaultTime());

  const handleSubmit = values => {
    console.log('values:', values);
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
        <ButtonChange>
          <Minus />
        </ButtonChange>
        <CountValue>50ml</CountValue>
        <ButtonChange>
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
            <SelectInput onChange={handleChange}>
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
            <LabelQuantityInput htmlFor="quantity">
              Enter the value of the water used:
            </LabelQuantityInput>
            <QuantityInput
              name="quantityField"
              type="number"
              id="quantity"
              placeholder="0"
            />
            <ButtonContainer>
              <WaterQuantityValue>50ml</WaterQuantityValue>
              <SaveModalButton />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </>
  );
};
