export const calculateWaterRate = (
  { weight, hours, gender, amount } = {
    gender: 'male',
    hours: 0,
    weight: 0,
    amount: 0,
  }
) => {
  if (weight === 0 || !weight) return 0;
  if (amount) return amount;

  switch (gender) {
    case 'male':
      return weight * 0.04 + hours * 0.6;
    case 'female':
      return weight * 0.03 + hours * 0.4;

    default:
      return 0;
  }
};
