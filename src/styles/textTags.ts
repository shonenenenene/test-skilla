import styled, { css } from 'styled-components';
import { COLORS } from './variables';

export const P1Style = css`
  color: ${COLORS.text};
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const P2Style = css`
  color: ${COLORS.text_secondary};
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const P1 = styled.p`
  ${P1Style}
`;

export const P2 = styled.p`
  ${P2Style}
`;
