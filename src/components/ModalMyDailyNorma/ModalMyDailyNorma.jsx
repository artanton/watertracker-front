import { useState, useEffect } from 'react';

import { Modal, CloseModalCross } from 'components';
import { calculateWaterRate } from './CalculateWaterRate';
import { modalNames } from 'constants/constants';

import {
  AmountOfWaterLabel,
  ButtonSave,
  FormContainer,
  FormTitle,
  FormWrapper,
  FormulaText,
  FormulasDescription,
  FormulasWrap,
  FormulasWrapper,
  InputField,
  InputFormField,
  LabelWrap,
  ModalContainer,
  ModalTitle,
  ModalTitleWrapper,
  RadioFormWraper,
  RadioMan,
  RadioWoman,
  WaterPerDayText,
  WaterPerDayValue,
  WaterPerDayWrapper,
} from './ModalMyDailyNorma.styled';

export const ModalMyDailyNorma = () => {
  const [waterRate, setWaterRate] = useState(calculateWaterRate());
  const [inputValues, setInputValues] = useState({
    gender: null,
    weight: 0,
    hours: 0,
  });

  useEffect(() => {
    setWaterRate(calculateWaterRate(inputValues));
  }, [inputValues]);

  const handleChange = evt => {
    setInputValues(prevValues => ({
      ...prevValues,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <Modal modalId={modalNames.DAILY_NORMA}>
      <ModalContainer>
        <ModalTitleWrapper>
          <ModalTitle>My daily norma</ModalTitle>
          <CloseModalCross />
        </ModalTitleWrapper>
        <FormulasWrapper>
          <FormulasWrap>
            <FormulaText>
              <span>For girl:</span>V=(M*0.03) + (T*0.4)
            </FormulaText>
            <FormulaText>
              <span>For man:</span>V=(M*0.04) + (T*0.6)
            </FormulaText>
          </FormulasWrap>
          <FormulasDescription>
            <span>*</span> V is the volume of the water norm in liters per day,
            M is your body weight, T is the time of active sports, or another
            type of activity commensurate in terms of loads (in the absence of
            these, you must set 0)
          </FormulasDescription>
        </FormulasWrapper>
        <FormContainer>
          <FormTitle>Calculate your rate:</FormTitle>
          <RadioFormWraper>
            <RadioWoman>
              <InputField
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <LabelWrap>For woman</LabelWrap>
            </RadioWoman>
            <RadioMan>
              <InputField
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <LabelWrap>For man</LabelWrap>
            </RadioMan>
          </RadioFormWraper>
          <FormWrapper>
            <LabelWrap>Your weight in kilograms:</LabelWrap>
            <InputFormField
              type="number"
              name="weight"
              max={200}
              min={0}
              placeholder="0"
              onChange={handleChange}
            />
          </FormWrapper>
          <FormWrapper>
            <LabelWrap>
              The time of active participation in sports or other activities
              with a high physical. Load in hours:
            </LabelWrap>
            <InputFormField
              type="number"
              name="hours"
              max={24}
              min={0}
              placeholder="0"
              onChange={handleChange}
            />
          </FormWrapper>
          <WaterPerDayWrapper>
            <WaterPerDayText>
              The required amount of water in liters per day:
            </WaterPerDayText>
            <WaterPerDayValue>
              {Math.round(waterRate * 10) / 10} L
            </WaterPerDayValue>
          </WaterPerDayWrapper>
        </FormContainer>
        <FormContainer>
          <AmountOfWaterLabel>
            Write down how much water you will drink:
          </AmountOfWaterLabel>
          <InputFormField
            type="number"
            name="amount"
            min={1}
            max={15}
            step={0.5}
            placeholder="1"
            onChange={handleChange}
          />
        </FormContainer>
        <ButtonSave type="submit">Save</ButtonSave>
      </ModalContainer>
    </Modal>
  );
};
