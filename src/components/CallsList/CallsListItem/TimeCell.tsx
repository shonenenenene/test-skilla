import { P1, P1Style } from '@/styles/textTags';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { styled } from 'styled-components';

interface TimeCellProps {
  date: string;
}

const Wrapper = styled.div``;

const TimeCell = ({ date }: TimeCellProps) => {
  const formattedTime = format(parseISO(date), 'HH:mm', {
    locale: ru,
  });

  return (
    <Wrapper>
      <P1>{formattedTime}</P1>
    </Wrapper>
  );
};

export default TimeCell;
