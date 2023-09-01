import styled from '@emotion/styled';
import ModalImage from 'react-modal-image';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const StyledListItem = styled.li`
  width: 300px;
  height: 200px;
  padding: 5px;
`;

export const StyledImg = styled(ModalImage)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
