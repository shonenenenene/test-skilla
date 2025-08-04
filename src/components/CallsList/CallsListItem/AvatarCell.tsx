import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

interface AvatarCellProps {
  personAvatar: string | null;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
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
