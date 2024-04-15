import { Container } from 'styles/GlobalStyle';
import { WaterBenefitsSection } from '../../components/WaterBenefitsSection/WaterBenefitsSection';
import { WaterTracker } from '../../components/WaterTracker/WaterTracker';
import { WrapperWelcomePg } from './WelcomePage.styled';
import { LayoutWelcome } from 'components/LayoutWelcome/LayoutWelcome';

export const WelcomePage = () => {
  return (
    <LayoutWelcome>
      <Container>
        <WrapperWelcomePg>
          <WaterTracker />
          <WaterBenefitsSection />
        </WrapperWelcomePg>
      </Container>
    </LayoutWelcome>
  );
};
