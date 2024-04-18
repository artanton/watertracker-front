import React, { useEffect, useState } from 'react';
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
        <ProgressBarContainer>
          <ProgressBar percentage={fakeProgress} />
        </ProgressBarContainer>
        <ProgressBarLabels>
          <ProgressBarLabel
            position="0%"
            active={fakeProgress === 0 ? 'true' : 'false'}
          >
            0%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="50%"
            active={fakeProgress === 50 ? 'true' : 'false'}
          >
            50%
          </ProgressBarLabel>
          <ProgressBarLabel
            position="100%"
            active={fakeProgress === 100 ? 'true' : 'false'}
          >
            100%
          </ProgressBarLabel>
        </ProgressBarLabels>
      </PanelContainer>
      <AddWater onClick={HandleOpenModal}>
        <PlusIcon />
        <AddWaterText>Add Water</AddWaterText>
      </AddWater>
    </WaterRatioContainer>
  );
};

export default WaterRatioPanel;
