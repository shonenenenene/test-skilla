import { Call } from '@/types';
import { styled } from 'styled-components';
import TypeCell from './TypeCell';
import TimeCell from './TimeCell';
import AvatarCell from './AvatarCell';
import PhoneCell from './PhoneCell';
import SourceCell from './SourceCell';
import RatingCell from './RatingCell';

const CallsListItem = ({ data }: { data: Call }) => {
  return (
    <Wrapper>
      <TypeCell status={data.status} inOut={data.in_out} />
      <TimeCell date={data.date} />
      <AvatarCell personAvatar={data.person_avatar} />
      <PhoneCell
        contactCompany={data.contact_company}
        inOut={data.in_out}
        fromNumber={data.from_number}
        toNumber={data.to_number}
        contactName={data.contact_name}
      />
      <SourceCell lineNumber={data.line_number} />
      <RatingCell id={data.id} />
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-wrap: nowrap;
`;

export default CallsListItem;
