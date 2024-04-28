export const calculateWaterRate = ({
  weight,
  sportTime,
  gender,
  enteredWaterRate,
}) => {
  if (enteredWaterRate) return enteredWaterRate;
  // if (weight === 0 || !weight) return 0;
  // if (enteredWaterRate) return enteredWaterRate;
  if (gender && sportTime && weight && !enteredWaterRate) {
    switch (gender) {
      case 'Man':
        return (weight * 0.04 + sportTime * 0.6).toFixed(1);
      case 'Woman':
        return (weight * 0.03 + sportTime * 0.4).toFixed(1);

      default:
        return 0;
    }
  }
};
