import styled from 'styled-components';

export function InformationArea() {
  return (
    <Text>
      TheGloryMatch
      <div>CNN 모델을 활용한 더글로리 닮은꼴 찾기 </div>
    </Text>
  );
}

const Text = styled.div`
  /* padding: 24px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* font-size: 24px; */
  line-height: 34px;
`;
