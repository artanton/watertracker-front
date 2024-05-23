import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Plus } from 'components/Icons/Plus/Plus';
import { GlassOfWater } from 'components/Icons/GlassOfWater';
import { PencilSquare } from 'components/Icons/PencilSquare';
import { Delete } from 'components/Icons/Delete';

export const TodayWaterListContainer = styled.div`
  width: 264px;
  height: 258px;

  @media (min-width: 768px) {
    width: 656px;
    height: 260px;
  }

  @media (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;
export const Today = styled.h2`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.daystitle};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.subtitle};
    line-height: ${theme.lineHeights.subtitle};
  }
`;

export const PlusIcon = styled(Plus)`
  width: 16px;
  height: 16px;
  margin: 0;
  margin-right: 8px;
  font-size: ${theme.fontSizes.listTitle};
  line-height: 24px;
`;

export const AddWaterButton = styled.button`
  margin-top: 12px;
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  border: none;
  background: none;
  display: flex;
  gap: 8px;

  &:hover {
    color: ${theme.colors.secondaryOrange};
    transition: ${theme.transition.normal};
  }
`;

export const WaterList = styled.ul`
  max-height: 188px;
  width: 264px;
  padding-left: 0;
  overflow-y: auto;
  margin-top: 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 8px;
    margin-right: 2px;
    margin-left: 4px;
    width: 4px;
    border-radius: 8px;
    background-color: ${theme.colors.secondaryLightBlue};
    border-style: solid;
    border-color: ${theme.colors.secondaryGray};
    border-width: 1px 1px 1px 1px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: ${theme.colors.secondaryBlue};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
    max-height: 176px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    max-height: 176px;
  }
`;

export const WaterListItem = styled.li`
  display: flex;
  height: 50px;
  width: 254px;
  align-items: center;
  border-top: 1px solid ${theme.colors.secondaryLightBlue};
  border-bottom: 1px solid ${theme.colors.secondaryLightBlue};

  @media screen and (min-width: 768px) {
    width: 646px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
    height: 60px;
  }
`;

export const WaterGlassIcon = styled(GlassOfWater)`
  width: 26px;
  height: 26px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 36px;
    height: 36px;
  }
`;

export const WaterListMl = styled.p`
  width: 60px;
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.listTitle};
  line-height: 24px;
  color: ${theme.colors.primaryBlue};
  margin-left: 12px;
  margin-right: 12px;

  white-space: nowrap;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 16px;
  }
`;

export const WaterListTime = styled.p`
  width: 56px;
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.info};
  line-height: 24px;
  color: ${theme.colors.primaryBlack};

  @media screen and (min-width: 768px) {
    width: 82px;
  }
  @media screen and (min-width: 1440px) {
    width: 82px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 38px;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-left: 390px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 278px;
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.secondaryBlue};
    transform: ${theme.transform.small};
    transition: ${theme.transition.normal};
  }

  &:hover::after {
    transform: ${theme.transform.large};
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.secondaryRed};
    transform: ${theme.transform.small};
    transition: ${theme.transition.normal};
  }

  &:hover::after {
    transform: ${theme.transform.large};
  }
`;

export const WaterEditIcon = styled(PencilSquare)`
  width: 16px;
  height: 16px;
`;

export const WaterDeleteIcon = styled(Delete)`
  width: 16px;
  height: 16px;
`;
