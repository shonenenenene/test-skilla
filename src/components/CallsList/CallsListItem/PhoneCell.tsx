import { P1, P2 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import { Call } from '@/types';
import styled from 'styled-components';

interface PhoneCellProps {
  contactCompany?: Call['contact_company'];
  inOut: Call['in_out'];
  fromNumber: Call['from_number'];
  toNumber: Call['to_number'];
  contactName?: Call['contact_name'];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  align-items: start;
  width: 325px;
  pa: 13px 0;
`;

const PhoneCell = ({
  contactCompany,
  inOut,
  fromNumber,
  toNumber,
  contactName,
}: PhoneCellProps) => {
  const displayNumber = inOut === 1 ? fromNumber : toNumber;

  const primaryText = contactName || displayNumber;
  const secondaryText = contactName ? contactCompany || displayNumber : contactCompany;

  return (
    <Wrapper>
      <P1>{primaryText}</P1>
      {secondaryText && <P2>{secondaryText}</P2>}
    </Wrapper>
  );
};

export default PhoneCell;
