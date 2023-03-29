import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/common/Header';
import { Container, Wrapper } from '../components/common/Wrapper';
import { InformationArea } from '../components/homePage/InformationArea';

export function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>졸업반 01s</Title>
        <img src="/Logo.png" alt="로고" width={'100%'}/>
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
  );
}

const Title = styled.span`
  font-weight: 600;
  font-size: 36px;
  line-height: 31px;
  color: white;
  margin-top: 12px;
`;

const TestButton = styled.button`
  width: 90%;
  height: 55px;
  background-color: #e50914;
  border-radius: 16px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-top: 60px;
`;
