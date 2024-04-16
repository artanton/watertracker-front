import { LayoutWelcome } from 'components/LayoutWelcome/LayoutWelcome';
import { Container } from 'styles/GlobalStyle';
import { WrapperWelcomePg } from './WelcomePage.styled';
import { WaterTracker } from 'components/WaterTracker/WaterTracker';
import { WaterBenefitsSection } from 'components/WaterBenefitsSection/WaterBenefitsSection';

function WelcomePage() {
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
}

export default WelcomePage;
