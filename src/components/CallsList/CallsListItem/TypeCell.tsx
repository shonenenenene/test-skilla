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
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default TypeCell;
