import React, { useEffect, useState } from 'react';
import {
  AddWater,
  PanelContainer,
  ProgressBarLabel,
  ProgressBarLabels,
  // PlusIcon,
  StyledProgressBar,
  WaterRatioContainer,
  WaterToday,
} from './WaterRatioPanel.styled';

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

const WaterRatioPanel = ({ HandleOpenModal }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(percentage);
  }, [percentage]);

  const fakeProgress = 50;

  return (
    <WaterRatioContainer>
      <PanelContainer>
        <WaterToday>Today</WaterToday>
        <ProgressBar percentage={fakeProgress} />
        <ProgressBarLabels>
          <ProgressBarLabel
            position="0%"
            active={percentage === 0 ? 'true' : 'false'}
          >
            0%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="50%"
            active={percentage >= 0 && percentage < 50 ? 'true' : 'false'}
          >
            50%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="100%"
            active={percentage === 100 ? 'true' : 'false'}
          >
            100%
          </ProgressBarLabel>
        </ProgressBarLabels>
      </PanelContainer>
      <AddWater onClick={HandleOpenModal}>
        {/* <PlusIcon /> */}
        Add Water
      </AddWater>
    </WaterRatioContainer>
  );
};

export default WaterRatioPanel;
