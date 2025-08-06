import { Call } from '@/types';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

interface AvatarCellProps {
  personAvatar: Call['person_avatar'];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 129px;
  height: 32px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  width: 32px;
  height: 32px;
`;

const DefaultAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: gray;
`;

const AvatarCell: FC<AvatarCellProps> = ({ personAvatar }) => {
  return (
    <Wrapper>
      {personAvatar ? (
        <StyledImage src={personAvatar} alt='Аватар сотрудника' width={32} height={32} />
      ) : (
        <DefaultAvatar />
      )}
    </Wrapper>
  );
};

export default AvatarCell;
