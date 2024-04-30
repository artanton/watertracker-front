import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { patchWater } from '../../redux/waterData/thunk';
import { selectorLoading, selectorDailyNorma } from '../../redux/selectors';

import { closeModal } from '../../redux/modal/modalSlice';
import { Modal, CloseModalCross, InputError } from 'components';
import { modalNames } from 'constants/constants';

import { calculateWaterRate } from './CalculateWaterRate';

import { ClapSpinner } from 'react-spinners-kit';

import { myDailyNorma } from 'schemas/schemas';
import { myDailyNormaValidation } from 'helpers/helpers';
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
  const oldDailyNorma = useSelector(selectorDailyNorma);
  const [dailyNorma, setDailyNorma] = useState(0);

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
    // validationSchema: myDailyNorma,
    onSubmit: e => {
      dispatch(patchWater({ dailyNorma }))
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
                onBlur={handleBlur}
              />
              {touched.gender && errors.gender && (
                <InputError>{errors.gender}</InputError>
              )}
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
                onBlur={handleBlur}
              />
              {touched.gender && errors.gender && (
                <InputError>{errors.gender}</InputError>
              )}
              <LabelWrap htmlFor="man">For man</LabelWrap>
            </RadioMan>
          </RadioFormWraper>
          <FormWrapper>
            <LabelWrap>Your weight in kilograms:</LabelWrap>
            <InputFormField
              type="number"
              min={1}
              step={1}
              value={values.weight}
              name="weight"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.weight && errors.weight && (
              <InputError>{errors.weight}</InputError>
            )}
          </FormWrapper>
          <FormWrapper>
            <LabelWrap>
              The time of active participation in sports or other activities
              with a high physical. Load in hours:
            </LabelWrap>
            <InputFormField
              type="number"
              min={1}
              step={1}
              value={values.sportTime}
              name="sportTime"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.sportTime && errors.sportTime && (
              <InputError>{errors.sportTime}</InputError>
            )}
          </FormWrapper>
          <WaterPerDayWrapper>
            <WaterPerDayText>
              The required amount of water in liters per day:
            </WaterPerDayText>
            <WaterPerDayValue>
              {dailyNorma
                ? (dailyNorma / 1000).toFixed(1)
                : (oldDailyNorma / 1000).toFixed(1)}
              L
            </WaterPerDayValue>
          </WaterPerDayWrapper>
        </FormContainer>
        <FormContainer>
          <AmountOfWaterLabel>
            Write down how much water you will drink (ml):
          </AmountOfWaterLabel>
          <InputFormField
            type="number"
            value={values.enteredWaterRate}
            name="enteredWaterRate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.enteredWaterRate && errors.enteredWaterRate && (
            <InputError>{errors.enteredWaterRate}</InputError>
          )}
        </FormContainer>
        <ButtonSave type="submit" disabled={!isValid}>
          {isLoading ? <ClapSpinner size={16} frontColor={'#fff'} /> : 'Save'}
        </ButtonSave>
      </ModalContainer>
    </Modal>
  );
};
