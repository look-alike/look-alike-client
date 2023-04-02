import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { uploadImage } from '../components/api/uploadImage';
import { Header } from '../components/common/Header';
import { Container, Wrapper } from '../components/common/Wrapper';
import { accuracyState, initialState } from '../store';

export function Test() {
  const [imageFile, setImageFile] = useState<any>();
  const [imgUrl, setImageUrl] = useState<any>('');
  const [imageHeight, setImageHeight] = useState(0);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [accuracy, setAccuracy] = useRecoilState(accuracyState);
  const [initial, setInitial] = useRecoilState(initialState);

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
        // console.log((img.height / img.width) * 200);
        setImageHeight((img.height / img.width) * 200);
      };
      if (typeof fileReader.result === 'string') {
        img.src = fileReader.result;
      }
      // console.log(fileReader.result);
      setImageUrl(fileReader.result?.toString());
    };
    fileReader.readAsDataURL(file as Blob);
  };

  const onClickResultButton = async () => {
    const data = await uploadImage(imgUrl);

    if (data) {
      setAccuracy(data.accuracy);
      setInitial(data.celebrity_initial);
    }
  };

  useEffect(() => {
    console.log(accuracy, initial);
  }, [accuracy, initial]);

  return (
    <Container>
      <Wrapper>
        <Title>우리 테스트에 온 걸 환영해 연진아...</Title>
        <div style={{ marginTop: '52px' }}>
          {imgUrl.length > 1 ? (
            <CircleImage src={imgUrl} />
          ) : (
            <div>
              <input
                type="file"
                id="img-upload"
                style={{ display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files);
                  if (e.target.files) {
                    setImageFile(e.target.files[0]);
                    return encodeFileToBase64(e.target.files);
                  }
                }}
                accept="image/x-png,image/gif,image/jpeg"
              />
              <Circle htmlFor="img-upload" style={{ cursor: 'pointer' }}>
                {/* <ImageIcon /> */}
                <div style={{ fontSize: '20px' }}>여기를 클릭해 연진아...</div>
              </Circle>
            </div>
          )}
        </div>
        {isImageUploaded && <Text>멋지다 연진아~ 브라보~</Text>}
        <ResultButton onClick={onClickResultButton} isImageUploaded={isImageUploaded}>
          결과 보기
        </ResultButton>
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

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* font-size: 24px; */
  line-height: 34px;
  font-size: 160%;
`;

const ResultButton = styled.button<{ isImageUploaded: any }>`
  width: 70%;
  height: 55px;
  background: ${(props) => (props.isImageUploaded ? '#e50914' : '#848484')};
  border-radius: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: white;
  margin-top: ${(props) => !props.isImageUploaded && '88px'};

  @media (max-width: 767px) {
    width: 80%;
  }
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

  @media (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`;

const CircleImage = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;
