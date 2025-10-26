import { LayoutWelcome } from 'components/LayoutWelcome/LayoutWelcome';
import { Container } from 'styles/GlobalStyle';
import { WrapperWelcomePg } from './WelcomePage.styled';
import { WaterTracker } from 'components/WaterTracker/WaterTracker';
import { WaterBenefitsSection } from 'components/WaterBenefitsSection/WaterBenefitsSection';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiOauth } from '../../redux/authorization/authReducer';

function WelcomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  console.log( token);
  if (token)
    {
    dispatch(apiOauth(token));
   
  }
 
}, [dispatch]);
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
