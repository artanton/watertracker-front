import { theme } from 'styles/theme';
import { waterRateLimit } from '../constants/constants';
export function inputValidationStyler(props) {
  if (props.$error) {
    return {
      color: theme.colors.secondaryRed,
      borderColor: theme.colors.secondaryRed,
      '&::placeholder': { color: theme.colors.secondaryRed },
    };
  } else {
    return [];
  }
}

export const calculateWaterRate = ({ weight, sportTime, gender }) => {
  if (gender === 'Man') {
    return weight * 0.04 + sportTime * 0.6 > waterRateLimit
      ? waterRateLimit
      : weight * 0.04 + sportTime * 0.6;
  } else if (gender === 'Woman') {
    return weight * 0.03 + sportTime * 0.4 > waterRateLimit
      ? waterRateLimit
      : weight * 0.03 + sportTime * 0.4;
  }
};
