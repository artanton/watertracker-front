import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

import { updateWater } from '../../../redux/waterData/thunk';
import { closeModal } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/selectors';
import {
  selectModalData,
  selectWaterDate,
  selectWaterDose,
} from '../../../redux/modal/modalSlice.selectors';

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
} from '../../ModalAddWater/AddWaterForm/AddWaterForm.styled';

export const EditWaterForm = () => {
  const waterId = useSelector(selectModalData);
  const water = useSelector(selectWaterDose);
  const date = useSelector(selectWaterDate);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const initialValues = {
    waterCount: water,
    timeValue: formatToTime(new Date(date)),
  };

  const formik = useFormik({
    initialValues,
    validationSchema: waterRecordSchema,
    validateOnChange: true,
    onSubmit: (values, { setSubmitting }) => {
      const { waterCount, timeValue } = values;
      const waterData = {
        createdDate: formatToString(timeValue),
        waterDose: waterCount,
      };

      dispatch(updateWater({ waterId, waterData }))
        .then(res => {
          toast.success('Record was edited successfully');
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

  const increment = () => {
    setFieldValue('waterCount', Math.min(waterCount) + 50);
  };

  const decrement = () => {
    setFieldValue('waterCount', Math.max(waterCount - 50));
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <LabelCount>{t('AddAndEditWaterCard.amountOfWater')}</LabelCount>
      <CountContainer>
        <ButtonChange
          type="button"
          onClick={decrement}
          disabled={waterCount <= 50 ? true : false}
        >
          <Minus />
        </ButtonChange>
        <CountValue>{`${waterCount}ml`}</CountValue>
        <ButtonChange
          type="button"
          onClick={increment}
          disabled={waterCount >= 5000 ? true : false}
        >
          <Plus />
        </ButtonChange>
      </CountContainer>

      <LabelSelect>{t('AddAndEditWaterCard.recordingTime')}</LabelSelect>
      <SelectInput
        name="timeValue"
        placeholder={timeValue}
        format="HH:mm"
        onChange={date => {
          setFieldValue('timeValue', formatToTime(date));
        }}
      />
      {touched.timeValue && errors.timeValue && (
        <InputError>{errors.timeValue}</InputError>
      )}
      <LabelQuantityInput htmlFor="waterCount">
        {t('AddAndEditWaterCard.enterTheValue')}
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
