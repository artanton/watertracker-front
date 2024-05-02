import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { patchWater } from '../../redux/waterData/thunk';
import { selectorLoading } from '../../redux/selectors';
import { closeModal } from '../../redux/modal/modalSlice';

import { Modal, CloseModalCross, InputError } from 'components';
import { modalNames } from 'constants/constants';

import { ClapSpinner } from 'react-spinners-kit';

import { calculateWaterRate } from '../../helpers/helpers';

import { myDailyNorma } from 'schemas/schemas';

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
  const [calculatedDailyNorma, setCalculatedDailyNorma] = useState(0);

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
      const dailyNorma = values.enteredWaterRate
        ? values.enteredWaterRate * 1000
        : calculatedDailyNorma;
      dispatch(patchWater({ dailyNorma }))
        .unwrap()
        .then(res => {
          toast.success(
            `Daily norma was successfully chaged to ${(
              dailyNorma / 1000
            ).toFixed(1)} L`
          );
          dispatch(closeModal());
        })
        .catch(e => {
          toast.error(
            'Some error occurred while updating. Please try again later'
          );
        });
    },
    validationSchema: myDailyNorma,
  });

  useEffect(() => {
    const { gender, weight, sportTime, enteredWaterRate } = values;

    if (gender && weight && sportTime) {
      const calculatedDailyNorma = calculateWaterRate({
        weight,
        sportTime,
        gender,
      });

      setCalculatedDailyNorma(calculatedDailyNorma);
      if (!enteredWaterRate) {
        handleChange({
          target: {
            name: 'enteredWaterRate',
            value: calculatedDailyNorma.toFixed(1),
          },
        });
      }
    }
  }, [calculatedDailyNorma, handleChange, values]);

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
              <LabelWrap htmlFor="man">For man</LabelWrap>
            </RadioMan>
          </RadioFormWraper>
          {touched.gender && errors.gender && (
            <InputError>{errors.gender}</InputError>
          )}
          <FormWrapper>
            <LabelWrap>Your weight in kilograms:</LabelWrap>
            <InputFormField
              type="number"
              value={values.weight}
              name="weight"
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.weight}
            />
            {touched.weight && errors.weight && (
              <InputError>{touched.weight && errors.weight}</InputError>
            )}
          </FormWrapper>
          <FormWrapper>
            <LabelWrap>
              The time of active participation in sports or other activities
              with a high physical. Load in hours:
            </LabelWrap>
            <InputFormField
              type="number"
              value={values.sportTime}
              name="sportTime"
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.sportTime}
            />
            {touched.sportTime && errors.sportTime && (
              <InputError>{touched.sportTime && errors.sportTime}</InputError>
            )}
          </FormWrapper>
          <WaterPerDayWrapper>
            <WaterPerDayText>
              The required amount of water in liters per day:
            </WaterPerDayText>
            <WaterPerDayValue>
              {calculatedDailyNorma && calculatedDailyNorma.toFixed(1)}L
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
            onBlur={handleBlur}
            $error={touched.enteredWaterRate && errors.enteredWaterRate}
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
