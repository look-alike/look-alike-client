import { useSetRecoilState } from 'recoil';
import { accuracyState } from '../../store';
import { client } from './client';

export async function uploadImage(imgUrl: any) {
  const base64data = imgUrl.split(',')[1];
  const formData = new FormData();
  formData.append('image', base64data);

  return await client
    .post('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
