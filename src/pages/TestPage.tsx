import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { ImageIcon } from '../components/icons/ImageIcon';
import { ImageUploadArea } from '../components/testPage/ImageUploadArea';

export function Test() {
  const [imgUrl, setImageUrl] = useState<any>('');
  const [imageHeight, setImageHeight] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  useEffect(() => {
    if (imgUrl) {
      setIsImageUploaded(true);
    }
  }, [imgUrl]);

  const encodeFileToBase64 = (files: any) => {
    const file = files[0];
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let img = new Image();
      img.onload = () => {
        console.log((img.height / img.width) * 200);
        setImageHeight((img.height / img.width) * 200);
      };
      if (typeof fileReader.result === 'string') {
        img.src = fileReader.result;
      }
      console.log(fileReader.result);
      setImageUrl(fileReader.result?.toString());
    };
    fileReader.readAsDataURL(file as Blob);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Header />
        <Wrapper>
          <Title>우리 테스트에 온 걸 환영해 연진아...</Title>
          <div style={{ marginTop: '28px' }}>
            {imgUrl.length > 1 ? (
              <img src={imgUrl} />
            ) : (
              <div>
                <input
                  type="file"
                  id="img-upload"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    console.log(e.target.files);
                    if (e.target.files) return encodeFileToBase64(e.target.files);
                  }}
                  accept="image/x-png,image/gif,image/jpeg"
                />
                <Circle htmlFor="img-upload" style={{ cursor: 'pointer' }}>
                  <ImageIcon />
                  <div>여기를 클릭해 연진아...</div>
                </Circle>
              </div>
            )}
          </div>
          <ResultButton isImageUploaded={isImageUploaded}>결과 보기</ResultButton>
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

const ResultButton = styled.button<{ isImageUploaded: any }>`
  width: 320px;
  height: 55px;
  background: ${(props) => (props.isImageUploaded ? 'rgba(0, 133, 255, 1)' : '#848484')};
  border-radius: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: white;
`;

const Circle = styled.label`
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
