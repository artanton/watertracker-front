import {
  MyDailyNorma,
  MyDailyNormaAmount,
  MyDailyNormaContainer,
  WaterNormaAmount,
  WaterNormaAmountEdit,
} from './DailyNorma.styled';

const DailyNorma = ({ HandleOpenModal }) => {
  return (
    <MyDailyNormaContainer>
      <MyDailyNorma>My daily norma</MyDailyNorma>
      <MyDailyNormaAmount>
        <WaterNormaAmount>2.0L</WaterNormaAmount>
        <WaterNormaAmountEdit onClick={HandleOpenModal}>
          Edit
        </WaterNormaAmountEdit>
      </MyDailyNormaAmount>
    </MyDailyNormaContainer>
  );
};

export default DailyNorma;
