import { P2 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import styled from 'styled-components';

interface SourceCellProps {
  lineNumber: string;
}

const Wrapper = styled.div``;

const SourceCell = ({ lineNumber }: SourceCellProps) => {
  return (
    <Wrapper>
      <P2>{lineNumber}</P2>
    </Wrapper>
  );
};

export default SourceCell;
