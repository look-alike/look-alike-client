import styled, { CSSProperties } from 'styled-components';
import { ImageIcon } from '../icons/ImageIcon';

interface ImageUploadAreaProps {
  style: CSSProperties;
  htmlFor: any;
}

export function ImageUploadArea({ style, htmlFor }: ImageUploadAreaProps) {
  return (
    <label htmlFor={htmlFor}>
      <Circle style={style}>
        <ImageIcon />
        <div>여기를 클릭해 연진아...</div>
      </Circle>
    </label>
  );
}

const Circle = styled.div`
  width: 320px;
  height: 320px;
  background-color: #848484;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;
