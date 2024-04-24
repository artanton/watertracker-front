import { ModalBackdrop } from './Loader.styled';
import { ModalContent } from './Loader.styled';
import { HoopSpinner } from 'react-spinners-kit';
import { theme } from 'styles/theme';

export const Loader = () => {
  return (
    <div>
      <ModalBackdrop>
        <ModalContent>
          <HoopSpinner size={120} color={theme.colors.primaryBlue} />
        </ModalContent>
      </ModalBackdrop>
    </div>
  );
};
