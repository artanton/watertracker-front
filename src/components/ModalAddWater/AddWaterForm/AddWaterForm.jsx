import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { addWater } from '../../../redux/waterData/thunk';
import { closeModal } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/selectors';

import { waterRecordSchema } from 'schemas/schemas';

import { formatToString, formatToTime } from 'helpers/helpers';

import { SaveModalButton, InputError } from 'components';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';

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

export const AddWaterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const initialValues = {
    waterCount: 50,
    timeValue: formatToTime(new Date()),
  };

  const formik = useFormik({
    initialValues,
    validationSchema: waterRecordSchema,
    onSubmit: (values, { setSubmitting }) => {
      const { waterCount, timeValue } = values;
      const waterData = {
        date: formatToString(timeValue),
        waterDose: waterCount,
      };

      dispatch(addWater(waterData))
        .unwrap()
        .then(res => {
          toast.success('Record was added successfully');
          dispatch(closeModal());
        })
        .catch(error => {
          toast.error('Something went wrong, please try again');
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    formik;
  const { waterCount, timeValue } = values;

  const incrementWater = () => {
    setFieldValue('waterCount', Math.min(waterCount + 50, 5000));
  };

  const decrementWater = () => {
    setFieldValue('waterCount', Math.max(waterCount - 50, 50));
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <LabelCount>Amount of water:</LabelCount>
      <CountContainer>
        <ButtonChange type="button" onClick={decrementWater}>
          <Minus />
        </ButtonChange>
        <CountValue>{`${waterCount}ml`}</CountValue>
        <ButtonChange type="button" onClick={incrementWater}>
          <Plus />
        </ButtonChange>
      </CountContainer>

      <LabelSelect>Recording time:</LabelSelect>
      <SelectInput
        name="timeValue"
        format="HH:mm"
        placeholder={timeValue}
        onChange={time => setFieldValue('timeValue', formatToTime(time))}
      />

      <LabelQuantityInput htmlFor="waterCount">
        Enter the value of the water used:
      </LabelQuantityInput>
      <QuantityInput
        id="waterCount"
        name="waterCount"
        type="number"
        value={waterCount}
        onChange={handleChange}
        $error={errors.waterCount}
      />
      {touched.waterCount && errors.waterCount && (
        <InputError>{errors.waterCount}</InputError>
      )}

      <ButtonContainer>
        <WaterQuantityValue>{`${waterCount}ml`}</WaterQuantityValue>
        <SaveModalButton isLoading={isLoading} />
      </ButtonContainer>
    </form>
  );
};
