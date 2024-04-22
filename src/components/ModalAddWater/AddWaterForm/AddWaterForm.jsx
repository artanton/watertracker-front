import {
  CountContainer,
  ButtonChange,
  CountValue,
  LabelCount,
  LabelSelect,
  SelectInput,
  LabelQuantityInput,
  QuantityInput,
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
    const minutes = Math.ceil(now.getMinutes() / 5) * 5;
    return `${now.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

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
            <SelectInput value={selectedTime} onChange={handleChange}>
              {Array.from({ length: 24 * 12 }).map((_, index) => {
                const hour = Math.floor(index / 12);
                const minute = (index % 12) * 5;
                const hourStr = hour < 10 ? `0${hour}` : `${hour}`;
                const minuteStr = minute < 10 ? `0${minute}` : `${minute}`;
                return (
                  <option
                    key={index}
                    value={`${hourStr}:${minuteStr}`}
                  >{`${hourStr}:${minuteStr}`}</option>
                );
              })}
            </SelectInput>
            <LabelQuantityInput>
              Enter the value of the water used:
            </LabelQuantityInput>
            <QuantityInput
              name="quantityField"
              type="number"
              id="quantity"
              placeholder="0"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
