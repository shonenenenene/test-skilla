import SvgSelector from '@/components/shared/SvgSelector';
import { Call } from '@/types';
import { styled } from 'styled-components';

interface TypeCellProps {
  status: Call['status'];
  inOut: Call['in_out'];
}

const TypeCell = ({ status, inOut }: TypeCellProps) => {
  const getSvgType = () => {
    if (status === 'Дозвонился') {
      return inOut === 1 ? 'outcoming' : 'incoming';
    } else if (status === 'Не дозвонился') {
      return inOut === 1 ? 'missed' : 'unanswered';
    }
    return '';
  };

  return (
    <Wrapper>
      <SvgSelector svg={getSvgType()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 54px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default TypeCell;
