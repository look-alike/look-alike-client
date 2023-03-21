import styled from 'styled-components';

export function Footer() {
  return <Wrapper>졸업반 01즈</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 240px;
  width: 100%;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(49, 55, 61, 1);
`;
