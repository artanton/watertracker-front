import { theme } from 'styles/theme';
import { waterRateLimit } from '../constants/constants';

export function inputValidationStyler(props) {
  if (props.$error) {
    return {
      color: theme.colors.secondaryRed,
      borderColor: theme.colors.secondaryRed,
      // '&::placeholder': {
      //   color: theme.colors.secondaryRed,
      //   backgroundColor: theme.colors.secondaryRed,
      // },
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

// export const actualDate = () => {
//   const now = new Date();

//   const timeShift = now.getTimezoneOffset();

//   const offsetHours = Math.floor(Math.abs(timeShift) / 60);
//   const offsetMinutes = Math.abs(timeShift) % 60;

//   // Формируем строку смещения, например: "+02:00" или "-04:30"
//   const offsetSign = timeShift <= 0 ? '+' : '-';
//   const formattedOffset = `${offsetSign}${String(offsetHours).padStart(
//     2,
//     '0'
//   )}:${String(offsetMinutes).padStart(2, '0')}`;

//   // Форматируем локальную дату и время
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   const day = String(now.getDate()).padStart(2, '0');
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');

//   // Собираем строку даты и времени с учетом смещения
//   const localDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${formattedOffset}`;
//   return localDate;
// };

export const formatDate = (date) => {
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
  return date;
}
