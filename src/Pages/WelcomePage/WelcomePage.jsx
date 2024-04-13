import { WaterBenefitsSection } from './Components/WaterBenefitsSection/WaterBenefitsSection';
import { WaterTracker } from './Components/WaterTracker/WaterTracker';
import { WrapperWelcomePg } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <WrapperWelcomePg>
      <WaterTracker />
      <WaterBenefitsSection />
    </WrapperWelcomePg>
  );
};
