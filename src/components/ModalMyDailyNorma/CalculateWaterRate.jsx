import { waterRateLimit } from '../../constants/constants';

export const calculateWaterRate = ({
  weight,
  sportTime,
  gender,
  enteredWaterRate,
}) => {
  if (enteredWaterRate && enteredWaterRate <= waterRateLimit)
    return enteredWaterRate;
  if (enteredWaterRate && enteredWaterRate > waterRateLimit)
    return waterRateLimit;
  // if (weight === 0 || !weight) return 0;
  // if (enteredWaterRate) return enteredWaterRate;
  if (gender && sportTime && weight && !enteredWaterRate) {
    switch (gender) {
      case 'Man':
        return (weight * 0.04 + sportTime * 0.6) * 1000 > waterRateLimit
          ? 15000
          : (weight * 0.04 + sportTime * 0.6) * 1000;
      case 'Woman':
        return (weight * 0.03 + sportTime * 0.4) * 1000 > waterRateLimit
          ? 15000
          : (weight * 0.03 + sportTime * 0.4) * 1000;

      default:
        return 0;
    }
  }
};
