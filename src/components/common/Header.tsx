import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          🎓
        </button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgba(228, 228, 228, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding-left: 240px;

  button {
    font-size: 48px;
  }
`;
