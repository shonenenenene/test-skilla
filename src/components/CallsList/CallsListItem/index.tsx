import { Call } from '@/types';
import { styled } from 'styled-components';
import TypeCell from './TypeCell';
import TimeCell from './TimeCell';
import AvatarCell from './AvatarCell';
import PhoneCell from './PhoneCell';
import SourceCell from './SourceCell';
import RatingCell from './RatingCell';
import RecordCell from './RecordCell';
import { useState } from 'react';
import { COLORS } from '@/styles/variables';

const CallsListItem = ({ data }: { data: Call }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ListItem onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
      <RecordCell
        record={data.record}
        partnershipId={data.partnership_id}
        time={data.time}
        duration={data.duration}
        isHovered={isHovered}
      />
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;

  align-items: center;
  min-height: 65px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  margin-left: 40px;
  padding-right: 40px;

  border-bottom: 1px solid ${COLORS.border};

  &:hover {
    background-color: ${COLORS.ui_bg};
  }

  & > * {
    flex-shrink: 0;
  }
`;

export default CallsListItem;
