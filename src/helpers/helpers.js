import { theme } from 'styles/theme';
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

export function myDailyNormaValidation() {}
