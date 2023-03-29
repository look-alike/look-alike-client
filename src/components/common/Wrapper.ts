import styled from 'styled-components';

export const Container = styled.div`
   width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #141414;
  padding-bottom: 52px;

  @media (max-width: 767px) {
    width: 100vw;
    overflow-x: hidden;
    justify-content: center;
   }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  /* background-color: red; */
  padding-top: 80px;
  gap: 24px;

  /* @media (max-width: 767px) {
    padding-top: 0px;
   } */
`;
