import styled from 'styled-components';

export function InformationArea() {
  return (
    <Wrapper>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more ...
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
`;
