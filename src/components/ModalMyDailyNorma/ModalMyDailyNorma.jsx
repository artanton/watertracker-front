import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { patchWater } from '../../redux/waterData/thunk';
import { selectorLoading, selectorDailyNorma } from '../../redux/selectors';

import { closeModal } from '../../redux/modal/modalSlice';
import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';

import { calculateWaterRate } from './CalculateWaterRate';

import { ClapSpinner } from 'react-spinners-kit';

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
import { useFormik } from 'formik';

export const ModalMyDailyNorma = () => {
  const [dailyNorma, setDailyNorma] = useState(0);
  const oldDailyNorma = (useSelector(selectorDailyNorma) / 1000).toFixed(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      gender: '',
      weight: '',
      sportTime: '',
      enteredWaterRate: '',
    },
    onSubmit: e => {
      console.log(values);
      console.log('dailyNorma', dailyNorma);
      dispatch(patchWater({ dailyNorma: dailyNorma * 1000 }))
        .unwrap()
        .then(res => {
          toast.success('Daily norma updated successfully');
          dispatch(closeModal());
        })
        .catch(e => {
          toast.error(
            'Some error occurred while updating. Please try again later'
          );
        });
    },
  });
  useEffect(() => {
    setDailyNorma(calculateWaterRate(values));
  }, [values]);

  return (
    <Modal modalId={modalNames.DAILY_NORMA}>
      <ModalContainer onSubmit={handleSubmit}>
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
                id="woman"
                type="radio"
                name="gender"
                value="Woman"
                checked={values.gender === 'Woman'}
                onChange={handleChange}
              />
              <LabelWrap htmlFor="woman">For woman</LabelWrap>
            </RadioWoman>
            <RadioMan>
              <InputField
                id="man"
                type="radio"
                name="gender"
                value="Man"
                checked={values.gender === 'Man'}
                onChange={handleChange}
              />
              <LabelWrap htmlFor="man">For man</LabelWrap>
            </RadioMan>
          </RadioFormWraper>
          <FormWrapper>
            <LabelWrap>Your weight in kilograms:</LabelWrap>
            <InputFormField
              value={values.weight}
              type="number"
              name="weight"
              onChange={handleChange}
            />
          </FormWrapper>
          <FormWrapper>
            <LabelWrap>
              The time of active participation in sports or other activities
              with a high physical. Load in hours:
            </LabelWrap>
            <InputFormField
              value={values.sportTime}
              type="number"
              name="sportTime"
              onChange={handleChange}
            />
          </FormWrapper>
          <WaterPerDayWrapper>
            <WaterPerDayText>
              The required amount of water in liters per day:
            </WaterPerDayText>
            <WaterPerDayValue>
              {dailyNorma ? dailyNorma : oldDailyNorma} L
            </WaterPerDayValue>
          </WaterPerDayWrapper>
        </FormContainer>
        <FormContainer>
          <AmountOfWaterLabel>
            Write down how much water you will drink:
          </AmountOfWaterLabel>
          <InputFormField
            type="number"
            value={values.enteredWaterRate}
            name="enteredWaterRate"
            onChange={handleChange}
          />
        </FormContainer>
        <ButtonSave type="submit">
          {isLoading ? <ClapSpinner size={16} frontColor={'#fff'} /> : 'Save'}
        </ButtonSave>
      </ModalContainer>
    </Modal>
  );
};
