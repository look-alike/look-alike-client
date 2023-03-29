import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../icons/Logo';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
        <Logo />
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  height: 100px;
  /* background-color: rgba(228, 228, 228, 1); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  z-index: 1;

  @media (max-width: 767px) {
    width: 100vw;
    overflow-x: hidden;
   }
`;

