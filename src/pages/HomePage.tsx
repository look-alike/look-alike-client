import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { InformationArea } from '../components/homePage/InformationArea';

export function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Header />
        <Wrapper>
          <Title>룩어라이크</Title>
          <img src="/Logo.png" />
          <InformationArea />
          <TestButton
            onClick={() => {
              navigate('/test');
            }}
          >
            테스트 시작
          </TestButton>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 52px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 476px;
  /* background-color: red; */
  padding-top: calc(64px + 88px);
  gap: 32px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
`;

const TestButton = styled.button`
  width: 100%;
  height: 55px;
  background-color: #0085ff;
  border-radius: 16px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;
