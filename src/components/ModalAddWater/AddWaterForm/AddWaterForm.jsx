import {
  CountContainer,
  ButtonChange,
  CountValue,
  LabelCount,
} from './AddWaterForm.styled';
import { Minus } from 'components/Icons/Minus';
import { Plus } from 'components/Icons/Plus/Plus';
import { Form, Formik } from 'formik';

export const AddWaterForm = () => {
  const handleSubmit = values => {
    console.log('values:', values);
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
        {({ errors }) => <Form autoComplete="off"></Form>}
      </Formik>
    </>
  );
};
