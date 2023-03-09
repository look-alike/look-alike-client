import styled from 'styled-components';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <div>로고</div>
        <div>메뉴바</div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
