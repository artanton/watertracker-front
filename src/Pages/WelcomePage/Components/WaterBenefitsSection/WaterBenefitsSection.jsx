import {
  WaterBenefitsContainer,
  WaterTitle,
  BenefitsList,
  BenefitsLi,
} from './WaterBenefitsSection.styled';

export const WaterBenefitsSection = () => {
  return (
    <>
      <WaterBenefitsContainer>
        <WaterTitle>Water consumption tracker</WaterTitle>
        <BenefitsList>
          <BenefitsLi>Supply of nutrients to all organs</BenefitsLi>
          <BenefitsLi>Providing oxygen to the lungs</BenefitsLi>
          <BenefitsLi>Maintaining the work of the heart</BenefitsLi>
          <BenefitsLi>Release of processed substances</BenefitsLi>
          <BenefitsLi>
            Ensuring the stabiInfoItemsty of the internal environment
          </BenefitsLi>
          <BenefitsLi>Maintaining within the normal temperature</BenefitsLi>
          <BenefitsLi>
            Maintaining an immune system capable of resisting disease
          </BenefitsLi>
        </BenefitsList>
      </WaterBenefitsContainer>
    </>
  );
};
