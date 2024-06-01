import { theme } from 'styles/theme';
import { waterRateLimit } from '../constants/constants';

export function inputValidationStyler(props) {
  if (props.$error) {
    return {
      color: theme.colors.secondaryRed,
      borderColor: theme.colors.secondaryRed,
      '&:focus': {
        outline: theme.colors.secondaryRed,
        borderColor: theme.colors.secondaryRed,
      },
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

export const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export function formatToTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function formatToString(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  const localDate = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
  return localDate;
}
