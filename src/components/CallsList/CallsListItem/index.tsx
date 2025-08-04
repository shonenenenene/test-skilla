import { Call } from '@/types';
import { styled } from 'styled-components';
import TypeCell from './TypeCell';
import TimeCell from './TimeCell';
import AvatarCell from './AvatarCell';

const CallsListItem = ({ data }: { data: Call }) => {
  return (
    <Wrapper>
      <TypeCell status={data.status} inOut={data.in_out} />
      <TimeCell date={data.date} />
      <AvatarCell personAvatar={data.person_avatar} />
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-wrap: nowrap;
`;

export default CallsListItem;
