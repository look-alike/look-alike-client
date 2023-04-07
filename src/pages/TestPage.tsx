import React, { useEffect, useState } from 'react';
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
  const names: any = {
    shg: '문동은과',
    idh: '주여정과',
    she: '과거 박연진과',
    ijh: '박연진과',
    cde: '과거 문동은과',
    chj: '최혜정과',
    har: '이사라와',
    jjj: '전재준과',
    jsi: '정성일과',
    ojy: '하예솔과',
    smo: '손명오와',
  };
  const lines: any = {
    shg: '넌 벌 받아야지. \n 신이 널 도우면 형벌 신이 날 도우면 천벌.', // 송혜교, 문동은
    idh: '말해봐요. 뭐부터 해줄까요. \n 누구부터 죽여줄까요.', // 이도현, 주여정
    she: '왜 이렇게 늦게와… 보고싶어 죽는 줄.', // 신예은, 어린 연진
    ijh: '분수에 맞게 입고 한도에 맞게 들자.\n 알아들었으면 끄덕여.', // 임지연, 박연진
    cde: '오늘부터 내 꿈은 너야. \n 우리 꼭, 또 보자 박연진.', // 어린 동은, 정지소
    chj: '내가 뭘 갖고 있을 줄 알고 이래. \n 건방 그만 떨어, 박연진', // 차주영, 최혜정
    har: '근로소득세 내는 넌 모르는 \n 이 종합소득세 내는 세계가 있단다, 혜정아.', // 김희어라, 이사라
    jjj: '내가 제일 싫어하는 게 누군지 알아? \n 빨간머리앤이랑 빨간망토 차차야.', // 박성훈, 전재준
    jsi: '내가 어떤 마음으로 참고 있는데!!! \n 내가 서있는 곳은 예솔이 옆이야.', // 하도영, 정성일
    ojy: '주식이요. 삼전이나 카카오요:) \n 엄마가 누가 물어보면 그렇게 대답하래요.', // 오지율, 하예솔
    smo: '떠나자  우리 둘만의 나라로. \n 나 너 좋아했다고 쭉!!', // 김건우, 손명오
  };
  const brands: any = {
    shg: 'Dior',
    idh: 'Fendi',
    she: 'Valentino',
    ijh: 'Versace',
    cde: 'Skoolooks',
    chj: 'Chanel',
    har: 'Louis Vuitton',
    jjj: 'Balmain',
    jsi: 'Zegna',
    ojy: 'Gucci',
    smo: 'Brietling',
  };

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

  const dragOverHandler = (event: any) => {
    event.preventDefault();
  };

  const dropHandler = (event: any) => {
    event.preventDefault();
    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();
          setImageFile(file);
          encodeFileToBase64([file]);
        }
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>우리 테스트에 온 걸 환영해 연진아...</Title>
        <div style={{ marginTop: '40px' }}>
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
              <Circle
                htmlFor="img-upload"
                style={{ cursor: 'pointer' }}
                onDragOver={(e) => {
                  return dragOverHandler(e);
                }}
                onDrop={(e) => {
                  return dropHandler(e);
                }}
              >
                <div style={{ fontSize: '20px' }}>여기를 클릭해 연진아...</div>
              </Circle>
            </div>
          )}
        </div>
        {isImageUploaded && <Text>멋지다 연진아~ 브라보~</Text>}
        <ResultButton onClick={onClickResultButton} isImageUploaded={isImageUploaded}>
          결과 보기
        </ResultButton>
        <ResultContainer>
          {initial && (
            <TestResultWrapper>
              <pre className="animation1">{lines[initial]}</pre>
              <div
                className="animation2"
                style={{
                  display: 'flex',
                  width: '100%',
                  // gap: '100px',
                  // backgroundColor: 'red',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{ borderRadius: '8px' }}
                  src={`/drama/${initial}.png`}
                  width={320}
                  alt="명품 & 배우 이미지"
                />
                <span style={{ marginTop: '32px' }}>
                  등장인물 {names[initial]} {Math.round(accuracy * 1000) / 10}% 닮았습니다."
                </span>
              </div>

              <div
                className="animation3"
                style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}
              >
                <img
                  style={{ width: '200px', height: '200px' }}
                  src={`/luxury_icon/${initial}.png`}
                  alt="명품 & 배우 이미지"
                />
              </div>
              <span style={{ lineHeight: '40px' }}>
                {names[initial].slice(0, names[initial].length - 1)}를 닮은 당신에게 가장 어울리는 브랜드는
                <p>{brands[initial]}입니다.</p>
              </span>
            </TestResultWrapper>
          )}
        </ResultContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* font-size: 24px; */
  line-height: 100%;
  font-size: 160%;
  margin: 18px 0px;
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

const TestResultWrapper = styled.div`
  width: 100%;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  gap: 48px;
  span {
    font-weight: 600;
    font-size: 30px;
    line-height: 120%;
    color: white;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 120%;
    }
  }

  pre {
    font-weight: 600;
    font-size: 30px;
    line-height: 120%;
    color: white;
    text-align: center;
    font-family: DX;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 120%;
    }
  }
`;

const ResultContainer = styled.div`
  & > .animation1 {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards 1s;
  }

  & > .animation2 {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards 3s;
  }

  & > .animation3 {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards 5s;
  }
`;
