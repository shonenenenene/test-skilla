import styled from 'styled-components';
import { COLORS } from '@/styles/variables';
import { Call } from '@/types';
import { P1 } from '@/styles/textTags';

interface RatingCellProps {
  id: Call['id'];
}

type RatingVariant = 'excellent' | 'good' | 'bad' | 'none';

const getRatingFromId = (id: number | null | undefined): RatingVariant => {
  if (!id || isNaN(id)) return 'none';

  const lastDigit = Math.abs(id) % 10;

  return lastDigit <= 4 ? 'excellent' : lastDigit <= 6 ? 'good' : lastDigit <= 8 ? 'bad' : 'none';
};

const ratingTextMap = {
  excellent: 'Отлично',
  good: 'Хорошо',
  bad: 'Плохо',
  none: 'Скрипт не использован',
} as const;

const styleMap = {
  excellent: {
    border: COLORS.ui_green,
    background: COLORS.ui_light_green,
    text: COLORS.ui_green,
  },
  good: {
    border: COLORS.ui_icon,
    background: COLORS.ui_secondary,
    text: COLORS.text,
  },
  bad: {
    border: COLORS.ui_red,
    background: COLORS.ui_light_red,
    text: COLORS.ui_red,
  },
  none: {
    border: 'transparent',
    background: 'transparent',
    text: COLORS.ui_red,
  },
} as const;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
`;

const RatingCellP = styled(P1)<{ $variant: RatingVariant }>`
  height: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: start;

  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid ${({ $variant }) => styleMap[$variant].border};
  background: ${({ $variant }) => styleMap[$variant].background};
  color: ${({ $variant }) => styleMap[$variant].text};

  white-space: nowrap;
`;

const RatingCell = ({ id }: RatingCellProps) => {
  const rating = getRatingFromId(id);
  return (
    <Wrapper>
      <RatingCellP $variant={rating}>{ratingTextMap[rating]}</RatingCellP>
    </Wrapper>
  );
};

export default RatingCell;
