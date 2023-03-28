import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../icons/Logo';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Logo />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: rgba(228, 228, 228, 1); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-right: 380px;

  button {
    font-size: 48px;
  }
`;
