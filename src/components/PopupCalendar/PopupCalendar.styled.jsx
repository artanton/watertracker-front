import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { theme } from 'styles/theme';

// export const StyledPopup = styled(Popup)`
export const StyledPopup = styled(({ mobilePosition, ...props }) => (
  <Popup {...props} />
))`
  &-overlay {
    background-color: transparent;
  }

  &-content {
    width: 292px !important;
    height: 188px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 16px !important;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

    transform: translateX(-49%) translateY(-115%);
    position: absolute;
    left: 50%;

    @media (max-width: 768px) {
      width: 280px !important;
      padding: 24px 13px !important;
      transform: translate(-50%, -144%) !important;
      position: fixed !important;
      top: ${props =>
        props.mobilePosition
          .top}px !important; // Застосуйте props.mobilePosition
      left: ${props =>
        props.mobilePosition
          .left}px !important; // Застосуйте props.mobilePosition
    }
  }
`;

export const Data = styled.p`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlue};
  margin-bottom: 16px;
`;

export const DailyNorma = styled.p`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  height: 24px;
  margin-bottom: 16px;
`;

export const DailyNormaMl = styled.span`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.listTitle};
  line-heigth: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
`;

export const Fulfillment = styled.p`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  height: 24px;
  margin-bottom: 16px;
`;

export const FulfillmentPercentage = styled.span`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.listTitle};
  line-heigth: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
`;

export const Servings = styled.p`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  height: 24px;
`;

export const ServingsAmount = styled.span`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.listTitle};
  line-heigth: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
`;
