import { P1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 356px;
  /* flex: 0; */
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  button:last-child {
    transition: opacity 0.2s;
    opacity: 0;
    pointer-events: none;
  }
`;

export const PlayerContainer = styled.div<{ $isHovered: boolean; $hasRecord: boolean }>`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  background: ${COLORS.ui_secondary};
  border-radius: 48px;
  width: 100%;
  height: fit-content;
  position: relative;
  z-index: 2;

  transition: opacity 0.3s ease, transform 0.2s ease;

  opacity: ${({ $isHovered, $hasRecord }) => (!$hasRecord ? 0 : $isHovered ? 1 : 0)};
  transform: translateX(
    ${({ $isHovered, $hasRecord }) => (!$hasRecord ? '10%' : $isHovered ? '0' : '10%')}
  );
  pointer-events: ${({ $isHovered, $hasRecord }) =>
    !$hasRecord ? 'none' : $isHovered ? 'auto' : 'none'};

  &:hover {
    ${ActionButtonsContainer} {
      button:last-child {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;

export const TimeDisplay = styled(P1)<{ $isHovered: boolean; $hasRecord: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;

  z-index: 1;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity 0.2s 0.1s ease-in-out;
  opacity: ${({ $isHovered, $hasRecord }) => (!$hasRecord || !$isHovered ? 1 : 0)};
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  background: ${COLORS.white};

  border-radius: 50%;
  cursor: pointer;
  margin-right: 8px;
  margin-left: 12px;

  svg {
    width: 8px;
    height: 10px;
    margin-left: 2px;
  }
`;

export const ProgressBar = styled.div`
  width: 164px;
  height: 4px;
  background: ${COLORS.ui_icon};
  border-radius: 50px;
  margin-right: 12px;
`;

export const ActionButton = styled.button`
  color: ${COLORS.ui_red};
  cursor: pointer;
  transition: color 0.2s;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    svg {
      path {
        fill: ${COLORS.ui_accent};
      }
    }
  }
`;
