import { useDispatch, useSelector } from 'react-redux';
import {
  AddWater,
  PanelContainer,
  ProgressBarLabel,
  ProgressBarLabels,
  PlusIcon,
  StyledProgressBar,
  WaterRatioContainer,
  WaterToday,
  AddWaterText,
  ProgressBarContainer,
} from './WaterRatioPanel.styled';
import { openModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { selectorPersantRate } from '../../redux/selectors';

const ProgressBar = ({ percentage }) => {
  return (
    <StyledProgressBar
      type="range"
      min="0"
      max="100"
      value={percentage}
      readOnly
    />
  );
};

const WaterRatioPanel = () => {
  const dispatch = useDispatch();
  // const persantageRate = 50;

  const persantageRate = useSelector(selectorPersantRate);

  return (
    <WaterRatioContainer>
      <PanelContainer>
        <WaterToday>Today</WaterToday>
        <ProgressBarContainer>
          <ProgressBar percentage={persantageRate} />
        </ProgressBarContainer>
        <ProgressBarLabels>
          <ProgressBarLabel
            position="0%"
            active={persantageRate === 0 ? 'true' : 'false'}
          >
            0%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="50%"
            active={persantageRate === 50 ? 'true' : 'false'}
          >
            50%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="100%"
            active={persantageRate === 100 ? 'true' : 'false'}
          >
            100%
          </ProgressBarLabel>
        </ProgressBarLabels>
      </PanelContainer>
      <AddWater
        type="button"
        onClick={() => dispatch(openModal(modalNames.ADD_WATER))}
      >
        <PlusIcon />
        <AddWaterText>Add Water</AddWaterText>
      </AddWater>
    </WaterRatioContainer>
  );
};

export default WaterRatioPanel;
